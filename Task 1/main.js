const btn = document.querySelector('button');

const list = document.querySelectorAll('li');
let size = 10;


// FOR
// btn.addEventListener("click", function () {
//     
//     for (let i = 0; i < list.length; i++) {
//         list[i].style.display = "block";
//         list[i].style.fontSize = size + "px";
//     }
// size++;
// });

// FOREACH

btn.addEventListener('click', () => {

    list.forEach((li) => {
        li.style.display = "block";
        li.style.fontSize = `${size}px`;
    })
    size++;
});