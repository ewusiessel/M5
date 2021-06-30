import express from "express";

const router = express.Router();


//create authors
router.post('/', async (req, res, next) => {
    try {
        
    } catch (error) {
        res.send(500).send({message: error.message})  
    }
})

//get single authors
router.get('/:id', async (req, res, next) => {
    try {
        
    } catch (error) {
        res.send(500).send({message: error.message})  
    }
})

//get authors
router.get('/', async (req, res, next) => {
    try {
        
    } catch (error) {
        res.send(500).send({message: error.message})  
    }
})

// delete author
router.delete('/:id', async (req, res, next) => {
    try {
        
    } catch (error) {
        res.send(500).send({message: error.message})  
    }
})


// update author
router.delete('/:id', async (req, res, next) => {
    try {
        
    } catch (error) {
        res.send(500).send({message: error.message})  
    }
})



export default router;
