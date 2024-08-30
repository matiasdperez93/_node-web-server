//Función agnostica autoconvocada
//Agnostica porque no tiene nombre
//Autoejecutada porque se ejecuta con los parentesis
const { envs } = require('./config/env.js')
const {startServer} = require('./server/server.js')
const main = ()=>{

   startServer({
    port: envs.PORT,
    public_path: envs.PUBLIC_PATH
   })
}


(async ()=> {
    main()
})()

