let total = 0;

// إضافة منتج إلى الفاتورة
function addItem() {
    const productName = document.getElementById('productName').value;
    const productPrice = parseFloat(document.getElementById('productPrice').value);
    const productQuantity = parseInt(document.getElementById('productQuantity').value);

    if (!productName || productPrice <= 0 || productQuantity <= 0) {
        alert("يرجى إدخال بيانات صحيحة!");
        return;
    }

    const subtotal = productPrice * productQuantity;

    // تحديث الجدول
    const receiptBody = document.getElementById('receiptBody');
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>${productName}</td>
        <td>${productPrice.toFixed(2)}</td>
        <td>${productQuantity}</td>
        <td>${subtotal.toFixed(2)}</td>
    `;
    receiptBody.appendChild(newRow);

    // تحديث الإجمالي
    total += subtotal;
    document.getElementById('totalPrice').innerText = total.toFixed(2);

    // إعادة تعيين الحقول
    document.getElementById('productName').value = '';
    document.getElementById('productPrice').value = '';
    document.getElementById('productQuantity').value = 1;
}

// إعادة تعيين الفاتورة
function resetReceipt() {
    if (confirm("هل أنت متأكد من إعادة تعيين الفاتورة؟")) {
        document.getElementById('receiptBody').innerHTML = '';
        total = 0;
        document.getElementById('totalPrice').innerText = '0';
    }
}
