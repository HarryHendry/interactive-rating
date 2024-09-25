const choice = document.getElementById('choice');
const btn = document.getElementById('submit');
const submitCard = document.querySelector('.submit-card')
const thanksCard = document.querySelector('.thankyou-card')

const one = document.getElementById('one');
one.addEventListener('click', ()=> {
    choice.innerHTML = 1
})
const two = document.getElementById('two');
two.addEventListener('click', ()=> {
    choice.innerHTML = 2
})
const three = document.getElementById('three');
three.addEventListener('click', ()=> {
    choice.innerHTML = 3
})
const four = document.getElementById('four');
four.addEventListener('click', ()=> {
    choice.innerHTML = 4
})
const five = document.getElementById('five');
five.addEventListener('click', ()=> {
    choice.innerHTML = 5
})



document.addEventListener('DOMContentLoaded', () => {
    const circles = document.querySelectorAll('.circle');
    
    circles.forEach(circle => {
        circle.addEventListener('click', () => {
            
            circles.forEach(c => c.classList.remove('clicked'));
            
            circle.classList.add('clicked');
        });
    });
});

btn.addEventListener('click', ()=> {
    submitCard.style.display = 'none';
    thanksCard.style.display = 'block';

})