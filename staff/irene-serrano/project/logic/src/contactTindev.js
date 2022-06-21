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
            user: EMAIL,  
            pass: PASSWORD, 
            

        },
    })


    return transporter.sendMail({
        from: '"[TINDEV] Form contact" <tindev@zohomail.eu>', // sender address
        to: 'tindev@zohomail.eu',
        subject: "Someone contacted Tindev", // Subject line
        html: `<div style="font-family: -apple-system, BlinkMacSystemFont; color:  #004148;" >   
     
             
        <h1 style="color:#004148;" >Has sido contactado por el formulario de la página web</h1>
        <div style="width: 80%; margin: auto; background-color:#f2f2f8; padding: 2rem; border-radius: 0.5rem; border: 1px solid #1ae3a3;">
          <p>${message}</p>
          
          <div>
            <span style="font-weight: 700;">${name}</span>
          <a style="color:#1ae3a3 ;" >${email}</a>
          </div>
          
        </div>
        

      </div>`,
    })
}

module.exports = contactTindev