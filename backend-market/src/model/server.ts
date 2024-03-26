import express from 'express';
import routerProduct from '../router/product';
import routerImagenProducto from '../router/imagenProducto'
import cors from 'cors';
import db from '../bd/connetion';
class Server {
  private app: express.Application;
  private port: string;

  constructor() {
    this.app = express();
    this.port = process.env.PORT || '3001';
    //this.port = '3005'
    this.listen();
    this.midlewares();
    this.routes();
    this.dbConnet();
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Aplicación inicializada en el puerto ${this.port}`);
    });
  }

  routes() {
    this.app.get('/', (req: express.Request, res: express.Response) => {
      res.json({
        msg: 'API Working',
      });
    });
    this.app.use('/api/producto', routerProduct);
    this.app.use('/api/imagenProducto', routerImagenProducto);



  }

  midlewares() {
    // Parseamos el body
    this.app.use(express.json());

    // Cors
    this.app.use(cors());
  }

  async dbConnet() {
    try {
      db.authenticate();
      console.log('Bd conectada');
    } catch (error) {
      console.log('Error al conectarse a la bd');
      console.log(error);
    }
  }
}

export default Server;
