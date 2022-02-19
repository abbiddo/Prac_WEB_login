"use strict";

class UserStorage {
    static #users = {
        id: ["abbiddo", "imo06"],
        psword: ["1234", "123455"],
        name: ["소영", "엄마"],
    };

    static getUsers(...fields){
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
            if (users.hasOwnProperty(field)){
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});
        return newUsers;
    }
}

module.exports = UserStorage;