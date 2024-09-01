import React from 'react';
import { Card, CardContent, Typography, Divider } from '@mui/material';
import Image from 'next/image';

const CardComponent = ({ title, description, role, language, imageUrl, link, className, onMouseEnter, onMouseLeave }) => {
  const imageContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '16px',
  };

  const imageStyle = {
    width: 140,
    height: 140,
    borderRadius: '50%',
    overflow: 'hidden',
    backgroundColor: 'transparent',
  };

  const cardContentStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: imageUrl ? 'flex-start' : 'center',
    alignItems: 'center',
    height: '100%',
    textAlign: 'center',
  };

  const typographyStyle = {
    color: 'white',
  };

  return (
    <Card
      onClick={() => window.open(link, "_blank")}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={className}
      sx={{
        maxWidth: 345,
        height: 400, 
        textAlign: 'center',
        backgroundColor: '#36454F',
        borderRadius: '5%',
        transition: 'transform 0.3s ease-in-out',
        cursor: 'pointer',
        transform: className === 'shrink' ? 'scale(0.9)' : 'scale(1)', 
        display: 'flex', 
        flexDirection: 'column',
        justifyContent: imageUrl ? 'flex-start' : 'center', 
        alignItems: 'center',
        '&:hover': {
          transform: 'scale(1.05)',
          '& .MuiTypography-root': {
            color: '#ADD8E6',
          },
        },
      }}
    >
      {imageUrl && (
        <div style={imageContainerStyle}>
          <div style={imageStyle}>
            <Image
              src={imageUrl}
              alt={title}
              width={140}
              height={140}
              style={{ borderRadius: '50%', objectFit: 'cover' }}
            />
          </div>
        </div>
      )}
      <CardContent style={cardContentStyle}>
        <Typography gutterBottom variant="h5" component="div" style={typographyStyle}>
          {title}
        </Typography>

        <Divider style={{ width: '80%', margin: '16px 0', backgroundColor: '#ADD8E6' }} />

        <Typography variant="body2" color="text.secondary" style={typographyStyle}>
          {description}
        </Typography>

        <Divider style={{ width: '80%', margin: '16px 0', backgroundColor: '#ADD8E6' }} /> 

        {role && (
          <Typography variant="body2" color="text.secondary" style={typographyStyle}>
            Role: {role}
          </Typography>
        )}
        <Typography 
          variant="body2" 
          color="text.secondary" 
          style={{ color: 'white', textDecoration: 'underline' }}
        >
          Language: {language}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CardComponent;
