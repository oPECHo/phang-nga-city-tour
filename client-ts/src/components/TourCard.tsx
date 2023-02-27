import React from 'react';
import { useNavigate } from 'react-router-dom';

import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import Typography from '@mui/joy/Typography';

import Tour from '../models/tour';

interface Props {
  Tours: Tour;
}

const TourCard = (props: Props) => {
  const navigate = useNavigate();
  const item = props.Tours.attributes;
  const image = item.image.data[0].attributes.formats.thumbnail.url;
  const thumbnail = `http://localhost:1337${image}`;



  return (
    <Card variant="outlined" sx={{ width: '100%', height: '100%', borderColor: 'rgba(0, 0, 0, 0.25)' }}> 
      <Typography level="h2" fontSize="md" sx={{ mb: 0.5 }}>
        {item.title}
      </Typography>
      <Typography level="body2">April 24 to May 02, 2021</Typography>
      <AspectRatio minHeight="120px" maxHeight="200px" sx={{ my: 2 }}>
        <img src={thumbnail} loading="lazy" alt="" />
      </AspectRatio>
      <Box sx={{ display: 'flex' }}>
        <div>
          <Typography level="body3">ราคาต่อท่าน:</Typography>
          <Typography fontSize="lg" fontWeight="lg">
            {item.price} บาท
          </Typography>
        </div>
        <Button
          onClick={() => navigate(`/detail/${props.Tours.id}`)}
          variant="solid"
          size="sm"
          color="primary"
          aria-label="Explore Bahamas Islands"
          sx={{ ml: 'auto', fontWeight: 600 }}
        >
          รายละเอียด
        </Button>
      </Box>
    </Card>
  );
};

export default TourCard;
