const box = document.getElementById('box');
const search = document.getElementById('search');
const form = document.getElementById('form');

box.style.justifyContent = 'center';
search.addEventListener('focus', () => {
    box.style.justifyContent = 'start';
    form.style.marginTop = '60px';
    form.style.transition = 'margin-top 800ms ease-in-out'
    box.style.transition = 'justify-content 500ms ease-in-out';
});

search.addEventListener('blur', () => {
    if (search.value == '') {
        box.style.transition = 'justify-content 500ms ease-in-out';
        box.style.justifyContent = 'center';
        form.style.transition = 'margin-top 500ms ease-in-out'
        form.style.marginTop = '0px';
    }
});

const a = search.addEventListener('input', () => {
    const inputValue = search.value;
    return inputValue
});

let inputValue = '';

search.addEventListener('input', () => {
    inputValue = search.value; // Update the value of inputValue every time the input changes
});

console.log(inputValue)
