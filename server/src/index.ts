import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import 'dotenv-safe/config';
import applicantRouter from './routes/applicantRouter';

const main = async () => {
  const app = express();

  await mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  });

  app.use(
    cors({
      origin: process.env.CORS_ORIGIN,
      credentials: true,
    }),
  );

  app.use('', applicantRouter);

  const port = process.env.PORT ? parseInt(process.env.PORT) : 4000;

  app.listen(port, () => {
    console.log('server started on port', port);
  });
};

main().catch((err) => {
  console.error(err);
});
