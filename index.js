const init_firebase = require('./src/init/_init.js');
const random = require('./src/devstools/random');
const looper = require('./src/devstools/loop');

const addToDocs = require('./src/set/add_to_docs.js');
const updateDocs = require('./src/set/update_by_id');
const getDocsByID = require('./src/get/get_docs_by_id');
const getAllDocs = require('./src/get/get_all_docs');
class FireBox {
    constructor(admin) {
        this.admin = admin;
    }
    add({ path, key, value }) {
        return new addToDocs(this.admin, path).save(key, value);
    }
    updateByID({ path, key, childObject, childArrayAdd, childArrayRemove, value }) {
        return new updateDocs(this.admin, path).save({ key, childObject, childArrayAdd, childArrayRemove, value });
    }
    getByID({ path, key }) {
        return new getDocsByID(this.admin, path).get(key);
    }
    getAll({ path }) {
        return new getAllDocs(this.admin, path).get();
    }
}
let path = { collPath: 'user' };
let test = new FireBox(init_firebase());

let key = random();
let value = random();
// test.add({ path, key, value })
//     .then(data => { console.log(data) })

// looper(3, () => {
//     let key = random();
//     let value = random();
//     test.add({ path, key, value })
// });

// test.getByID({ path, key: 'aq8ZN' })
//     .then(data => { console.log(data) })
// test.getAll({ path })
    //     .then(data => { console.log(data) })
    // test.updateByID({ path, key: 'NR9eA', childObject: 'age', value: "saks" })
    // test.updateByID({ path, key: 'NR9eA', childArrayAdd: 'wifes', value: "sa2k" })
    // test.updateByID({ path, key: 'NR9eA', childArrayRemove: 'wifes', value: "sakpokl" })
    // .then(data => { console.log(data) })
// module.exports = FireBox;