import React, { useState } from 'react'
import './Register.scss'
import { postRegister } from '../../services/apiService';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
const Register = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const validateEmail = (email) => {
        return email.match(
            /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
    };
    const handleRegister = async () => {

        const isValidEmail = validateEmail(email);
        if (!isValidEmail) {
            toast.error('invalid email')
            return;
        } if (!password) {
            toast.error('invalid password')
            return;
        }

        //submit apis
        let data = await postRegister(email, username, password)
        if (data && data.EC === 0) {
            toast.success(data.EM);
            navigate('/login')
        }
        if (data && data.EC === 1) {
            toast.error(data.EM);
        }
    }

    return (
        <div className='register-container'>
            <div className='title'>
                Create your account
            </div>
            <div className='content-form'>
                <div className='form-group'>
                    <label>email</label>
                    <input
                        type={"email"}
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        className='form-control'></input>
                </div>
                <div className='form-group'>
                    <label>Username</label>
                    <input
                        type={"text"}
                        value={username}
                        onChange={(event) => setUsername(event.target.value)}
                        className='form-control'></input>
                </div>
                <div className='form-group'>
                    <label>Password</label>
                    <input
                        type={"password"}
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        className='form-control'></input>
                </div>
                <div className='submit-register'>
                    <button className='btn-submit' onClick={()=>handleRegister()}>
                        Register
                    </button>
                </div>

                <div className='back'>
                    <span onClick={() => { navigate('/login') }}>
                        &#60;&#60; Back to Login
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Register
