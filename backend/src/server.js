import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import { connectMongoDB } from './db/connectMongoDB.js';
import { logger } from './middleware/logger.js';
import shopsRoutes from './routes/shopsRoutes.js';
import productsRoutes from './routes/productsRoutes.js';
import orderRoutes from './routes/orderRoutes.js';

import { notFoundHandler } from './middleware/notFoundHandler.js';
import { errorHandler } from './middleware/errorHandler.js';
import { errors } from 'celebrate';

const app = express();
const PORT = process.env.PORT ?? 5000;

app.use(logger);
app.use(express.json());
app.use(cors());

app.use('/shops', shopsRoutes);
app.use('/products', productsRoutes);
app.use('/orders', orderRoutes);

app.use(notFoundHandler);
app.use(errors());
app.use(errorHandler);

await connectMongoDB();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
