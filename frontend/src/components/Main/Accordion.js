import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Box from '@mui/material/Box';
export default function BasicAccordion() {
  return (
    <div>
      <Box sx={{backgroundColor: "#1b5e20"}} >
      <Typography sx={{ mb: 2, 
                  fontWeight: 800,
                  color: "white"
                }} variant="h6" component="div" align="center">
          Часто задаваемые вопросы:
          </Typography>
      <Accordion>
        
        <AccordionSummary 
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Размер денежного довольствия</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Начиная от 47 000, дальше увеличивается пропорционально выслуге лет. Далее зависит от выполняемых работ.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Расмер отпуска</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Отпуск от 30 суток, дальше увеличивается пропорционально выслуге лет. В случае прохождения службы в подразделениях находящихся на границе, дополнительно к отпуску предоставляется 15 суток.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Где жить во время прохождения службы?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Для граждан проходящих службу в Астраханской области, не имеющих регистрации в городе астрахань, выделяется служебное жилье.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Можно ли выезжать за границу?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Выезжать заграницу можно, если данное событие будет согласновано с руководителем органов безопасности.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Пенсия</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            В случае прохождения службы в подразделениях которые находятся непосредственно на границах выслуга лет исчесляется год за полтора года. Минимальая пенсия при достижении 20 лет выслуги в льготном исчислении.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Что такое военная ипотека?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            ССЫЛКА НА САЙТ
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Призовут ли на СВО?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Варианты прохождения службы по специальностям разнообразны, имеются должности не связано с участием в боевых действиях. 
          </Typography>
        </AccordionDetails>
      </Accordion>
      </Box>
    </div>
  );
}