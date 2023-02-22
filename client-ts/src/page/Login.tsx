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

const theme = createTheme();

const initialUser = { identifier: '', password: ''};

export default function SignInSide() {
    const [user, setUser] = useState(initialUser)
    const navigate = useNavigate();

    const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      console.log(user);
      const url = "http://localhost:1337/api/auth/local"
      try {
        if (user.identifier && user.password) {
          const {data} = await axios.post(url, user)
          console.log(data)
          if (data.jwt) {
            storeUser(data)
            toast.success('Login successful', {
              hideProgressBar: true
            })
            setUser(initialUser)
            navigate('/')
          }
    }}catch(err) {
      toast.error("Invalid email or password", {
        hideProgressBar: true
      })
    }}

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.target;
      setUser({
      ...user,
        [name]: value,
      });
    };

    useEffect(() => {
      const data = userData();
      if(data.jwt) {
        navigate('/')
      }
    });


  return (
    <body className='login'>
    <ThemeProvider theme={theme}>
      <Grid
      container
      component="main"
      sx={{
        height: '50vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: '40%',
        left: '42%',
        transform: 'translate(-50%, -50%)',
      }}>
          
          <CssBaseline />
          <Grid
            item
            xs={false}
            sm={8}
            md={4}
          />
          <Grid item xs={6} sm={7} md={3} component={Paper} elevation={6} square>
            <Box
              sx={{
                my: 0,
                mx: 0,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >                
                <Grid container
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Grid item>
                  <Box display="flex" flexDirection="column" alignItems="center">
                    <Box height={0} />
                      <Typography>
                        <img src="/public/james bond island small-1500w.png" alt="image" style={{ width: '900px', height: '550px' }} />
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
               
              </Box>          
        </Grid>
        <Grid item xs={6} sm={7} md={3} component={Paper} elevation={6} square>
            <Box
              sx={{
                my: 8,
                mx: 4,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Box display="flex" flexDirection="column" alignItems="center">
                  <Box height={20} />
                  <Typography component="h1" variant="h5">
                      เข้าสู่ระบบ
                  </Typography>
              </Box>
              <Box component="form" noValidate onSubmit={handleLogin} sx={{ mt: 1 }}>
                  <TextField
                      margin="normal"
                      required
                      fullWidth
                      id="identifier"
                      label="Email Address"
                      name="identifier"
                      autoComplete="email"
                      onChange={handleChange}
                      autoFocus
                  />
                  <TextField
                      margin="normal"
                      required
                      fullWidth
                      name="password"
                      label="Password"
                      type="password"
                      id="password"
                      autoComplete="current-password"
                      onChange={handleChange}
                  />
                  <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      sx={{ mt: 2, mb: 2 }}
                  >
                      เข้าสู่ระบบ
                  </Button>
                  <Button 
                      type="submit"
                      fullWidth
                      variant="outlined"
                      sx={{mb: 2 }}
                  >
                      เข้าสู่ระบบด้วย Google                   
                  </Button>
                <Grid container>
                  <Grid item xs>
                    <Link href="#" variant="body2">
                      ลืมรหัสผ่าน?
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link href="register" variant="body2">
                      {"สมัครสมาชิก"}
                    </Link>
                  </Grid>
                </Grid>
                <Copyright sx={{ mt: 5 }} />
              </Box>
            </Box>
          
        </Grid>
      </Grid>
    </ThemeProvider>
    </body>
  );
}

function Copyright(props: any) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="http://localhost:3000/">
        PHANG-NGA CITY TOUR
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}