const items = document.querySelector('.items');
const input = document.querySelector('.footer__input');
const addBtn = document.querySelector('.footer__button');

function onAdd() {
    const text = input.value;
    input.value = '';
    input.focus();

    if( text === '') {
        input.focus();
        return
    }

    const item = createItem(text);
    items.appendChild(item);
    item.scrollIntoView({block : 'center'});
}


let id = 0;         // UUID
function createItem(text) {
    const itemRow = document.createElement('li');
    itemRow.setAttribute('class', 'item__row');

    itemRow.setAttribute('data-id', id);

    // const item = document.createElement('div');
    // item.setAttribute('class', 'item');

    // const span = document.createElement('span');
    // span.setAttribute('class', 'item__name');
    // span.innerText = text;

    // const delBtn = document.createElement('button');
    // delBtn.setAttribute('class','item__delete');
    // delBtn.innerHTML = '<i class = "fas fa-trash-alt"></i>';
    // delBtn.addEventListener('click', () => {
    //     items.removeChild(itemRow);
    // });

    // const itemDivider = document.createElement('div');
    // itemDivider.setAttribute('class', 'item__divider');

    // item.appendChild(span);
    // item.appendChild(delBtn);
    // itemRow.appendChild(item);
    // itemRow.appendChild(itemDivider);

    itemRow.innerHTML = `
    <div class="item">
        <span class="item__name">${text}</span>
        <button class="item__delete">
            <i class="fas fa-trash-alt" data-id=${id}></i>
        </button>
    </div>
    <div class="item__divider"></div>
    `;

    id++;
    return itemRow;
}

items.addEventListener('click', event => {
    const id = event.target.dataset.id;

    if ( id ) {
        const toBeDeleted = document.querySelector(`.item__row[data-id="${id}"]`);
        toBeDeleted.remove();
    }
})

addBtn.addEventListener('click',()=> {
    onAdd();
})

input.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        onAdd();
    }
    
})



