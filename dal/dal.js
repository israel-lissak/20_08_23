const itemsDB = require("c:/Users/islis/OneDrive/שולחן העבודה/js_kodcode/20_08_23/data");
const jsonfile = require('jsonfile')


const getItems = () => {
    return jsonfile.readFile("./data.json")
}


const postItem = async (newData) => {
    jsonfile.writeFile("./data.json", newData)
    .then(res => {
        console.log('Write complete')
      })
      .catch(error => console.error(error))
}


module.exports = {getItems, postItem};