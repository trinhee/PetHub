function toggleProductID() {
    var reasonSelect = document.getElementById('reason');
    var productIDLabel = document.getElementById('productIDLabel');
    var productIDInput = document.getElementById('productID');

    if (reasonSelect.value === 'product-info') {
        productIDLabel.style.display = 'block';
        productIDInput.style.display = 'block';
    } else {
        productIDLabel.style.display = 'none';
        productIDInput.style.display = 'none';
    }
}

function validateForm() {
    var nameInput = document.getElementById('name');
    var phoneInput = document.getElementById('phone');
    var productIDInput = document.getElementById('productID');
    var messageInput = document.getElementById('message');

    // Validate Name
    validateField(nameInput, /^[^\d]{4,}$/, 'Name');

    // Validate Phone Number
    validateField(phoneInput, /^\d{3} \d{3} \d{4}$/, 'Phone Number');

    // Validate Product ID
    if (productIDInput.style.display !== 'none') {
        validateField(productIDInput, /^(GT12345|BT67890|TD54321|MG65463|PI99823|CT25130)$/, 'Product ID');
    }

    // Validate Message
    validateField(messageInput, /^.{10,30}$/, 'Message');
}

function validateField(input, regex, fieldName) {
    var isValid = regex.test(input.value);

    if (isValid) {
        input.classList.remove('invalid');
        input.classList.add('valid');
    } else {
        input.classList.remove('valid');
        input.classList.add('invalid');
    }

    console.log(fieldName + ': ' + (isValid ? 'Valid' : 'Invalid'));
}



