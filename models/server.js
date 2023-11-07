
const express = require('express');
const cors = require('cors');

const { dbConection } = require('../database/config');


const app = express();




class Server {

    constructor(){
        this.app = express();
        this.port = 8080;
    
    
        this.paths = {
            //auth: 'api/auth
            contact: '/api/contact',
            prueba: '/api/prueba'

        }

        //Conectar base de datos
        this.conectarDB();

 
        //leemos y parseamos el body
        this.app.use( express.json() );
        

    // Middlewares
      this.middlewares();

      //Rutas de mi aplicacion
      this.routes();

    }


    async conectarDB() {
        await dbConection();
      }

      
    middlewares(){

        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use(cors({
          origin: `${process.env.FRONTEND_URL}`,
          methods: ['GET', 'POST', 'PUT', 'DELETE'],
          credentials: true,
        }));
        
        
        
        



  
      }
  
      routes(){

        this.app.use(this.paths.contact, require('../routes/contact'));
        this.app.use(this.paths.prueba, require('../routes/prueba'));

      }

    listen(){
        this.app.listen(this.port, () => {
          console.log('Servidor funcionando correct');
        });
    }


}

module.exports = Server;
 