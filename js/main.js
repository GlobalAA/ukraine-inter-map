import { findCity } from './city.js';
const states = document.querySelectorAll('#ukraineMap > a');
const background = document.querySelector('.card__bg');
const tooltip = document.querySelector('.tooltip');
const card = document.querySelector('.card');
for (let state of states) {
    state.addEventListener('mousemove', (e) => {
        tooltip.innerHTML =
            state.dataset.title +
                (state.id != 'KyivCity' ? ' область' : '');
        tooltip.style.top = e.y + 20 + 'px';
        tooltip.style.left = e.x + 20 + 'px';
    });
    state.addEventListener('mouseenter', () => {
        tooltip.style.display = 'block';
    });
    state.addEventListener('mouseleave', () => {
        tooltip.style.display = 'none';
    });
    state.addEventListener('click', () => {
        tooltip.style.display = 'none';
        background.classList.add('active');
        card.style.display = 'block';
        const info = findCity(state.id);
        card.innerHTML = `
			<img src="${info.people[0].avatar}" alt="" class="avatar">
			<h3 class="name">${info.people[0].name}</h3>
			<p class="description">${info.people[0].description}</p>
			`;
    });
}
document.addEventListener('click', (e) => {
    if (e.target === background) {
        background.classList.remove('active');
    }
});
