// Example: Update total price when quantity changes
document.querySelector('.quantity').addEventListener('change', function() {
    const quantity = this.value;
    const price = 500; // ราคาเสื้อ
    const itemTotal = quantity * price;
    document.querySelector('.item-total').textContent = `รวม: ${itemTotal} บาท`;
    // Update total price logic
});
