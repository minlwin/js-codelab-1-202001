import { CourseModel } from "./model.mjs"
import { Course } from "./model.mjs"
import { TableRowHelper } from "./common.mjs"

class CourseController {

    modal = new CourseModel
    tableHelper = new TableRowHelper

    closeModal() {
        $('.ui.modal').modal('hide')
    }

    addNew() {
        // set title
        $('#title').text("Add New Course")

        // show  modal dialog
        $('.ui.modal').modal('show')
    }

    edit(data) {
        // set title
        $('#title').text("Edit Course")

        // set view data
        $('#courseId').val(data.id)
        $('#courseName').val(data.name)
        $('#duration').val(data.duration)
        $('#fees').val(data.fees)
        $('#description').val(data.description)

        // show modal dialog
        $('.ui.modal').modal('show')
    }

    clearInputs() {
        $('#courseId').val("")
        $('#courseName').val("")
        $('#duration').val("")
        $('#fees').val("")
        $('#description').val("")
    }

    save() {
        // get view data
        let course = new Course(
            $('#courseId').val(),
            $('#courseName').val(),
            $('#duration').val(),
            $('#fees').val(),
            $('#description').val()
        )

        // save
        this.modal.save(course)

        // clear inputs
        this.clearInputs()
        
        // close modal
        this.closeModal()

        // reload table
        this.search()
    }

    search() {
        // search data
        let list = this.modal.search($('#name').val())
            
        this.tableHelper.setRows($('#courses'), list, this.edit)
    }
}

$(() => {

    let controller = new CourseController

    // add new
    $('#addNew').click(() => controller.addNew())

    // search
    $('#search').click(() => controller.search())

    // close
    $('#close').click(() => controller.closeModal())

    // save
    $('#save').click(() => controller.save())
})

