import { useNavigate } from 'react-router-dom';

import Tour from '../models/tour';
import { AspectRatio } from '@mui/joy';
import { Rating } from '@mui/material';

import '../design/TourCard.css'
import conf from '../conf';

interface Props {
  Tours: Tour;
}

const TourCard = (props: Props) => {
  const item = props.Tours ? props.Tours.attributes : null;
  const tourId = props.Tours ? props.Tours.id : null;
  const score = item?.score;
  const image = item?.image.data[0].attributes.formats.thumbnail.url;
  const thumbnail = `${conf.apiPrefix}${image}`;

  const navigate = useNavigate();


  return (
    <div className="container">
      <section className="mx-auto my-5" style={{ maxWidth: '23rem' }}>
        <div className="card">
          <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
            <AspectRatio objectFit="fill" >
              <img src={thumbnail} loading="lazy" alt=""  />
              <div className="overlay" onClick={() => navigate(`/TripDetailPage/${tourId}`)} >
                <p className="text" >รายละเอียดเพิ่มเติม</p>
              </div>
            </AspectRatio>
          </div>
          <div className="card-body">
            <h5 className="card-title font-weight-bold">
              <a>{item?.title}</a>
            </h5>
            <ul className="list-unstyled list-inline mb-0">
              <div className="parent-element mx-auto" style={{ display: 'flex', alignItems: 'center' }}>
                <Rating name="read-only mx-auto" value={score} readOnly />( {item?.number} ท่าน )
              </div>
            </ul>
            <hr className="my-4" />
            <h6 className="mx-auto">
              <p className="mb-2">ราคา {item?.price.toLocaleString('en-US')} บาท/ท่าน</p>
            </h6>
          </div>
        </div>
      </section>
    </div>
  );  
};

export default TourCard;
