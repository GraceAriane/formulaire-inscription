const buttonconnexion = document.querySelector(".action-connexion")
const buttoninscription = document.querySelector(".action-inscription")


buttonconnexion.addEventListener('click',(e)=>{
    const inscription = document.querySelector(".inscription")
    const connexion = document.querySelector(".connexion")

    inscription.style.display="none"
    connexion.style.visibility="visible"

    buttonconnexion.style.cssText=`
        background-color: rgb(30, 115, 190);
        color: white;
        font-weight: 700;
        cursor: default;
    `
    
    buttoninscription.style.cssText=`
        background-color: #c4c4c4;
        color: rgb(21,25,21);
        background-color:  rgb(224,224,224);
        font-weight: 300;
        cursor: pointer;
    `


    e.preventDefault()
})

buttoninscription.addEventListener('click',(e)=>{
    const inscription = document.querySelector(".inscription")
    const connexion = document.querySelector(".connexion")

    inscription.style.display="flex"
    connexion.style.visibility="hidden"

    buttoninscription.style.cssText=`
        background-color: rgb(30, 115, 190);
        color: white;
        font-weight: 700;
    `
    
    buttonconnexion.style.cssText=`
        background-color: #c4c4c4;
        color: rgb(21,25,21);
        background-color:  rgb(224,224,224);
    `

    buttoninscription.classList.add(".cursor")
    buttonconnexion.classList.remove(".cursor")

    e.preventDefault()
})

// const connexionInputs = document.querySelectorAll(".connexion input")
// connexionInputs.addEventListener('input',(input)=>{
//     if(input.value.length>1){
//         input.style.backgroundColor="rgb(232,240,254);"
//     }
// })