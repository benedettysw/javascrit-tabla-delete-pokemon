const person = {
    //atributes
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    //metodos
    fullName : function() {  
      return this.firstName + " " + this.lastName;
    }
  };

  function nombre(){
    document.getElementById("ejemplo").innerHTML = person.fullName();
  }



  const person1 = {
    //atributes
    color : "",  
    id  : 123,
    capacidad : "10 personas",
    //metodos
      fullName: function() {  
      return this.capacidad +" "+this.id;
    }
  };

  function mostrasilla (){
    document.getElementById("idsilla").innerHTML = person1.fullName();
  }



  //objeto dentro de otro objeto

  const myobj = {
    nombre : "miguel",
    edad: "21",
    cars:{
        carro1:"ford",
        carro2:"bwm",
        carro3:"fiat",

    }
   
    }

    function nombreb (){
document.getElementById("nombre").innerHTML = myobj.cars.carro1;
    
  }


  function recoger (){
    for (let i in myobj){
    if (i == "cars"){
        for(let r in myobj[i]){
            alert(myobj[i][r])
        }
        }
    }
  }
