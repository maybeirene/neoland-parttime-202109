//const { transporter } = require('nodemailer')
const { models: { User, Offer } } = require('data')
const { NotFoundError, AuthError } = require('commons/src/errors');

const nodemailer = require("nodemailer");
const { env: { EMAIL, PASSWORD } } = process


function sendContactEmailFromRequest(requestId, offerId, companyId) {

  return User.findById(companyId)
    .then(company => {
      if (!company) throw new NotFoundError('company not found')

      return Offer.findById(offerId)
        .then(offer => {
          if (!offer) throw new NotFoundError('offer not found')

          const { requests } = offer
          const requestIndex = requests.findIndex((request) => request.id === requestId)
          if (requestIndex === -1) throw new NotFoundError(`request not found`)

          const contactedRequest = requests[requestIndex]

          User.findById(contactedRequest.developer)
            .then(developer => {

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
                html: `<div style={'max-width': '500px';
                  'margin': '3rem auto'}>   
          
              <h1 style={'color':'green'}>Hola, ${developer.name}!</h1>
              <h3><a style={'color':'#0fd093'}href=${company.link}>${company.name}</a> quiere contactar contigo por la oferta de trabajo:</h3>
              <h3 style={'color': 'grey';
              'font-weight': '900'; 'margin': '0 100px'}>${offer.title}</h3>
      
              <p>Si sigues interesado, envía un correo a <a>${company.email}</a> presentándote, te están esperando.</p>
              <button href=${company.email}>Escribir</button>
      
          </div>`,
              })
            })



        })


    })
}
module.exports = sendContactEmailFromRequest