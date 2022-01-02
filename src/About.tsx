import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function BasicCard() {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h5" component="div" sx={{ mb: 1.5 }}>
          Welcome!
        </Typography>
        <Typography variant="body1" sx={{ mb: 1.5 }}>
          This is my portfolio.
          <br />
        </Typography>
        <Typography variant="h5" component="div" sx={{ mb: 1.5 }}>
          Profile
        </Typography>
        <Typography variant="h6" component="div">
          Name:
        </Typography>
      </CardContent>
    </Card>
  );
}
