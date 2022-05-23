let btn = document.querySelector('#btn');
const imagem = document.querySelector('#img');
const txt1 = document.querySelector('#txt1');
const txt2 = document.querySelector('#txt2');
const link = document.querySelector('#link');

btn.addEventListener('click', () =>{
    
    if(btn.value == "rue"){
        imagem.src = "./assets/img/jules.png"
        txt1.innerText = "Jules Vaughn"
        txt2.innerText = "(Hunter Schafer)"
        link.href = "https://euphoria.fandom.com/wiki/Jules_Vaughn"
        btn.value = "jules"
    } else if (btn.value == "jules"){
        imagem.src = "./assets/img/maddy.png"
        txt1.innerText = "Maddy Perez"
        txt2.innerText = "(Alexa Demie)"
        link.href = "https://euphoria.fandom.com/wiki/Maddy_Perez"
        btn.value = "maddy"
    } else if (btn.value == "maddy"){
        imagem.src = "./assets/img/cassie.png"
        txt1.innerText = "Cassie Howard"
        txt2.innerText = "(Sydney Sweeney)"
        link.href = "https://euphoria.fandom.com/wiki/Cassie_Howard"
        btn.value = "cassie"
    } else if (btn.value == "cassie"){
        imagem.src = "./assets/img/lexi.png"
        txt1.innerText = "Lexi Howard"
        txt2.innerText = "(Maude Apatow)"
        link.href = "https://euphoria.fandom.com/wiki/Lexi_Howard"
        btn.value = "lexi"
    } else if (btn.value == "lexi"){
        imagem.src = "./assets/img/kat.png"
        txt1.innerText = "Kat Hernandez"
        txt2.innerText = "(Barbie Ferreira)"
        link.href = "https://euphoria.fandom.com/wiki/Kat_Hernandez"
        btn.value = "kat"
    } else if (btn.value == "kat"){
        imagem.src = "./assets/img/nate.png"
        txt1.innerText = "Nate Jacobs"
        txt2.innerText = "(Jacobs Elordi)"
        link.href = "https://euphoria.fandom.com/wiki/Nate_Jacobs"
        btn.value = "nate"
    } else if (btn.value == "nate"){
        imagem.src = "./assets/img/fezco.png"
        txt1.innerText = "Fezco"
        txt2.innerText = "(Angus Cloud)"
        link.href = "https://euphoria.fandom.com/wiki/Fezco"
        btn.value = "fezco"
    } else {
        imagem.src = "./assets/img/rue.png"
        txt1.innerText = "Rue Bennett"
        txt2.innerText = "(Zendaya)"
        link.href = "https://euphoria.fandom.com/wiki/Rue_Bennett"
        btn.value = "rue"
    }
})