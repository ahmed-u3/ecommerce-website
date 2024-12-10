import express from 'express';
import { addProduct,removeProducts,singleProducts,listProducts } from '../controllers/productController.js';
import upload from '../middleware/multer.js';

const productRouter = express.Router();

// Configure multer for multiple files
const uploadFields = upload.fields([
    { name: 'image1', maxCount: 1 },
    { name: 'image2', maxCount: 1 },
    { name: 'image3', maxCount: 1 },
    { name: 'image4', maxCount: 1 }
]);


productRouter.post('/remove',removeProducts);
productRouter.post('/single',singleProducts);
productRouter.get('/list',listProducts);
productRouter.post('/add', uploadFields, addProduct);
export default productRouter;
