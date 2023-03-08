import { Row, Col, Container } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { Grid } from '@mui/material';
import Repo from '../repositories';
import Tour from '../models/tour';

import UserNavbar from '../components/UserNavbar';
import SearchBar from '../components/SearchBar';
import TourCard from '../components/TourCard';

const SearchPage = () => {
    const [data, setTourData] = useState<Tour[]>([]);
    const [searchTerm, setSearchTerm] = useState<string>('');
    const params = useParams();

    const headtitle =   params.type === 'One-day-trip' ? 'ทริปวันเดียว' :
                        params.type === 'Package' ? 'แพ็คเกจ' :
                        'ทั้งหมด';

    const filteredData = data.filter((item) =>
        item.attributes.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const fetchData = async () => {
        if (params.type === 'All') {
            const res = await Repo?.Tourdata.getAll();
            if (res) {
                setTourData(res);
            }
        } else {
            const res = await Repo?.Tourdata.getCategory(params.type as string);
            if (res) {
                setTourData(res);
            }
        }
    };

    useEffect(() => {
        fetchData()
    }, [params.type])



    return (
        <div>
            <UserNavbar />
            <div style={{ marginTop: '30px' }}></div>
            <SearchBar onChange={(event) => setSearchTerm(event.target.value)} />
            <Container className="container">
                <Row style={{ marginTop: '20px', right: '500px' }}>
                    <Col md={{ span: 6, offset: 4 }} style={{ display: 'flex' }}>
                    </Col>
                </Row>
                <Row
                    className="mx-auto"
                    style={{
                        marginBottom: '5px',
                        marginTop: '5px',
                    }}
                >
                    <Col
                        xs={12}
                        md={3}
                        className="mx-auto"
                        style={{
                            backgroundColor: 'whitesmoke',
                            borderRadius: '12px',
                            padding: '10px',
                            fontSize: '17px',
                            fontWeight: 'normal',
                            textAlign: 'center',
                            border: '1px solid rgba(0, 0, 0, 0.25)',
                        }}
                    >
                        {headtitle}
                    </Col>
                </Row>
                <Grid
                    container
                    spacing={{ xs: 2, md: 4 }}
                    columns={{ xs: 2, sm: 8, md: 12, lg: 12, xl: 10 }}
                    sx={{ p: 5 }}
                >
                    {filteredData.map((item) => (
                        <Grid xs={2.5} sx={{ p: 0.5 }}>
                            <TourCard Tours={item} />
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </div>
    );
};

export default SearchPage;
