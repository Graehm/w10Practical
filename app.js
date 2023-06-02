const express = require('express')
const app = express()
const PORT = 3000

app.use(express.json());

// Index get
app.get('/items', (req, res) => {
    try {

    } catch (error) {

    }
})
// New get
// Delete delete
app.delete('/items/:id', async (req, res) => {
    try {
        
    } catch (error) {
        
    }
})
// Update put 
// Create post
app.post('/items', (req, res) => {
    try {
        
    } catch (error) {
        
    }
})
// Edit get
// Show  get
app.get('/items/:id', async (req, res) => {
    try {
        
    } catch (error) {
        
    }
})




app.listen(PORT, () => {
    console.log(`Server is Serving on port ${PORT}`)
})