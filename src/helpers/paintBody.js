const paintBody = weather => {
    const body = document.querySelector('body');
    body.className = ``;
    body.classList.add( `body-${weather}` )
}

export default paintBody