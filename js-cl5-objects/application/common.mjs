export const STORAGE_KEY = "com.jdc.student.management"

export class TableRowHelper {

    setRows(tbody, list) {

        for(let data of list) {

            let tr = $('<tr/>')

            for(let field in data) {
                tr.append($('<td />').text(data[field]))
            }

            tbody.append(tr)
        }
    }

}

class IDGenerater {

    key = `${STORAGE_KEY}.ids`

    ids = {
        course: 0,
        classRoom: 0,
        student: 0,
        registration: 0
    }

    constructor() {
        let storageObject = JSON.parse(localStorage.getItem(this.key))

        if(storageObject) {
            this.ids = storageObject
        }
    }

    generate(key) {
        let id = this.ids[key]
        id = id + 1
        this.ids[key] = id
        localStorage.setItem(this.key, JSON.stringify(this.ids))
        return id
    } 
}

export let idGenerater = new IDGenerater
