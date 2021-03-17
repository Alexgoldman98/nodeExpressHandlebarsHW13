const orm = require("../config/orm");

const burger = {
    all: cb => {
        orm.selectAll('burgers', res => {
            cb(res)
        })
    },

    insert: cb => {
        orm.insertOne('burgers', 'burger_name', addOn, res =>{
            cb(res)
        })
    },

    update: cb =>{
        orm.updateOne(colValue, id, res => {
            cb(res)
        })
    }

};

module.exports = burger;
