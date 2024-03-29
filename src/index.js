import './styles/styles.css';

//ham-menu
const hamIcon = document.querySelector('.ham-icon');
const hamList = document.querySelector('.ham-list');
const content = document.querySelector('.content');
const body = document.getElementById('body')
hamIcon.addEventListener('click', () => {
    hamList.classList.toggle('ham-list__active');
    hamIcon.classList.toggle('ham-icon__active');
    content.classList.toggle('ham-active');
    if (hamList.classList.contains('ham-list__active')) {
        body.style.overflow = 'hidden'
    } else {
        body.style.overflow = 'inherit'
    }
})
// card hover
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

// valut & interval
const intervals = document.querySelectorAll('.tariff-top__interval');
intervals.forEach(item => {
    item.addEventListener('click', (e) => {
        const closest = e.target.closest('.tariff-top__price');
        const priceSpan = document.querySelectorAll('.price-value');
        const valut = closest.querySelector('.price-valut');
        if (e.target.textContent === 'Months' && valut.textContent === '$') {
            intervals.forEach(item => {
                item.textContent = 'Day'
            })
            priceSpan.forEach(item => {
                const pricePerDay = item.getAttribute('data-price') /30
                item.textContent = pricePerDay
            })
        } else if (e.target.textContent != 'Months' && valut.textContent === '$') {
            intervals.forEach(item => {
                item.textContent = 'Months'
            });
            priceSpan.forEach(item => {
                const pricePerMonth = item.getAttribute('data-price')
                item.textContent = pricePerMonth
            })
        } else if (e.target.textContent === 'Months' && valut.textContent != '$') {
            intervals.forEach(item => {
                item.textContent = 'Day';
            })
            priceSpan.forEach(item => {
                const priceRubDay = item.getAttribute('data-rub') / 30
                item.textContent = priceRubDay.toFixed(0)
            })
        } else {
            intervals.forEach(item => {
                item.textContent = 'Months'
            })
            priceSpan.forEach(item => {
                const priceRubMonth = item.getAttribute('data-rub')
                item.textContent = priceRubMonth
            })
        }
    })
})
const price = document.querySelectorAll('.price-valut');
price.forEach(item => {
    item.addEventListener('click', (e) => {
        const valut = document.querySelectorAll('.price-valut');
        valut.forEach(item => {
            if (item.textContent === '$') {
                item.textContent = 'P';
                const priceValueSpan = document.querySelectorAll('.price-value');
                priceValueSpan.forEach(item => {
                   const valRub= item.getAttribute('data-rub')
                   item.textContent = valRub
                })
            } else {
                item.textContent = '$';
                const priceValueSpan = document.querySelectorAll('.price-value');
                    priceValueSpan.forEach(item => {
                    const val = item.getAttribute('data-price');
                    item.textContent = val
                 })
            }
        })
    })
})

//price entrance
const tariffTop = document.querySelectorAll('.tariff-top__price');
function animeClassAdd  (node){
    node.classList.add('scale-in-ver-center');
    node.style.visibility = 'inherit'
}
tariffTop.forEach(item => {
    item.style.visibility = 'hidden'
    setTimeout(() => animeClassAdd(tariffTop[0]), 2000)
    setTimeout(() => animeClassAdd(tariffTop[1]), 3000)
    setTimeout(() => animeClassAdd(tariffTop[2]), 4000)
})


