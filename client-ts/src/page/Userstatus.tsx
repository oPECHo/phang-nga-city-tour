import UserNavbar from '../components/UserNavbar';
import CardUserStatus from '../components/Carduserstatus';
import { userData } from '../helper';
import { useState } from 'react';
import PaymentStatus from '../models/paymentStatus';

const UserStatusPage = () => {
    const [paymentStatus, setPaymentStatus] = useState<PaymentStatus[]>([]);
    const user = userData();

    return (
        <div>
            <UserNavbar />
            <div>
                {user &&
                    <div>
                        {paymentStatus.map((item) =>
                            <CardUserStatus user={{ username: "" }} status={item} />
                        )}
                    </div>
                }
            </div>
        </div>
    )
}

export default UserStatusPage