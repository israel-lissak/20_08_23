const itemsService = require('../service/service')


const getItems = async (req, res) => {
    try {
        const items = await itemsService.getItems();
        res.json(items); 
    } catch (error) {
        console.log(error);
        res.status(500).send("Internal Server Error");
    }
}


const getItemsById = async (req, res) => {
    try {
        const items = await itemsService.getItems();
        let idFound = false;
        items.forEach(element => {
            if (element.id == req.params.id) {
                res.send(element);
                idFound = true;
            } 
        });
        if (!idFound) {
            res.send('id not found')
        }
    } catch (error) {
        console.log(error);
        res.status(500).send("Internal Server Error");
    }
}


const postItem = async (req, res) => {
    try {
        itemsService.postItem(req.body);
        res.send('prodact added');
    } catch {
        console.log(error);
        res.status(500).send("Internal Server Error");
    }
}


const editItem = async (req, res) => {
    try {
        itemsService.editItem(req.body);
        res.send('prodact edited');
    } catch {
        // console.log(error);
        res.status(500).send("Internal Server Error");
    }
}
    

const deleteItem = async (req, res) => {
    try {
        itemsService.deleteItem(req.params.id);
        res.send('prodact delited');
    } catch {
        // console.log(error);
        res.status(500).send("Internal Server Error");
    }
}


module.exports = {getItems, postItem, getItemsById, editItem, deleteItem};