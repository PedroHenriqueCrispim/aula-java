//let chave = 'item1';
//localStorage.setItem(chave,'Pedro');


//let leritem= localStorage.getItem(chave);

//console.log(leritem)

//let array =[1,2,3,4,5]
//localStorage.setItem("lista",array)

//localStorage.clear()





//Criar lista de usuarios
let listaDados=[];
//objeto basico(construtor)
function Campos(campo1){
    this.campo1 = campo1;
}

//disparar o botão com DOM
const btnEnviar = document.querySelector(`#btnSubmit`)

// evento do click

btnEnviar.addEventListener(`click`,()=>{
    const inputCampo1 = document.querySelector("#campo1");
    //instanciando o objeto (construtor)
    let info = new Campos(inputCampo1.value)
    listaDados.push(info)
    localStorage.setItem("dados",JSON.stringify(listaDados))
}) 