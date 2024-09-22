// Basic form validation or submission handling
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const message = document.querySelector('#message').value;
    if (name && email && message) {
        alert(`ขอบคุณสำหรับข้อความของคุณ, ${name}`);
        // Logic to send the message
    } else {
        alert('กรุณากรอกข้อมูลให้ครบถ้วน');
    }
});
