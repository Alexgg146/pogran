import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function InteractiveList3() {
  return (
    <Grid container spacing={2} justifyContent="center"
    alignItems="center" sx={{backgroundColor: "#1b5e20", boxShadow: 0}}>
      <Grid item xs={12} sm={6} md={4} >
        <Card sx={{ height: 345 }}>
          <CardMedia
            component="img"
            height="140"
            image="https://i.imgur.com/9qGYLd0.jpg"
            alt="Icon 1"
          />
          <CardContent>
            <Typography variant="h6" component="div">
            ВЫСОКИЙ И СТАБИЛЬНЫЙ УРОВЕНЬ ДЕНЕЖНОГО ДОВОЛЬСТВИЯ
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Card sx={{ height: 345 }}>
          <CardMedia
            component="img"
            height="140"
            image="https://i.imgur.com/PxQVPZK.jpg"
            alt="Icon 2"
          />
          <CardContent>
            <Typography variant="h6" component="div">
            ЖИЛИЩНОЕ ОБЕСПЕЧЕНИЕ ПРЕДСТАВЛЕНИЕ СЛУЖЕБНОГО ЖИЛЬЯ ВОЕННОСЛУЖАЩИМ
                    И ЧЛЕНАМ ИХ СЕМЕЙ, ВОЗМОЖНОСТЬ ПРИОБРИТЕНИЯ ЖИЛЬЯ ПО ВОЕННОЙ
                    ИПОТЕКЕ
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Card sx={{ height: 345 }}>
          <CardMedia
            component="img"
            height="140"
            image="https://i.imgur.com/P9oQo9r.jpg"
            alt="Icon 3"
          />
          <CardContent>
            <Typography variant="h6" component="div">
            ЕДИЦИНСКОЕ ОБЕСПЕЧЕНИЕ БЕСПЛАТНОЕ ЛЕЧЕНИЕ ВОЕННОСЛУЖАЩИХ,
                    СТРАХОВАНИЕ ЖИЗНИ И ЗДОРОВЬЯ
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Card sx={{ height: 345 }}>
          <CardMedia
            component="img"
            height="140"
            image="https://i.imgur.com/m2RYLRB.jpg"
            alt="Icon 1"
          />
          <CardContent>
            <Typography variant="h6" component="div">
            ПЕНСИОННОЕ ОБЕСПЕЧЕНИЕ ВОЗМОЖНОСТЬ ВЫХОДА НА ПЕНСИЮ ПОСЛЕ 20 ЛЕТ
                    ПРОХОЖДЕНИЯ СЛУЖБЫ
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Card sx={{ height: 345 }}>
          <CardMedia
            component="img"
            height="140"
            image="https://i.imgur.com/q6bgFOz.jpg"
            alt="Icon 2"
          />
          <CardContent>
            <Typography variant="h6" component="div">
            ВЕЩЕВОЕ ОБЕСПЕЧЕНИЕ ПРЕДОСТАВЛЕНИЕ ФОРМЕННОЙ ОДЕЖДЫ
            </Typography>
          </CardContent>
        </Card>
      </Grid>
     
    </Grid>
  );
}

