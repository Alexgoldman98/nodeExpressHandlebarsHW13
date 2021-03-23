const orm = require("../config/orm");

const burger = {
    all: cb => {
        orm.selectAll('burgers', res => {
            cb(res)
        })
    },

    insert: (addOn, cb) => {
        console.log('hello')
        orm.insertOne('burgers', 'burger_name', addOn, res =>{
            cb(res)
        })
    },

    update: (objColVals, colValue, id, cb) =>{
        console.log('hello')
        orm.updateOne(objColVals, colValue, id, res => {
            cb(res)
        })
    }

};

module.exports = burger;
