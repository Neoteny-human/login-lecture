"use strict";


const { query } = require("express");
const db = require("../config/db");

//DB를 CRUD하는 역할을 수행하는 클래스
class UserStorage {

    static getUserInfo(id) {
        return new Promise((resolve, reject) => {
            const query = "select * from users where id = ?;";
            db.query(query, [id], (err, data) => {
                if (err) reject(`${err}`);
                //RowDataPacket만 전달[0]
                resolve(data[0]);
            });
        });
    }


    static async save(userInfo) {
        return new Promise((resolve, reject) => {
            const query = "insert into users(id, name, password) values(?,?,?);";
            db.query(query, 
                [userInfo.id, userInfo.name, userInfo.password],
                (err) => {
                if (err) reject(`${err}`);
                resolve({suc:true});
            });
        });
    }
}

module.exports = UserStorage;