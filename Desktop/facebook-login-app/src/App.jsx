import React from 'react';
import './App.scss'

function App() {
return(
  <div className="container1">
    <div className="facebookLog">
        <h2>facebook</h2>
        <p className="fbkconnect">Facebook helps you connect and share with the people in your life.</p>
    </div>
    <div className="container2">
        <div className="formbook">
            <div className="input1">
                <input className="email" type="text" placeholder="Email address or your number" />
                <input className="pswd" type="password" placeholder="Password?" />
                <button className="login">Log in</button>
                <div className="forget">
                    <p className="forget-password"><a href="">Forgotten your password?</a></p>
                    <hr />
                </div>
            </div>
            <div className="create">
                <button className="create1"><a href="http://127.0.0.1:5500/Facebook-Signup-Form/facebook.html">Create new account</a></button>
            </div>
        </div>
        <div className="lastpage">
            <p><b>Create a page</b> for a celebrity, brand or business.</p>
        </div>

    </div>

</div>
)
}

export default App
