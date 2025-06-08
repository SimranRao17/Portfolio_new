import React from 'react';
import { Typography, Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

const educationData = [
  {
    degree: 'B.E. Computer Science \n (Minor in Data Science)',
    institution: 'Birla Institute of Technology and Science, Pilani',
    university: 'BITS Pilani',
    score: '8.66 (CGPA)',
    year: '2026',
  },
  {
    degree: 'Class XII',
    institution: 'RV PU College',
    university: 'KSEEB',
    score: '99.66%',
    year: '2022',
  },
  {
    degree: 'Class X',
    institution: 'Sri Aurobindo Memorial School',
    university: 'CBSE',
    score: '95.2%',
    year: '2020',
  },
];

const AnimatedTableContainer = styled(TableContainer)(({ theme }) => ({
  background: 'linear-gradient(90deg, #a1c4fd 0%, #c2e9fb 100%)',
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[3],
  animation: 'fadeIn 1.2s',
  '@keyframes fadeIn': {
    '0%': { opacity: 0, transform: 'translateY(30px)' },
    '100%': { opacity: 1, transform: 'translateY(0)' },
  },
}));

const EducationSection = () => (
  <Box id="education" className="glass-card animated-section slide-in-right" sx={{ my: 6, background: 'linear-gradient(120deg, #2193b0 0%, #6dd5ed 100%)', color: '#e3f2fd', boxShadow: '0 4px 32px 0 #2193b0aa' }}>
    <Typography variant="h4" gutterBottom sx={{ color: '#fff', fontWeight: 600 }}>Education</Typography>
    <AnimatedTableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontWeight: 700, color: '#1976d2' }}>Degree</TableCell>
            <TableCell sx={{ fontWeight: 700, color: '#1976d2' }}>Institution</TableCell>
            <TableCell sx={{ fontWeight: 700, color: '#1976d2' }}>University/Board</TableCell>
            <TableCell sx={{ fontWeight: 700, color: '#1976d2' }}>Score</TableCell>
            <TableCell sx={{ fontWeight: 700, color: '#1976d2' }}>Year</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {educationData.map((row, idx) => (
            <TableRow key={idx} sx={{ transition: 'background 0.3s', '&:hover': { background: '#e3f2fd' } }}>
              <TableCell>{row.degree}</TableCell>
              <TableCell>{row.institution}</TableCell>
              <TableCell>{row.university}</TableCell>
              <TableCell>{row.score}</TableCell>
              <TableCell>{row.year}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </AnimatedTableContainer>
  </Box>
);

export default EducationSection;
