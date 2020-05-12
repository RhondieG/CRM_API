import express from 'express';
import routes from './src/routes/crmRoutes';

const app = express();
const PORT = 5000;

routes(app);

app.get('/',(req, res) =>
     res.send(`Node and express server running on port ${PORT}`)
     );

app.listen(PORT, () =>
     console.log(`Your server is running on port ${PORT}`)
     );