import { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom';
import { storeUser, userData } from '../helper';

import "../design/Login.css"
import UserNavbar from '../components/UserNavbar';
import conf from '../conf';

const initialUser = { identifier: '', password: '' };

export default function Login() {
  const [user, setUser] = useState(initialUser)
  const navigate = useNavigate();

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(user);
    const url = `${conf.apiPrefix}/api/auth/local`
    try {
      if (user.identifier && user.password) {
        const { data } = await axios.post(url, user)
        console.log(data)
        if (data.jwt) {
          storeUser(data)
          toast.success('เข้าสู่ระบบสำเร็จ', {
            position: "top-center",
            autoClose: 1000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            className: 'custom-toast-success'
          })
          setUser(initialUser)
          navigate('/')
        }
      }
    } catch (err) {
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
                        <span className="h1 fw-bold mb-0 mx-auto">เข้าสู่บัญชีของคุณ</span>
                      </div>

                      <form noValidate onSubmit={handleLogin} >

                        <div className="form-outline mb-4">
                          <input
                            type="email"
                            id="form2Example17"
                            className="form-control form-control-lg"
                            placeholder="Email"
                            name="identifier"
                            autoComplete="email"
                            required
                            onChange={handleChange}
                          />
                        </div>

                        <div className="form-outline mb-4">
                          <input
                            type="password"
                            id="form2Example27"
                            className="form-control form-control-lg"
                            placeholder="Password"
                            name="password"
                            autoComplete="current-password"
                            required
                            onChange={handleChange}
                          />
                        </div>

                        <div className="row justify-content-md-center">
                          <p className="col-4" style={{ color: '#393f81' }}>
                            ยังไม่มีบัญชี?
                            <br />
                            <a href="/Register" style={{ color: '#393f81' }}>
                              ลงทะเบียนที่นี่
                            </a>
                          </p>
                          <p className="col-4"></p>
                          <button className="btn btn-dark btn-lg btn-block col-4" type="submit" >
                            เข้าสู่ระบบ
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