function startCountdown(targetDate) {
    function updateCountdown() {
        const now = new Date().getTime();
        const distance = targetDate - now;

        if (distance < 0) {
            document.getElementById("countdown").innerHTML = "Countdown expired!";
            clearInterval(interval);
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("countdown").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
}

const targetDate = new Date(2025, 2, 31, 23, 59, 59).getTime(); // (2025-03-31)
startCountdown(targetDate);

function previewImage(event, id) {
    const imgPreview = document.getElementById(`preview${id}`);
    const file = event.target.files[0];

    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            imgPreview.src = e.target.result;
            imgPreview.classList.remove("hidden");
            document.getElementById(`downloadImg${id}`).classList.remove("hidden");
            document.getElementById(`downloadImg${id}`).href = e.target.result;
        };
        reader.readAsDataURL(file);
    }
}

function copyText(text) {
    navigator.clipboard.writeText(text).then(() => {
        const message = document.getElementById("message");
        message.classList.remove("hidden");
        setTimeout(() => message.classList.add("hidden"), 2000);
    }).catch(err => console.error("Failed to copy: ", err));
}


// เลือกทุกปุ่มดาวน์โหลด
const downloadButtons = document.querySelectorAll('.download-btn');

// เมื่อกดปุ่มดาวน์โหลด
downloadButtons.forEach(button => {
  button.addEventListener('click', function() {
    const imgId = this.getAttribute('data-img-id'); // รับ id ของรูปภาพ
    const img = document.getElementById(imgId);    // เลือกรูปภาพที่ตรงกับ id

    const link = document.createElement('a');
    link.href = img.src;
    link.download = img.src.split('/').pop();  // ใช้ชื่อไฟล์จาก URL ของรูปภาพ
    link.click();
  });
});
