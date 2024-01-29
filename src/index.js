import './styles/styles.css';
const hamIcon = document.querySelector('.ham-icon');
const hamList = document.querySelector('.ham-list');

hamIcon.addEventListener('click', () => {
    hamList.classList.toggle('ham-list__active');
    hamIcon.classList.toggle('ham-icon__active');
})

const card = document.querySelectorAll('.tariff-card');
    card[1].classList.add('tariff-card_active');
card.forEach(item => {
    item.addEventListener('mouseover', () => {
        item.classList.add('tariff-card_active');
        card[1].classList.remove('tariff-card_active')
        card[1].addEventListener('mouseover', ()=> {
            card[1].classList.add('tariff-card_active')
        })
    });
    item.addEventListener('mouseout', () => {
        item.classList.remove('tariff-card_active');
        card[1].classList.add('tariff-card_active')
    })

})
