const buttonTwo = document.querySelector('.button-two');
const buttonThree = document.querySelector('.button-three');


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