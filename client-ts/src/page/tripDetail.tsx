import '../design/botton-bar.css'
import UserNavbar from '../components/UserNavbar';

export default function TripDetail() {

  return (
    <div className=''>
      <UserNavbar />
      <div className='container py-5 h-100'>
        <div className="row">
          <div className="col-sm-6">
            <div className="card py-5 h-100" style={{ borderRadius: '1rem'}}>
              <div className="card-body" style={{height:'200'}}>
                <div className='text-center'><img src="เขาหลัก2.jpg" height="250" className="card-img-top" style={{ borderRadius: '1rem' }}/></div>
                <h5 className="card-title">ชื่อสถานที่</h5>
                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <div className='text-center'><a href="#" className="btn btn-primary">จองเลย!</a></div>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="card" style={{ borderRadius: '1rem', height:'100%'}}>
              <div className="card-body">
                <h5 className="card-title">รายละเอียดทริป</h5>
                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <a href="#" className="btn btn-primary">แสดงความคิดเห็น</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

