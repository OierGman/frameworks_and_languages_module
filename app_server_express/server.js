const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 8002;

app.use(cors());

app.get('/', (req, res) => {
    res.sendFile('client.html', {root: __dirname})
  })

app.get('/api/v1/items', (req, res) => {
    const items = [
        // Example data, replace with your actual data
        { id: 1, user_id: 'user1', lat: '12.345', lon: '67.890', image: 'http://placekitten.com/100/100', keywords: 'kitten', description: 'A cute kitten' },
        { id: 2, user_id: 'user2', lat: '23.456', lon: '78.901', image: 'http://placekitten.com/200/200', keywords: 'kitten', description: 'Another cute kitten' },
    ];
    res.json(items);
});

app.post('/item', express.json(), (req, res) => {
    const newItem = req.body;
    items.push(newItem);
    res.json(newItem);
});

app.delete('/item/:id', (req, res) => {
    const itemId = req.params.id;
    items = items.filter(item => item.id !== parseInt(itemId));
    res.json({ message: 'Item deleted successfully' });
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
});

let items = [];