import UserNavbar from '../components/UserNavbar';
import CardUserStatus from '../components/Carduserstatus';
import { useEffect, useState } from 'react';
import PaymentStatus from '../models/paymentStatus';
import Repo from '../repositories';
import { userData } from '../helper';


const UserStatusPage = () => {
    const [paymentStatus, setPaymentStatus] = useState<PaymentStatus[]>([]);
    const user = userData();

    const fetchData = async () => {
        try {
            const res = await Repo.Paymentdata.getPayment();
            if (res) {
                setPaymentStatus(res);
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
            <div>
                {user && (
                    <div>
                        {paymentStatus.map((item) => (
                            <CardUserStatus statusData={item} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default UserStatusPage;
