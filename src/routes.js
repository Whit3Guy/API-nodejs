import { Router } from "express"
import { createUser, deleteUser, getUser, getUsers, updateUser } from "./controllers/users.js"
import bodyParser from "body-parser"
const routes = Router()

routes.use(bodyParser.urlencoded({extended: true}))



routes.get("/user", async(req, res)=>{
    console.log(req.body)
    const user = await getUser(req.body) 
    console.log(user)
    res.send(user)
})
routes.get("/users", async (req, res)=>{
    console.log(req.body

    )
    const user = await getUsers() 
    res.send(user)
})
routes.post("/user", (req, res)=>{
    const user = req.body;
    createUser(user)
    console.log(`user ${user.name} and hobbie ${user.hobbie} added!`)
    res.send(`user ${user.name} and hobbie ${user.hobbie} added!`)
})
routes.put("/user", (req, res)=>{
    const user = req.body;
    updateUser(user)
    res.send(`user ${user.name} updated`)
})
routes.delete("/user", (req, res)=>{
    const user = req.body;
    deleteUser(user)
    res.send(`user ${user.name} deleted`)
})

export {routes};
