import UserNavbar from '../components/UserNavbar';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
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
    const params = useParams();
    const user = userData();

    const data = tourdata.length > 0 ? tourdata[0].attributes : null;
    const dataID = tourdata.length > 0 ? tourdata[0] : null;

    const thumbnail = `http://localhost:1337${data?.image.data[0].attributes.url}`;
    const total_price = data?.price as number * quantity;

    const tourType = data?.categories.data[0].attributes.Type
    const tourName = data?.title
    const tourID = dataID?.id.toString() || 0;

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

    const Booked = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await Repo.Paymentdata.createPayment(newPayment)
        await Repo.Tourdata.updateTour(tourID,updatenumber)
        console.log("Booked!")
        console.log(daytime)
    }
    const handleDaytimeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const selectedDate = new Date(event.target.value);
        setDaytime(selectedDate);
    };

    const newPayment: PaymentStatus = {
        id: null,
        attributes: null,
        data: {
            tour_name: tourName as string,
            tour_type: tourType as string,
            tour_id: tourID,
            tour_start: daytime,
            status: 'จองแล้ว',
            user: user.username,
            image_url: thumbnail,
            total_price: total_price,
            quantity: quantity
        }
    }

    const number = data?.number as number - quantity

    const updatenumber : numberTour = {
        data: {
            number: number
        }
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
                                            <input
                                                id="daytime"
                                                className="form-control"
                                                type="date"
                                                value={daytime?.toISOString().slice(0, 10)}
                                                onChange={handleDaytimeChange}
                                                required
                                            />
                                            <div className="form-outline">
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

                                        <form className="mt-3 d-flex flex-row align-items-center p-3 form-color gap-3" onSubmit={Booked}>
                                            <button className="btn btn-success btn-lg"
                                                data-bs-toggle="modal"
                                                data-bs-target="#myModal"
                                                style={{ width: "100%", whiteSpace: "nowrap" }}
                                                type="submit"
                                                disabled={daytime === null}
                                                onClick={() => {
                                                    if (daytime === null) {
                                                        window.alert("Please select a date.");
                                                    }
                                                }}
                                            >
                                                จองเลย!
                                            </button>
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

export default PaymentPage;