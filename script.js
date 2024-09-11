let btn = document.querySelector('button')
let myName = document.querySelector('.my-intro')
// btn.innerText = 'Show'

btn.addEventListener('click', () => {
    myName.classList.toggle('show')
    if (btn.innerText === 'Show') {
        btn.innerText = 'Hide'
    }else{
        btn.innerText = 'Show'
    }
})