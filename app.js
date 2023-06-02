const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

let notBooks = [];
// Index get
app.get('/notBooks', (req, res) => {
    try {
        res.json(notBooks)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
})
// New get
// Delete delete
app.delete('/notBooks/:id', async (req, res) => {
    try {
        const index = notBooks.findIndex(notABook => notABook.id === parseInt(req.params.id))
        if(index === -1) return
    } catch (error) {
        res.status(400).json({message: error.message})
    }
})
// Update put 
app.put('/notBooks/:id', async (req, res) => {
    try {
        const notABook = notBooks.find(notABook => notABook.id === parseInt(req.params.id))
    } catch (error) {
        res.status(400).json({message: error.message})
    }
})
// Create post
app.post('/notBooks', (req, res) => {
    try {
        notBooks.push(req.body)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
})
// Edit get
// Show  get
app.get('/notBooks/:id', async (req, res) => {
    try {
        const notABook = notBooks.find(notABook => notABook.id === parseInt(req.params.id))
    } catch (error) {
        res.status(400).json({message: error.message})
    }
})




app.listen(PORT, () => {
    console.log(`Server is Serving on port ${PORT}`)
})