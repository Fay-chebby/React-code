import React from 'react';
import "./Login.css"
const   Login =()=>{
    return(
        <div className="login">
            <div className="background-circles">
                <div className="circle circle1"></div>
                <div className="circle circle2"></div>
                <div className="circle circle3"></div>
            </div>
            <h1 className="header"> Login</h1>
            <form className="login-form">
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" className="form-control" id="email" placeholder="Email"/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" id="password" placeholder="Password"/>
                </div>
                <button type="submit">Login</button>
                <div className="register link">
                    Don't have an account? <a href="/register">Register Here...</a>
                </div>
            </form>

        </div>
    )
}
export default Login;