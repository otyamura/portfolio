import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function ResponsiveGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        <Grid item xs={4} sm={4} md={4} key={0}>
          <Item>
            <Card sx={{ minHeight: 300, minWidth: 300 }}>
              <CardMedia
                component="img"
                height="150"
                width="auto"
                image="/img/vrspeedrun.png"
                alt="vrspeedrun"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over 6,000
                  species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Item>
        </Grid>
        <Grid item xs={4} sm={4} md={4} key={0}>
          <Item>
            <Card sx={{ minWidth: 300 }}>
              <CardMedia
                component="img"
                height="auto"
                width="100"
                image="/img/SZOK.png"
                alt="Siha adventure"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over 6,000
                  species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Item>
        </Grid>
        <Grid item xs={4} sm={4} md={4} key={0}>
          <Item>
            <Card sx={{ minWidth: 300 }}>
              <CardMedia
                component="img"
                height="auto"
                width="100"
                image="/img/Siha.png"
                alt="Siha adventure"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over 6,000
                  species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Item>
        </Grid>
        <Grid item xs={4} sm={4} md={4} key={0}>
          <Item>
            <Card sx={{ minWidth: 300 }}>
              <CardMedia
                component="img"
                height="auto"
                width="100"
                image="/img/alarm.png"
                alt="Siha adventure"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over 6,000
                  species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Item>
        </Grid>
        <Grid item xs={4} sm={4} md={4} key={0}>
          <Item>
            <Card sx={{ minWidth: 300 }}>
              <CardMedia
                component="img"
                height="auto"
                width="100"
                image="/img/bot.png"
                alt="Siha adventure"
              />
              <br />
              <CardMedia
                component="img"
                height="auto"
                width="100"
                image="/img/bot2.png"
                alt="Siha adventure"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over 6,000
                  species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Item>
        </Grid>
        <Grid item xs={4} sm={4} md={4} key={0}>
          <Item>
            <Card sx={{ minWidth: 300 }}>
              <CardMedia
                component="img"
                height="auto"
                width="100"
                image="/img/font.png"
                alt="Siha adventure"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over 6,000
                  species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
