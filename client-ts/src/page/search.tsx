import '../design/botton-bar.css'
import UserNavbar from '../components/UserNavbar';
import TripCard from '../components/tripCard';
import SearchBar from '../components/SearchBar';

export default function SearchPage() {

  return (
    <div>
      <UserNavbar />
      <li className="divider"></li>
      <SearchBar />
      <div className='container py-5 h-100'>
        <TripCard />
      </div>
    </div>
  );
}

