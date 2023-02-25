import '../design/botton-bar.css'
import UserNavbar from '../components/UserNavbar';
import TripCard from '../components/tripCard';
import { Search } from '@mui/icons-material';

export default function SearchPage() {

  var imgLinks = [
    "https://mdbcdn.b-cdn.net/img/new/standard/city/042.webp",
    "https://mdbcdn.b-cdn.net/img/new/standard/city/043.webp",
    "https://mdbcdn.b-cdn.net/img/new/standard/city/044.webp"
  ]

  return (
    <div>
      <UserNavbar />
      <div className='container py-5 h-100'>
        <div className="row row-cols-1 row-cols-md-4 g-4">
          <TripCard imgLink={imgLinks[0]}/>
          <TripCard imgLink={imgLinks[1]}/>
          <TripCard imgLink={imgLinks[2]}/>
        </div>
      </div>
    </div>
  );
}
