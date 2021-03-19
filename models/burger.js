const orm = require("../config/orm");

const burger = {
    all: cb => {
        orm.selectAll('burgers', res => {
            cb(res)
        })
    },

    insert: (addOn, cb) => {
        orm.insertOne('burgers', 'burger_name', addOn, res =>{
            cb(res)
        })
    },

    update: (colValue, id, cb) =>{
        orm.updateOne(colValue, id, res => {
            cb(res)
        })
    }

};

module.exports = burger;
