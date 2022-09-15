// IMPORT THE MODEL TO MAKE QUERIES TO THE DATABASE
const Author = require("../models/author.model")

//  HOLY CRUD 😱
module.exports = {
    // READALL
    findAll : (req, res) => {
        Author.find()
            .then(allDaAuthors => {
                console.log(allDaAuthors)
                res.json(allDaAuthors)
            })
            .catch(err => res.json(err))
    },
    // CREATE
    create : (req, res) => {
        //  PASS IN BODY DATA
        console.log(req.body)
        Author.create(req.body)
            .then(newAuthor => {
                // newAuthor is THE OBJECT that responses back { !😱! }
                // res.json({message: " created", newAuthor, status: ok})
                res.json(newAuthor)
            })
            // THE err OBJECT- chain (status(400))-CLIENT ERROR
            .catch(err => res.status(400).json({message:"SERVER ERROR", err}))  //CATCH VALIDTION (WONT REDIRECT if so 😄)
    },
    // READ ONE
    findOne : (req, res) => {
        console.log(req.params.id);
        // Author.find({_id:req.params.id})
        Author.findById(req.params.id)
        .then(oneAuthor => res.json(oneAuthor))
        .catch(err => res.json(err))
    },
    // UPDATE
    update : (req, res) => {
        console.log("UPDATE id:", req.params.id);
        console.log("req.body:", req.body);
        // Author.findOneAndUpdate({_id: req.params.id}, req.body, {new: true, runValidators: true})
        Author.findByIdAndUpdate({_id: req.params.id}, req.body, {new: true, runValidators: true})
        .then(updatedAuthor => res.json(updatedAuthor))
        .catch(err => res.json(err))
    },
    // DELETE
    delete: (req, res) => {
        console.log(req.params.id)
        // Author.deleteOne({_id: req.params.id})
        Author.findByIdAndDelete(req.params.id)
            .then(result => res.json(result))
            .catch(err => res.json(err))
    }
}
