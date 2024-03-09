import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('tienda_tecnologica_ucompensar', 'root', 'admin', {
    host: 'localhost',
    dialect: 'mysql',
    logging: false
  });

  export default sequelize;