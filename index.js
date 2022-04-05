const express = require('express');
const router = express.Router();
const PORT = 3002;

const app = express();
app.use(express.json());


var idUser = 3;
const dataUsers = [ { id: 1, name: 'Jason', age: 21 }, { id: 2, name: 'Jackey', age: 25 } ];

router.get('/', (req, res) => {
    res.status(200).json({ message: `Request success, Response from localhost:${PORT}` });
});

router.get('/users', (req, res) => {
    res.status(200).json(dataUsers);
});

router.post('/user/create', (req, res) => {
    dataUsers.push({ id: idUser++, name: req.body.name, age: req.body.age });
    res.status(200).json( {message: `Add user success` });
});

app.use('/', router);
app.listen(PORT, () => { console.log(`Server is running on port ${PORT}`); });