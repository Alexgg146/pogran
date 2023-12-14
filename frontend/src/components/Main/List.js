import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { sizing } from '@mui/system';

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(5),
  textAlign: 'center'
  
}));

export default function FullWidthGrid() {
  return (
      <Grid container spacing={2} justifyContent="center"
              alignItems="center" sx={{backgroundColor: "#1b5e20"}}>
        <Grid item xs={11} md={11} >
          <Item>
          <Typography  variant="h6" component="div" >
          ТРЕБОВАНИЯ ПРЕДЯВЛЯЕМЫЕ К КАНДИДАТАМ:
          </Typography>
            <List dense={true}>
                <ListItem>
                  <ListItemIcon>
                    <ChevronRightIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary="ВОЗРАСТ ОТ 18 ЛЕТ"
                  />
                  
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <ChevronRightIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary="ПРОФПРИГОДНОСТЬ"
                  />
                  
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <ChevronRightIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary="ЗДОРОВЬЕ"
                  />
                  
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <ChevronRightIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary="ФИЗИЧЕСКИЕ ДАННЫЕ"
                  />
                  
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <ChevronRightIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary="ПРОХОЖДЕНИЕ ВОЕННОЙ СЛУЖБЫ ПО ПРИЗЫВУ РАНЕЕ, ЛИБО НАЛИЧИЕ СРЕДНЕГО
                    ПРОФЕССИАНАЛЬНОГО ИЛИ ВЫСШЕГО ОБРАЗОВАНИЯ   "
                  />
                  
                </ListItem>

            </List>
          </Item>
        </Grid>
      </Grid>
  );
}


/*import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { sizing } from '@mui/system';



export default function InteractiveList() {

  return (
    <Box cont sx={{ p: 3, mx: 5}}>  
      <Grid container container spacing={2} >
        <Grid item xs={12} md={6}>
          <Typography  variant="h6" component="div" >
          ТРЕБОВАНИЯ ПРЕДЯВЛЯЕМЫЕ К КАНДИДАТАМ:
          </Typography>
            <List dense={true}>
                <ListItem>
                  <ListItemIcon>
                    <ChevronRightIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary="ВОЗРАСТ ОТ 18 ЛЕТ"
                  />
                  
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <ChevronRightIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary="ПРОФПРИГОДНОСТЬ"
                  />
                  
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <ChevronRightIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary="ЗДОРОВЬЕ"
                  />
                  
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <ChevronRightIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary="ФИЗИЧЕСКИЕ ДАННЫЕ"
                  />
                  
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <ChevronRightIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary="ПРОХОЖДЕНИЕ ВОЕННОЙ СЛУЖБЫ ПО ПРИЗЫВУ РАНЕЕ, ЛИБО НАЛИЧИЕ СРЕДНЕГО
                    ПРОФЕССИАНАЛЬНОГО ИЛИ ВЫСШЕГО ОБРАЗОВАНИЯ   "
                  />
                  
                </ListItem>

            </List>
        </Grid>
        <Grid item xs={12} md={6} sx={{paddingLeft: 2}}>
          <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div" align="center">
          ТРЕБОВАНИЯ ПРЕДЯВЛЯЕМЫЕ К КАНДИДАТАМ:
          </Typography>
            <List dense={true}>
                <ListItem>
                  <ListItemIcon>
                    <ChevronRightIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary="8 (852) 55-99-69"
                  />
                  
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <ChevronRightIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary="8 (852) 55-99-08"
                  />
                  
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <ChevronRightIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary="8 (852) 55-99-12"
                  />
                  
                </ListItem>
                
            </List>
        </Grid>
      </Grid>
      </Box>
        
  );
}*/