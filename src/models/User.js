"use strict"

const UserStorage = require("./UserStorage");

//UserStorage가 CRUD한 데이터를 가지고 검증 및 조작하는 클래스
class User {
    constructor(body) {
        this.body = body;
    }

    async login() {
        const client = this.body;
        try {
            const { id, password } = await UserStorage.getUserInfo(client.id)
            
            if(id){
                if(id === client.id && password === client.password) {
                    return {suc : true};
                }
                return {suc: false, msg: "비밀번호가 틀렸습니다."};
            }
            return {suc: false, msg: "존재하지 않는 아이디입니다."};
        } catch (err) {
            return { suc : false, mas : err };
        }
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