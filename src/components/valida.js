import React from "react";

function valida(){
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", "https://63c5cfbdf80fabd877f05d4d.mockapi.io/login");
    xmlhttp.send();
    const usuarios = JSON.parse(xmlhttp.response);
    console.log(usuarios);

}

export default valida;