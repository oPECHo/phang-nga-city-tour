import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import Typography from '@mui/joy/Typography';
import { useNavigate } from 'react-router-dom';
import Tour from '../models/tour'

interface Props {
  Tours : Tour
}

const CardTour = (props:Props) => {
  const navigate = useNavigate();
  const item = props.Tours.attributes

  const tourimg = `http://localhost:1337${item.image.data.attributes.formats.thumbnail.url}`

  return (
    <>
      <Card variant="outlined" sx={{ width: 250,backgroundColor: 'white' }}>
      <Typography level="h2" fontSize="xl" fontWeight="xl" color='primary' sx={{ mb: 0.5 }}>
        {item.title}
      </Typography>
      
      <AspectRatio minHeight="100px" maxHeight="150px" sx={{ my: 2 }}>
      </AspectRatio>
      <Box sx={{ display: 'flex' }}>
        <div>
          <Typography fontSize="lg" fontWeight="lg" color='success'>
            ราคา {item.price} บาท/ท่าน
          </Typography>
          <Typography level="body3" color='danger'>เหลือ {item.available_seat} ที่</Typography>
        </div>
      </Box>
      <Button 
          href="similan"
          variant="outlined"
          size="sm"
          color="primary"
          aria-label="Explore Bahamas Islands"
          sx={{ ml: 'auto', fontWeight: 600, color:"purple"}}
          onClick={() => navigate(`/detail/${props.Tours.id}`)}
        >
          รายละเอียด
        </Button>
    </Card>
    </>

  );
}

export default CardTour;
