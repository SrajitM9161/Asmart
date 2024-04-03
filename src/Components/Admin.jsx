    // import React, { useEffect } from 'react';
// import {db} from '../Firebase/config'
// import '../CSS/Admin.css'
// import { useState } from 'react';
// import { getDocs,collection} from "firebase/firestore";
// import axios from 'axios';

// const Admin=()=> {
//     // const [proposedCropPrices,setProposedCropPrices]=useState([]);
//     // const proposedCropCollectionRefs=collection(db,"proposedCropPrices");
//     const [cropPrices, setCropPrices] = useState([]);


//     const fetchCropPrices = async () => {
//         try {
//           // Make a GET request to fetch crop prices
//           const response = await axios.get('http://localhost:3737/v1/proposeCropPrice'); // Assuming your backend route is '/api/crop-prices'
    
//           // Update state with fetched crop prices
//           setCropPrices(response.data);
//         //   alert("done")
//           console.log(response.data)
//         } catch (error) {
//           console.error('Error fetching crop prices:', error);
//         }
//       };
    
//     //   Fetch crop prices when component mounts
//       useEffect(() => {
//         fetchCropPrices();
//       }, []); //


    
//     // useEffect(()=>{        
//     //     const getCropPrices=async()=>{
            
//     //         // Read data from db, and set crop prices.  
//     //         try{
//     //             const data=await getDocs(proposedCropCollectionRefs);
//     //             const filteredData=data.docs.map((doc)=>({
//     //                 ...doc.data(),
//     //                 id:doc.id,
//     //             }));
                
//     //             setProposedCropPrices(filteredData);
//     //         }catch(err){
//     //             alert(err);
//     //         }
//     //     };
//     //     getCropPrices();
//     // },[])
        
        

//     return (
//         <div>
            
//             <h2 className='headAdmin'>Welcome to the Admin page</h2>
//                 {/* <button onClick={()=>fetchCropPrices()}>CICK ME </button> */}
//             <div className="cropLists">
//             {Object.keys(cropPrices).map((key, index) => (
//         <div className='cropItem' key={index}>
//           <h1>{index + 1}. Crop name: {cropPrices[key].cropName}</h1>
//           <h2>Proposed Price: Rs. {cropPrices[key].proposedPrice}</h2>
//           {/* <h3>Proposed by User ID: {cropPrices[key].userId}</h3> */}
//         </div>
//       ))}
//             </div>
//         </div>
//     );
// }

// export default Admin;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../CSS/Admin.css';

const Admin = () => {
    const [cropPrices, setCropPrices] = useState([]);

    const fetchCropPrices = async () => {
        try {
            const response = await axios.get('http://localhost:3737/v1/proposeCropPrice');
            setCropPrices(response.data.data); // Assuming the response contains a 'data' property
        } catch (error) {
            console.error('Error fetching crop prices:', error);
        }
    };

    useEffect(() => {
        fetchCropPrices();
    }, []);

    return (
        <div>
            <h2 className='headAdmin'>Welcome to the Admin page</h2>
            <div className="cropLists">
                {cropPrices.map((crop, index) => (
                    <div className='cropItem' key={index}>
                        <h1>{index + 1}. Crop name: {crop.cropName}</h1>
                        <h2>User : {crop.userName}</h2>
                        <h2>Proposed Price: Rs. {crop.proposedPrice}</h2>
                        <h2>Address : {crop.userAddress}</h2>
                        <h2>Phone : {crop.userPhoneNum}</h2>
                        {/* <h3>Proposed by User ID: {crop.userId}</h3> */}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Admin;
