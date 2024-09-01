"use client";

import * as React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import Typography from '@mui/material/Typography';
import Link from 'next/link';

export default function TimeLine() {
  const [timelineData, setTimelineData] = React.useState([]);
  const [hoveredIndex, setHoveredIndex] = React.useState(null);

  React.useEffect(() => {
    // Fetch the timeline data from the text file
    fetch('/timelineData.txt')
      .then((response) => response.json())
      .then((data) => setTimelineData(data))
      .catch((error) => console.error('Error fetching timeline data:', error));
  }, []);

  return (
    <Timeline position="right" sx={{ padding: '10px' }}>
      {timelineData.map((item, index) => (
        <TimelineItem 
          key={index} 
          sx={{ margin: '20px 0', display: 'flex', alignItems: 'center' }}
        >
          <TimelineOppositeContent
            sx={{
              flex: '1 1 0%', 
              maxWidth: '200px', 
              minWidth: '150px', 
              textAlign: 'right',
              paddingRight: '10px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
            }}>
            <Typography variant="body2">
              {item.period}
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator sx={{ alignSelf: 'stretch' }}>
            <TimelineDot />
            {index < timelineData.length - 1 && <TimelineConnector />}
          </TimelineSeparator>
          <TimelineContent
            sx={{
              flex: '2 1 0%', 
              maxWidth: 'calc(100% - 200px)', 
              minWidth: 'calc(100% - 200px)', 
              paddingLeft: '10px',
              display: 'flex',
              alignItems: 'left',
              justifyContent: 'flex-start',
              flexDirection: 'column',
            }}>
            <motion.div
              onHoverStart={() => setHoveredIndex(index)}
              initial={false}
              whileHover={{ fontWeight: 'bold' }} // Make title bold on hover
            >
              {item.link ? (
                <Link href={item.link} target="_blank" passHref>
                  <Typography 
                    variant="h6" 
                    rel="noopener noreferrer" 
                    sx={{ 
                      cursor: 'pointer',
                      display: 'inline-block',
                      width: '100%',  // Ensures full width is occupied
                      textAlign: 'left', // Prevent shifting by aligning left
                      '&:hover': {
                        color: 'lightblue', // Changes color to light blue on hover
                      }
                    }}>
                    {item.title}
                  </Typography>
                </Link>
              ) : (
                <Typography 
                  variant="h6"
                  sx={{
                    cursor: 'default',
                    display: 'inline-block',
                    width: '100%',  // Ensures full width is occupied
                    textAlign: 'left', // Prevent shifting by aligning left
                  }}>
                  {item.title}
                </Typography>
              )}
              <AnimatePresence>
                {hoveredIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    style={{ marginTop: '8px' }}
                  >
                    <Typography variant="body2">
                      {item.description}
                    </Typography>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
}
