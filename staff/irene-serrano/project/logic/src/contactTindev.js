//const { transporter } = require('nodemailer')
const { models: { User, Offer } } = require('data')
const { NotFoundError, AuthError } = require('commons/src/errors');

const nodemailer = require("nodemailer");
const { env: { EMAIL, PASSWORD } } = process


function contactTindev(name, email, message) {


    const transporter = nodemailer.createTransport({
        host: "smtp.zoho.eu",
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
            user: 'tindev@zohomail.eu',  // generated ethereal user
            pass: 'qDSP5bMwL5XT', // generated ethereal password

        },
    })


    return transporter.sendMail({
        from: '"[TINDEV] Form contact" <tindev@zohomail.eu>', // sender address
        to: 'irenesg1995@gmail.com',
        subject: "Someone contacted you", // Subject line
        html: `<div>   
     
             
              <h1>Has sido contactado por el formulario de la página web</h1>
              <div>
                <h3 class="">${name}</h3>
                <h3 class="">${email}</h3>
                
                <p>${message}</p>
                
              </div>
              
      
            </div>`,
    })
}

module.exports = contactTindev