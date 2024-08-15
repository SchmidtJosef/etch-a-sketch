const mainContainer = document.querySelector('.main-container');
const resetBtn = document.querySelector('#reset-btn');
let rows = document.getElementsByClassName("grid-row");

function createGrid(dim=16) {
    createRows(dim);
    createColumns(dim);
}

function createRows(dim) {
    for(let i=0; i<dim; i++) {
        let row = document.createElement('div');
        mainContainer.appendChild(row).className = 'grid-row';
    }
}

function createColumns(dim) {
    for(let y=0; y<rows.length; y++) {
        for(let i=0; i<dim; i++) {
            let cell = document.createElement('div');
            rows[y].appendChild(cell).className = 'cell';
        }
    }
}

createGrid();

mainContainer.addEventListener('mouseover', (e) => {
    e.target.style['background-color'] = 'rebeccapurple';
})

resetBtn.addEventListener('click', () => {
    mainContainer.replaceChildren();
    do{
        dim = prompt('Input the dimension of the grid (max=100):');
    } while(!Number.isInteger(Number(dim)))    
    if(dim>100) {
        dim = 100;
    }
    createGrid(dim);
})