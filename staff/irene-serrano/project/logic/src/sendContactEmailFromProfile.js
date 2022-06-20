//const { transporter } = require('nodemailer')
const { models: { User } } = require('data')
const { NotFoundError, AuthError } = require('commons/src/errors');

const nodemailer = require("nodemailer");
const { env: { EMAIL, PASSWORD } } = process


function sendContactEmailFromProfile(developerId, companyId) {

  return User.findById(companyId)
    .then(company => {
      if (!company) throw new NotFoundError('company not found')

      return User.findById(developerId)
        .then(developer => {
          if (!developer) throw new NotFoundError('developer not found')


              const transporter = nodemailer.createTransport({
                host: "smtp.zoho.eu",
                port: 465,
                secure: true, // true for 465, false for other ports
                auth: {
                  user: EMAIL,  
                  pass: PASSWORD, 
                },
              });


              return transporter.sendMail({
                from: '"Tindev team 🔥" <tindev@zohomail.eu>', // sender address
                //  to: contactedRequest.email, // list of receivers
                to: 'irenesg1995@gmail.com',
                subject: "Ey! Alguien te quiere en su equipo!", // Subject line
                html: `<div style="display:flex; flex-direction: column; background-color:#f2f2f8; padding: 3rem; border-radius: 0.5rem; border: 2px solid #1ae3a3; font-family: -apple-system, BlinkMacSystemFont;flex-wrap: wrap; ">   
    
                <h1 style="color: #004148; width: 100%" >Hola, ${developer.name}!</h1>
                <h3 style="color: #004148; width: 100%" >Al equipo de ${company.name} les has gustado</h3>
            
                <p style="color: #004148; width: 100%" >Si estas interesado, envía un correo a <a>${company.email}</a> presentándote, te están esperando.</p>
                <button style="width: fit-content; margin: 0.5rem auto; padding: 0.5rem 50px; border: 2px solid #1ae3a3; border: none; border-radius: 0.5rem; background-color: #1ae3a3; color:  #004148; font-weight: 700 ;" href=${company.email}>Escribir</button>
            
              </div>`,
              })
            })



        })
}
module.exports = sendContactEmailFromProfile