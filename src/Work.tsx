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
import Link from '@mui/material/Link';

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
                image={`${process.env.PUBLIC_URL || 'default'}/img/vrspeedrun.png`}
                alt="vrspeedrun"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  VR SpeedRun
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  VR酔いを解決するためにニンテンドースイッチのJoyconを用いてVRゲームを作成しました。
                  Unityを使用しています。
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                >
                  <Link href="https://github.com/soupro-vimmer/VRSpeedRun">Link</Link>
                </Button>
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
                image={`${process.env.PUBLIC_URL || 'default'}/img/font.png`}
                alt="Tenhamasen font"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  天浜線フォント
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  天竜浜名湖鉄道の手書き看板文字をフォント化するプロジェクトに参加し、フォント作成をしていました。
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                >
                  <Link href="http://www.hama365.info/tenhamasenfont/">Link</Link>
                </Button>
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
                image={`${process.env.PUBLIC_URL || 'default'}/img/Siha.png`}
                alt="Siha adventure"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Siha adventure
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  大学の文化祭で老若男女関わらず遊べるように声で操作するアクションゲームを制作しました。
                  Unityを使用しています。
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                >
                  <Link href="https://github.com/soupro-vimmer/VRSpeedRun">Link</Link>
                </Button>
              </CardActions>
            </Card>
          </Item>
        </Grid>
        <Grid item xs={4} sm={4} md={4} key={0}>
          <Item>
            <Card sx={{ minWidth: 300 }}>
              <CardMedia
                component="img"
                height="550"
                width="100"
                image={`${process.env.PUBLIC_URL || 'default'}/img/alarm.png`}
                alt="Alarm app"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Simple alarm app
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  株式会社プログメイトのインターンで開発したアラームアプリです。
                  React NativeとExpoを用いました。
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                >
                  <Link href="https://github.com/otyamura/continuous-alarm">Link</Link>
                </Button>
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
                image={`${process.env.PUBLIC_URL || 'default'}/img/SZOK.png`}
                alt="Siha adventure"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  SZOK大学からの脱出
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  ネタです。大学の授業にて迷路脱出アクションゲームを作成しました。Javafxを用いて作成しました。
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                >
                  <Link href="https://github.com/otyamura/Escape_from_SZOK">Link</Link>
                </Button>
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
                image={`${process.env.PUBLIC_URL || 'default'}/img/bot.png`}
                alt="bot1"
              />
              <br />
              <CardMedia
                component="img"
                height="auto"
                width="100"
                image={`${process.env.PUBLIC_URL || 'default'}/img/bot2.png`}
                alt="bot2"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  rise guys bot
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  セキュリティキャンプのグループワークにて作成したDiscord botです。
                  リモートでのグループワークのアイスブレイク機能やGithubを用いた開発を円滑に行うための機能があります。
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                >
                  <Link href="https://github.com/kisho-shiken-fall-guys/rise-guys-bot">Link</Link>
                </Button>
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
                image={`${process.env.PUBLIC_URL || 'default'}/img/seiseki.png`}
                alt="seiseki"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  seiseki notification bot
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  静岡大学の学務情報サイトの成績が更新されたら通知をするLine botです。
                  Seleniumを用いてスクレイピングしています。（成績はイメージです）
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                >
                  <Link href="https://github.com/AD2-sawayaka/seiseki-notification-bot">Link</Link>
                </Button>
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
                image={`${process.env.PUBLIC_URL || 'default'}/img/portfolio.png`}
                alt="portfolio"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  portfolio
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  このportfolioです。React.jsとMUIを用いて作成しました。
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                >
                  <Link href="https://github.com/otyamura/portfolio-use-react">Link</Link>
                </Button>
              </CardActions>
            </Card>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
