import axios from 'axios';
import React, { useEffect, useState } from 'react';
import '../CSS/Trade.css';
import urlWithApiKey from '../projectApiKey/apiKey';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { auth } from '../Firebase/config';

const Trade = () => {
    const [records, setRecords] = useState([]);
    const [selectedState, setSelectedState] = useState('');
    const [selectedDistrict, setSelectedDistrict] = useState('');
    const [selectedMarket, setSelectedMarket] = useState('');
    const [selectedCrop, setSelectedCrop] = useState('');
    const [filteredRecords, setFilteredRecords] = useState([]);
    const [states, setStates] = useState([]);
    const [districts, setDistricts] = useState([]);
    const [markets, setMarkets] = useState([]);
    const [crops, setCrops] = useState([]);
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(0);
    const [cropValue, setCropValue] = useState('');
    const [address, setAddress] = useState('');
    const [userPhone, setUserPhone] = useState('');

    useEffect(() => {
        const currentTime = new Date();
       
       
    }, []);

    useEffect(() => {
        axios.get(urlWithApiKey)
            .then(response => {
                const data = response.data.records;
                setRecords(data);
                const uniqueStates = Array.from(new Set(data.map(record => record.state)));
                setStates(uniqueStates);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                toast.error('Hey user please come later because Market is closed');
            });
    }, []);

    useEffect(() => {
        if (selectedState) {
            const uniqueDistricts = Array.from(new Set(records.filter(record => record.state === selectedState).map(record => record.district)));
            setDistricts(uniqueDistricts);
        }
    }, [selectedState, records]);

    useEffect(() => {
        if (selectedState && selectedDistrict) {
            const uniqueMarkets = Array.from(new Set(records.filter(record => record.state === selectedState && record.district === selectedDistrict).map(record => record.market)));
            setMarkets(uniqueMarkets);
        }
    }, [selectedState, selectedDistrict, records]);

    useEffect(() => {
        if (selectedState && selectedDistrict && selectedMarket) {
            const uniqueCrops = Array.from(new Set(records.filter(record => record.state === selectedState && record.district === selectedDistrict && record.market === selectedMarket).map(record => record.commodity)));
            setCrops(uniqueCrops);
        }
    }, [selectedState, selectedDistrict, selectedMarket, records]);

    useEffect(() => {
        const filtered = records.filter(record =>
            (!selectedState || record.state === selectedState) &&
            (!selectedDistrict || record.district === selectedDistrict) &&
            (!selectedMarket || record.market === selectedMarket) &&
            (!selectedCrop || record.commodity === selectedCrop)
        );
        setFilteredRecords(filtered);
    }, [selectedState, selectedDistrict, selectedMarket, selectedCrop, records]);

    const handleStateChange = (event) => {
        const state = event.target.value;
        setSelectedState(state);
        setSelectedDistrict('');
        setSelectedMarket('');
        setSelectedCrop('');
    };

    const handleDistrictChange = (event) => {
        const district = event.target.value;
        setSelectedDistrict(district);
        setSelectedMarket('');
        setSelectedCrop('');
    };

    const handleMarketChange = (event) => {
        setSelectedMarket(event.target.value);
        setSelectedCrop('');
    };

    const recordsMap = new Map();
    filteredRecords.forEach(record => recordsMap.set(record.commodity, record));

    const handleCropChange = (event) => {
        const cropSel = event.target.value;
        setSelectedCrop(cropSel);
        const matchedRecord = recordsMap.get(cropSel);
        if (matchedRecord) {
            setMinPrice(matchedRecord.min_price);
            setMaxPrice(matchedRecord.max_price);
        }
    };

    const handleCropValueChange = (event) => {
        setCropValue(event.target.value);
    };

    const handleAddressChange = (event) => {
        setAddress(event.target.value);
    };

    const handlePhoneNumberChange = (event) => {
        setUserPhone(event.target.value);
    };

    const handleSubmitMongoDB = (e) => {
        e.preventDefault();
        const enteredValue = parseInt(cropValue);
        if (isNaN(enteredValue) || enteredValue < minPrice || enteredValue > maxPrice) {
            toast.error('Please enter a valid price within the range.');
            setCropValue('');
        } else {
            const postData = {
                cropName: selectedCrop,
                proposedPrice: cropValue,
                userName: auth.currentUser ? auth.currentUser.displayName : 'user',
                userAddress: address,
                userPhoneNum: userPhone
            };
            axios.post('https://asmart-9.onrender.com/v1/proposeCropPrice', postData)
                .then(response => {
                    console.log('Response:', response.status);
                    setSelectedState('');
                    setSelectedDistrict('');
                    setSelectedMarket('');
                    setSelectedCrop('');
                    setAddress('');
                    setCropValue('');
                    setUserPhone('');
                    toast.success('Price proposed successfully!');
                })
                .catch(error => {
                    console.error('Error:', error.response.data);
                    toast.error('Failed to propose price. Please try again.');
                });
        }
    };

    return (
        <div className='Trade-container'>
            <ToastContainer />
            <h3 className='title'>🌱 Farmers: Nurturing the Earth's Pulse, Feeding the 🌍, Cultivating Tomorrow's 🌟.</h3>
            <h4>Select your data parameters and send a request for the best crop at an unbeatable price.</h4>
            <div className="input-container">
                <div className="select-container">
                    <label htmlFor="state">Select State:</label>
                    <select id="state" value={selectedState} onChange={handleStateChange}>
                        <option value=''>Select State</option>
                        {states.map((state, index) => (
                            <option key={index} value={state}>{state}</option>
                        ))}
                    </select>
                </div>
                <div className="select-container">
                    <label htmlFor="district">Select District:</label>
                    <select id="district" value={selectedDistrict} onChange={handleDistrictChange}>
                        <option value=''>Select District</option>
                        {districts.map((district, index) => (
                            <option key={index} value={district}>{district}</option>
                        ))}
                    </select>
                </div>
                <div className="select-container">
                    <label htmlFor="market">Select Market:</label>
                    <select id="market" value={selectedMarket} onChange={handleMarketChange}>
                        <option value=''>Select Market</option>
                        {markets.map((market, index) => (
                            <option key={index} value={market}>{market}</option>
                        ))}
                    </select>
                </div>
                <div className="select-container">
                    <label htmlFor="crop">Select Crop:</label>
                    <select id="crop" value={selectedCrop} onChange={handleCropChange}>
                        <option value=''>Select Crop</option>
                        {crops.map((crop, index) => (
                            <option key={index} value={crop}>{crop}</option>
                        ))}
                    </select>
                </div>
            </div>
            <hr />
            {selectedState === '' || selectedDistrict === '' || selectedMarket === '' || selectedCrop === '' ? (
                <div>Please select your state, district, market and crop.</div>
            ) : (
                <div className="filtered-records-container">
                    <h2 className='trade-output-heading'>Your Selected Crop is -- {selectedCrop}</h2>
                    <h3>The Minimum Price = {minPrice}<br />The Maximum Price = {maxPrice}</h3>
                    <form onSubmit={handleSubmitMongoDB}>
                        <div className="cropUserInput">
                            <div className="Trade-input-container">
                                <label className='Trade-input-label' htmlFor="numberInput">Enter your price (from {minPrice} to {maxPrice}):</label>
                                <input
                                    className='Trade-input'
                                    placeholder='Enter Price'
                                    type="tel"
                                    id="numberInput"
                                    min={minPrice}
                                    max={maxPrice}
                                    value={cropValue}
                                    onChange={handleCropValueChange}
                                />
                            </div>
                            <div className="Trade-input-container">
                                <label htmlFor="userAddress">Enter your address:</label>
                                <input
                                    value={address}
                                    type="text"
                                    className='Trade-input'
                                    id="userAddress"
                                    onChange={handleAddressChange}
                                    placeholder='Your address...'
                                />
                            </div>
                            <div className="Trade-input-container">
                                <label htmlFor="userPhone">Enter your phone number:</label>
                                <input
                                    value={userPhone}
                                    type="tel"
                                    className='Trade-input'
                                    id="userPhone"
                                    onChange={handlePhoneNumberChange}
                                    placeholder='Phone number...'
                                />
                            </div>
                        </div>
                        <button className='Trade-button' type="submit">Send Request</button>
                    </form>
                </div>
            )}
        </div>
    );
}

export default Trade;
