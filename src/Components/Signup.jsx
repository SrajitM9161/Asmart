import React from "react";
import '../CSS/Login.css';
import { Link } from "react-router-dom";
import { useState } from "react";

const Login = ()=>{

    // useState use krenge for handling inputs like id , pw
    const [actives,setActives] = useState(true);
    const [fullName,setFullName]=useState("");
    const [emails,setEmails]=useState("");
    const [passwords,setPasswords]=useState("");
    const [showPw,setShowPw]=useState(false);

    // function to switch between user and admin
    // function toggleActiveUser(){
    //     actives?"":setActives(true);
    // }
    // function toggleActiveAdmin(){
    //     actives?setActives(false):"";
    // }

    // function to handle/storing user input using useState
    function handleFullNameChange(e){
        setFullName(e.target.value);
    }    
    function handleEmailChange(e){
        setEmails(e.target.value);
    }    
    function handlePasswordChange(e){
        setPasswords(e.target.value)
    }

    // function to handle Login click *MAIN FUNCTION   
    function handleLogin(e){
        e.preventDefault();
        alert("You entered \nFull Name :"+fullName+"\nEmail:"+emails+"\nPassword:"+passwords);
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
                        {/* <div className={`user ${actives?'actives':''}`}>
                            <button onClick={toggleActiveUser}><h3>User Login</h3></button>
                        </div>

                        <div className={`adminUser ${!actives?'actives':''}`}>
                            <button onClick={toggleActiveAdmin}><h3>Admin Login</h3></button>
                        </div> */}
                        <h3>Create your account</h3>

                    </div>

                    <form onSubmit={handleLogin} className="loginForm">
                        <div className="names">
                            <strong>Full Name</strong>
                            <p>👨<input value={fullName} onChange={handleFullNameChange} type="text" name="" id="" placeholder="Type your name here" /></p>
                        </div>
                        <div className="names">
                            <strong>Email</strong>
                            <p>✉️<input value={emails} onChange={handleEmailChange} type="email" name="" id="" placeholder="Type your email here" /></p>
                        </div>
                        <div className="pw">
                            <strong>Password</strong>
                            <p>🔒<input value={passwords} onChange={handlePasswordChange} type={showPw?"text":"password"}  name="" id="" placeholder="Type your password here" /></p>
                        </div>

                        <div  className="showPw">
                            <input onClick={showPass} type="checkbox" name="" className="showss" id="shows" />
                            <label htmlFor="shows"><strong>Show password</strong></label>
                        </div>

                        <div className="forgetPw">
                            <button type="submit">Create account</button>
                        </div>

                    </form>

                    <div className="loginGoogle">
                        <p>Login with <a href=""><img src="https://cdn-icons-png.flaticon.com/128/2335/2335397.png" alt="" /></a> <a href=""><img src="https://cdn-icons-png.flaticon.com/128/3955/3955011.png" alt="" /></a> <a href=""><img src="https://cdn-icons-png.flaticon.com/128/5969/5969020.png" alt="" /></a></p>
                    </div>

                    <div className="signup">
                        <p>Already have an account? <Link to="/login"> <h3>Login</h3></Link> </p>


                    </div>
                </div>
            </div>

            {/* right half with image */}
            <div className="rightHalf">

                <Link to="/"><button className="cross"><h3>X</h3></button></Link>

                <div className="name2">
                    <h2>AGRISMART</h2>
                </div>

                <div className="imgFarm">
                    <img src="src/assets/imgFarmer.png" alt="" srcset="" />
                </div>

            </div>
        
        </div>
    );
}

export default Login;