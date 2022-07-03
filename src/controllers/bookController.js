const { Books } = require("../database/models/index");
const cloudinary = require('../config/clouldinary')

const imageFolder = "image/";

const BookController = {
   async create(req, res) {
      const file = req.files[0];
      // const file = req.file; //para o caso de single!
      console.log(file)
      const uploadPath = await cloudinary.uploads(file.path, 'livraria')
      console.log(uploadPath);
      const newBook = await Books.create({
         ...req.body,

         // forma de upload na aplicação! ruim
         // image: imageFolder + file.filename,

         image: uploadPath.imageUrl
      });
      console.log(req.files);
      return res.status(201).json(newBook);
   },
};

module.exports = BookController;
