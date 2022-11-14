"use strict";

// const UserStorage = require("../../models/UserStorage");
const User = require("../../models/User");

const output = {
    home: (req, res) => {
        res.render("home/index");
    },
    login: (req, res) => {
        res.render("home/login");
    },
    register: (req, res) => {
        res.render("home/register");
    },
};



const process = {
    login: async(req, res) => {
        const user = new User(req.body);
        const response = await user.login();
        return res.json(response);
        // return res.json(response);
        // const id = req.body.id,
        //     password = req.body.password;

        // const users = UserStorage.getUsers("id", "password");

        // const response = {};
        // if(users.id.includes(id)){
        //     const idx = users.id.indexOf(id);
        //     if(users.password[idx] === password){
        //         response.suc = true;
        //         return res.json(response);
        //     }
        // }

        // response.suc = false;
        // response.msg = "로그인 실패";
        // return res.json(response);
    },
    register: async(req, res) => {
        const user = new User(req.body);
        const response = await user.register();
        return res.json(response);
    },
};


module.exports = {
    output,
    process,
};
//{hello: hello, login: login} -> 생략.