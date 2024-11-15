function showProductInfo(){
    const cards = document.querySelectorAll('.card');
    const modal = document.getElementById('modal');
    const overlay = document.getElementById('overlay');
    const closeButton = document.getElementById('closeButton');

    cards.forEach(card => {
        card.addEventListener('click', () => {
            modal.style.display = 'block';
            overlay.style.display = 'block';
        })
    })

    closeButton.addEventListener('click', () => {
        modal.style.display= 'none';
        overlay.style.display = 'none';
    })

    overlay.addEventListener('click', () => {
        modal.style.display= 'none';
        overlay.style.display = 'none';
    })
}


document.addEventListener('DOMContentLoaded', () => {
    showProductInfo();
})