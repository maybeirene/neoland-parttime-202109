require('dotenv').config()
const { mongoose: { connect, disconnect }, models: {User} } = require('data')
const { expect } = require('chai')
const bcrypt = require('bcryptjs')

const registerUser = require('./registerUser')

const { env: { MONGODB_URL } } = process

describe('registerUser', ()=>{
    before(()=> connect(MONGODB_URL))
    //envolvemos cada caso del test en un 'it'
    it('should succeed when user does not exist', ()=> {
        return User.deleteMany()
            .then(()=> registerUser(1, 'Juanito', 'juan@juan.juan', '123456789', 'tambien soy majisimo', 'front-end', null, null))
            .then(()=> User.findOne({ email: 'juan@juan.juan'}))
            .then(user => {
                
                expect(user).to.exist
                expect(user.role).to.equal(1)
                expect(user.name).to.equal('Juanito')
                expect(user.email).to.equal('juan@juan.juan')

                expect(bcrypt.compareSync('123456789', user.password)).to.be.true
                expect(user.description).to.equal('tambien soy majisimo')
                expect(user.stack).to.equal('front-end')
                expect(user.location).to.equal(null)
            })
    })

    if('should fail when user already exist', ()=> {
        return User.deleteMany()
            .then(()=> {
                const hash = bcrypt.hashSync('123456789', 10)

                return User.create({name: 'Segundo Luis', email: 'do@do.do', password: hash, description: 'segundo user', stack: 'full-stack' })
            })
            .then(()=> registerUser(1,'Segundo Luis','do@do.do','123456789', 'segundo user', 'full-stack' ))
            .then(()=> {
                throw new Error()
            })
    })


    after(()=> disconnect())
})