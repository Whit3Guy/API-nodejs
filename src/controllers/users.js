import { openDb} from "../configdb.js";

export async function createTable(){
    openDb().then((db)=>{
        db.exec("CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY, name TEXT, hobbie TEXT)")
    })
}



export async function getUser(user){
    return openDb().then((db)=>{
        return    db.all("SELECT * FROM users WHERE id = ?", [user.id])
    })
}


export async function getUsers(){
    return openDb().then((db)=>{
        return db.all("SELECT * FROM users")
    })
}


export async function createUser(user){
     openDb().then((db)=>{
         db.run("INSERT INTO users (name, hobbie) VALUES (?,?)", [user.name, user.hobbie])
    })
}
export async function updateUser(user){
     openDb().then((db)=>{
         db.run("UPDATE users SET name = ?, hobbie = ? WHERE id = ?", [user.name, user.hobbie, user.id])
    })
}
export async function deleteUser(user){
     openDb().then((db)=>{
         db.run("DELETE FROM users WHERE id = ?", [user.id])
    })
}


