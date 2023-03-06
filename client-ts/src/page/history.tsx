import UserNavbar from '../components/UserNavbar';
import Cardhistory from '../components/Cardhistory';
import { useEffect, useState } from 'react';
import PaymentStatus from '../models/paymentStatus';
import Repo from '../repositories';
import { userData } from '../helper';

const HistoryPage = () => {
    const [paymentStatus, setPaymentStatus] = useState<PaymentStatus[]>([]);
    const user = userData();

    const fetchData = async () => {
        try {
            const res = await Repo.Paymentdata.getByUserName(user.username);
            if (res) {
                const filteredData = res.filter((item) => item.attributes.status === 'เสร็จสิ้น');
                setPaymentStatus(filteredData);
            }
        } catch (error) {
            console.error('Error fetching payment data:', error);
        }
    };


    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
            <UserNavbar />
            <div className="container my-5">
                <div className="row">
                    {user && paymentStatus.map((item) => (
                        <Cardhistory statusData={item} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HistoryPage;
