<?php
if($_GET){

include "phpqrcode/qrlib.php"; 
 
// isi qrcode yang ingin dibuat. akan muncul saat di scan
// $isi = 'https://api.whatsapp.com/send?phone=628196906898&text=$key$line1$line2$line3$line4'; 
// echo $isi; 
// perintah untuk membuat qrcode dan menampilkannya secara langsung dengan format .PNG
// QRcode::png($isi); 
$key =$_POST['key'];
$line1 = isset($_POST['line1']) ? " ".$_POST['line1']."" : '';
$line2 = isset($_POST['line2']) ? " ".$_POST['line2']."" : '';
$line3 = isset($_POST['line3']) ? " ".$_POST['line3']."" : '';
$line4 = isset($_POST['line4']) ? " ".$_POST['line4']."" : '';

$isi = 'https://www.malasngoding.com'; 
QRcode::png($isi);
}
?>


<form action="" method="get" target="_blank" >
  <label for="key">key:</label>
  <input type="text" id="key" name="key" required><br><br>
  <label for="line1">line1:</label>
  <input type="text" id="line1" name="line1"><br><br>
  <label for="line2">line2:</label>
  <input type="text" id="line2" name="line2"><br><br>
  <label for="line3">line3</label>
  <input type="text" id="line3" name="line3"><br><br>
  <label for="line4">line4</label>
  <input type="text" id="line4" name="line4"><br><br>
  <input type="submit" value="Submit">
</form>