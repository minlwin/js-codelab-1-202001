import { STORAGE_KEY } from "./common.mjs"
import { idGenerater } from "./common.mjs"

export class CourseModel {

    key = `${STORAGE_KEY}.course`
    list = []

    constructor() {
        let storageObject = JSON.parse(localStorage.getItem(this.key))

        if(storageObject) {
            this.list = storageObject
        }
    }

    save(data) {
        if(!data.id) {
            data.id = idGenerater.generate("course")
        }

        this.list.push(data)
        localStorage.setItem(this.key, JSON.stringify(this.list))
    }

    search(name) {
        return this.list
    }

} 

export function Course(name, duration, fees, description) {
    this.id = 0
    this.name = name
    this.duration = duration
    this.fees = fees
    this.description = description
}


