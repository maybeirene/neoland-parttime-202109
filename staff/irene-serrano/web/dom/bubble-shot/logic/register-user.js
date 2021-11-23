function registerUser (username, email, password, callback ) {
    if (typeof email !== 'string') throw new TypeError (email + ' is not string')
    if(!email.trim()) throw new Error ('email is empty or blank')

    if(typeof username !== 'string') throw new TypeError (password + ' is not string')
    if (!username.trim()) throw new Error ('username is empty or blank')

    if (typeof password !== 'string') throw new TypeError(password + ' is not string')
    if (password.trim().length < 8) throw new Error( password + ' is less than 8 characters')
    
    
    
    if (typeof callback !== 'function') throw new TypeError(callback + ' is not a function') 


    var xhr = new XMLHttpRequest

    xhr.open('POST','https://b00tc4mp.herokuapp.com/api/v2/users')

    xhr.addEventListener('load', function(){
        if(this.status === 409 || this.status === 400){

            var res = JSON.parse(this.responseText)
            var error = res.error

            callback(new Error(error))

        }else if (this.status === 201) {
            callback(null)
        }
    })

    xhr.setRequestHeader('Content-type', 'application/json')


    var data = {}

    data.email = email;
    data.username = username;
    data.password = password;

    var json = JSON.stringify(data)

    xhr.send(json)

}





