function verifyFields(){
    document.getElementById('productRegistrationForm').addEventListener('submit', event => {
        const productPrice = document.getElementById('productPrice').value;
        const price = parseFloat(productPrice);

        document.getElementById('productPrice').value = price.toFixed(2);
    })
}

document.addEventListener('DOMContentLoaded', () => {
    verifyFields();
})