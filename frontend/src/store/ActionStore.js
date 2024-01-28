import {makeAutoObservable} from "mobx";
export default class ActionStore {
    constructor() {
        this._actions = [
            {title:"Новогодняя елка",description:"Sample Description",label:"indigo",day:"1209090",id:1,author:"Sample Author",location:"Sample Location",createdAt:"2024-01-27T13:50:37.338Z",updatedAt:"2024-01-27T13:50:37.338Z"},
        ]
        makeAutoObservable(this)
    }
    setActions(actions) {
        return this._actions = actions
    }

    get actions() {
        return this._actions
    }
}