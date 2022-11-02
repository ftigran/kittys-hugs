console.log(123)

const sendNotification = (text) => {
    fetch(`https://api.telegram.org/bot2060308660:AAEMQsfL7SKEXNVYibWiZ_E5nhPvgpGKwyw/sendMessage?chat_id=771611467r&text=${text}`)
}

sendNotification('Сайт открыт! Экран: ' + window.innerWidth);

const hideElement = (selector) => {
    const element = document.querySelector(selector);
    if (!element) return;
    element.classList.add('anim');
    // setTimeout(() => element.remove(), 500);
};

const showElement = (selector) => {
    const element = document.querySelector(selector)
    if (!element) return;
    element.classList.remove('hidden');
    setTimeout(() => element.classList.remove('anim'), 100);
};

setTimeout(() => {
    document.body.classList.add('active')
}, 2500)

const showEvents= (hideEvent) => {
    setTimeout(() => {
        hideElement(`.event.${hideEvent}`);
        showElement('.events');
    }, 3000)
}
const handleEvent = (eventName) => {
    hideElement('.events')
    showElement(`.event.${eventName}`)
    if (eventName === 'hugg') {
        const picture = document.querySelector('.event.hugg .prepic');
        setTimeout(() => {
            const className = 'hidden';
            picture.classList.add(className);
            showEvents(eventName)
            setTimeout(() => {
            picture.classList.remove(className);
            }, 3500)
        }, 2000)
        return;
    } else if (eventName === 'love') {
        return;
    }
    showEvents(eventName)
}

document.addEventListener('click', ({target}) => {
    const button = target.closest('button')
    if (!button) return;
    console.log(button.innerText)
    const event = button.getAttribute('data-event')
    console.log(3,event)
    sendNotification(button.innerText)

    switch (event) {
        case "disagree":
            hideElement('.start');
            showElement('.disagree');
            break;
        case "ready":
            console.log(444)
            hideElement('.start');
            showElement('.events');
            break;
        case "hugg":
        case "love":
        case "kiss":
            handleEvent(event)
            break;
        case "telegram":
            window.open('https://t.me/ftigran')
            break;
        default: console.log(event)
    }
})
