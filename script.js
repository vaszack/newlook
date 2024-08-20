document.addEventListener('DOMContentLoaded', () => {
    const quantityInputs = document.querySelectorAll('#cart input[type="number"]');
    const subtotalElements = document.querySelectorAll('#cart tbody tr td:nth-child(6)');
    const cartSubtotalElement = document.querySelector('#subtotal table tr:nth-child(1) td:nth-child(2)');
    const totalElement = document.querySelector('#subtotal table tr:nth-child(3) td:nth-child(2)');
    const applyCouponBtn = document.querySelector('#coupon button');
    const checkoutBtn = document.querySelector('#subtotal button');

    // Function to update subtotal and total based on quantity changes
    const updateSubtotal = () => {
        let cartSubtotal = 0;
        subtotalElements.forEach((subtotalElement, index) => {
            const quantity = parseInt(quantityInputs[index].value);
            const price = parseFloat(subtotalElement.textContent.replace('$', ''));
            const subtotal = quantity * price;
            subtotalElement.textContent = '$' + subtotal.toFixed(2);
            cartSubtotal += subtotal;
        });
        cartSubtotalElement.textContent = '$' + cartSubtotal.toFixed(2);
        totalElement.textContent = '$' + cartSubtotal.toFixed(2); // Assuming shipping is free
    };

    // Event listener for quantity input changes
    quantityInputs.forEach(input => {
        input.addEventListener('input', updateSubtotal);
    });

    // Apply coupon functionality (dummy functionality for demonstration)
    applyCouponBtn.addEventListener('click', () => {
        const couponInput = document.querySelector('#coupon input');
        const couponValue = couponInput.value.trim();
        if (couponValue === 'SAVE10') {
            const discount = parseFloat(cartSubtotalElement.textContent.replace('$', '')) * 0.1;
            const newTotal = parseFloat(totalElement.textContent.replace('$', '')) - discount;
            totalElement.textContent = '$' + newTotal.toFixed(2);
            couponInput.value = ''; // Clear coupon input field
        } else {
            alert('Invalid coupon code. Please try again.');
        }
    });

    // Proceed to checkout functionality (dummy functionality for demonstration)
    checkoutBtn.addEventListener('click', () => {
        const totalAmount = parseFloat(totalElement.textContent.replace('$', ''));
        if (totalAmount > 0) {
            alert('Redirecting to checkout...');
            // You can add actual checkout redirection logic here
        } else {
            alert('Your cart is empty. Please add items to proceed to checkout.');
        }
    });
});
