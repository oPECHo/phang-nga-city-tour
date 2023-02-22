import { useEffect } from 'react';
import { Button, requirePropFactory } from '@mui/material';
import { Box } from '@mui/system';
import UserNavbar from '../components/UserNavbar';
import '../index.css'
import FigureImage from 'react-bootstrap/FigureImage'
import Typography from '@mui/material/Typography/Typography';
import { useNavigate } from 'react-router-dom';
import Search from '../components/search'
const Indexpage = () => {
    const navigate = useNavigate()
    return (
        <div className='index'>
            <UserNavbar/>
            <div className="home-container">
                <div className="home-container1">
                    <h1 className="home-text">ค้นหาทัวร์ท่องเที่ยวที่ดีที่สุดในพังงา</h1>
                </div>
                <div className="home-container2">
                    <Search rootClassName="search-root-class-name1"></Search>
                </div>
            </div>
        </div>
    )
};
export default Indexpage
