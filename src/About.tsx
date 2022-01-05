import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function BasicCard() {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h5" component="div" sx={{ mb: 1.5, fontWeight: 'bold' }}>
          Hello, world!
        </Typography>
        <Typography variant="h5" component="div" sx={{ mb: 1.5 }}>
          Welcome!
          This is my portfolio.
        </Typography>
        <Typography variant="h5" component="div" sx={{ mb: 1.5, fontWeight: 'bold' }}>
          Profile
        </Typography>
        <Typography variant="h6" component="div">
          ・鈴木 伶哉  (おちゃむら)
        </Typography>
        <Typography variant="h6" component="div">
          ・静岡大学 情報学部情報科学科 B3
        </Typography>
        <Typography variant="h6" component="div" sx={{ mb: 1.5 }}>
          ・大木研究室所属
        </Typography>
        <Typography variant="h5" component="div" sx={{ mb: 1.5, fontWeight: 'bold' }}>
          Favorite
        </Typography>
        <Typography variant="h6" component="div">
          ・カイリュー
        </Typography>
        <Typography variant="h6" component="div">
          ・HHKB
        </Typography>
        <Typography variant="h6" component="div">
          ・Web Security
        </Typography>
      </CardContent>
    </Card>
  );
}
