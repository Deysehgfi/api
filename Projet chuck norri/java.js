document.addEventListener('DOMContentLoaded',()=>{
    //addEventlisten adiciona evento a document //()=>{} função anonima, função de callback
    const url = "https://api.chucknorris.io/jokes/categories"
    fetch(url)// fetch= função que é uma promessa 
    .then((response)=>{ 
        if(!response.ok/*ok = codigo 200*/){
            throw new Error('Erro ao receber os dados')
        }
        return response.json()
    })
    .then((data)=>{
        gerarCategorias(data)
    })
    .catch((err)=>console.error(err))
});

function gerarCategorias(categorias){
    //parâmetro categorias = array de categorias
    //console.log(categorias)
    const select = document.getElementById('select')
    categorias.map((categoria)=>{//map estrutura de repetição que ultilizar para listar
      const options = document.createElement('option')
      options.innerHTML = `${categoria}`
      options.value=categoria

      select.appendChild(options)
    })
}


const btn = document.getElementById('btn')
btn.addEventListener('click', ()=>{
    const select = document.getElementById("select").value;
    const url = `https://api.chucknorris.io/jokes/random?category=${select}`
    fetch(url)
    .then((response)=>{
        if(!response.ok){
            throw new Error('Erro ao selecionar a piada')
        }
        return response.json()
    })
    .then((data)=>{
        gerarPiadas(data)
    })
    .catch((err)=>console.error(err))
});

function gerarPiadas(piada){
        // console.log(piada)
        const joke = document.getElementById('joke')
        joke.innerHTML = piada.value
}