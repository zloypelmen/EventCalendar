import {makeAutoObservable} from "mobx";
export default class NewChangesStore {
    constructor() {
        this._changes = [
            {id: 100500, title:"Мы стараемся быть лучше!", description: "Тут будут объявляться новые обновления, следите за новинками и за новостями."}
        ]
    }
    setChanges(changes) {
        return this._changes = changes
    }

    get changes() {
        return this._changes
    }
}