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
                  user: 'tindev@zohomail.eu',  // generated ethereal user
                  pass: 'qDSP5bMwL5XT', // generated ethereal password

                },
              });


              return transporter.sendMail({
                from: '"Tindev team 🔥" <tindev@zohomail.eu>', // sender address
                //  to: contactedRequest.email, // list of receivers
                to: 'irenesg1995@gmail.com',
                subject: "Ey! Alguien te quiere en su equipo!", // Subject line
                html: `<div>   
          <main>
              <h1>Hola, ${developer.name}!</h1>
              <h3>Al equipo de ${company.name} les has gustado</h3>
      
              <p>Si estas interesado, envía un correo a <a>${company.email}</a> presentándote, te están esperando.</p>
              <button href=${company.email}>Escribir</button>
      
          </main></div>`,
              })
            })



        })
}
module.exports = sendContactEmailFromProfile