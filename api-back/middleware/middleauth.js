import express from 'express';
import registerHandler from './handlers/registerHandler';

const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.post('/api/register', registerHandler);


const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

