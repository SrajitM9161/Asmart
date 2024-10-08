import React, { useEffect, useState } from 'react';
import axios from 'axios';
import urlWithApiKey from '../projectApiKey/apiKey';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../CSS/Papi.css';

const PAPI = () => {
    const [records, setRecords] = useState([]);
    const [selectedState, setSelectedState] = useState("");
    const [selectedDistrict, setSelectedDistrict] = useState("");
    const [selectedMarket, setSelectedMarket] = useState("");
    const [filteredRecords, setFilteredRecords] = useState([]);
    const [states, setStates] = useState([]);
    const [districts, setDistricts] = useState([]);
    const [markets, setMarkets] = useState([]);
    const [loading, setLoading] = useState(false); 
    const [dataLoaded, setDataLoaded] = useState(false); 
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true); 
                const response = await axios.get(urlWithApiKey);
                if (response.status === 200) {
                    const data = response.data.records;
                    setRecords(data);

                    const uniqueStates = Array.from(new Set(data.map(record => record.state)));
                    setStates(uniqueStates);

                    toast.success('Data loaded successfully!', { autoClose: 3000 });
                    setDataLoaded(true); 
                } else {
                    toast.error('Data could not be fetched.');
                }
            } catch (error) {
                toast.error(`Error fetching data: ${error.message}`);
            } finally {
                setLoading(false); 
            }
        };

        fetchData(); 
    }, []); 

    useEffect(() => {
        if (selectedState) {
            const uniqueDistricts = Array.from(new Set(
                records.filter(record => record.state === selectedState)
                       .map(record => record.district)
            ));
            setDistricts(uniqueDistricts);
        } else {
            setDistricts([]); 
        }
    }, [selectedState, records]);

    useEffect(() => {
        if (selectedState && selectedDistrict) {
            const uniqueMarkets = Array.from(new Set(
                records.filter(record => record.state === selectedState && record.district === selectedDistrict)
                       .map(record => record.market)
            ));
            setMarkets(uniqueMarkets);
        } else {
            setMarkets([]); 
        }
    }, [selectedState, selectedDistrict, records]);

    useEffect(() => {
        const filtered = records.filter(record =>
            (!selectedState || record.state === selectedState) &&
            (!selectedDistrict || record.district === selectedDistrict) &&
            (!selectedMarket || record.market === selectedMarket)
        );
        setFilteredRecords(filtered);
    }, [selectedState, selectedDistrict, selectedMarket, records]);

    const handleStateChange = (event) => {
        const state = event.target.value;
        setSelectedState(state);
        setSelectedDistrict("");
        setSelectedMarket("");
        setDistricts([]);
        setMarkets([]);
    };

    const handleDistrictChange = (event) => {
        const district = event.target.value;
        setSelectedDistrict(district);
        setSelectedMarket("");
        setMarkets([]);
    };

    const handleMarketChange = (event) => {
        setSelectedMarket(event.target.value);
    };

    return (
        <div className='papi-container'>
            <ToastContainer />
            <h3 className='Title'>🔍 Uncover Insights: Verify Correctness and Efficiency with Data.gov's Trusted Data! 🌟</h3>
            <h1 className='title'>Want to know the price?</h1>
            <div className="fill-opt">
                <div className="select-container">
                    <select id="state" value={selectedState} onChange={handleStateChange}>
                        <option value="">State</option>
                        {states.map((state, index) => (
                            <option key={index} value={state}>{state}</option>
                        ))}
                    </select>
                </div>
                <div className="select-container">
                    <select id="district" value={selectedDistrict} onChange={handleDistrictChange} disabled={!selectedState}>
                        <option value="">District</option>
                        {districts.map((district, index) => (
                            <option key={index} value={district}>{district}</option>
                        ))}
                    </select>
                </div>
                <div className="select-container">
                    <select id="market" value={selectedMarket} onChange={handleMarketChange} disabled={!selectedDistrict}>
                        <option value="">Market</option>
                        {markets.map((market, index) => (
                            <option key={index} value={market}>{market}</option>
                        ))}
                    </select>
                </div>
            </div>
            <hr />
            {loading ? (
                <div className="loading-message">
                    <p>🔍 Fetching the latest data from India's official government source. Please wait...</p>
                </div>
            ) : (
                <>
                    {!dataLoaded ? (
                        <div className='papi-text'>Loading data, please wait...</div>
                    ) : (
                        <>
                            {selectedState === "" || selectedDistrict === "" || selectedMarket === "" ? (
                                <div className='papi-text'>Please select your state, district, and market.</div>
                            ) : (
                                <>
                                    {filteredRecords.length > 0 ? (
                                        <div className="Price-filtered-records-container">
                                            <h2>Filtered Records:</h2>
                                            <table id="records-table">
                                                <thead>
                                                    <tr>
                                                        <th>Commodity</th>
                                                        <th>Variety</th>
                                                        <th>Min Price</th>
                                                        <th>Max Price</th>
                                                        <th>Arrival Date</th>
                                                        <th>Grade</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {filteredRecords.map((record, index) => (
                                                        <tr key={index}>
                                                            <td>{record.commodity}</td>
                                                            <td>{record.variety}</td>
                                                            <td>{record.min_price}</td>
                                                            <td>{record.max_price}</td>
                                                            <td>{record.arrival_date}</td>
                                                            <td>{record.grade}</td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    ) : (
                                        <div className='not-found'>No records found for the selected filters.</div>
                                    )}
                                </>
                            )}
                        </>
                    )}
                </>
            )}
        </div>
    );
}

export default PAPI;
