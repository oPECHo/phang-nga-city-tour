import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import FigureImage from 'react-bootstrap/FigureImage'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom';
import { storeUser, userData } from '../helper';
import '../design/botton-bar.css'
import UserNavbar from '../components/UserNavbar';
import tripDetailCard from '../components/tripDetailCard';

const theme = createTheme();

export default function SignInSide() {

    return (
        <body className='tripDetail'>
            <ThemeProvider theme={theme}>
                <UserNavbar />
                <img src="เขาหลัก2.jpg" height={200} width={300} />
                <h1>รายละเอียดแพ็คเกจ</h1>
                <div>รายละเอียดโปรแกรม - เดินทางได้ทุกวัน ตั้งแต่ 2 ท่านขึ้นไป (เดินทางตั้งแต่ ก.ค. - ธ.ค. 66)</div>
                <div>วันแรก - จุดชมวิวเสม็ดนางชี</div>
                <div>พักโรงแรม - เสม็ดนางชี </div>
                <div>บูทีควันที่สอง - จุดชมวิวบ้านหินร่ม</div>
                <Box>
                    <Button
                        variant="contained"
                        sx={{ mt: 2, mb: 2 }}>
                        จองเลย!
                    </Button> 
                </Box>
            </ThemeProvider>
        </body>
    );
}

