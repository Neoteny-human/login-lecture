"use strict"

const UserStorage = require("./UserStorage");


class User {
    constructor(body) {
        this.body = body;
    }

    async login() {
        const client = this.body;
        const {id, password} = await UserStorage.getUserInfo(client.id)
        
        if(id){
            if(id === client.id && password === client.password) {
                return {suc : true};
            }
            return {suc: false, msg: "비밀번호가 틀렸습니다."};
        }
        return {suc: false, msg: "존재하지 않는 아이디입니다."};
    }

    async register(){
        const client = this.body;
        try{
        const response = await UserStorage.save(client);
        return response;
        } catch (err) {
            return { suc: false, msg: err};
        }
    }
}

module.exports = User;