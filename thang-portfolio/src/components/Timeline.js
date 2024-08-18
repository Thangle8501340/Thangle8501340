import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import Typography from '@mui/material/Typography';

const timelineData = [
  {
    period: '(2014 - 2018)',
    title: 'High School',
    description:
      'My name is Thang, and I have been coding since I was 17 years old. My first program was a Python script I wrote during the summer after 10th grade to help me track what I needed on my tests to get good grades in all my classes. (I still failed)',
  },
  {
    period: '(2018 - 2020)',
    title: 'Boston University (Pre-med)',
    description:
      'This love for coding led me to pursue a Biomedical Engineering degree while being on a pre-med track (I wanted to be the cool coding doctor). However, due to the significant commitment required to become a doctor (shoutout to all past, current, and future doctors), I eventually had to choose between coding and pursuing a medical career.',
  },
  {
    period: '(2020 - 2022)',
    title: 'Boston University (Computer Engineering Minor)',
    description:
      'After deciding to focus entirely on coding, I pursued a minor in Computer Engineering, dropping out of the pre-med race. AND I LOVED IT! I got to start working on things such as an app to help manage finances, a stock tracker, and more (This is also the time when I got started with investing!).',
  },
  {
    period: '(2022 - 2024)',
    title: 'IntelligentDX (Start-up)',
    description:
      'After graduating from Boston University in 2022, I joined INDX, a healthcare tech startup, as a backend developer. My first project involved creating a robust messaging system, followed by work as a backend developer on a patient-facing application, and later as part of a team working on a medical billing verification system. After a year, I was promoted to Lead Backend Developer and Technical Lead of the patient-facing app dev team!',
  },
  {
    period: '(2024 - )',
    title: 'Abyss',
    description:"",
  },
];

export default function TimeLine() {
  return (
    <Timeline position="right" sx={{ padding: '10px' }}>
      {timelineData.map((item, index) => (
        <TimelineItem 
          key={index} 
          sx={{ margin: '20px 0', display: 'flex', alignItems: 'center' }}
        >
          <TimelineOppositeContent
            sx={{
              flex: '1 1 0%', // Ensure it shrinks and grows as needed
              maxWidth: '200px', // Set a fixed maximum width
              minWidth: '150px', // Set a fixed minimum width
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
              flex: '2 1 0%', // Ensure it shrinks and grows as needed
              maxWidth: 'calc(100% - 200px)', // Ensure it takes up the remaining space
              minWidth: 'calc(100% - 200px)', // Set a minimum width to ensure alignment
              paddingLeft: '10px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-start',
            }}>
            <div>
              <Typography variant="h6" component="span">
                {item.title}
              </Typography>
              <Typography>{item.description}</Typography>
            </div>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
}
