const fs = require("fs");

class SimpleFileReader {
    constructor() {

    }

    async readFile(filePath) {
        let content = fs.readFileSync(filePath, "base64");
        return content;
    }

    async readFolder(folderPath) {
        console.log('inside read method')
        let files = fs.readdirSync(folderPath);
        console.log('read this: ' + files);
        return files;
    }
}

module.exports = SimpleFileReader;
