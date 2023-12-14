import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { Typography } from '@mui/material';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Typography variant="outlined" onClick={handleClickOpen}>
        <u>Соглашение об обработке персональных данных</u>
      </Typography>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Соглашение на обработку персональных данных"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
          Принимая условия настоящего Соглашения, пользователь даёт своё
            согласие на сбор, хранение и обработку своих персональных данных,
            указанных путём заполнения веб-форм на сайте astrfsbrf.ru и его
            поддоменов (далее — Сайт). Под персональными данными понимается
            любая информация, относящаяся к прямо или косвенно определённому или
            определяемому физическому лицу (гражданину). Пользователь также даёт
            своё согласие на обработку и трансграничную передачу персональных
            данных для идентификации пользователя на страницах Сайта. Основанием
            для обработки персональных данных являются: статья 24 Конституции РФ
            и статья 6 Федерального закона №152-ФЗ «О персональных данных». В
            ходе обработки с персональными данными будут совершены следующие
            операции: сбор, хранение, уточнение, передача, блокирование,
            удаление, уничтожение — все упомянутые действия будут совершены
            только в целях, указанных в п.2 настоящего Соглашения. Модераторы
            сайта обязуются не передавать полученную от Пользователя информацию
            третьим лицам. При обработке персональных данных принимаются
            необходимые и достаточные организационные и технические меры для
            защиты персональных данных от неправомерного доступа к ним, а также
            от иных неправомерных действий в отношении персональных данных.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Закрыть</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}