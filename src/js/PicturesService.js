const SimpleFileReader = require('./SimpleFileReader');

class PicturesService {
    constructor() {
        this.reader = new SimpleFileReader();
    }

    async getAvatars() {
        const path = "src/pics/avatars";
        const pics = await this.reader.readFolder(path);


        let arr = [];
        for (let pic of pics) {
            const fileContent = await this.reader.readFile(path + "/" + pic);
            const obj = {
                "pic": pic,
                "content": fileContent
            }
            arr.push(obj);
        }

        return arr;
    }

    async getBackground() {
        const pathFolder = "src/pics/background/";
        const files = await this.reader.readFolder(pathFolder);
        const randomFile = files[this.getRandomInt(0, files.length-1)];
        const fileContent = await this.reader.readFile(pathFolder + randomFile);
        console.log(randomFile);
        const obj = {
            "pic":randomFile,
            "content": fileContent
        }
        return obj;
    }

    getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}

module.exports = PicturesService;
