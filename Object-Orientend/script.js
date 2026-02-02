class User {
    constructor(name, company, color) {
        this.name = name
        this.company = company
        this.color = color
        this.role = "user"
    }
    checkRole(){
        console.log(`your are a ${this.role}`);
        
    }
    write(text) {
        let h1 = document.createElement("h1")
        h1.textContent = `${this.name} = ${text}`
        h1.style.color = this.color
        document.body.appendChild(h1)
    }

}
class Admin extends User {
    constructor(name, company, color) {
        super(name, company, color)
        this.role = "admin"
    }
}
let u1 = new User("chana", "source Code", "red")
let u2 = new User("Ishaq", "source Code", "Green")
let a1 = new Admin("admin", "source Code", "skyblue")

