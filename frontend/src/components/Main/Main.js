import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Paper, TextField } from "@mui/material";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState } from "react";
import myApi from "../../Api";
import useInput from "../../Validator";
import BasicSelect from "./Select";
import Checkbox from "@mui/material/Checkbox";
import AlertDialogSlide from "./Dialog";
import InteractiveList2 from "./List2";
import BasicAccordion from "./Accordion";
import FullWidthGrid from "./List";
import InteractiveList3 from "./List3";

const defaultTheme = createTheme();
function Main() {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const [opros, setOpros] = useState("");
  let FIO = useInput("", { isEmpty: true, FIO: false });
  let age = useInput("", { isEmpty: true, age: false });
  let email = useInput("", { isEmpty: true, isEmail: false });
  let phone = useInput("", { isEmpty: true, phone: false });
  let location = useInput("", { isEmpty: true, location: false });
  let formObject = {
    name: FIO.formValue,
    email: email.formValue,
    age: age.formValue,
    phone: phone.formValue,
    location: location.formValue,
    opros: opros,
  };

  const handleChange = (e) => {
    let { name, value } = e.target;

    console.log(opros);
    setOpros(value);
  };
  const handleSubmit = (evt) => {
    evt.preventDefault();
    window.location.reload();
    myApi.postUser(formObject);
    myApi.postEmail({
      email: email.formValue,
      text: `Здравствуйте, ваша заявка успешно принята принята! Ожидайте обратной связи`,
    });
  };
  return (
    <div>
      <ThemeProvider theme={defaultTheme}>
        <CssBaseline />
        <main>
          <Box
            sx={{
              backgroundImage: `url(${"https://i.imgur.com/rkYWYZ6.jpg"})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
              pt: 12,
              pb: 15,
            }}
          >
            <Container
              sx={{
                backgroundImage: "",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <Typography
                variant="h2"
                align="center"
                paragraph
                sx={{
                  display: { xs: 'none', md: 'flex' },
                  fontWeight: 800,
                  color: "white"
                }}
              >
                В ПОГРАНИЧНОМ УПРАВЛЕНИИ 
                ФСБ РОССИИ 
                 ПО РЕСПУБЛИКЕ КАЛМЫКИЯ И
                АСТРАХАНСКОЙ ОБЛАСТИ
              </Typography>
            </Container> 
          </Box>
                    <FullWidthGrid />
          <Box
            sx={{
              backgroundColor: "#1b5e20",
              pt: 8,
              pb: 15,
            }}
          >
            <Container 
              justifyContent="center"
              alignItems="center">
              <Grid container >
                <Grid item xs={12}>
                  <Paper sx={{padding: 2}}>
                    <Typography variant="h5" gutterBottom align="center">
                      Оставьте заявку на контрактную службу
                    </Typography>
                    <form onSubmit={handleSubmit}>
                      <Grid container spacing={2}>
                        <Grid item xs={12}>
                          <TextField
                            variant="outlined"
                            fullWidth
                            label={
                              FIO.isDirty && FIO.FIOError
                                ? "Некорректно заполнено поле ФИО"
                                : "ФИО"
                            }
                            error={FIO.isDirty && FIO.FIOError ? true : false}
                            onChange={(e) => FIO.onChange(e)}
                            onBlur={(e) => FIO.onBlur(e)}
                            value={FIO.value}
                            name="FIO"
                            type="text"
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <TextField
                            label={
                              age.isDirty && age.ageError
                                ? "Некорректно заполнено поле возраст"
                                : "Возраст"
                            }
                            error={age.isDirty && age.ageError ? true : false}
                            variant="outlined"
                            fullWidth
                            onChange={(e) => age.onChange(e)}
                            onBlur={(e) => age.onBlur(e)}
                            value={age.value}
                            name="age"
                            type="text"
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <TextField
                            label={
                              email.isDirty && email.isEmailErrorr
                                ? "Некорректно заполнено поле электронная почта'"
                                : "Электронная почта"
                            }
                            error={
                              email.isDirty && email.isEmailErrorr
                                ? true
                                : false
                            }
                            variant="outlined"
                            fullWidth
                            onChange={(e) => email.onChange(e)}
                            onBlur={(e) => email.onBlur(e)}
                            value={email.value}
                            name="email"
                            type="text"
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <TextField
                            label={
                              phone.isDirty && phone.phoneError
                                ? "Некорректно заполнено поле номер телефона"
                                : "Номер телефона"
                            }
                            error={
                              phone.isDirty && phone.phoneError ? true : false
                            }
                            variant="outlined"
                            fullWidth
                            onChange={(e) => phone.onChange(e)}
                            onBlur={(e) => phone.onBlur(e)}
                            value={phone.value}
                            name="phone"
                            type="text"
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <TextField
                            label={
                              location.isDirty && location.locationError
                                ? "Некорректно заполнено поле место жительства"
                                : "Место жительства"
                            }
                            error={
                              location.isDirty && location.locationError
                                ? true
                                : false
                            }
                            variant="outlined"
                            fullWidth
                            onChange={(e) => location.onChange(e)}
                            onBlur={(e) => location.onBlur(e)}
                            value={location.value}
                            name="location"
                            type="text"
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <BasicSelect onChange={handleChange} />
                        </Grid>
                        <Grid item xs={7}>
                          <Checkbox {...label} />
                          <AlertDialogSlide />
                        </Grid>
                        <Grid item xs={12}>
                          <Button
                            variant="contained"
                            color="primary"
                            type="submit"
                            disabled={
                              FIO.FIOError ||
                              age.ageError ||
                              email.isEmailError ||
                              phone.phoneError ||
                              location.locationError
                                ? true
                                : false
                            }
                          >
                            Отправить заявку
                          </Button>
                        </Grid>
                      </Grid>
                    </form>
                  </Paper>
                </Grid>
              </Grid>
            </Container>
            
          </Box >
          <Box 
            sx={{
              backgroundColor: "#1b5e20",
              padding: 4,
              boxShadow: 0
            }}
          >
            <Grid
              container
              justifyContent="center"
              alignItems="center"
              
            >
              <Grid item xs={8} sm={8} md={9}>
                <Paper>
                  <Typography variant="body1">
                    <InteractiveList3 />
                  </Typography>
                </Paper>
              </Grid>
             
            </Grid>
          </Box>
          <Box 
            sx={{
              backgroundColor: "#1b5e20",
              padding: 4
            }}
          >
            <Grid
              container
              justifyContent="center"
              alignItems="center"
            >
              <Grid item xs={8} sm={8} md={9}>
                <Paper>
                  <Typography variant="body1">
                    <InteractiveList2 />
                  </Typography>
                </Paper>
              </Grid>
             
            </Grid>
          </Box>
          <Box
            sx={{
              backgroundColor: "#1b5e20",
              padding: 5
            }}
          >
            <Grid
              container
              spacing={2}
              justifyContent="center"
              alignItems="center"
            >
              <Grid item xs={8} sm={8} md={9} >
                <Paper>
                  <Typography variant="body1">
                    <BasicAccordion />
                  </Typography>
                </Paper>
              </Grid>
             
            </Grid>
          </Box>
        </main>
        {/* Footer */}
        <Box sx={{ bgcolor: "background.paper", p: 2 }} component="footer">
          <Typography variant="h6" align="center" gutterBottom>
            ФСБ РФ
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            color="text.secondary"
            component="p"
          >
            Kirov
          </Typography>
        </Box>
      </ThemeProvider>
    </div>
  );
}

export default Main;
