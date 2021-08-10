export class ChatUI {
    constructor(l) {
        this.list = l;
    }

    // SETER \\
    set list (l) {
        this._list = l;
    }
    // GETERI \\
    get list () {
        return this._list;
    }

    clear() {
        this.list.innerHTML = ``;
    }


    formatDate(date){        
        let d = date.getDate();
        let m = date.getMonth() + 1;
        let g = date.getFullYear();
        let s = date.getHours();
        let min = date.getMinutes();

        
        d = String(d).padStart(2,"0");
        m = String(m).padStart(2,"0");
        s = String(s).padStart(2,"0");
        min = String(min).padStart(2, "0");

        let strDate = d + "." + m + "." + g + ". at " + s + ":" + min;
        let danas = new Date()
        let dan = danas.getDate();
        let mesec = danas.getMonth() + 1;
        let godina = danas.getFullYear();
        if(dan == d && mesec == m && godina == g) {
            return "Danas"
        }
        else {
            return strDate;
        }


        
    }

    templateLI(data){
        let date = data.created_at.toDate();
        let strDate = this.formatDate(date);
        if(localStorage.username == data.username) {
            let htmlLI = 
            `<li class="trenutniKorisnik col-t-12">
                <span class="username">${data.username} : </span>
                <span class="message" style="color:black">${data.message}</span>
                <div class="date" style="color:darkblue">${strDate}</div>
            </li>`;
            this.list.innerHTML += htmlLI;
            this.list.scrollTop = this.list.scrollHeight;
        }
        else {
                let htmlLI = 
                `<li class="levo col-t-12">
                    <span class="username" >${data.username} : </span>
                    <span class="message" style="color:black">${data.message}</span>
                    <div class="date" style="color:darkblue">${strDate}</div>
                </li>`;
                this.list.innerHTML += htmlLI;
                this.list.scrollTop = this.list.scrollHeight;
                console.log(data.username)
        
                
            }
    }

    
}