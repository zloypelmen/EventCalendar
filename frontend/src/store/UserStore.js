import {makeAutoObservable} from "mobx";

export default class  UserStore{
    constructor() {
        this._isAuth = false
        this._isAdmin = false
        this._user = {}
        this._token = ""
        makeAutoObservable(this)
    }

    setIsAuth(bool){
        this._isAuth = bool

        console.log("5" + this._isAuth)
    }
    setUser(user){
        this._user = user
    }
    setIsAdmin(bool) {
        this._isAdmin = bool
    }
    setToken(token){
        this._token = token
    }

    get isAuth(){
        console.log("4" + this._isAuth)

        return this._isAuth
    }
    get isAdmin(){
        return this._isAdmin
    }
    get user(){
        return this._user
    }

    get getToken(){
        return this._token
    }
}