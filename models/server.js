
const express = require('express');
const cors = require('cors');

const { dbConection } = require('../database/config');


const app = express();




class Server {

    constructor(){
        this.app = express();
        this.port = process.env.PORT;
    
    
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

     /* this.listen(); */
    }


    async conectarDB() {
        await dbConection();
      }

      
    middlewares(){
        //Cors
/*         this.app.use(cors({
          origin: `${process.env.FRONTEND_URL}`, // Reemplaza con la URL de tu frontend
          credentials: true, // Permite enviar y recibir cookies
        })); */
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
          console.log(`Example app listening at http://localhost:${this.port}`);
        });
    }


}

module.exports = Server;
 