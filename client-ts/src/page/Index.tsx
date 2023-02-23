import UserNavbar from '../components/UserNavbar';
import { Link } from 'react-router-dom';
import { Grid, Button } from '@mui/material';
import '../index.css';

function Indexpage() {
    return (
        <div className='index'>
            <UserNavbar />
            <Grid container justifyContent="center" alignItems="center" style={{ height: '90vh' }}>
                <Grid item>
                    <a href="/login">
                        <div className="text-center">
                            <img  src="../../public/SearchButton.png" className="img-fluid" alt="..." />
                        </div>
                    </a>
                </Grid>
            </Grid>
        </div>
    );
}

export default Indexpage;
