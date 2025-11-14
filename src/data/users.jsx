import { use } from "react";

const users = [
  {
    user: "user",
    password: "pass",
    role: "user",
    token: "user",
  },
  {
    user: "admin",
    password: "admin",
    role: "admin",
    token: "admin",
  },
  {
    user: "guest",
    password: "guest",
    role: "guest",
    token: "guest",
  },
];

export function verifyUser( user, password ) {
    const userFound = users.find ((u) => {
        return u.user === user && u.password === password
    })

    return userFound ?  {role : userFound.role, token: userFound.token} : null
}
