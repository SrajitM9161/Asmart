import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../CSS/Papi.css';

const PAPI = () => {
    const [records, setRecords] = useState([]);
    const [selectedState, setSelectedState] = useState("");
    const [selectedDistrict, setSelectedDistrict] = useState("");
    const [filteredRecords, setFilteredRecords] = useState([]);
    const [states, setStates] = useState([]);
    const [districts, setDistricts] = useState([]);

    useEffect(() => {
        axios.get("https://api.data.gov.in/catalog/6141ea17-a69d-4713-b600-0a43c8fd9a6c?api-key=ENTER_API&format=json")
            .then(response => {
                const data = response.data.records;
                setRecords(data);
                const uniqueStates = Array.from(new Set(data.map(record => record.state)));
                setStates(uniqueStates);
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
    
        const filtered = records.filter(record =>
            (!selectedState || record.state === selectedState) &&
            (!selectedDistrict || record.district === selectedDistrict)
        );
        setFilteredRecords(filtered);
    }, [selectedState, selectedDistrict, records]);

    const handleStateChange = (event) => {
        const state = event.target.value;
        setSelectedState(state);
        setSelectedDistrict(""); 
        const uniqueDistricts = Array.from(new Set(records.filter(record => record.state === state).map(record => record.district)));
        setDistricts(uniqueDistricts);
    };

    const handleDistrictChange = (event) => {
        setSelectedDistrict(event.target.value);
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
            {selectedState === "" || selectedDistrict === "" ? (
                <div>Please select your state and district.</div>
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
                        <div>Select Your State and District</div>
                    )}
                </>
            )}
        </>
    );
}

export default PAPI;
