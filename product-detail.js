// Add to Cart Example (Product Detail)
document.querySelector('.btn').addEventListener('click', function() {
    const size = document.querySelector('#size').value;
    const color = document.querySelector('#color').value;
    alert(`เพิ่มเสื้อขนาด ${size} สี ${color} ลงในตะกร้าแล้ว`);
    // Logic to add product to cart with size and color options
});
