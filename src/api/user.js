import http from '@utils/http.js'


export const login=(userInfo)=>http.post("/users/login",userInfo)