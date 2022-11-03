/* ---------------------- MODULOS IMPORTADOS ------------------------ */
import * as dotenv from 'dotenv';

/* ----------------- CONF DE VARIABLES DE ENTORNO ------------------- */
dotenv.config();

/* -------------------- DECLARACIÓN DE VARIABLES -------------------- */
let msgsDao;
let productsDao;
let usersDao;

/* ------------------- DECLARACIÓN DE DB ELEGIDA -------------------- */
switch (process.env.DB_TYPE) {
    case 'mongodb':
        const { default: MessagesDaoMongoDB } = await import('./messages/MessagesDaoMongoDB.js');
        const { default: ProductsDaoMongoDB } = await import('./products/ProductsDaoMongoDB.js');
        const { default: UsersDaoMongoDB } = await import('./users/UsersDaoMongoDB.js');
        
        msgsDao = new MessagesDaoMongoDB();
        productsDao = new ProductsDaoMongoDB();
        usersDao = new UsersDaoMongoDB();

        break;

    default:
        const { default: MessagesDaoFile } = await import('./messages/MessagesDaoFile.js');
        const { default: ProductsDaoFile } = await import('./products/ProductsDaoFile.js');
        const { default: UsersDaoFile } = await import('./users/UsersDaoFile.js');

        msgsDao = new MessagesDaoFile();
        productsDao = new ProductsDaoFile();
        usersDao = new UsersDaoFile();

        break;
}

/* ---------------------- MODULOS EXPORTADOS ------------------------ */
export { msgsDao, productsDao, usersDao };
