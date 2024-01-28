import {makeAutoObservable} from "mobx";
export default class NewChangesStore {
    constructor() {
        this._changes = [
            {id: 100500, title:"Записей не обнаружено!", description: "Попробуйте перезайти на страницу!"}
        ]
        makeAutoObservable(this)
    }
    setChanges(changes) {
        return this._changes = changes
    }

    get changes() {
        return this._changes
    }
}