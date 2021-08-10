import { Chatroom } from "./chat.js";
import {ChatUI} from "./ui.js"

let sss = db.collection('chats')
console.log(sss)


let chat2 = new Chatroom("js", "Pera")
/////   FUNKCIJE ZA PROVERU SOBE I ZA POSTAVLJANJE USERNAME U LOCAL STORAGE //
let checkRoom = () => {                                                     //
    if(localStorage.room) {                                                 //
        return localStorage.room                                            //
    }                                                                       //
    else {                                                                  //
        return "general"                                                    //
    }                                                                       //
}                                                                           //
 
let usernameF = () => {                                                     //
    if(localStorage.username) {                                             //
        return localStorage.username;                                       //
    }                                                                       //
    else {                                                                  //
        return "anonymous";                                                 //
    }                                                                       //
}                                                                           //
//////////////////////////////////////////////////////////////////////////////
let ulChatList = document.querySelector(`ul`);
let chatUI1 = new ChatUI(ulChatList)
//      PRVO UCITIVANJE      /////////////////
chat2.updateRoom(checkRoom());              //
chat2.getChats(data => {                    //
    console.log(data);                      //
    chatUI1.templateLI(data);               //
})                                          //
/////////////////////////////////////////////

let dugmici = document.querySelectorAll(`.dugme`)
console.log(dugmici)


// FUNKCIJA ZA OBELEZAVANJE DUGMETA
let oznakaDugmeta = (dugmeID) => {
    dugmici.forEach(e => {
        if(e.id == dugmeID){
            e.style.border = `3px solid red`
            localStorage.setItem(`button`, dugmeID)
        }
        else {
            e.style.border = `none`
        }
    })
}
// U slucaju refresh-a da mi pokaze u kojoj sam sobi
oznakaDugmeta(localStorage.button)


///// DOHVATANJE HTML TAGOVA /////////////////////////////////////
let messageInput = document.getElementById(`messageInput`);     //
let sendBtn = document.getElementById(`sendBtn`);               //
let usernameInput = document.getElementById(`usernameInput`);   //
let updateBtn = document.getElementById(`updateBtn`)            //
let span = document.getElementById(`nestaje`)                   //

let btnGeneral = document.getElementById(`btnGeneral`);         //
let btnJs = document.getElementById(`btnJs`);                   //
let btnHomeworks = document.getElementById(`btnHomeworks`);     //
let btnTests = document.getElementById(`btnTests`);             //
//////////////////////////////////////////////////////////////////

///     SOBE      ////////////////////////////////////////////
btnGeneral.addEventListener("click", () => {
    oznakaDugmeta("btnGeneral")                //
    chatUI1.clear();                                        //
    localStorage.setItem("room", 'general')                 //
    chat2.updateRoom('general')                             //
    chat2.getChats(data => {                                //
        chatUI1.templateLI(data);                           //
    })                                                      //
})                                                          //

btnJs.addEventListener("click", () => {
    oznakaDugmeta("btnJs")                                  //
    chatUI1.clear();                                        //
    localStorage.setItem("room", 'js')                      //
    chat2.updateRoom('js')                                  //
    chat2.getChats(data => {                                //
        chatUI1.templateLI(data);                           //
    })                                                      //
})                                                          //

btnHomeworks.addEventListener("click", () => {
    oznakaDugmeta("btnHomeworks")              //
    chatUI1.clear();                                        //
    localStorage.setItem("room", 'homeworks')               //
    chat2.updateRoom('homeworks')                           //
    chat2.getChats(data => {                                //
        console.log(data);                                  //
        chatUI1.templateLI(data);                           //
    })                                                      //
})                                                          //

btnTests.addEventListener("click", () => {
    oznakaDugmeta("btnTests")                               //
    chatUI1.clear();                                        //
    localStorage.setItem("room", 'tests')                   //
    chat2.updateRoom('tests')                               //
    chat2.getChats(data => {                                //
        console.log(data);                                  //
        chatUI1.templateLI(data);                           //
    })                                                      //
})                                                          //
/////////////////////////////////////////////////////////////

//        UPDATE DUGME      /////////////////////////////////////////////////////
let usernamee = "anonymus";                                                    //
updateBtn.addEventListener("click", () => {
    location = location                                    //
    usernamee = usernameInput.value;
    if(usernamee.length > 2 && usernamee.length < 10) {
        if(usernamee.trim().length > 0){                        //
            localStorage.setItem("username", usernamee);                               //
            usernameInput.value = "";                                                  //
            span.style.display = "block"                                               //
            span.textContent = `Promenjeno korisnicko ime: ${localStorage.username}`   //
            setTimeout(() => {                                                         //
                span.style.display = "none";                                           //
            }, 3000)
        }
        else {
            alert(`Nevalidno korisnicko ime`)
        }
    }
    else {
        alert(`Nevalidno korisnicko ime`)
    }                                                                   //
})                                                                             //
////////////////////////////////////////////////////////////////////////////////

//      SEND DUGME      //////////////////////////////////       
sendBtn.addEventListener("click", () => {                   //
    let chat = new Chatroom(checkRoom(), usernameF());      //
    let message = messageInput.value;
    if(message.trim().length > 0){                          //
        chat.addChat(message)                               //
        .then(() => {                                       //
            console.log(`Uspesno dodat chat`);              //
            messageInput.value = "";                        //
        })                                                  //
        .catch((err) => {                                   //
            console.log(`Greska: ${err}`);                  //
        });
    }
    else {
        alert(`Nemoguce poslati praznu poruku`);
    }                                                       //
});                                                         //
/////////////////////////////////////////////////////////////

