import React, { useState } from 'react'
import './Login.scss'
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { postLogin } from '../../services/apiService';
const Login = (props) => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async () => {
        //validate

        //submit apis
        let data = await postLogin(email, password)
        if (data && data.EC === 0) {
            toast.success(data.EM);
            navigate('/')
        }
        if (data && data.EC === 1) {
            toast.error(data.EM);
        }

    }
    return (
        <div className='login-container'>
            <div className='header mx-auto'>
                <span>don't have an account yet? </span>
                <button onClick={() => { navigate('/register') }}>Sign up</button>
            </div>
            <div className='title col-4 mx-auto'>
                Hanhdeptrainhatthegioi
            </div>
            <div className='welcom col-4 mx-auto'>
                Hello, who's this?
            </div>
            <div className='content-form col-4 mx-auto'>
                <div className='form-group'>
                    <label>emaail</label>
                    <input
                        type={"email"}
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
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
                <span className='forgot-password'>fogot password ?</span>
                <div>
                    <button onClick={handleLogin} className='btn-submit'>Login to Hanhdeptrai</button>
                </div>
                <div className='back'>
                    <span onClick={() => { navigate('/') }}>
                        &#60;&#60; Go to HomePage
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Login
