import { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom';
import { storeUser, userData } from '../helper';

import "../design/Login.css"
import UserNavbar from '../components/UserNavbar';

const initialUser = { identifier: '', password: '' };

export default function Register() {
    const [user, setUser] = useState(initialUser)
    const navigate = useNavigate();

    const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(user);
        const url = "http://localhost:1337/api/auth/local"
        try {
            if (user.identifier && user.password) {
                const { data } = await axios.post(url, user)
                console.log(data)
                if (data.jwt) {
                    storeUser(data)
                    toast.success('Login successful', {
                        hideProgressBar: true
                    })
                    setUser(initialUser)
                    navigate('/')
                }
            }
        } catch (err) {
            toast.error("Invalid email or password", {
                hideProgressBar: true
            })
        }
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setUser({
            ...user,
            [name]: value,
        });
    };

    useEffect(() => {
        const data = userData();
        if (data.jwt) {
            navigate('/')
        }
    });


    return (
        <div className='Login-BG'>
            <UserNavbar />
            <section className="vh-100 fixed-top" style={{ zIndex: '100' }}>
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col col-xl-10">
                            <div className="card" style={{ borderRadius: '1rem' }}>
                                <div className="row g-0">
                                    <div className="col-md-6 col-lg-5 d-none d-md-block">
                                        <img
                                            src="public/JamesBond.png"
                                            alt="login form"
                                            className="img-fluid mx-auto object-fit-none border"
                                            style={{
                                                borderRadius: "1rem 0 0 1rem",
                                                objectFit: "cover",
                                                objectPosition: "center",
                                                height: "100%",
                                            }}
                                        />
                                    </div>
                                    <div className="col-md-6 col-lg-7 d-flex align-items-center">
                                        <div className="card-body p-4 p-lg-5 text-black">

                                            <form>

                                                <div className="d-flex align-items-center mb-3 pb-1">
                                                    <i className="fas fa-cubes fa-2x me-3" style={{ color: '#ff6219' }}></i>
                                                    <span className="h1 fw-bold mb-0 mx-auto">Create an account</span>
                                                </div>

                                                <h5 className="fw-normal mb-3 pb-3" style={{ letterSpacing: '1px' }}></h5>

                                                <div className="form-outline mb-4">
                                                    <input
                                                        type="email" id="form2Example17"
                                                        className="form-control form-control-lg"
                                                        placeholder="Username"
                                                    />
                                                </div>

                                                <div className="form-outline mb-4">
                                                    <input
                                                        type="email"
                                                        id="form2Example17"
                                                        className="form-control form-control-lg"
                                                        placeholder="Email"
                                                    />
                                                </div>

                                                <div className="form-outline mb-4">
                                                    <input
                                                        type="password"
                                                        id="form2Example27"
                                                        className="form-control form-control-lg"
                                                        placeholder="Password"
                                                    />
                                                </div>

                                                <div className="form-outline mb-4">
                                                    <input
                                                        type="password"
                                                        id="form2Example27"
                                                        className="form-control form-control-lg"
                                                        placeholder="Confirm Password"
                                                    />
                                                </div>

                                                <div className="row justify-content-md-center">
                                                    <p className="col-4" style={{ color: '#393f81' }}>
                                                        Already have an account? 
                                                        <br/>
                                                        <a href="/Login" style={{ color: '#393f81' }}>
                                                            Login here
                                                        </a>
                                                    </p>
                                                    <p className="col-4"></p>
                                                    <button className="btn btn-dark btn-lg btn-block col-4" type="button">
                                                        Register
                                                    </button>
                                                </div>

                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};