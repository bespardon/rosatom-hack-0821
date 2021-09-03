let open_department_resurs = document.getElementById('open_department_resurs')
let department_resurs = document.getElementById('department_resurs')


open_department_resurs.addEventListener('click', function(event) {
    event.preventDefault()
    department_resurs.style.display = 'block'
});

