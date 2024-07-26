// Create web server
// 1. Load express module
// 2. Create an instance of express
// 3. Create a route for GET request
// 4. Create a route for POST request
// 5. Create a route for PUT request
// 6. Create a route for DELETE request
// 7. Start the server
// 8. Test the server using Postman

const express = require('express');
const app = express();

app.use(express.json());

const comments = [
    {id: 1, comment: 'Comment 1'},
    {id: 2, comment: 'Comment 2'},
    {id: 3, comment: 'Comment 3'}
];

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/api/comments', (req, res) => {
    res.send(comments);
});

app.post('/api/comments', (req, res) => {
    const comment = {
        id: comments.length + 1,
        comment: req.body.comment
    };
    comments.push(comment);
    res.send(comment);
});

app.put('/api/comments/:id', (req, res) => {
    const comment = comments.find(c => c.id === parseInt(req.params.id));
    if (!comment) return res.status(404).send('The comment with the given ID was not found.');

    comment.comment = req.body.comment;
    res.send(comment);
});

app.delete('/api/comments/:id', (req, res) => {
    const comment = comments.find(c => c.id === parseInt(req.params.id));
    if (!comment) return res.status(404).send('The comment with the given ID was not found.');

    const index = comments.indexOf(comment);
    comments.splice(index, 1);

    res.send(comment);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
