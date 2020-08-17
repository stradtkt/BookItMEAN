const express = require('express');
const router = express.Router();
const {check, validationResult} = require('express-validator/check');
const auth = require('../../middleware/auth');
const Book = require('./../../models/Book');

router.post('/', [
    auth,
    check('title', 'Title is required').not().isEmpty(),
    check('description', 'Description is required').not().isEmpty(),
    check('pages', 'Pages is required').not().isEmpty(),
    check('published', 'Published is required').not().isEmpty()
], async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()});
    }
    try {
        const newBook = new Book({
            title: req.body.title,
            description: req.body.description,
            pages: req.body.pages,
            published: req.body.published
        });
        const book = await newBook.save();
        res.json(book);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

router.get('/', auth, async (req, res) => {
    try {
        const books = await Book.find().sort({published: -1});
        res.json(books);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

router.get('/:id', auth, async (req, res) => {
    try {
        const book = await Book.findById(req.params.id);
        if(!book) {
            return res.status(404).json({msg: 'Book not found'});
        }
        res.json(book);
    } catch (err) {
        console.error(err.message);
        if(err.kind === 'ObjectId') {
            return res.status(404).json({msg: 'Book not found'});
        }
        res.status(500).send('Server Error');
    }
});

