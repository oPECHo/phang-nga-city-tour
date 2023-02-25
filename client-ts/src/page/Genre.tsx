import UserNavbar from '../components/UserNavbar';
import {Row,Col,Container, Button} from 'react-bootstrap';
import CardTour from '../components/CardTour';
import { useEffect,useState } from 'react';
import Tour from '../models/tour';
import { Grid } from '@mui/material';
import { useParams } from 'react-router-dom';
import Repo from '../repositories'
import TripCard from '../components/tripCard';


const GenrePage = () => {
    const [data, setTourData] = useState<Tour[]>([]);
    const params = useParams()

    const fetchData = async () => {
        const res = await Repo.Tourdata.getCategory(params.type as string)
        if(res) {
            setTourData(res)
        }
    }

    useEffect(() => {
        fetchData()
    }, [params.type])
    const headtitle = params.type==="One day trip" ? "One Day Trip" : "Package"


    return (
        <div>
            <UserNavbar/>
            <Container>
                <Row style={{ marginTop: "20px", right:"500px" }}>
                    <Col md={{ span: 6, offset: 4 }} style={{ display: "flex" }}>
                    </Col>
                </Row>
                <Row style={{ marginBottom: '15px'}}>
                    <Col xs={12} md={3} 
                        style={{ 
                            backgroundColor: "whitesmoke", 
                            borderRadius: "12px", 
                            padding: "10px", 
                            fontSize: '17px',
                            fontWeight: "normal",
                            textAlign: "center",
                            }}>
                        {headtitle}
                    </Col>
                </Row>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 2, sm: 4, md: 4, lg: 4, xl: 4 }}>
                    {data.map((item, index) => 
                        <Grid item xs={2} sm={4} md={4} lg={3} xl={2} key={index}>
                            <CardTour Tours={item} />
                        </Grid>
                    )}
                </Grid>
            </Container>
            <div className="container py-5 h-100"><TripCard/></div>
        </div>

    )
};

export default GenrePage;
