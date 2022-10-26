import { Express, Request, Response } from 'express';
import express from 'express'

const app: Express = express();
const port = process.env.PORT || 5000;

app.get('/', (req: Request, res: Response) => {
  res.send('Deployed to cyclic using Express + TypeScript Server');
});

app.listen(port, () => {
  console.log(`Deployed to cyclic`);
});