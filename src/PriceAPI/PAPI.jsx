import React, { useEffect, useState } from 'react';
import axios from 'axios';
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

    useEffect(() => {
        axios.get("https://api.data.gov.in/resource/9ef84268-d588-465a-a308-a864a43d0070?api-key=ENTER_API_KEY&format=json&limit=10000")
            .then(response => {
                const data = response.data.records;
                setRecords(data);
                const uniqueStates = Array.from(new Set(data.map(record => record.state)));
                setStates(uniqueStates);
                console.log(response);
            })
            .catch(error => alert('Error fetching data:', error));
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
        const uniqueDistricts = Array.from(new Set(records.filter(record => record.state === state).map(record => record.district)));
        setDistricts(uniqueDistricts);
    };

    const handleDistrictChange = (event) => {
        const district = event.target.value;
        setSelectedDistrict(district);
        setSelectedMarket("");
        const uniqueMarkets = Array.from(new Set(records.filter(record => record.state === selectedState && record.district === district).map(record => record.market)));
        setMarkets(uniqueMarkets);
    };

    const handleMarketChange = (event) => {
        setSelectedMarket(event.target.value);
    };

    return (
        <>
            <div>
                <label htmlFor="state">Select State:</label>
                <select id="state" value={selectedState} onChange={handleStateChange}>
                    <option value="">Select State</option>
                    {states.map((state, index) => (
                        <option key={index} value={state}>{state}</option>
                    ))}
                </select>
            </div>
            <div>
                <label htmlFor="district">Select District:</label>
                <select id="district" value={selectedDistrict} onChange={handleDistrictChange}>
                    <option value="">Select District</option>
                    {districts.map((district, index) => (
                        <option key={index} value={district}>{district}</option>
                    ))}
                </select>
            </div>
            <div>
                <label htmlFor="market">Select Market:</label>
                <select id="market" value={selectedMarket} onChange={handleMarketChange}>
                    <option value="">Select Market</option>
                    {markets.map((market, index) => (
                        <option key={index} value={market}>{market}</option>
                    ))}
                </select>
            </div>
            {selectedState === "" || selectedDistrict === "" || selectedMarket === "" ? (
                <div>Please select your state, district, and market.</div>
            ) : (
                <>
                    {filteredRecords.length > 0 ? (
                        <div>
                            <h2>Filtered Records:</h2>
                            <table>
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
                        <div>No records found for the selected filters.</div>
                    )}
                </>
            )}
        </>
    );
}

export default PAPI;
