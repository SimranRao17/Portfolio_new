import React from 'react';
import { Typography, Box, List, ListItem, ListItemText } from '@mui/material';
import { styled } from '@mui/material/styles';

const awards = [
  {
    title: 'Karnataka State Board Topper',
    date: 'Jun 2022',
    description: 'Awarded 1st rank in Class XII by securing the highest marks among 6,84,255 students.'
  },
  {
    title: 'Aditya Birla Scholarship',
    date: 'Dec 2022',
    description: 'Selected among the top 30 students across all 3 BITS campuses and 21 premier institutes, including IITs, IIMs, and XLRI.'
  }
];

const AnimatedBox = styled(Box)(({ theme }) => ({
  background: 'linear-gradient(90deg, #43cea2 0%, #185a9d 100%)',
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[3],
  padding: theme.spacing(3, 2),
  animation: 'fadeIn 1.2s',
  '@keyframes fadeIn': {
    '0%': { opacity: 0, transform: 'translateY(30px)' },
    '100%': { opacity: 1, transform: 'translateY(0)' },
  },
}));

const AwardsSection = () => (
  <Box id="awards" className="glass-card animated-section slide-in-right" sx={{ my: 6, background: 'linear-gradient(120deg, #1e3c72 0%, #2a5298 100%)', color: '#e3f2fd', boxShadow: '0 4px 32px 0 #1e3c72aa' }}>
    <Typography variant="h4" gutterBottom sx={{ color: '#90caf9', fontWeight: 600 }}>Awards & Scholarships</Typography>
    <List>
      {awards.map((award, idx) => (
        <ListItem key={idx} alignItems="flex-start">
          <ListItemText
            primary={<span style={{ color: '#90caf9', fontWeight: 700 }}>{`${award.title} (${award.date})`}</span>}
            secondary={<span style={{ color: '#e3f2fd' }}>{award.description}</span>}
          />
        </ListItem>
      ))}
    </List>
  </Box>
);

export default AwardsSection;
