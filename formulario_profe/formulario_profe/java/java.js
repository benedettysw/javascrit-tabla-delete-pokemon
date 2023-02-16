var row="";
var filas = [];
function addrow (){
    const correo = document.getElementById('correo');
    const descripcion = document.getElementById('descripcion');
    const add = document.getElementById('add');
    row +=`<tr>
        <th scope="row">${correo.value}</th>
        <td>${descripcion.value}</td>
        <td><a onclick="actualizar() "class="btn btn-primary">Actualizar</a></td>
        <td><a onclick="eliminar() " class="btn btn-danger">Eliminar</a></td>
    </tr>`;
   //filas.push(row);
    add.innerHTML = row;
}




/*var row="";
//var filas = [];
function addrow (){
    const correo = document.getElementById('correo');
    const descripcion = document.getElementById('descripcion');
    const add = document.getElementById('add');
    row +=`<tr>
        <th scope="row">${correo.value}</th>
        <td>${descripcion.value}</td>
    </tr>`;
   // filas.push(row);
    add.innerHTML = row;
}
function leerarray(){
    const add = document.getElementById('add');
    filas.forEach(item => {
    console.log(item);
    });*/
    /*
    for (let index = 0; index < filas.length; index++) {
        const element = filas[index];
        console.log(element);    
    }
    */  
    






/*

var row="";
var filas = [];
function addrow() {
    const correo = document.getElementById('correo');
    const descripcion = document.getElementById('descripcion');

    row += `<tr class=${filas.length %2 == 0? "table-success": "table-danger"}>
                <th scope="row">${correo.value}</th>
                <td>${descripcion.value}</td>
                <td><a onclick="actualizar() "class="btn btn-primary">Actualizar</a></td>
                <td><a onclick="eliminar() " class="btn btn-danger">Eliminar</a></td>
              </tr>`;
    filas.push(row);
}

*/
