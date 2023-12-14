import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import BusinessIcon from '@mui/icons-material/Business';

export default function InteractiveList2() {
  const map = new ymaps3.YMap(document.getElementById('YMapsID'), {
    location: {
      center: [37.64, 55.76],
      zoom: 10
    }
  });
  return (
    <Box sx={{ flexGrow: 1 }} >
      <Grid container>
        <Grid item xs={12} md={6}>
          <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div" align="center">
          Контактная информация
          </Typography>
          <List dense={true} sx={{padding: 3}}>
          <ListItemText
                    primary="НОМЕР ТЕЛЕФОНА:"
                  />
                <ListItem>
                
                  <ListItemIcon>
                    <LocalPhoneIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary="8 800 808 88 88"
                  />
                  
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <LocalPhoneIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary="8 800 808 88 88"
                  />
                  
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <LocalPhoneIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary="8 800 808 88 88"
                  />
                  
                </ListItem>
                <ListItemText
                    primary="ЭЛЕКТРОННАЯ ПОЧТА:"
                  />
                <ListItem>
                
                  <ListItemIcon>
                    <AlternateEmailIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary="pogranastr@yandex.ru"
                  />
                  
                </ListItem>
                <ListItemText
                    primary="АДРЕС:"
                  />
                <ListItem>
                
                  <ListItemIcon>
                    <BusinessIcon  />
                  </ListItemIcon>
                  <ListItemText
                    primary="г. Астрахань, улица Набережная Приволжского Затона, 20А"
                  />
                  
                </ListItem>
              </List>
            </Grid>
            <Grid item xs={12} md={6}>
              КАРТА
            </Grid>
      </Grid>
      
        
    </Box>
  );
}