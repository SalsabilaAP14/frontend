import React, {useState} from "react";
import { Link } from "react-router-dom";

const Login = () => {
    const[username,setUsername] = useState('');
    const[password,setPassword] = useState('');
    const[email,setEmail]       = useState('');

    const onChangeUsername = (e) => {
        const value = e.target.value
        setUsername(value)
    }

    const onChangeEmail = (e) => {
        const value = e.target.value
        setEmail(value)
    }

    const onChangePassword = (e) => {
        const value = e.target.value
        setPassword(value)
    }

    return (
        <div style={{marginTop: "200px"}}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-4">
                        <div className="card p-4">
                            <div className="card-body">
                                <div className="form-group">
                                    <label>Username</label>
                                    <input type="text" placeholder="Username" className="form-control" value={username} onChange={onChangeUsername}/>
                                </div>

                                <div className="form-group">
                                    <label>Email</label>
                                    <input type="text" placeholder="Email" className="form-control" value={email} onChange={onChangeEmail}/>
                                </div>

                                <div className="form-group">
                                    <label>Password</label>
                                    <input type="password" placeholder="Password" className="form-control" value={password} onChange={onChangePassword}/>
                                </div>

                                <div style={{marginTop: '10px'}}>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <button className="btn btn-primary">Login</button>
                                        </div>
                                    
                                        <div className="col-md-6 text-right">
                                            <Link to="/register">
                                                Register
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login