import { positions } from '@mui/system';
import UserNavbar from '../components/UserNavbar';

export default function PaymentPage() {

    return (
        <div className=''>
            <UserNavbar />
            <div className="container py-5 h-100">
                <div className="card mb-3" style={{ padding: "30px" }}>
                    <section>
                        <div className="d-flex justify-content-between align-items-center mb-5">
                            <div className="d-flex flex-row align-items-center">
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-lg-7 col-xl-6 mb-4 mb-md-0">
                                <div className='card-body text-center'><img src="เขาหลัก2.jpg"
                                    alt="Avatar" className="img-fluid" style={{ height: '200px', borderRadius: "1rem" }} /></div>
                                <h5>เลือกวิธีชำระเงิน</h5>

                                <div>
                                    <div className="d-flex justify-content-between">
                                    </div>

                                    <div className="d-flex flex-column mb-3">
                                        <div className="btn-group-vertical" role="group" aria-label="Vertical button group">
                                            <input type="radio" className="btn-check" name="options" id="option1" />
                                            <label className="btn btn-outline-primary btn-lg" >
                                                <div className="d-flex justify-content-between">
                                                    <span>thai QR payment</span>
                                                    <span>**** 5436</span>
                                                </div>
                                            </label>

                                            <input type="radio" className="btn-check" name="options" id="option2" checked />
                                            <label className="btn btn-outline-primary btn-lg" >
                                                <div className="d-flex justify-content-between">
                                                    <span>SCB</span>
                                                    <span>**** 5038</span>
                                                </div>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className=" col-lg-4 col-xl-4 offset-lg-1 offset-xl-2">
                                <div className="p-3">
                                    <h2 className="fw-bold">จุดชมวิวเสม็ดนางชี</h2>
                                    <span>วันที่</span><span className='mx-2'>01/11/66 - 03/11/66</span>
                                    <div className="form-outline mb-">
                                    <label className="form-label">จำนวนคน</label>
                                        <input className="form-control" style={{height:'30px',width:"30px",borderRadius:"5px"}}/>
                                    </div>
                                    <div className="d-flex justify-content-between mt-2">
                                        <div>686.00 บาท/ท่าน</div>
                                    </div>
                                </div>
                                <span className='fw-bold mx-3'>รวมทั้งหมด 686.00 บาท</span><span className="btn btn-success btn-lg mx-3" style={{ width: "100px" }}>จองเลย</span>
                                <div className='p-2' style={{ color: "red" }}>หมายเหตุ: คุณที่มีเวลา 1 วันในการชำระค่าจองหลังจากนั้นจะถูกยกเลิกการจอง</div>
                            </div>
                        </div>

                    </section>
                </div>
            </div>
        </div>
    );
};