import { ClassRoomModel } from "./model.mjs";
import { CourseModel } from "./model.mjs";

class ClassController {

    constructor() {
        this.model = new ClassRoomModel
    }

    addNew() {
        // change title
        $('#title').text("Add New Class")
        // show modal dialog
        $('.ui.modal').modal('show')
    }

    edit(data) {

    }

    save() {

    }

    closeModel() {

    }

}

$(() => {

    let controller = new ClassController
    let courseModel = new CourseModel

    let courseList = courseModel.search()

    for (let data of courseList) {
        $('#searchCourse').append($('<option>').val(data.id).text(data.name))
        $('#course').append($('<option>').val(data.id).text(data.name))
    }

    $('#addBtn').click(() => controller.addNew())
})