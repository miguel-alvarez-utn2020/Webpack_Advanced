import { btn } from './styles.css';
import './button-component'


const btn1 = document.getElementById('button1');
btn1.innerText = 'Button 1';
btn1.classList.add(btn);
btn1.addEventListener('click', () => {
    const header = document.getElementById('header');
    header.innerText = 'Button 1 index.js clicked';
});
document.body.appendChild(btn1);

