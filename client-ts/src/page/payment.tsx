import { bgcolor, borderRadius, positions } from '@mui/system';
import UserNavbar from '../components/UserNavbar';

export default function PaymentPage() {

    return (
        <div className=''>
            <UserNavbar />
            <section className="vh-100" >
                <div className="container py-5">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col col-lg-7 mb-4 mb-lg-0">
                            <div className="card py-5 mb-3" style={{ padding: "30px", backgroundColor: 'hsla(0, 0%, 100%, 0.55)' }}>
                                <div className="row">
                                    <div className="col-xl-6">
                                        <div className='card-body text-center'>
                                            <img src="เขาหลัก2.jpg" alt="Avatar" className="img-fluid" style={{ height: '200px', borderRadius: "1rem" }} /></div>
                                        <h5 className='fw-bold mx-3'>เลือกวิธีชำระเงิน</h5>

                                        <div className='card-body text-center'>
                                            <div className='card-body text-center'>

                                                <form className="pb-3">
                                                    <div className="d-flex flex-row pb-3">
                                                        <div className="d-flex align-items-center pe-2">
                                                            <input className="form-check-input" type="radio" name="radioNoLabel" id="radioNoLabel1"
                                                                value="" aria-label="..." checked />
                                                        </div>
                                                        <div className="rounded border d-flex w-100 p-3 align-items-center">
                                                            <p className="mb-0">
                                                                <img className='mx-1' src="scb.jpg" style={{height:"20px", borderRadius:"3px"}} /> SCB
                                                            </p>
                                                            <div className="ms-auto">************3456</div>
                                                        </div>
                                                    </div>


                                                    <div className="d-flex flex-row">
                                                        <div className="d-flex align-items-center pe-2">
                                                            <input className="form-check-input" type="radio" name="radioNoLabel" id="radioNoLabel2"
                                                                value="" aria-label="..." />
                                                        </div>
                                                        <div className="rounded border d-flex w-100 p-3 align-items-center">
                                                            <p className="mb-0">
                                                            <img className='mx-1' src="promptpay.jpg" style={{height:"20px", borderRadius:"3px"}} /> promptpay
                                                            </p>
                                                            <div className="ms-auto">************1038</div>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>

                                    </div>

                                    <div className="col-xl-5">
                                        <div className="p-3">
                                            <h2 className="fw-bold">จุดชมวิวเสม็ดนางชี</h2>
                                            <span>วันที่</span><span className='mx-2'>01/11/66 - 03/11/66</span>
                                            <div className="form-outline">
                                                <label className="form-label">จำนวนคน</label>
                                                <input className="form-control" style={{ height: '30px', width: "30px", borderRadius: "5px" }} />
                                            </div>
                                            <div className="d-flex justify-content-between mt-2">
                                                <div>686.00 บาท/ท่าน</div>
                                            </div>
                                        </div>
                                        <div className='fw-bold mx-3'>รวมทั้งหมด 686.00 บาท</div>
                                        <div className="btn btn-success btn-lg mx-3 my-3" data-bs-toggle="modal" data-bs-target="#myModal" style={{ width: "100px" }}>จองเลย</div>
                                        <div className='p-2' style={{ color: "red" }}>หมายเหตุ: คุณที่มีเวลา 1
                                            วันในการชำระค่าจองหลังจากนั้นจะถูกยกเลิกการจอง
                                        </div>

                                        <div className="modal" id="myModal">
                                            <div className="modal-dialog">
                                                <div className="modal-content">

                                                    <div className="modal-header">
                                                        <h4 className="modal-title">thai QR payment</h4>
                                                        <button type="button" className="btn-close mx-2" data-bs-dismiss="modal"></button>
                                                    </div>

                                                    <div className="modal-body">
                                                        <div className="row d-flex justify-content-center align-items-center">
                                                            <img src="QR.png" style={{ height: "200px", width: "200px" }} />
                                                        </div>
                                                    </div>

                                                    <div className="modal-footer">
                                                        <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
                                                    </div>
                                                </div>
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