import React from 'react';
import { Typography, Box, Chip, Paper, Stack } from '@mui/material';

const languagesAndTools = [
  'C++', 'Python', 'JavaScript', 'SQL', 'Git', 'GitHub', 'Figma'
];

const frameworksAndLibraries = [
  'React', 'Node.js', 'Express.js', 'Flask',
  'PostgreSQL', 'MySQL', 'Scikit-learn', 'NumPy', 'Pandas',
  'PyTorch', 'Hugging Face Transformers'
];

const domains = [
  'Full-Stack Web Development',
  'Machine Learning',
  'Data Mining',
  'Generative AI'
];

const sectionStyle = {
  background: 'linear-gradient(120deg, #e3f2fd 0%, #bbdefb 100%)',
  borderRadius: 3,
  boxShadow: '0 2px 8px #1976d222',
  p: 3,
  m: 2,
  maxWidth: 600,
  mx: 'auto'
};

const chipStyle = {
  m: 0.5,
  fontWeight: 500,
  fontSize: '1rem',
  color: '#1976d2',
  background: '#fff'
};

const SkillsSection = () => (
  <Box
    id="skills"
    className="animated-section slide-in-left"
    sx={{
      my: 6,
      background: 'linear-gradient(120deg, #0f2027 0%, #2c5364 100%)',
      color: '#0f2027',
      borderRadius: 3,
      boxShadow: '0 4px 32px 0 #1976d2aa',
      p: { xs: 2, md: 4 }
    }}
  >
    <Typography variant="h4" gutterBottom sx={{ color: '#fff', fontWeight: 700, textAlign: 'center' }}>
      Skills
    </Typography>
    <Paper elevation={0} sx={sectionStyle}>
      <Typography variant="h6" sx={{ color: '#1565c0', fontWeight: 600, mb: 1 }}>
        Languages & Tools
      </Typography>
      <Stack direction="row" flexWrap="wrap">
        {languagesAndTools.map((item, idx) => (
          <Chip key={idx} label={item} sx={chipStyle} />
        ))}
      </Stack>
    </Paper>
    <Paper elevation={0} sx={sectionStyle}>
      <Typography variant="h6" sx={{ color: '#1565c0', fontWeight: 600, mb: 1 }}>
        Frameworks & Libraries
      </Typography>
      <Stack direction="row" flexWrap="wrap">
        {frameworksAndLibraries.map((item, idx) => (
          <Chip key={idx} label={item} sx={chipStyle} />
        ))}
      </Stack>
    </Paper>
    <Paper elevation={0} sx={sectionStyle}>
      <Typography variant="h6" sx={{ color: '#1565c0', fontWeight: 600, mb: 1 }}>
        Domains
      </Typography>
      <Stack direction="row" flexWrap="wrap">
        {domains.map((item, idx) => (
          <Chip key={idx} label={item} sx={chipStyle} />
        ))}
      </Stack>
    </Paper>
  </Box>
);

export default SkillsSection;
