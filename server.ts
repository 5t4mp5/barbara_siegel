import * as express from 'express';
const app: express.Application = express();
import * as path from 'path';

const port: number | string = process.env.PORT || 3000;

app.get('/app.js', (req: express.Request, res: express.Response) =>
  res.sendFile(path.join(__dirname, 'dist', 'bundle.js'))
);

app.get('/', (req: express.Request, res: express.Response) =>
  res.sendFile(path.join(__dirname, 'index.html'))
);

app.listen(port, () => console.log(`listening on port ${port}`));
