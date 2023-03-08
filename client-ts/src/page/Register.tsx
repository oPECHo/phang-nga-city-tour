import { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom';
import { userData } from '../helper';

import "../design/Login.css"
import UserNavbar from '../components/UserNavbar';
import conf from '../conf';

const initialUser = { username: '', email: '', password: '' };

export default function RegisterPage() {
    const [user, setUser] = useState(initialUser)
    const navigate = useNavigate();

    const handleSignUp = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(user);
        const url = `${conf.apiPrefix}/api/auth/local/register`;
        try {
            if (user.username && user.email && user.password) {
                const res = await axios.post(url, user)
                console.log(res.data)
                navigate('/login', { replace: true })
            }
        } catch (err) {
            console.log(err);
            toast.error("อีเมลหรือรหัสผ่านไม่ถูกต้อง", {
                position: "top-center",
                autoClose: 1000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                className: 'custom-toast-error'
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
                                            src="/JamesBond.png"
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

                                            <div className="d-flex align-items-center mb-3 pb-1">
                                                <i className="fas fa-cubes fa-2x me-3" style={{ color: '#ff6219' }}></i>
                                                <span className="h1 fw-bold mb-0 mx-auto">สร้างบัญชี</span>
                                            </div>

                                            <form noValidate onSubmit={handleSignUp}>
                                                <div className="form-outline mb-4">
                                                    <input
                                                        type="email"
                                                        className="form-control form-control-lg"
                                                        placeholder="Username"
                                                        name="username"
                                                        id="username"
                                                        required
                                                        autoFocus
                                                        autoComplete="username"
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                                <div className="form-outline mb-4">
                                                    <input
                                                        type="email"
                                                        className="form-control form-control-lg"
                                                        placeholder="Email"
                                                        name="email"
                                                        id="email"
                                                        required
                                                        autoFocus
                                                        autoComplete="email"
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                                <div className="form-outline mb-4">
                                                    <input
                                                        type="password"
                                                        className="form-control form-control-lg"
                                                        placeholder="Password"
                                                        name="password"
                                                        id="password"
                                                        required
                                                        autoFocus
                                                        autoComplete="password"
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                                <div className="row justify-content-md-center">
                                                    <p className="col-4" style={{ color: '#393f81' }}>
                                                        มีบัญชีอยู่แล้ว?
                                                        <br />
                                                        <a href="/Login" style={{ color: '#393f81' }}>
                                                            เข้าสู่ระบบที่นี่
                                                        </a>
                                                    </p>
                                                    <p className="col-4"></p>
                                                    <button className="btn btn-dark btn-lg btn-block col-4" type="submit">
                                                        ลงทะเบียน
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