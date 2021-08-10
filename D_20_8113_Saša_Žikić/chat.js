export class Chatroom {
    constructor(room, username) {
        this.room = room;
        this.username = username;
        this.chats = db.collection('chats');
        this.unsub;
    }

    // SETERI \\

    set room(r) {
        this._room = r;
    }
    set username(u) {
            this._username = u;    
    }

    // GETERI \\ 
    get room() {
        return this._room;
    }
    get username() {
        return this._username;
    }

    async addChat(poruka) {
        let datum = new Date();

        let noviChat = {
            message: poruka,
            username: this.username,
            room: this.room,
            created_at: firebase.firestore.Timestamp.fromDate(datum)
        }

        let odgovor = await this.chats.add(noviChat)
        return odgovor;
    }

    updateUsername(updName) {
        this.username = updName;
        localStorage.setItem("username", updName);
        // localStorage.setItem("koje ime dajemo promeljivoj u lokalnoj memoriji", vrednost koju dodeljujemo);
        // UZIMANJE VREDNOSTI IZ LOKLANE MEMORIJE - local.Storage.username
    }

    updateRoom(updRoom) {
        this.room = updRoom;
        localStorage.setItem("room", updRoom)
        if(this.unsub) {
            this.unsub();
        }
        
    }

    getChats(callback) {
        this.unsub = this.chats
        .where("room", "==", this.room)
        .orderBy("created_at", "asc")
        .onSnapshot( snapshot => {
            // console.log(snapshot.docChanges())
            snapshot.docChanges().forEach(change => {
                if(change.type == "added") {
                    // console.log("Promena u bazi")
                    // console.log(change.doc.data())
                    callback(change.doc.data())
                }
            })
        })
    }
}

