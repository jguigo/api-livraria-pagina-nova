const cloudinary = require("cloudinary");

cloudinary.config({
   cloud_name: process.env.CLOUDINARY_NAME,
   api_key: process.env.CLOUDINARY_KEY,
   api_secret: process.env.CLOUDINARY_SECRET,
});

//metodo que vai executar o upload no cloudinary
//esperar uma promessa
//configurar o tipo de resultado que queremos

//exports assim, exporta!!!
exports.uploads = (file, folder) => {
   return new Promise((resolve) => {
      cloudinary.uploader.upload(
         file,
         (cloudinaryReturn) => {
            resolve({
               imageUrl: cloudinaryReturn.url,
            });
         },
         {
            folder: folder, //se tiver uma pasta dentro da outra, pode passar => "/pasta" + folder
            resource_type: "auto",
         }
      );
   });
};
