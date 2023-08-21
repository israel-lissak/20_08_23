const itemDal = require('../dal/dal');


const getItems = async (req, res) => {
    try {
        const items = await itemDal.getItems();
        return items;
    } catch (error) {
        console.log(error);
        throw error
    }
};


const postItem = async (newItem) => {
    try {
        const items = await itemDal.getItems();
        items.push(newItem)
        itemDal.postItem(items);
    } catch (error) {
        console.log(error);
        throw error
    }
};


const editItem = async (newItem) => {
    try {
        const items = await itemDal.getItems();

        const updatedItems = items.map(element => {
            if (element.id === newItem.id) {
                return newItem;
            } else {
                return element;
            }
        });

        itemDal.postItem(updatedItems);

    } catch (error) {
        console.log(error);
        throw error
    }
};


const deleteItem = async (itemId) => {
    try {
        const items = await itemDal.getItems();

        const updatedItems = items.map(element => {
            if (element.id == itemId) {
                
            } else {
                return element;
            }
        });

        itemDal.postItem(updatedItems);

    } catch (error) {
        console.log(error);
        throw error
    }
};


module.exports = {getItems, postItem, editItem, deleteItem};
