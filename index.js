let name = document.querySelector('.inp1');
let adresse = document.querySelector('.add');
let email = document.querySelector('.email')
let mdp = document.querySelector('.pass')
let commentaire = document.querySelector('.testa')
let btn=document.querySelector('.btn-send')

// let motdepasse=/^[a-zA-Z0-9]{8,}$/
let motdepasse=/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/

let regexAdress=/^.+\@.+\..+/ 

btn.addEventListener('click',function(){

    if (name.value=="" || adresse.value=="" || email.value === "" || mdp.value === "" ||commentaire.value ===""){
        alert('All fields are required!')
    }else if (!regexAdress.test(email.value)){
        alert('Please enter a valid mail')
    }else if (!motdepasse.test(mdp.value) ){
        alert('Password: min 8 characters')
    }else{
        alert('Thank you!')
    }
} 
)
let bnt2=document.querySelector('.btn-res')
bnt2.addEventListener('click',function(){
name.value=""
adresse.value=""
email.value=""
mdp.value=""
commentaire.value=""
})