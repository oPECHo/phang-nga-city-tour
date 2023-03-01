import { Box } from '@mui/system';
import Card from "@mui/joy/Card/Card";
import { Row, Col, Container } from "react-bootstrap";
import { Button, Link } from '@mui/material';
import AspectRatio from '@mui/joy/AspectRatio';
import '../design/history.css'
function Cardhistory() {
  return (
    <div>    
            <section id="gallery">
            <div className="container my-5" >
                <div className="row">
                <div className="col-lg-4 mb-4">
                <div className="card">
                <img src="https://www.touronthai.com/gallery/photo/3799/24881.jpg" alt="" className="card-img-top"/>
                <div className="card-body">
                    <h5 className="card-title">จุดชมวิวเสม็ดนางชี</h5>
                    <p className="card-text">นี่คือจุดชมวิวที่อยู่ในจังหวัดพังงา แต่เดินทางมาจากภูเก็ตได้ง่ายมาก ถ้าจะพูดให้เห็นภาพคือเราใช้เวลาเดินทางจากสนามบินภูเก็ตเข้าเมืองภูเก็ตพอ ๆ กับจากสนามบินภูเก็ตมายังเสม็ดนางชี เพราะเสม็ดนางชีอยู่ในอำเภอตะกั่วทุ่ง ซึ่งเป็นรอยต่อของจังหวัดภูเก็ตและจังหวัดพังงา</p>
                <a href="/TripDetailPage/${props.Tours.id}/review" className="btn btn-outline-success btn-sm">Comment</a>
                    
                </div>
                </div>
                </div>
            <div className="col-lg-4 mb-4">
            <div className="card">
                <img src="https://www.mylifemytravels.com/wp-content/uploads/2020/11/3-3-1300x867.jpg" alt="" className="card-img-top"/>
                <div className="card-body">
                    <h5 className="card-title">เกาะไข่</h5>
                    <p className="card-text">เกาะไข่ เกาะขนาดเล็ก อยู่ในจังหวัดพังงามีด้วยกัน 3 เกาะคือ เกาะไข่นอก เกาะไข่ใน (เกาะไข่แมว) และเกาะไข่นุ้ย  สองเกาะแรกมีหาดทรายที่ขาวละเอียด น้ำทะเลสีฟ้าใส และแนวโขดหินที่สวยงาม ส่วนเกาะไข่นุ้ย เป็นเกาะเล็กกลางทะเล ที่นักท่องเที่ยวนิยมมาดำน้ำดูปะการัง </p>
                <a href="/TripDetailPage/${props.Tours.id}/review" className="btn btn-outline-success btn-sm">Comment</a>
                    
                </div>
                </div>
                </div>
                <div className="col-lg-4 mb-4">
                <div className="card">
                <img src="https://live.staticflickr.com/65535/52078371622_15a3953244_c.jpg" alt="" className="card-img-top"/>
                <div className="card-body">
                    <h5 className="card-title">เกาะยาวใหญ่</h5>
                    <p className="card-text">   เกาะยาวใหญ่ เป็นเกาะกลางทะเลมหาสมุทรอันดามัน ตั้งอยู่ในจังหวัดพังงา ซึ่งเราต้องนั่งเครื่องบิน ไปลงที่สนามบินนานาชาติภูเก็ต แล้วหารถตู้ไปท่าเรือบางโรง ที่ใกล้สนามบิน จากนั้นขึ้นเรือสปีดโบ๊ทข้ามฟากไปยังเกาะยาวใหญ่ ใช้เวลาประมาณ 30 นาที </p>
                <a href="/TripDetailPage/${props.Tours.id}/review" className="btn btn-outline-success btn-sm">Comment</a>
                    
                </div>
                </div>
                </div>
            </div>
            </div>
            </section>
            </div>
  );
}

export default Cardhistory;
