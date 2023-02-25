import '../design/botton-bar.css'
import UserNavbar from '../components/UserNavbar';
import TripCard from '../components/tripCard';
import { Search } from '@mui/icons-material';

export default function SearchPage() {

  return (
    <div>
      <UserNavbar />
        <div className='container py-5 h-100'>
          <Search/>
          <TripCard />
      </div>
    </div>
  );
}

