var row ="";
function save(){
    const nombre = document.getElementById("nombre");
    const apellido = document.getElementById("apellido");
    const sele = document.getElementById("sele");

    const add = document.getElementById("add");

    row += ` <tr>
        <td>${nombre.value}</td>
        <td>${apellido.value}</td>
        <td>${sele.value}</td>

    </tr>`

    add.innerHTML = row;
    document.getElementById("nombre").value="";
    document.getElementById("apellido").value="";
    document.getElementById("sele").value="";

}

function alerte(){
    if(nombre ==""){
        alert("obligacion")
    }
}


