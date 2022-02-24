const { readdir, readFile, writeFile } = require('fs').promises;
const { join } = require('path');
const inbox = join(__dirname, 'inbox');
const outbox = join(__dirname, 'outbox');

const reverseText = str => str.split('').reverse().join('');

const promesasArchivo = async() => {
    try {
        let files = await readdir(inbox).catch(e => console.log("Error: Folder inaccessible: ", e.message));
        
        for (let file of files) {
            let archivoIn = join(inbox, file)
            let archivOut = join(outbox, file)
            let text = await readFile(archivoIn, 'utf8').catch(e => console.log('Error: File error: ', e.message));
            let textoReverse = reverseText(text)
            await writeFile(archivOut, textoReverse).catch(e => console.log('Error: File could not be saved!: ', e.message));
            console.log(`${file} was successfully saved in the outbox!`)
        }
    } catch (err) {
        console.error(err);
    }
}

promesasArchivo();