import '../design/botton-bar.css'
import UserNavbar from '../components/UserNavbar';
import Tour from '../models/tour';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Repo from '../repositories'

const TripDetail = () => {
  const [tourdata,setTourData] = useState<Tour[]>([]);
  const navigate = useNavigate();
  const params = useParams();

  const fetchData = async () => {
      try {
          const res = await Repo.Tourdata.getTourById(params.id as string);
          if(res) {
              setTourData(res)
          }
      } catch (error) {
          console.log(error)
      }
  }

  useEffect(() => {
      fetchData()
  }, [params.id])
  
    
  const data = tourdata.length > 0 ? tourdata[0].attributes : null;
  const thumbnail = `http://localhost:1337${data?.image.data[0].attributes.url}`

  return (
    <div className=''>
      <UserNavbar />
      <div className='container py-5 h-100'>
        <div className="row">
          <div className="col-sm-6">
            <div className="card py-5 h-100" style={{ borderRadius: '1rem'}}>
              <div className="card-body" style={{height:'200'}}>
                <div className='text-center'><img src={thumbnail} height="250" className="card-img-top" style={{ borderRadius: '1rem' }}/></div>
                <h5 className="card-title">{data?.title}</h5>
                <p className="card-text">{data?.address}</p>
                <div className='text-center'><a href="#" className="btn btn-primary">จองเลย!</a></div>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="card" style={{ borderRadius: '1rem', height:'100%'}}>
              <div className="card-body">
                <h5 className="card-title">รายละเอียดทริป</h5>
                <p className="card-text">{data?.description}</p>
                <h5 className="card-title">เงื่อนไข</h5>
                <p className="card-text">{data?.conditions}</p>
                <a href="/TripDetailPage/${props.Tours.id}/review" className="btn btn-primary">แสดงความคิดเห็น</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TripDetail;
