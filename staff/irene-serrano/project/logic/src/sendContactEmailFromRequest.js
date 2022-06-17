//const { transporter } = require('nodemailer')
const { models: { User, Offer } } = require('data')
const { NotFoundError, AuthError } = require('commons/src/errors');

const nodemailer = require("nodemailer");
const { env: { EMAIL, PASSWORD } } = process
/*
export const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // true for 465, false for other ports
  auth: {
    user: { EMAIL }, // generated ethereal user
    pass: { PASSWORD }, // generated ethereal password
  },
});

transporter.verify().then(()=>{
  console.log('ready for sending emails')
})*/


function sendContactEmailFromRequest(companyId, offerId, requestId) {

  return User.findById(companyId)
    .then(company => {
      if (!company) throw new NotFoundError('company not found')

      return Offer.findById(offerId)
        .then(offer => {
          if (!offer) throw new NotFoundError('offer not found')

          const { requests } = offer
          const requestIndex = requests.findIndex((request) => request.id === requestId)
          if (requestIndex === -1) throw new NotFoundError(`request ${requestId} not found`)

          const contactedRequest = requests[requestIndex]

          const transporter = nodemailer.createTransport({
            host: "smtp.zoho.eu",
            port: 465,
            secure: true, // true for 465, false for other ports
            auth: {
            //  user: { EMAIL }, // generated ethereal user
            //  pass: { PASSWORD }, // generated ethereal password
              user: 'tindev@zohomail.eu',
              pass: 'qDSP5bMwL5XT'
            },
          });

          transporter.verify().then(() => {
            console.log('ready for sending emails')
          })

          return transporter.sendMail({
            from: '"Tindev team 🔥" <tindev@zohomail.eu>', // sender address
            //  to: contactedRequest.email, // list of receivers
            to: 'irenesg1995@gmail.com',
            subject: "Hello ✔", // Subject line
            html: "<div><h1>Hello world?</h1><p>holii esto es una comunicacion sólo en principio</p> </div>",
          })
            .then(() => {
              console.log('enviado')
            })
        })


    })
}
module.exports = sendContactEmailFromRequest