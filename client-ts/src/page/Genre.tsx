import UserNavbar from '../components/UserNavbar';
import { Row, Col, Container, } from 'react-bootstrap';
import CardTour from '../components/CardTour';
import { useEffect, useState } from 'react';
import Tour from '../models/tour';
import { Grid } from '@mui/material';
import { useParams } from 'react-router-dom';
import Repo from '../repositories'
import TripCard from '../components/tripCard';
import SearchBar from '../components/SearchBar';


const GenrePage = () => {
    const [data, setTourData] = useState<Tour[]>([]);
    const params = useParams()

    const fetchData = async () => {
        if (params.type === "All") {
            const res = await Repo.Tourdata.getAll();
            if (res) {
                setTourData(res);
            }
        } else {
            const res = await Repo.Tourdata.getCategory(params.type as string);
            if (res) {
                setTourData(res);
            }
        }
    };


    useEffect(() => {
        fetchData()
    }, [params.type])
    const headtitle = params.type === "One day trip" ? "ทริปวันเดียว" :
        params.type === "Package" ? "แพ็คเกจ" :
            "ทั้งหมด";

    var imgLinks = [
        "https://mdbcdn.b-cdn.net/img/new/standard/city/042.webp",
        "https://mdbcdn.b-cdn.net/img/new/standard/city/043.webp",
        "https://mdbcdn.b-cdn.net/img/new/standard/city/044.webp"
    ]

    return (
        <div>
            <UserNavbar />
            <li className="divider"></li>
            <SearchBar />
            <Container className="container">
                <Row style={{ marginTop: "20px", right: "500px" }}>
                    <Col md={{ span: 6, offset: 4 }} style={{ display: "flex" }}>
                    </Col>
                </Row>
                <Row className="mx-auto" style={{ marginBottom: '5px', marginTop: '5px' }}>
                    <Col xs={12} md={3} className="mx-auto"
                        style={{
                            backgroundColor: "whitesmoke",
                            borderRadius: "12px",
                            padding: "10px",
                            fontSize: '17px',
                            fontWeight: "normal",
                            textAlign: "center",
                            border: "1px solid rgba(0, 0, 0, 0.25)"
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
            <div className="container py-5 h-100">
                <div className="row row-cols-1 row-cols-md-4 g-4">
                    <TripCard imgLink={imgLinks[0]} />
                    <TripCard imgLink={imgLinks[1]} />
                    <TripCard imgLink={imgLinks[2]} />
                </div>
            </div>
        </div>

    )
};

export default GenrePage;
