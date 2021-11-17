const { Router } = require("express");
const nodemailer = require("nodemailer");
const contacto = new Router();

//email
contacto.post("/send-email",(req, res) =>{
    const name = req.body.name;
    const tel = req.body.tel;
    const email = req.body.email;
    const asunto = req.body.asunto;
    const message = req.body.message;


    var transport = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        secure: false,
        auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
    },
    });
    const mailOptions={
        from: `${name}`,
        to:"naranjaspintadas@gmail.com",
        subject: `${asunto}`,
        html:`<h1>Hola! ${name} te ha enviado éste mensaje: ${message}. Responder a ${email}, o al número de tel: ${tel}.</h1>`,
    };

    transport.sendMail(mailOptions,(error, info)=>{
        if(error){
        res.status(500).send(error.message);
            }else{
            res.render('Enviado');
            res.status(200).jsonp(reqbody);
            }
    });
});


module.exports = contacto;