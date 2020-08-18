
document.querySelector("#add-time").addEventListener('click', cloneField)

function cloneField() {
    // clona elementos com todos os filhos
    const newFieldContainer = document.querySelector(".schedule-item").cloneNode(true)

    // pega todos os inputs
    const fields = newFieldContainer.querySelectorAll('input')

    fields.forEach(function (field) {
        field.value = ""
    })

    // add novo elemento completo na pagina
    document.querySelector("#schedule-items").appendChild(newFieldContainer)
}