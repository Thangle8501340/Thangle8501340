"use client";
import React, { useState, useEffect } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import { styled } from '@mui/system';

// Function to determine the color of the progress bar based on experience
const getColor = (experience) => {
  const percentage = experience / 10;
  const green = Math.round(255 * (percentage + 0.2));
  return `rgb(0,${green},0)`;
};

// Styled component for the progress bar
const ProgressBar = styled('div')(({ experience }) => ({
  width: '80%', // Reduced to prevent overflow
  height: '20px',
  backgroundColor: '#333',
  borderRadius: '10px',
  overflow: 'hidden',
  position: 'relative',
  marginTop: '4px',
  marginBottom: '16px',
  '&::after': {
    content: '""',
    width: `${(experience / 10) * 100}%`,
    height: '100%',
    backgroundColor: getColor(experience),
    position: 'absolute',
    top: 0,
    left: 0,
    borderRadius: '10px',
  },
}));

// Main component to display skill lists
const SkillList = () => {
  const [skills, setSkills] = useState(null);
  const [hoveredSkill, setHoveredSkill] = useState(null); // Track the currently hovered skill
  const [openSection, setOpenSection] = useState(null); // Track the currently open section

  // Fetch skills data from the .txt file
  useEffect(() => {
    fetch('/skills.txt')
      .then((response) => response.json())
      .then((data) => setSkills(data))
      .catch((error) => console.error('Error fetching skills:', error));
  }, []);

  if (!skills) {
    return <div>Loading...</div>; // Handle loading state
  }

  // Sort skills by experience in descending order
  const sortedLanguages = [...skills.languages].sort((a, b) => b.experience - a.experience);
  const sortedTechnologies = [...skills.technologies].sort((a, b) => b.experience - a.experience);

  // Handle section toggle (open/close)
  const handleClick = (section) => {
    setOpenSection((prevSection) => (prevSection === section ? null : section));
  };

  return (
    <div style={{ width: '80%', margin: '0 auto', padding: '2rem', backgroundColor: 'black', borderRadius: '10px' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '2rem', fontSize: '3rem', fontWeight: 'bold', color: 'white' }}>
        Skills
      </h1>
      <List sx={{ bgcolor: 'black', color: 'white' }}>

        {/* Languages Section */}
        <ListItem button onClick={() => handleClick('languages')}>
          <ListItemText primary="Languages" primaryTypographyProps={{ fontSize: '1.5rem', fontWeight: 'bold' }} />
        </ListItem>
        <Collapse in={openSection === 'languages'} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {sortedLanguages.map((skill, index) => (
              <ListItem
                key={index}
                sx={{ pl: 4, mb: 2, display: 'flex', alignItems: 'center' }}
                onMouseEnter={() => setHoveredSkill(skill.name)}
                onMouseLeave={() => setHoveredSkill(null)}
              >
                <div style={{ width: '20%' }}>{skill.name}</div>
                <ProgressBar experience={skill.experience} />
                {hoveredSkill === skill.name && (
                  <div
                    style={{
                      marginLeft: '10px',
                      backgroundColor: '#333',
                      color: 'white',
                      padding: '5px 10px',
                      borderRadius: '5px',
                      fontSize: '0.9rem',
                      whiteSpace: 'nowrap',
                      position: 'absolute',
                      left: '50%',
                      transform: 'translateX(-50%)',
                    }}
                  >
                    {skill.experience} years
                  </div>
                )}
              </ListItem>
            ))}
          </List>
        </Collapse>

        {/* Technologies Section */}
        <ListItem button onClick={() => handleClick('technologies')}>
          <ListItemText primary="Technologies" primaryTypographyProps={{ fontSize: '1.5rem', fontWeight: 'bold' }} />
        </ListItem>
        <Collapse in={openSection === 'technologies'} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {sortedTechnologies.map((skill, index) => (
              <ListItem
                key={index}
                sx={{ pl: 4, mb: 2, display: 'flex', alignItems: 'center' }}
                onMouseEnter={() => setHoveredSkill(skill.name)}
                onMouseLeave={() => setHoveredSkill(null)}
              >
                <div style={{ width: '20%' }}>{skill.name}</div>
                <ProgressBar experience={skill.experience} />
                {hoveredSkill === skill.name && (
                  <div
                    style={{
                      marginLeft: '10px',
                      backgroundColor: '#333',
                      color: 'white',
                      padding: '5px 10px',
                      borderRadius: '5px',
                      fontSize: '0.9rem',
                      whiteSpace: 'nowrap',
                      position: 'absolute',
                      left: '50%',
                      transform: 'translateX(-50%)',
                    }}
                  >
                    {skill.experience} years
                  </div>
                )}
              </ListItem>
            ))}
          </List>
        </Collapse>
      </List>
    </div>
  );
};

export default SkillList;
