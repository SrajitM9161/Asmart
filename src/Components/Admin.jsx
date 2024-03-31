import React, { useEffect } from 'react';
import {db} from '../Firebase/config'
import '../CSS/Admin.css'
import { useState } from 'react';
import { getDocs,collection} from "firebase/firestore";

const Admin=()=> {
    const [proposedCropPrices,setProposedCropPrices]=useState([]);
    const proposedCropCollectionRefs=collection(db,"proposedCropPrices");

    useEffect(()=>{

        
        const getCropPrices=async()=>{
            
            // Read data from db, and set crop prices.  
            try{
                const data=await getDocs(proposedCropCollectionRefs);
                const filteredData=data.docs.map((doc)=>({
                    ...doc.data(),
                    id:doc.id,
                }));
                
                setProposedCropPrices(filteredData);
            }catch(err){
                alert(err);
            }
        };
        getCropPrices();
    },[])
        
        

    return (
        <div>
            
            <h2 className='headAdmin'>Welcome to the Admin page</h2>

            <div className="cropLists">
            {proposedCropPrices.map((crop,index)=>(
                <div className='cropItem'>
                    <h1>{index+1}. Crop name : {crop.selectedCrop}</h1>
                    <h2>Proposed Price : Rs. {crop.proposedPrice}</h2>
                    <h3>Proposed by User ID : {crop.userId}</h3>
                </div>
            ))}
            </div>
        </div>
    );
}

export default Admin;