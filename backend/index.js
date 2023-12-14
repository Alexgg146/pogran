const nodemailer =require('nodemailer')
const express = require('express')
const cors=require('cors');
const app = express()
const userRouter = require('./router/user.router.js')
const port = process.env.port || 3001
app.use(cors({origin:'http://localhost:3000',credentials:true}));
app.use(express.json())
app.use('/api',userRouter)
app.post('/send-email', (req, res) => {
  const {email,text}=req.body;
    const transporter = nodemailer.createTransport({
      host: 'smtp.yandex.ru',
      port: 465,
      secure: true,
      auth: {
        user: 'pogranastr@yandex.ru',
        pass: 'vajlnklcfbfpffzn',
      },
    });
    const mailOptions = {
        from: 'pogranastr@yandex.ru',
        to: `${email}`,
        subject: 'Заявка на службу по контракту!',
        text: `${text}`,
      };
    transporter.sendMail(mailOptions)
  });
app.listen(port, () => {
    console.log(`Server good! http://localhost:${port}`)
})