import UserNavbar from '../components/UserNavbar';
import { Grid } from '@mui/material';
import '../design/Home.css';

function Indexpage() {
    return (
        <div className='index Home-BG'>
            <UserNavbar />
            <Grid container justifyContent="center" alignItems="center" style={{ height: '90vh' }}>
                <Grid item>
                    <a href="/search/All">
                        <div className="text-center">
                            <img  src="/SearchButton.png" className="img-fluid search-button" alt="..." width="75%" height="75%" />
                        </div>
                    </a>
                </Grid>
            </Grid>
        </div>
    );
}

export default Indexpage;