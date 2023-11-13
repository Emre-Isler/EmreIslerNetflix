const btn = document.querySelectorAll(".acil")
const acilmis = document.querySelectorAll(".acilmis")
const iler = document.querySelectorAll("i")

// bu for döngüsüne dikkat
for (let i of btn){
    i.addEventListener("click",ac)
}

function ac(){
    // console.log(this.nextElementSibling)
    // aşağıdaki ile yukarıdaki aynı işlemi yapar    
    const acilacak = this.parentElement.children[1]
    if (acilacak.classList.contains("goster")){
        //aynısını ekyeyip çıkarmak için kullanıyoruz toggle. Hocaya sormuştun
        acilacak.classList.toggle("goster")
        this.children[0].classList.toggle("dondur")
    }else{
        acilmis.forEach(kapanacak => kapanacak.classList.remove("goster"))
        iler.forEach(don => don.classList.remove("dondur"))
        acilacak.classList.toggle("goster")
        this.children[0].classList.toggle("dondur")
    }    
}


//Login Sayfası

const logInput = document.querySelectorAll(".logInput")
const div_container_mail = document.querySelectorAll(".div_container_mail")
const div_container_pass = document.querySelectorAll(".div_container_pass")
const body = document.querySelectorAll("body")
const tumpler = document.querySelectorAll(".lgbuyut")

let login_mail = false
let login_pass = false

for (let i of div_container_mail){
    i.addEventListener("click", yukariKaydirMail)
}

function yukariKaydirMail(){
    const pler = this.children[1]
    if (pler.classList.contains("mail-pass")){
        pler.classList.remove("mail-pass")
        pler.classList.add("mail-pass-kucuk")
        console.log("yukariKaydirMail")
    }

    const diger = this.nextElementSibling.children[1]
    if(diger.classList.contains("mail-pass-kucuk")){
        diger.classList.remove("mail-pass-kucuk")
        diger.classList.add("mail-pass")
    }
    login_mail = true
    login_pass = true
}

for (let i of div_container_pass){
    i.addEventListener("click", yukariKaydirPass)
}

function yukariKaydirPass(){
    const pler = this.children[1]
    if (pler.classList.contains("mail-pass")){
        pler.classList.remove("mail-pass")
        pler.classList.add("mail-pass-kucuk")
        console.log("yukariKaydirPass")
    }

    const diger = this.previousElementSibling.children[1]
    if(diger.classList.contains("mail-pass-kucuk")){
        diger.classList.remove("mail-pass-kucuk")
        diger.classList.add("mail-pass")
    }
    login_mail = true
    login_pass = true
}

for (let i of body){
    i.addEventListener("click",Buyut)
}

function Buyut(){
    if(login_mail==false){
        for(let i = 0; i< tumpler.length; i++){
            if(tumpler[i].classList.contains("mail-pass-kucuk")){
                tumpler[i].classList.remove("mail-pass-kucuk")            
                tumpler[i].classList.add("mail-pass")

                console.log("Buyut Mail")
            }            
        }
    }

    if(login_pass==false){
        for(let i = 0; i< tumpler.length; i++){
            if(tumpler[i].classList.contains("mail-pass-kucuk")){
                tumpler[i].classList.remove("mail-pass-kucuk")            
                tumpler[i].classList.add("mail-pass")

                console.log("Buyut pass")
            }            
        }
    }
    login_mail = false 
    login_pass=false   
}