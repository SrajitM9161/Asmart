import React from "react";
import '../CSS/Login.css';
import { Link} from "react-router-dom";
import { useState } from "react";
import {auth,googleProvider} from "../Firebase/config";
import { signInWithEmailAndPassword,signInWithPopup } from "firebase/auth";
import imgFarmer  from "../assets/imgFarmer.png"
const Login = ()=>{

    // useState use krenge for handling inputs like id , pw
    const [actives,setActives] = useState(true);
    const [emails,setEmails]=useState("");
    const [passwords,setPasswords]=useState("");
    const [showPw,setShowPw]=useState(false);

    // function to switch between user and admin
    function toggleActiveUser(){
        actives?"":setActives(true);
    }
    function toggleActiveAdmin(){
        actives?setActives(false):"";
    }

    // function to handle/storing user input using useState
    function handleEmailChange(e){
        setEmails(e.target.value);
    }    
    function handlePasswordChange(e){
        setPasswords(e.target.value)
    }

    // function to handle Login click *MAIN FUNCTION  using MONGO DB (not used, because of firebase) 
    // function handleLogin(e){
    //     e.preventDefault();
    //     alert("You entered \nUsername:"+emails+"\nPassword:"+passwords);
    //     fetch("http://localhost:3737/register",{
    //         method:"POST",
    //         crossDomain:true,
    //         headers:{
    //             "Content-Type":"application/json",
    //             Accept:"application/json",
    //             "Access-Control-Allow-Origin":"*",
    //         },
    //         body:JSON.stringify({
    //             // fname:names,
    //             email:emails,
    //             password:passwords
    //         }),
    //     }).then((res)=>res.json())
    //     .then((data)=>{
    //         console.log(data,"userRegister");
    //     })         
    //     }
    
    // Function to check if user exists i.e Registered or not.
    // console.log("The user is"+auth.currentUser.email);
    const handleLogins=async(e)=>{   
        
        e.preventDefault();
        try{
            // const userCredentials = await signInWithEmailAndPassword(emails,passwords);
            const userCredentials = await signInWithEmailAndPassword(auth,emails, passwords);
            const users=userCredentials.user.email;
            alert("Hello "+users+", Welcome Back");
            window.location.href="/";
        }catch(err){
            const errCode=err.code;
            if(errCode=="auth/user-not-found"){
                console.log(errCode);
                alert("No user found with this email. Please Sign up");
            }else if(errCode=="auth/wrong-password"){
                console.log(errCode);
                alert("Incorrect password. Please try again");
            }else if (errCode === 'auth/invalid-credential') {
                console.log(errCode);
                alert('Invalid email or password. Please check your credentials.');
            }
            else{
                alert(err);
            }
        }
    }
    const handleGoogleSignup=async()=>{
        try{
            await signInWithPopup(auth,googleProvider);
            alert("Logged In Successfully");
            window.location.href="/";
            
        }catch(err){
            alert(err);
        }
    }
    // function for show pw
    function showPass(){
        // showPw?setShowPw('false'):setShowPw('true');
        setShowPw(!showPw);

    }
    // showpw

    return (
        <div className="login">
            {/* left half with actual login form */}
            <div className="leftHalf">
                <div className="loginArea">
                    <div className="greetLogin">
                        <h2>Welcome to AGRISMART</h2>
                    </div>

                    <div className="userSelect">
                        {/* Toggle the 'active' class for CSS of current user(admin or user) */}
                        {/* 'active' class set for user by default */}
                        <div className={`user ${actives?'actives':''}`}>
                            <button onClick={toggleActiveUser}><h3>User Login</h3></button>
                        </div>

                        <div className={`adminUser ${!actives?'actives':''}`}>
                            <button onClick={toggleActiveAdmin}><h3>Admin Login</h3></button>
                        </div>

                    </div>

                    <form onSubmit={handleLogins} className="loginForm">
                        <div className="names">
                            <strong>Username</strong>
                            <p>👨<input value={emails} onChange={handleEmailChange} type="email" name="" id="" placeholder="Ex: demo123@gmail.com" /></p>
                        </div>
                        <div className="pw">
                            <strong>Password</strong>
                            <p>🔒<input value={passwords} onChange={handlePasswordChange} type={showPw?"text":"password"}  name="" id="" placeholder="Ex: demopw123" /></p>
                        </div>

                        <div  className="showPw">
                            <input onClick={showPass} type="checkbox" name="" className="showss" id="shows" />
                            <label htmlFor="shows"><strong>Show password</strong></label>
                        </div>

                        <div className="forgetPw">
                            <button type="submit">Login</button>
                            <a href="">Forgot Password?</a>
                        </div>

                    </form>

                    <div className="loginGoogle">
                        <p>Or Login with <img onClick={handleGoogleSignup} src="https://cdn-icons-png.flaticon.com/128/2335/2335397.png" className="google" alt="" srcset="" /></p>
                    </div>

                    <div className="signup">
                        <p>Don't have an account? <Link to="/signup"> <h3>Sign up</h3></Link> </p>


                    </div>
                </div>
            </div>

            {/* right half with image */}
            <div className="rightHalf">

                {/* <Link to="/"><button className="cross"><p>X</p></button></Link> */}

                <div className="name2">
                    <h2>AGRISMART</h2>
                </div>

                <div className="imgFarm">
                    <img src={imgFarmer} className="farmerImage" alt="" srcset="" />
                </div>

            </div>
        
        </div>
    );
}

export default Login;