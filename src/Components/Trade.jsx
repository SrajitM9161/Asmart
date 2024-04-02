import React from 'react';
import axios from 'axios';
import '../CSS/Trade.css';
import { useState,useEffect } from 'react';
import urlWithApiKey from '../projectApiKey/apiKey';
import { getDocs,collection} from "firebase/firestore";
import {addDoc} from "firebase/firestore";
import { auth,db } from '../Firebase/config';

const Trade=()=> {

    // For the starting api call to locate Indian states available.
    const [records, setRecords] = useState([]);

    // For the option selected by user
    const [selectedState, setSelectedState] = useState("");
    const [selectedDistrict, setSelectedDistrict] = useState("");
    const [selectedMarket, setSelectedMarket] = useState("");
    const [selectedCrop, setSelectedCrop] = useState("");
    
    // For storing the records in an array to show in drop down for selecting.
    const [filteredRecords, setFilteredRecords] = useState([]);
    const [states, setStates] = useState([]);
    const [districts, setDistricts] = useState([]);
    const [markets, setMarkets] = useState([]);
    const [crops, setCrops] = useState([]);

    // Selected Crop Data
    const [minPrice,setMinPrice]=useState(0);
    const [maxPrice,setMaxPrice]=useState(0);
    // const [arrivalDate,setArrivalDate]=useState(Date);

    // Getting data from api and setting the state lists.
    useEffect(() => {
        axios.get(urlWithApiKey)
            .then(response => {
                const data = response.data.records;
                setRecords(data);
                const uniqueStates = Array.from(new Set(data.map(record => record.state)));
                setStates(uniqueStates);
            })
            .catch(error => alert('Error fetching data:', error));
    }, []);

    // For setting the districts array to choose from drop down.
    useEffect(() => {
        if (selectedState) {
            const uniqueDistricts = Array.from(new Set(records.filter(record => record.state === selectedState).map(record => record.district)));
            setDistricts(uniqueDistricts);
        }
    }, [selectedState, records]);

    // For setting the markets array to choose from drop down.
    useEffect(() => {
        if (selectedState && selectedDistrict) {
            const uniqueMarkets = Array.from(new Set(records.filter(record => record.state === selectedState && record.district === selectedDistrict).map(record => record.market)));
            setMarkets(uniqueMarkets);
        }
    }, [selectedState, selectedDistrict, records]);

    // For setting the crops array to choose from drop down. ------------> Added extra other than PRICE API.
    useEffect(() => {
        if (selectedState && selectedDistrict && selectedMarket) {
            const uniqueCrops = Array.from(new Set(records.filter(record => record.state === selectedState && record.district === selectedDistrict && record.market === selectedMarket).map(record => record.commodity)));
            setCrops(uniqueCrops);
        }
    }, [selectedState, selectedDistrict, selectedMarket, records]);

    // 
    useEffect(() => {
        const filtered = records.filter(record =>
            (!selectedState || record.state === selectedState) &&
            (!selectedDistrict || record.district === selectedDistrict) &&
            (!selectedMarket || record.market === selectedMarket) &&
            (!selectedCrop || record.crop === selectedCrop)
        );
        setFilteredRecords(filtered);
    }, [selectedState, selectedDistrict, selectedMarket, records]);

    // Handling the state changes for state, district, market and crop change.

    const handleStateChange = (event) => {
        const state = event.target.value;
        setSelectedState(state);
        setDistricts([]);
        setSelectedDistrict("");
        setMarkets([]);
        setSelectedMarket("");
        setCrops([]);
        setSelectedCrop("");
        const uniqueDistricts = Array.from(new Set(records.filter(record => record.state === state).map(record => record.district)));
        setDistricts(uniqueDistricts);
    };

    const handleDistrictChange = (event) => {
        const district = event.target.value;
        setSelectedDistrict(district);
        setSelectedMarket("");
        setMarkets([]);
        setSelectedCrop("");
        setCrops([]);
        const uniqueMarkets = Array.from(new Set(records.filter(record => record.state === selectedState && record.district === district).map(record => record.market)));
        setMarkets(uniqueMarkets);
    };

    // Added another state for crops change.
    const handleMarketChange = (event) => {
        setSelectedMarket(event.target.value);
        setSelectedCrop("");
        setCrops([]);
        const uniqueCrops = Array.from(new Set(records.filter(record => record.state === selectedState && record.district === district && record.market == record.market).map(record => record.commodity)));
        setCrops(uniqueCrops);
    };

    
    // const handleCropChange = (event) => {

    //     // my logic
    //     //     filteredRecords.map((record) => {
    //     //         if (record.commodity==selectedCrop) {
    //     //             setMinPrice(record.min_price);
    //     //             setMaxPrice(record.max_price);
    //     //         } 
    //     //     });   
    //     const cropSel=event.target.value;
    //     setSelectedCrop(cropSel);

    //         const matchedRecord = filteredRecords.find(record => record.commodity == "Onion");

    //         // Check if a matching record was found
    //         if (matchedRecord) {
    //             setMinPrice(matchedRecord.min_price);
    //             setMaxPrice(matchedRecord.max_price);
    //         }
    //      };       
    
// Creating function to get min and max price of selected crop.
const recordsMap = new Map();
filteredRecords.forEach(record => recordsMap.set(record.commodity, record));

const handleCropChange = (event) => {
    const cropSel = event.target.value;
    setSelectedCrop(cropSel);

    // Retrieve the record directly from the map
    const matchedRecord = recordsMap.get(cropSel);

    // Check if a matching record was found
    if (matchedRecord) {
        setMinPrice(matchedRecord.min_price);
        setMaxPrice(matchedRecord.max_price);
    }
};


// Following code to enter and handle the crop price proposed by the user.
const [cropValue, setCropValue] = useState('');


    const handleCropValueChange = (event) => {
        setCropValue(event.target.value);
    };
    

    // Firebase code below:
    const proposedCropCollectionRef=collection(db,"proposedCropPrices");

    const handleSubmit = async(event) => {
        event.preventDefault();

        const enteredValue = parseInt(cropValue);

        if (isNaN(enteredValue) || enteredValue < minPrice || enteredValue > maxPrice) {
            alert('Please enter a price from minimum to maximum range for this crop.');
            setCropValue('');
        } else {
            // Here, I will implement the logic for submitting this price to database.
            try{
                await addDoc(proposedCropCollectionRef,{
                    proposedPrice:cropValue,
                    selectedCrop:selectedCrop,
                    userId:auth?.currentUser?.uid,
                });
            }
            catch(err){
                alert(err);
            }
            alert('Your proposed price for '+selectedCrop+' : ' + enteredValue);
            setCropValue('');
        }

    };
    const postData = {
        cropName:selectedCrop,
        proposedPrice: cropValue
      };

    // To store data in a MongoDB Collection 
    const handleSubmitMongoDB=(e)=>{
    e.preventDefault(); 
        axios.post('http://localhost:3737/v1/proposeCropPrice', postData)
    .then(response => {
      console.log('Response:', response.status);
    })
    .catch(error => {
      console.error('Error:', error.response.data);
    });

    }

    return (
        <div className='Trade-container'>
        <div className='container'>
            <h2 className='title'>🌱 Farmers: Nurturing the Earth's Pulse, Feeding the 🌍, Cultivating Tomorrow's 🌟.</h2>
            <h4> Select your data parameters and send a request for the best crop at an unbeatable price.</h4>
            <div className="select-container">
                <label htmlFor="state">Select State:</label>
                <select id="state" value={selectedState} onChange={handleStateChange}>
                    <option value="">Select State</option>
                    {states.map((state, index) => (
                        <option key={index} value={state}>{state}</option>
                    ))}
                </select>
            </div>
            <div className="select-container">
                <label htmlFor="district">Select District:</label>
                <select id="district" value={selectedDistrict} onChange={handleDistrictChange}>
                    <option value="">Select District</option>
                    {districts.map((district, index) => (
                        <option key={index} value={district}>{district}</option>
                    ))}
                </select>
            </div>
            <div className="select-container">
                <label htmlFor="market">Select Market:</label>
                <select id="market" value={selectedMarket} onChange={handleMarketChange}>
                    <option value="">Select Market</option>
                    {markets.map((market, index) => (
                        <option key={index} value={market}>{market}</option>
                    ))}
                </select>
            </div>

            {/* Added select drop down for crops */}
            <div className="select-container">
                <label htmlFor="crop">Select Crop:</label>
                <select id="crop" value={selectedCrop} onChange={handleCropChange}>
                    <option value="">Select Crop</option>
                    {crops.map((crop, index) => (
                        <option key={index} value={crop}>{crop}</option>
                    ))}
                </select>
            </div>

            {selectedState === "" || selectedDistrict === "" || selectedMarket === "" || selectedCrop === "" ? (
                <div>Please select your state, district, market and crop.</div>
            ) : (
                <>
                
                        <div className="filtered-records-container">
                            <h2> Your Selected Crop is -- {selectedCrop}</h2>
{/*                            
                            {filteredRecords.map((record) => (   //use useeffectfor this
                                        <>
                                            {record.commodity===selectedCrop?setMinPrice(record.min_price):""}
                                            <h3>{record.commodity}</h3>
                                            <h3>{record.variety}</h3>
                                            <h3>{record.min_price}</h3>
                                            <h3>{record.max_price}</h3>
                                            <h3>{record.arrival_date}</h3>
                                            <h3>{record.grade}</h3>
                                        </>
                            ))} */}

                            <h3> The Minimum Price = {minPrice} <br></br> The Maximum Price = {maxPrice}</h3>
                            <form onSubmit={handleSubmit}>
                                    <label className='Trade-input-label' htmlFor="numberInput">Enter your price (from {minPrice} to {maxPrice}):</label>
                                    <input  className='Trade-input' placeholder='Enter Price '
                                        type="tel" 
                                        id="numberInput" 
                                        min={minPrice} 
                                        max={maxPrice} 
                                        value={cropValue} 
                                        onChange={handleCropValueChange} 
                                        // onKeyDown={(e) => {if (e.key === 'ArrowUp' || e.key === 'ArrowDown') e.preventDefault();}}
                                       
                                    />
                                    <button className='Trade-button' type="submit">Submit</button>
                            </form>
                        </div>
                </>
            )}
        </div>
        </div>
    );
}

export default Trade;