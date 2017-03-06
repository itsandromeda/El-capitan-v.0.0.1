var profiles = [ {
        nombre : "Meche",
        apellido : "Zubieta",
        promocion : "1era. promoción",
        estado : "Trabajando"
    }, {
        nombre : "Arabela",
        apellido : "Rojas",
        promocion : "2era. promoción",
        estado : "Trabajando"
    }, {
        nombre : "María",
        apellido : "Rosán",
        promocion : "2era. promoción",
        estado : "Trabajando"
    }, {
        nombre : "Guadalupe",
        apellido : "Racio",
        promocion : "3era. promoción",
        estado : "Trabajando"
    }, {
        nombre : "Sara",
        apellido : "Casa",
        promocion : "3era. promoción",
        estado : "Trabajando"
    }, {
        nombre : "Daniela",
        apellido : "Durán",
        promocion : "4ta. promoción",
        estado : "Trabajando"
    }, {
        nombre : "Michelle",
        apellido : "Seguil",
        promocion : "4ta. promoción",
        estado : "Trabajando"
    }, {
        nombre : "Diana",
        apellido : "Navarro",
        promocion : "5ta. promoción",
        estado : "Trabajando"
    } ],
    perfil,
    i,
    p = document.getElementById("students");

function print() {
    "use strict";
    var perfiles = "";
    for (i = 0; i < profiles.length; i += 1) {
        perfiles += "<div style='float:left;background-color:#F8A819'>" + "<ul style='list-style: none'>" +
                "<li> Nombre: " + profiles[i].nombre + "</li>" +
                "<li> Apellido: " + profiles[i].apellido + "</li>" +
                "<li> Promoción: " + profiles[i].promocion + "</li>" +
                "<li> Estado: " + profiles[i].estado + "</li><br></ul>" + "</div>";
    }
    p.innerHTML += perfiles;
}
print();