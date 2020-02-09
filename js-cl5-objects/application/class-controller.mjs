import { ClassRoomModel } from "./model.mjs";
import { CourseModel } from "./model.mjs";
import { ClassRoom } from "./model.mjs";

class ClassController {

    courseModel = new CourseModel
    model = new ClassRoomModel

    addNew() {
        // change title
        $('#title').text("Add New Class")
        // show modal dialog
        $('.ui.modal').modal('show')
    }

    edit(data) {
        // change title
        $('#title').text("Edit Class")

        // set inputs with data
        this.setInput(data)

        // show modal dialog
        $('.ui.modal').modal('show')
    }

    save() {

        // find course 
        let course = this.courseModel.findById($('#course').val())

        // create class by user inputs
        let classRoom = new ClassRoom(
            $('#classId').val(),
            course,
            $('#startDate').val(),
            $('#days').val(),
            $('#times').val()
        )

        // save
        this.model.save(classRoom)

        // clear inputs
        this.setInput()

        // close model
        this.closeModel()

        // reload table
        this.search()
    }

    setInput(data) {
        $('#classId').val(data ? data.id : "")
        $('#course').val(data ? data.course.id : "")
        $('#startDate').val(data ? data.startDate : "")
        $('#days').val(data ? data.days : "")
        $('#times').val(data ? data.times : "")
    }

    search() {

        $('#classes').empty()

        let list = this.model.search($('#schCourse'), $('#schFrom'))

        for(let data of list) {
            let row = $('<tr>')    
                    
            $('<td>').text(data.id).appendTo(row)
            $('<td>').text(data.course.name).appendTo(row)
            $('<td>').text(data.startDate).appendTo(row)
            $('<td>').text(data.days).appendTo(row)
            $('<td>').text(data.times).appendTo(row)
            $('<td>').text(data.course.fees).appendTo(row)
            $('<td>').text(data.course.description).appendTo(row)

            let editIcon = $('<div class="center aligned">')
                .append('<i class="pencil icon">')
                .click(() => this.edit(data))

            $('<td>').append(editIcon).appendTo(row)

            $('#classes').append(row)
        }
    }

    closeModel() {
        $('.ui.modal').modal('hide')
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
    $('#searchBtn').click(() => controller.search())
    $('#closeBtn').click(() => controller.closeModel())
    $('#saveBtn').click(() => controller.save())

})