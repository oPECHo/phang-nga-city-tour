import React from 'react';
import { useNavigate } from 'react-router-dom';

import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import Typography from '@mui/joy/Typography';

import Tour from '../models/tour';

// import BookmarkAdd from '@mui/icons-material/BookmarkAddOutlined';
// import IconButton from '@mui/joy/IconButton';

interface Props {
  Tours: Tour;
}

const TourCard = (props: Props) => {
  const navigate = useNavigate();
  const item = props.Tours.attributes;
  const image = item.image.data.attributes.formats.thumbnail.url;
  const thumbnail = `http://localhost:1337${image}`;

  console.log(item);

  return (
    <Card variant="outlined" sx={{ width: 320 }}>
      <Typography level="h2" fontSize="md" sx={{ mb: 0.5 }}>
        {item.title}
      </Typography>
      <Typography level="body2">April 24 to May 02, 2021</Typography>
      {/* <IconButton
        aria-label="bookmark Bahamas Islands"
        variant="plain"
        color="neutral"
        size="sm"
        sx={{ position: 'absolute', top: '0.5rem', right: '0.5rem' }}
      >
        <BookmarkAdd />
      </IconButton> */}
      <AspectRatio minHeight="120px" maxHeight="200px" sx={{ my: 2 }}>
        <img
          src={thumbnail}
          loading="lazy"
          alt=""
        />
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
}

export default TourCard;