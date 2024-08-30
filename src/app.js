//Función agnostica autoconvocada
//Agnostica porque no tiene nombre
//Autoejecutada porque se ejecuta con los parentesis
import { envs } from'./config/env.js';
import {startServer}from './server/server.js'
const main = ()=>{

   startServer({
    port: envs.PORT,
    public_path: envs.PUBLIC_PATH
   })
}


(async ()=> {
    main()
})()

