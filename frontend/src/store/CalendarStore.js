import {makeAutoObservable} from "mobx";

export default class  CalendarStore{
    constructor() {
        this._events = []
        makeAutoObservable(this)
    }

    setEvents(events){
        this._ivents = events;
    }
    setEvent(event){
        this._events.add(event);
    }
    getEvents(){
        return this._events
    }
}