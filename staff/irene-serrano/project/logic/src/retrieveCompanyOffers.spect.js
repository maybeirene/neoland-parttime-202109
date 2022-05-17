require('dotenv').config()
const { mongoose: { connect, disconnect }, models: { User, Offer } } = require('data')
const { expect } = require('chai')


const { errors: { NotFoundError }} = require('commons')
const retrieveCompanyOffers = require('./retrieveCompanyOffers')

const { env: { MONGODB_URL } } = process


describe('retrieveCompanyOffers', ()=>{
    before(()=> connect(MONGODB_URL))

    it('should succeed when more than one offers from the especified user are returned, active or not ', ()=> {
        return User.deleteMany()
       
        .then(() => {
            Promise.all([
                Offer.create({user: '627d47882db93e84a9900565', title: 'Titulo oferta 1', description: 'Descripción oferta 1', stack: 'front-end', minSalary: 200, maxSalary: 300, location:'Segovia'}),
                Offer.create({user: '627d47882db93e84a99005f5', title: 'Titulo oferta 2', description: 'Descripción oferta 2', stack: 'full-stack', minSalary: 2000, maxSalary: 3000, location:'Valladolid'}),
                Offer.create({user: '627d47882db93e84a99005fd', title: 'Titulo oferta 3', description: 'Descripción oferta 3', stack: 'full-stack', minSalary: 2200, maxSalary: 3200, location:'Salamanca'}),
                Offer.create({user: '627d47882db93e84a99005f51', title: 'Titulo oferta 4', description: 'Descripción oferta 4', stack: 'full-stack', minSalary: 1200, maxSalary: 1300, location:'Avila'}),
                Offer.create({user: '627d47882db93e84a9900565', title: 'Titulo oferta 6', description: 'Descripción oferta 6', stack: 'front-end', minSalary: 200, maxSalary: 300, location:'Segovia', active: false}),
                Offer.create({user: '627d47882db93e84a9900565', title: 'Titulo oferta 7', description: 'Descripción oferta 7', stack: 'front-end', minSalary: 200, maxSalary: 300, location:'Segovia'}),
                Offer.create({user: '627d47882db93e84a99005f4', title: 'Titulo oferta 5', description: 'Descripción oferta 5', stack: 'front-end', minSalary: 2800, maxSalary: 3800, 
                location:'Soria'}),
                Offer.create({user: '627d47882db93e84a9900565', title: 'Titulo oferta 8', description: 'Descripción oferta 8', stack: 'back-end', minSalary: 200, maxSalary: 300, location:'Segovia', active: false}),
            ])
            .then(()=> retrieveCompanyOffers('627d47882db93e84a9900565', true))
            .then(offers => {
                console.log(doc)
                expect(offers.length).to.equal(4)
            
                expect(offers[0].title).to.equal('Titulo oferta 1')
                expect(offers[1].title).to.equal('Titulo oferta 6')
                expect(offers[2].title).to.equal('Titulo oferta 7')
                expect(offers[2].title).to.equal('Titulo oferta 8')
                expect(offers[0].user).to.equal('627d47882db93e84a9900565')
                expect(offers[1].user).to.equal('627d47882db93e84a9900565')
                expect(offers[2].user).to.equal('627d47882db93e84a9900565')
                expect(offers[3].user).to.equal('627d47882db93e84a9900565')
                expect(offers[0].stack).to.equal('front-end')
                expect(offers[1].stack).to.equal('front-end')
                expect(offers[2].stack).to.equal('front-end')
                expect(offers[2].stack).to.equal('back-end')
                expect(offers[0].minSalary).to.equal(200)
                expect(offers[1].minSalary).to.equal(200)
                expect(offers[2].minSalary).to.equal(200)
                expect(offers[3].minSalary).to.equal(200)
                expect(offers[0].maxSalary).to.equal(300)
                expect(offers[1].maxSalary).to.equal(300)
                expect(offers[2].maxSalary).to.equal(300)
                expect(offers[3].maxSalary).to.equal(300)
                expect(offers[0].active).to.be(true)
                expect(offers[1].active).to.equal(false)
                expect(offers[2].active).to.equal(true)
                expect(offers[3].active).to.equal(false)

            
            })
            .catch(error => {
                expect(error).to.exist
                expect(error).to.be.instanceOf(NotFoundError)
            })
                

        })
         
    })


    after(()=> disconnect())
})