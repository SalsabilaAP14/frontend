import React, {useState} from "react";
import { Link } from "react-router-dom";

const Register = () => {
    const[username,setUsername] = useState('');
    const[email,setEmail]       = useState('');
    const[password,setPassword] = useState('');
    const[confirmpassword,setConfirmPassword] = useState('');

    const changeUsername = (e) => {
        const value = e.target.value
        setUsername(value)
    }

    const changeEmail = (e) => {
        const value = e.target.value
        setEmail(value)
    }

    const changePassword = (e) => {
        const value = e.target.value
        setPassword(value)
    }

    const changeConfirmPassword = (e) => {
        const value = e.target.value
        setConfirmPassword(value)
    }

    return (
        <div style={{marginTop: '200px'}}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-body">
                                <div className="form-group">
                                    <label>Username</label>
                                    <input type="text" placeholder="Username" className="form-control" value={username} onChange={changeUsername}/>
                                </div>

                                <div className="form-group">
                                    <label>Email</label>
                                    <input type="text" placeholder="Email" className="form-control" value={email} onChange={changeEmail}/>
                                </div>

                                <div className="form-group">
                                    <label>Password</label>
                                    <input type="password" placeholder="Password" className="form-control" value={password} onChange={changePassword}/>
                                </div>

                                <div className="form-group">
                                    <label>Confirm Password</label>
                                    <input type="password" placeholder="ConfirmPassword" className="form-control" value={confirmpassword} onChange={changeConfirmPassword}/>
                                </div>

                                <div style={{marginTop: '10px'}}>
                                    <button className="btn btn-primary">Register</button>{' '}
                                    <Link to="/" className="btn btn-warning">
                                        Batal
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register