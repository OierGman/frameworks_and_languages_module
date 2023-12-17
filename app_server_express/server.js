const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 8002;

app.use(cors());

app.get('/', (req, res) => {
    res.sendFile('client.html', {root: __dirname})
  })

// Handle API requests
app.get('/api/v1/items', (req, res) => {
    // Implement logic to fetch and return items from your database or storage
    const items = [
        // Example data, replace with your actual data
        { id: 1, user_id: 'user1', lat: '12.345', lon: '67.890', image: 'http://placekitten.com/100/100', keywords: 'kitten', description: 'A cute kitten' },
        { id: 2, user_id: 'user2', lat: '23.456', lon: '78.901', image: 'http://placekitten.com/200/200', keywords: 'kitten', description: 'Another cute kitten' },
    ];
    res.json(items);
});

app.post('/api/v1/item', express.json(), (req, res) => {
    // Implement logic to add a new item to your database or storage
    const newItem = req.body;
    // Assuming you have an array to store items
    // Replace this with your actual data storage mechanism
    items.push(newItem);
    res.json(newItem);
});

app.delete('/api/v1/item/:id', (req, res) => {
    // Implement logic to delete an item with the given ID from your database or storage
    const itemId = req.params.id;
    // Assuming you have an array to store items
    // Replace this with your actual data storage mechanism
    items = items.filter(item => item.id !== parseInt(itemId));
    res.json({ message: 'Item deleted successfully' });
});

// Serve the index.html file for any other route
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
app.listen(PORT, () => {
});

// Example array to store items (replace with your actual data storage mechanism)
let items = [];