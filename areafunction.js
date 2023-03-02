let textArea = document.querySelector('textarea');
textArea.addEventListener('keyup', e => {
    textArea.style.height = '50px';
    let scHeight = e.target.scrollHeight;
    textArea.style.height = `${scHeight}px`;
    console.log(scHeight);
})