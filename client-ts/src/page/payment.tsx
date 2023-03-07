import UserNavbar from '../components/UserNavbar';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Tour from '../models/tour';
import Repo from '../repositories';
import qrcode from 'qrcode';
import { userData } from '../helper';
import PaymentStatus from '../models/paymentStatus';
import numberTour from '../models/numberTour';


const PaymentPage = () => {
    const [tourdata, setTourData] = useState<Tour[]>([]);
    const [qrCode, setQrCode] = useState<string>('');
    const [quantity, setQuantity] = useState(1);
    const [daytime, setDaytime] = useState<Date | null>(null);

    const navigate = useNavigate();
    const params = useParams();
    const user = userData();

    const data = tourdata.length > 0 ? tourdata[0].attributes : null;
    const dataID = tourdata.length > 0 ? tourdata[0] : null;

    const thumbnail = `http://localhost:1337${data?.image.data[0].attributes.url}`;
    const total_price = data?.price as number * quantity;

    const tourType = data?.categories.data[0].attributes.Type;
    const tourID = dataID?.id.toString() || 0;
    const tourStart = data?.start;
    const tourEnd = data?.end;
    const tourName = data?.title;

    const fetchData = async () => {
        try {
            const res = await Repo.Tourdata.getTourById(params.id as string);
            if (res) {
                setTourData(res);
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchData();
    }, [params.id]);

    useEffect(() => {
        qrcode.toDataURL(total_price.toString(), (err, url) => {
            if (err) {
                console.log(err);
            } else {
                setQrCode(url);
            }
        });
    }, [total_price]);

    const BookedODT = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await Repo.Paymentdata.createPayment(newPaymentODT)
        await Repo.Tourdata.updateTour(tourID, updatenumber)
        console.log("Booked!")
        console.log(daytime)
        navigate(`/userstatus`)
    }

    const BookedPack = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await Repo.Paymentdata.createPayment(newPaymentPack)
        await Repo.Tourdata.updateTour(tourID, updatenumber)
        console.log("Booked!")
        console.log(daytime)
        navigate(`/userstatus`)
    }

    const handleDaytimeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const selectedDate = new Date(event.target.value);
        setDaytime(selectedDate);
    };

    const tourLeft = data?.number as number - quantity
    const updatenumber: numberTour = {
        data: {
            number: tourLeft,
        }
    }

    const newPaymentODT: PaymentStatus = {
        id: null,
        attributes: null,
        data: {
            tour_name: tourName as string,
            tour_type: tourType as string,
            tour_id: tourID,
            tour_left: tourLeft.toString(),
            tour_start: daytime as Date,
            tour_end: null,
            status: 'จองแล้ว',
            user: user.username,
            image_url: thumbnail,
            total_price: total_price,
            quantity: quantity
        }
    }

    const newPaymentPack: PaymentStatus = {
        id: null,
        attributes: null,
        data: {
            tour_name: tourName as string,
            tour_type: tourType as string,
            tour_id: tourID,
            tour_left: tourLeft.toString(),
            tour_start: tourStart as Date,
            tour_end: tourEnd as Date,
            status: 'จองแล้ว',
            user: user.username,
            image_url: thumbnail,
            total_price: total_price,
            quantity: quantity
        }
    }

    function getTomorrow() {
        const today = new Date();
        const tomorrow = new Date(today);
        tomorrow.setDate(today.getDate() + 1);
        return tomorrow;
    }


    return (
        <div>
            <UserNavbar />
            <section className="vh-100" >
                <div className="container py-5">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col col-lg-7 mb-4 mb-lg-0">
                            <div className="card py-5 mb-3" style={{ padding: "30px", backgroundColor: 'hsla(0, 0%, 100%, 0.55)' }}>
                                <div className="row">
                                    <div className="col-xl-6">
                                        <div className='card-body text-center'>
                                            <img src={thumbnail} alt="Avatar" className="img-fluid" style={{ height: '200px', borderRadius: "1rem" }} /></div>
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
                                                                <img className='mx-1' src="../../public/scb.jpg" style={{ height: "20px", borderRadius: "3px" }} /> SCB
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
                                                                <img className='mx-1' src="../../public/promptpay.jpg" style={{ height: "20px", borderRadius: "3px" }} /> promptpay
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
                                            <h2 className="fw-bold">{data?.title}</h2>
                                            <span>วันที่เดินทาง</span>
                                            {tourType === 'Package' ? (
                                                <div>
                                                    <input
                                                        id="daytime"
                                                        className="form-control"
                                                        type="date"
                                                        value={tourStart?.toString().slice(0, 10)}
                                                        disabled={tourType === 'Package'}
                                                        required
                                                    />
                                                    <br />
                                                    <span>วันสิ้นสุด</span>
                                                    <input
                                                        id="daytime"
                                                        className="form-control"
                                                        type="date"
                                                        value={tourEnd?.toString().slice(0, 10)}
                                                        disabled={tourType === 'Package'}
                                                        required
                                                    />
                                                </div>
                                            ) : (
                                                <input
                                                    id="daytime"
                                                    className="form-control"
                                                    type="date"
                                                    value={daytime?.toISOString().slice(0, 10)}
                                                    onChange={handleDaytimeChange}
                                                    required
                                                    min={getTomorrow().toISOString().slice(0, 10)}
                                                    onKeyDown={(e) => e.preventDefault()}
                                                />
                                            )}
                                            <div className="form-outline">
                                                <br />
                                                <label className="form-label">จำนวนคน</label>
                                                <input className="form-control" style={{ height: '30px', width: "70px", borderRadius: "5px" }}
                                                    type="number"
                                                    value={quantity}
                                                    required
                                                    onChange={(e) => {
                                                        const newValue = parseInt(e.target.value);
                                                        if (!isNaN(newValue) && newValue >= 1 && (data?.number ? newValue <= data.number : true)) {
                                                            setQuantity(newValue);
                                                        }
                                                    }}
                                                />
                                            </div>
                                            <div className="d-flex justify-content-between mt-2">
                                                <div> {data?.price.toLocaleString('en-US')} บาท/ท่าน</div>
                                            </div>
                                        </div>
                                        <div className='fw-bold mx-3'>รวมทั้งหมด {total_price.toLocaleString('en-US')} บาท</div>

                                        <form className="mt-3 d-flex flex-row align-items-center p-3 form-color gap-3">
                                            {tourType === 'Package' ? (
                                                <button className="btn btn-success btn-lg"
                                                    data-bs-toggle="modal"
                                                    data-bs-target="#myModal"
                                                    style={{ width: "100%", whiteSpace: "nowrap" }}
                                                    type="button"
                                                >
                                                    จองเลย!
                                                </button>
                                            ) : (
                                                <button className="btn btn-success btn-lg"
                                                    data-bs-toggle="modal"
                                                    data-bs-target="#myModal"
                                                    style={{ width: "100%", whiteSpace: "nowrap" }}
                                                    type="button"
                                                    disabled={daytime === null}
                                                >
                                                    จองเลย!
                                                </button>
                                            )}
                                        </form >

                                        <div className='p-2' style={{ color: "red" }}>หมายเหตุ: คุณที่มีเวลา 1
                                            วันในการชำระค่าจองหลังจากนั้นจะถูกยกเลิกการจอง
                                        </div>

                                        <div className="modal fade" id="myModal">
                                            <div className="modal-dialog">
                                                <div className="modal-content">

                                                    <div className="modal-header">
                                                        <h4 className="modal-title">Thai QR Payment</h4>
                                                        <button type="button" className="btn-close mx-2" data-bs-dismiss="modal"></button>
                                                    </div>

                                                    <div className="modal-body">
                                                        <div className="row d-flex justify-content-center align-items-center">
                                                            <img src={qrCode} style={{ height: "200px", width: "200px" }} />
                                                            <h5><b><div>รวมทั้งหมด {total_price.toLocaleString('en-US')} บาท</div></b></h5>
                                                        </div>

                                                        <div>ช่องทางการติดต่อ</div>
                                                        <div>Line ID : @PHANG NGA</div>
                                                        <div>Facebook : www.facebook.com/PHANG NGA</div>
                                                    </div>
                                                    {tourType === 'Package' ? (
                                                        <form className="mt-3 d-flex flex-row align-items-center p-3 form-color gap-3" onSubmit={BookedPack}>
                                                            <button className="btn btn-success btn-lg"
                                                                data-bs-toggle="modal"
                                                                data-bs-target="#myModal"
                                                                style={{ width: "100%", whiteSpace: "nowrap" }}
                                                                type="submit"
                                                            >
                                                                ยืนยันการจอง Package!
                                                            </button>
                                                        </form >
                                                    ) : (
                                                        <form className="mt-3 d-flex flex-row align-items-center p-3 form-color gap-3" onSubmit={BookedODT}>
                                                            <button className="btn btn-success btn-lg"
                                                                data-bs-toggle="modal"
                                                                data-bs-target="#myModal"
                                                                style={{ width: "100%", whiteSpace: "nowrap" }}
                                                                type="submit"
                                                            >
                                                                ยืนยันการจอง OneDayTrip!
                                                            </button>
                                                        </form >
                                                    )}
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

export default PaymentPage;