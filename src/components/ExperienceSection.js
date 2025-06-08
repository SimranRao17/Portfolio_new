import React from 'react';
import { Typography, Box, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

const experiences = [
  {
    title: 'Software Engineering Intern',
    company: 'MICROSOFT',
    period: 'May 2025–Present',
    description: 'Developing intelligent nudges and plugin integrations for Copilot within Azure Backup. Enhancing user experience and automation through AI-driven features.'
  },
  {
    title: 'Software Development Intern',
    company: 'Software Tree – California',
    period: 'May 2024–July 2024',
    description: 'Simplified cross-RDBMS data transfer on AWS using the Gilhari microservice. Reverse-engineered JSON object models from MySQL to PostgreSQL using JDX ORM. Worked with Docker, AWS RDS, RESTful APIs, and JSON data handling.'
  }
];

const AnimatedBox = styled(Box)(({ theme }) => ({
  background: '#fff',
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[4],
  padding: theme.spacing(4, 2),
  animation: 'fadeIn 1.2s',
  '@keyframes fadeIn': {
    '0%': { opacity: 0, transform: 'translateY(30px)' },
    '100%': { opacity: 1, transform: 'translateY(0)' },
  },
}));

const ExperienceCard = styled(Paper)(({ theme }) => ({
  background: 'linear-gradient(120deg, #2193b0 0%, #6dd5ed 100%)',
  color: '#fff',
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[3],
  padding: theme.spacing(3),
  minWidth: 280,
  flex: 1,
  margin: theme.spacing(1),
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(1),
}));

const ExperienceSection = () => (
  <AnimatedBox id="experience" sx={{ my: 6 }}>
    <Typography variant="h4" gutterBottom sx={{ color: '#1976d2', fontWeight: 600, textAlign: 'center' }}>
      Experience
    </Typography>
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        gap: 4,
        justifyContent: 'center',
        alignItems: 'stretch',
        mt: 3,
      }}
    >
      {experiences.map((exp, idx) => (
        <ExperienceCard key={idx} elevation={4}>
          <Typography variant="h6" sx={{ fontWeight: 700 }}>
            {exp.title} @ {exp.company}
          </Typography>
          <Typography variant="subtitle2" sx={{ color: '#e3f2fd', fontWeight: 500 }}>
            {exp.period}
          </Typography>
          <Typography sx={{ color: '#f0f8ff' }}>
            {exp.description}
          </Typography>
        </ExperienceCard>
      ))}
    </Box>
  </AnimatedBox>
);

export default ExperienceSection;
