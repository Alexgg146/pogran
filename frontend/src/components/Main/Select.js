import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function BasicSelect({onChange}) {
  const [opros, setopros] = React.useState('');

  const handleChange = (event) => {
    setopros(event.target.value);
  };

  return (
    <Box sx={6}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Откуда вы узнали о нашем сайте?</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={opros}
          label="Откуда вы узнали о нашем сайте?"
          onChange={(e)=>{handleChange(e);onChange(e)}}
        >
          <MenuItem value={'Из интернета'}>Из интернета</MenuItem>
          <MenuItem value={'От знакомых'}>От знакомых</MenuItem>
          <MenuItem value={'Из прессы и ТВ'}>Из прессы и ТВ</MenuItem>
          <MenuItem value={'Зашли на сайт случайно'}>Зашли на сайт случайно</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}