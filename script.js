const btnClear = document.querySelector('#clear')
const btnDelete = document.querySelector('#delete')
const btnPlus = document.querySelector('#plus')
const btnMulti = document.querySelector('#multiply')
const btnClose = document.querySelector('#btn-close')
const btn1 = document.querySelector('#btn1')
const btn2 = document.querySelector('#btn2')
const btn3 = document.querySelector('#btn3')
const btn4 = document.querySelector('#btn4')
const btn5 = document.querySelector('#btn5')
const alert = document.querySelector('#alert')
const res1 = document.querySelector('#res1')
const res2 = document.querySelector('#res2')

btnClear.addEventListener('click',()=>{
    res2.innerText=0
    res1.innerText=0
})

btnPlus.addEventListener( 'click' , () => {
    if (res2.innerText < 100) {
        res2.innerText = Number(res2.innerText) + Number(res1.innerText)
    } else{
        alert.classList.add("show")
        alert.classList.remove("alert")
    }
})

btnClose.addEventListener('click' , () => {
    alert.classList.add("alert")
    alert.classList.remove("show")
})

btnDelete.addEventListener( 'click' , () => {
    if (res2.innerText > 0) {
        res2.innerText = Number(res2.innerText) - Number(res1.innerText)
    } else{
        alert.classList.add("show")
        alert.classList.remove("alert")
    }
})

btnMulti.addEventListener('click', () => {
    const result = Number(res2.innerText) * Number(res1.innerText);
    if (result < 101) {
        res2.innerText = result;
    } else {
        alert.classList.add("show");
        alert.classList.remove("alert");
    }
});

btn1.addEventListener('click',()=>{
    res1.innerText=1
})
btn2.addEventListener('click',()=>{
    res1.innerText=2
})
btn3.addEventListener('click',()=>{
    res1.innerText=3
})
btn4.addEventListener('click',()=>{
    res1.innerText=4
})
btn5.addEventListener('click',()=>{
    res1.innerText=5
})