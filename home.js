// Example: Basic functionality for subscribing to newsletter
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.querySelector('input[type="email"]').value;
    if (email) {
        alert(`ขอบคุณที่สมัครรับข่าวสาร: ${email}`);
        // Add logic to send email to backend
    } else {
        alert('กรุณากรอกอีเมล');
    }
});
