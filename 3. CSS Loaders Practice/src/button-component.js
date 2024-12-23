import { button as btn } from './button-component.css';


console.log('Estilos',btn);

const button = document.createElement('button');
button.innerText = 'Button component';
button.classList.add(btn);


button.addEventListener('click', () => {
    const header = document.getElementById('header');
    header.innerText = 'Button component clicked';
});
document.body.appendChild(button);


