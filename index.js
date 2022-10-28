const express = require('express');
const app = express();

const users = [
    {id: 1, slackUsername: 'Patrick Vingi', backend: 'true', age: 28, bio: "My name is Patrick Vingi, I am a Engineer to be."},
    {id: 2, slackUsername: 'Pat', backend: 'true', age: 28, bio: "My name is Patrick Vingi, I am a Engineer to be."}
];

app.get('/', (req, res) =>{
    res.send('Hello Tripa !');
});

app.get('/api/users', (req, res) =>{
    res.send(users);
});

app.get('/api/users/:id', (req, res) =>{
    const user = users.find(c => c.id === parseInt(req.params.id));
    if (!user) res.status(404).send('The specified users was not found.');
    res.send(user);
});


//PORT

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));