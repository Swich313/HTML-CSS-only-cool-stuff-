//humburger
const buttonTwo = document.querySelector('.button-two');
const buttonThree = document.querySelector('.button-three');
const textBox = document.querySelector('.box');

buttonTwo.addEventListener('click', () => {
    const currentState = buttonTwo.getAttribute('data-state');

    if(!currentState || currentState === 'closed') {
        buttonTwo.setAttribute('data-state', 'opened');
        buttonTwo.setAttribute('aria-expanded', 'true');
    } else {
        buttonTwo.setAttribute('data-state', 'closed');
        buttonTwo.setAttribute('aria-expanded', 'false');
    }

});

buttonThree.addEventListener('click', () => {
    const isOpened = buttonThree.getAttribute('aria-expanded');
    if(isOpened === 'false') {
        buttonThree.setAttribute('aria-expanded', 'true');
    } else {
        buttonThree.setAttribute('aria-expanded', 'false');
    }
});

//text search
const search = document.querySelector('#search');

search.addEventListener('input', event => {
   const searchText = event.target.value;
   const reg = new RegExp(searchText, 'g');
   let text = textBox.innerHTML;
   text = text.replace(/(<mark class="highlighted">|<\/mark>)/gim, '');
   textBox.innerHTML = text.replace(reg, '<mark class="highlighted">$&</mark>');
});

//navigation bar
const list = document.querySelectorAll('.list');

function activeLink(){
    list.forEach(item => {
        item.classList.remove('active');
        this.classList.add('active');
    });
}

list.forEach(item => {
    item.addEventListener('click', activeLink);
});


//buttons with ripple effects
const buttons = document.querySelectorAll('.btn');

buttons.forEach(item => {
    item.addEventListener('click', function(e) {
        let x = e.clientX - e.target.offsetLeft;
        let y = e.clientY - e.target.offsetTop;
        let ripples = document.createElement('span');
        ripples.style.left = x + 'px';
        ripples.style.top = y + 'px';
        this.appendChild(ripples);

        setTimeout(() => {
            ripples.remove();
        }, 1000);
    })
})