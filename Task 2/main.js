let size = 10;
let orderElement = 1;


const init = () => {
    // tutaj kod
    const btn = document.createElement('button');
    const btnReset = document.createElement('button');
    btn.textContent = "Add 10 list items";
    btnReset.textContent = "Clear";
    document.body.appendChild(btn);
    document.body.appendChild(btnReset);
    const list = document.createElement('ul');
    list.style.listStyle = "none";
    document.body.appendChild(list);
    btn.addEventListener("click", createLiElements);
    btnReset.addEventListener("click", cleanList);
}


const createLiElements = () => {
    // tutaj kod
    for (let i = 0; i < 10; i++) {
        const item = document.createElement('li');
        item.textContent = `Element nr ${orderElement++}`;
        item.style.fontSize = `${size++}px`
        document.querySelector('ul').appendChild(item);

    }
}

const cleanList = () => {
    document.querySelector('ul').textContent = "";
    size = 10;
    orderElement = 1;

}
init();