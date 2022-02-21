const {
    readdir,
    readFile,
    writeFile
  } = require("fs");
  const {
    join
  } = require("path");
  const inbox = join(__dirname, "inbox");
  const outbox = join(__dirname, "outbox");
  
  const reverseText = str =>
    str
    .split("")
    .reverse()
    .join("");

    
const leerDirectorio = (inbox) =>{
    return new promise ((resolve, reject) =>{
        readdir(inbox, (error, files) => {
            if (error) reject ("Error: Folder inaccessible");
            resolve (files);
     });
    });
}

const leerArchivo = (inbox, file) => {
    return new promise ((resolve, reject) =>{
        readFile(join(inbox, file), "utf8", (error, data) => {
            if (error) reject ("Error: File error");
            resolve (data);
         });
        });
}

const escribirArchivo = (outbox, file, data) => {
    return new promesa ((resolve, reject) =>{
        writeFile(join(outbox, file), reverseText(data), error => {
            if (error) reject("Error: File could not be saved!");
            resolve (`${file} was successfully saved in the outbox!`);
    });
    });
}


async function archivoReverse() {
    let files = await leerDirectorio(inbox);
    files.forEach(file => {
        let data = await leerArchivo (inbox, file);
        await escribirArchivo (outbox, file, data);
    });
}

archivoReverse();