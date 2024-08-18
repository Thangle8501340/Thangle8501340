'use client';

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

const timelineData = [
    {
        period: '(2000 - 2009)',
        title: 'Early Years (Saigon, Vietnam)',
        link: 'https://en.wikipedia.org/wiki/District_8,_Ho_Chi_Minh_City', 
        description:"Hey, I'm Thang. I was born in District 8, Saigon, Vietnam, back in 2000. Don't remember much from those days, but I do recall playing marbles with my friends, trading Pokémon cards, and showering in the rain."
    },
    {
        period: '(2009 - 2012)',
        title: 'Pre High-school (Boston, Massachusetts)',
        link: '', 
        description: "I moved to Boston when I was 9 as a permanent resident. I was a shy kid in a new country, so I mostly stayed home instead of hanging out with friends. That's when I started tearing apart electronics around the house (much to my parents' dismay) just to see how they worked—and yeah, I never really put them back together. That's when my curiosity to know everything about everything really kicked in."
    },
    {
        period: '(2012 - 2018)',
        title: 'Boston Latin School',
        link: 'https://www.bls.org/', 
        description:
        "After two years in America and barely knowing English, I somehow managed to take the Independent School Entrance Exam (ISEE). Lucky for me, that opened the door to Boston Latin School, a prestigious exam school near the heart of Boston. While I was there, I took a high school CS class and totally fell in love with coding. My first shot at programming was a Python script I wrote during the summer after 10th grade to figure out what grades I needed on my tests to do well in my classes (though, to be honest, I still failed)."
    },
    {
        period: '(2018 - 2020)',
        title: 'Boston University | Pre-med',
        link: 'https://www.bu.edu/academics/eng/departments/biomedical-engineering/', 
        description:
        'This love for coding led me to pursue a Biomedical Engineering degree while being on a pre-med track (I wanted to be the cool coding doctor). However, due to the significant commitment required to become a doctor (shoutout to all past, current, and future doctors), I eventually had to choose between coding and pursuing a medical career.',
    },
    {
        period: '(2020 - 2022)',
        title: 'Boston University | Computer Engineering Minor',
        link: 'https://www.bu.edu/academics/eng/departments/electrical-computer-engineering/', 
        description:
        'After deciding to focus entirely on coding, I pursued a minor in Computer Engineering, dropping out of the pre-med race. AND I LOVED IT! I got to start working on things such as an app to help manage finances, a stock tracker, and more (This is also the time when I got started with investing!).',
    },
    {
        period: '(2022 - 2024)',
        title: 'IntelligentDX | Start-up (Pasadena, California)',
        link: 'https://www.linkedin.com/company/intelligentdx', 
        description:
        'After graduating from Boston University in 2022, I joined INDX, a healthcare tech startup, as a backend developer. My first project involved creating a robust messaging system, followed by work as a backend developer on a patient-facing application, and later as part of a team working on a medical billing verification system. After a year, I was promoted to Lead Backend Developer and Technical Lead of the patient-facing app dev team!',
    },
    {
        period: '(2024 - )',
        title: 'The Future (Boston, Massachusetts)',
        link: '', 
        description: "Right now I am trying the focus on building my career as a software developer and investor. I am currently working on multiple projects such as a all-in-one portfolio manager, a stock trading AI, an AI chess engine, and more (hopefully I can finish them all by end of 2025!).",
    },
];

export default function TimeLine() {
  const [hoveredIndex, setHoveredIndex] = React.useState(null);

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
