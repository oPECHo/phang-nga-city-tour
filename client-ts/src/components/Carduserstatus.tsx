import { Box} from '@mui/system';
import { Row, Col, Container , Card} from "react-bootstrap";
import {Button, Link} from '@mui/material';
import AspectRatio from '@mui/joy/AspectRatio';
import { Height } from '@mui/icons-material';



// function Cardhistory() {
//     return(
//         <div>
//                 <Box sx={{ display: 'flex', justifyContent: 'center' }}>
//                     <Card variant="outlined" sx={{ height: 150, width: 1000,backgroundColor: 'white',marginTop:'50px',  }}>
//                         <Container>
//                             <Row>
//                                 <Col xs={0} md={0} sx={{ display: 'flex', justifyContent: 'center' }}>
//                                         <Box>
//                                         <AspectRatio minHeight="10px" maxHeight="100px" sx={{ my: 1 }}>
//                                             <img
//                                                 // src={tourimg}
//                                                 loading="lazy"
//                                                 alt=""
//                                             />
//                                         </AspectRatio>
//                                         </Box>
//                                 </Col> 
//                                 <Col xs={0} md={0} sx={{ display: 'flex', justifyContent: 'center' }}>
//                                         <Box>
//                                             <Row>
//                                                 <b><h3>ชื่อสถานที่</h3></b>
//                                             </Row>
//                                             <Row>
//                                                 <h6>แพ็คเกจ</h6>
//                                             </Row>
//                                             <Row>
//                                                 <h6>ที่อยู่</h6>
//                                             </Row>
//                                         </Box>
//                                 </Col>                              
//                                 <Col xs={0} md={0} sx={{ display: 'flex', justifyContent: 'center' }}>
//                                         <Box sx={{ display: 'flex', justifyContent: 'right' }}>
//                                             <b>วันที่ทำการจอง : 19/02/2566</b>
//                                         </Box>
//                                         <Box 
//                                             sx={{
//                                                 display: "flex",
//                                                 alignItems: "center",
//                                                 justifyContent: "center",
//                                                 backgroundColor: "#f5f5f5",
//                                                 padding: "10px",
//                                                 borderRadius: "10px",
//                                                 marginTop: "15px",
//                                                 boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
//                                                 width: "400px",
//                                                 height: "50px",
//                                                 fontSize: "16px",
//                                                 fontWeight: "bold",
//                                                 textTransform: "uppercase",
//                                                 color: "#333",
//                                             }}
//                                             >
//                                             <span>กำลังรอการยืนยัน</span>
//                                             </Box>
//                                 </Col>
//                             </Row>
//                         </Container>
//                     </Card>
//                 </Box>
//         </div>
        
//         );
// }

// export default Cardhistory;
function Carduserstatus() {
  return (
    <div className="container py-5 h-100">
      <div className="card mb-3" style={{ width: "35%" }}>
        <div className="row g-0">
          <div className="col-md-4" style={{ width: "100%" }}>
            <img
              src="https://youimg1.tripcdn.com/target/100w1f000001gw9byC44A_D_1180_558.jpg"
              className="img-fluid rounded-start"
              alt="place"
              style={{ width: "100%", height: "auto" }}
            />
          </div>
          <div className="col-md-8 d-flex flex-column justify-content-center">
            <div className="card-body">
            <h5 className="card-title" style={{ fontSize: "1rem", fontWeight: "bold", marginBottom: "0.5rem" }}>ชื่อสถานที่: หมู่เกาะสมิลัน</h5>
          <p className="card-text" style={{ fontSize: "1rem", color: "#555" }}>สถานะการจอง: <span style={{ color: "#28a745", fontWeight: "bold" }}>ชำระเงินแล้ว</span></p>

            </div>
          </div>
        </div>
      </div>
    </div>
  
  );
}

export default Carduserstatus;

