"use strict";

//DOM -> Document Object Model
const id = document.querySelector("#id"),
    password = document.querySelector("#psword"),
    loginBtn = document.querySelector("button");

console.log(id);

loginBtn.addEventListener("click", login);

function login(){
    const req={
        id: id.value,
        psword: psword.value,
    };
}
