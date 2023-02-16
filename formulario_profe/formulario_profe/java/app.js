function validar(){

    //clacular el objeto
    const inputedad = document.getElementById("edad");
    //alert("el dato es "+inputedad.value)

    //variable mensaje
   let edad = inputedad.value;
    //if and else 

    if (edad > 17){
        alertify.success('usted es mayor');
        
    }else {
        alertify.error('usted es menor');
    }  
}
    

function pareimpar(){
    const input = document.getElementById("edad");
    let tamanio = input.value
    let par = 0;
    let impar = 0;

    for (let index = 0; index < tamanio; index++) {
        if (index % 2==0){
            par = par + 1;
        }else {
            impar = impar + 1;
        }
    }
    console.log(par)
    console.success("los pares son "+par);
    alertify.warning("los impares son "+impar);
}
        

function pintar(){

    const pintar = document.getElementById("pintar");
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    let fLen = fruits.length;

   let text = "<ul>";
   for (let i = 0; i < fLen; i++) {
   text += "<li>" + fruits[i] + "</li>";
  }
   text += "</ul>";

   pintar.innerHTML = ul;

   }

   



