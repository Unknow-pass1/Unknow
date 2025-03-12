<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $message = htmlspecialchars($_POST['message']); // ทำความสะอาดข้อความ
    $dateTime = date("Y-m-d H:i:s"); // วันที่และเวลา
    $formattedMessage = $dateTime . " / " . $message . PHP_EOL;

    // บันทึกลงไฟล์
    $file = "messages.txt";
    file_put_contents($file, $formattedMessage, FILE_APPEND);

    // แสดงข้อความยืนยัน
    echo "<h1>ข้อความถูกบันทึกเรียบร้อยแล้ว!</h1>";
    echo "<p><a href='messages.txt' target='_blank'>ดูข้อความทั้งหมด</a></p>";
    echo "<p><a href='form.html'>กลับไปหน้าส่งข้อความ</a></p>";
}
?>
