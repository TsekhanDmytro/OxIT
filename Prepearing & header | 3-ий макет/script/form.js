const signOpen = document.querySelector('.open');
const signX = document.querySelector('.X');
const form_wrap = document.querySelector('.form_wrap')

let form1 = document.form1.onsubmit = function (e) {
    e.preventDefault();
    console.log('click')
};

signOpen.addEventListener('click', function () {
    form_wrap.classList.add('active_form')
})
signX.addEventListener('click', function () {
    form_wrap.classList.remove('active_form')
})
