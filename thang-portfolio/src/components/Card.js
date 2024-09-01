import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import Image from 'next/image';

const CardComponent = ({ title, description, language, imageUrl, link, className, onMouseEnter, onMouseLeave }) => {
  return (
    <Card
      onClick={() => window.open(link, "_blank")}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={className}
      sx={{
        maxWidth: 345,
        textAlign: 'center',
        backgroundColor: '#36454F',
        color: 'white',
        borderRadius: '25%',
        transition: 'transform 0.3s ease-in-out',
        cursor: 'pointer',
        transform: className === 'shrink' ? 'scale(0.9)' : 'scale(1)', // Apply shrinking effect
        '&:hover': {
          transform: 'scale(1.05)',
          '& .MuiTypography-root': {
            color: '#ADD8E6',
          },
        },
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '16px' }}>
        <div
          style={{
            width: 140,
            height: 140,
            borderRadius: '50%',
            overflow: 'hidden',
            backgroundColor: 'transparent',
          }}
        >
          <Image
            src={imageUrl}
            alt={title}
            width={140}
            height={140}
            style={{
              borderRadius: '50%',
              objectFit: 'cover',
            }}
          />
        </div>
      </div>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" sx={{ color: 'white' }}>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ color: 'white' }}>
          {description}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ color: 'white' }}>
          Language: {language}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CardComponent;
