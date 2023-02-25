import UserNavbar from '../components/UserNavbar';

const initialUser = { identifier: '', password: '' };

export default function ProfilePage() {

    return (
        <div className=''>
            <UserNavbar />
            <section className="vh-100" >
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col col-lg-6 mb-4 mb-lg-0">
                            <div className="card mb-3" >
                                <div className="row g-0">
                                    <div className="col-md-4 gradient-custom text-center text-white">
                                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                                            alt="Avatar" className="img-fluid my-5" style={{height:'150px'}}/>
                                        <i className="far fa-edit mb-5"></i>
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body p-4">
                                            <h6 >โปรไฟล์ :</h6>
                                            <hr className="mt-0 mb-4" />
                                            <div className="row pt-1">
                                                <div className="col-6 mb-3">
                                                    <h6>ชื่อ :</h6>
                                                    <p className="text-muted">สมชาย</p>
                                                </div>
                                                <div className="col-6 mb-3">
                                                    <h6>นามสกุล :</h6>
                                                    <p className="text-muted">ชาตรี</p>
                                                </div>
                                            </div>
                                            <div className="row pt-1">
                                                <div className="col-6 mb-3">
                                                    <h6>อีเมล :</h6>
                                                    <p className="text-muted">info@example.com</p>
                                                </div>
                                                <div className="col-6 mb-3">
                                                    <h6>เบอร์โทรศัพท์ :</h6>
                                                    <p className="text-muted">123 456 789</p>
                                                </div>
                                            </div>
                                            <div className="d-flex justify-content-start">
                                            </div>
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