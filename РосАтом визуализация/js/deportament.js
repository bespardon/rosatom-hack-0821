let open_department_home = document.getElementById('open_department_home')
let department_home = document.getElementById('department_home')
// let open_department_resurs = document.getElementById('open_department_resurs')

open_department_home.addEventListener('click', function(event) {
    event.preventDefault()
    department_home.style.display = 'block'
});

// open_department_resurs.addEventListener('click', function(event) {
//     event.preventDefault()
//     department_home.style.display = 'none'
// });