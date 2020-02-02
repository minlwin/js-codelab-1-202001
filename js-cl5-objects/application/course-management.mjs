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
        $('.ui.modal').modal('show')
    }

    save() {
        let course = new Course(
            $('#courseName').val(),
            $('#duration').val(),
            $('#fees').val(),
            $('#description').val()
        )

        this.modal.save(course)

        this.search()
    }

    search() {
        this.tableHelper.setRows($('#courses'), this.modal.search($('#name').val()))
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

