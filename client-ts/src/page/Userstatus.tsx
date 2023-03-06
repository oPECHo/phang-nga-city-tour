import UserNavbar from '../components/UserNavbar';
import CardUserStatus from '../components/Carduserstatus';
import { userData } from '../helper';

const UserStatusPage = () => {

    const user = userData();

    return (
        <div>
            <UserNavbar/>
            <div>{user && (<CardUserStatus user={{username:""}}/>)}</div>
        </div>
    )
}

export default UserStatusPage