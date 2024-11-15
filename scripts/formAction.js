function getURLParams(){
    const params = new URLSearchParams(window.location.search);

    return {
        employeeName: params.get('employeeName'),
        employeeId: params.get('employeeId'),
        dateAdded: params.get('dateAdded'),
        productName: params.get('productName'),
        productDescription: params.get('productDescription'),
        productPrice: params.get('productPrice'),
        productQuantity: params.get('productQuantity')
    };
}

document.addEventListener('DOMContentLoaded', () => {
    const data = getURLParams();

    document.getElementById('employeeName').textContent = `${data.employeeName.toUpperCase()}`;
    document.getElementById('employeeId').textContent = `${data.employeeId}`;

    const [year, month, day] = data.dateAdded.split('-');
    document.getElementById('dateAdded').textContent = `${day}-${month}-${year}`;

    document.getElementById('productName').textContent = `${data.productName.toUpperCase()}`;
    document.getElementById('productDescription').textContent = `${data.productDescription.toUpperCase()}`;
    document.getElementById('productPrice').textContent = `R$ ${data.productPrice}`;
    document.getElementById('productQuantity').textContent = `${data.productQuantity} UNITS`;
})