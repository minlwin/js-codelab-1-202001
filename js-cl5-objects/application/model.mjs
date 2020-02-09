import { STORAGE_KEY } from "./common.mjs"
import { idGenerater } from "./common.mjs"

class BaseModel {

    key
    list = []

    constructor(key, idKey) {
        this.key = key
        this.idKey = idKey

        let storageObject = JSON.parse(localStorage.getItem(this.key))

        if(storageObject) {
            this.list = storageObject
        }
    }

    findById(id) {
        return this.list.filter(data => data.id == id).pop()
    }

    save(data) {
        if(!data.id) {
            data.id = idGenerater.generate(this.idKey)
            this.list.push(data)
        } else {

            let index = -1

            for (const [i, v] of this.list.entries()) {
                if(v.id == data.id) {
                    index = i
                }
            }

            this.list[index] = data
        }

        localStorage.setItem(this.key, JSON.stringify(this.list))
    }
}

export class CourseModel extends BaseModel{

    constructor() {
        super(`${STORAGE_KEY}.course`, 'course')
    }

    search(name) {
        return this.list
    }

} 

export function Course(id, name, duration, fees, description) {
    this.id = id
    this.name = name
    this.duration = duration
    this.fees = fees
    this.description = description
}


export class ClassRoomModel extends BaseModel {

    constructor() {
        super(`${STORAGE_KEY}.class`, 'classRoom')
    }

    search(course, startDate) {
        return this.list
    }

}

export function ClassRoom(id, course, startDate, days, times) {
    this.id = id
    this.course = course
    this.startDate = startDate
    this.days = days
    this.times = times
}

export class StudentModel extends BaseModel{

    constructor() {
        super(`${STORAGE_KEY}.student`, 'student')
    }
}

export function Student(id, name, phone, email, address, remark) {
    this.id = id
    this.name = name
    this.phone = phone
    this.email = email
    this.address = address
    this.remark = remark
}

export class RegistrationModel extends BaseModel {

    constructor() {
        super(`${STORAGE_KEY}.registration`, 'registration')
    }
}

export function Registration(id, classRoom, student, registDate) {
    this.id = id
    this.classRoom = classRoom
    this.student = student
    this.registDate = registDate
}

