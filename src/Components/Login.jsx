import React from "react";
import '../CSS/Login.css';
import { Link } from "react-router-dom";
import { useState } from "react";

const Login = ()=>{

   const [actives,setActives] = useState(true);
   function toggleActiveUser(){
        actives?"":setActives(true);
   }
   function toggleActiveAdmin(){
    actives?setActives(false):"";
}
       
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

                    <div className="loginForm">
                        <div className="names">
                            <strong>Username</strong>
                            <p>👨<input type="text" name="" id="" placeholder="Type your name here" /></p>
                        </div>
                        <div className="pw">
                            <strong>Password</strong>
                            <p>🔒<input type="password" name="" id="" placeholder="Type your password here" /></p>
                        </div>

                        <div className="showPw">
                            <input type="checkbox" name="" id="shows" />
                            <label htmlFor="shows"><strong>Show password</strong></label>
                        </div>

                        <div className="forgetPw">
                            <button>Login</button>
                            <a href="">Forgot Password?</a>
                        </div>

                    </div>

                    <div className="loginGoogle">
                        <p>Login with <a href=""><img src="https://cdn-icons-png.flaticon.com/128/2335/2335397.png" alt="" /></a> <a href=""><img src="https://cdn-icons-png.flaticon.com/128/3955/3955011.png" alt="" /></a> <a href=""><img src="https://cdn-icons-png.flaticon.com/128/5969/5969020.png" alt="" /></a></p>
                    </div>

                    <div className="signup">
                        <p>Don't have an account? <a href="">Sign up</a></p>

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