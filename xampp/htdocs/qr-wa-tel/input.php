
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">


<?php
// $key = isset($_GET['key']) ? $_GET['key'] : '';
// $kelas = isset($_GET['kelas']) ? $_GET['kelas'] : '';
// $pel = isset($_GET['pel']) ? $_GET['pel'] : '';
// $tugas = isset($_GET['tugas']) ? $_GET['tugas'] : '';
var_dump($_POST);

// $key =$_POST['key'];
$key = isset($_POST['key']) ? $_POST['key']."" : '';
$jarak = isset($_POST['jarak']) ? $_POST['jarak']."" : '';
$line1 = isset($_POST['line1']) ? $_POST['line1'] : '';
$line2 = isset($_POST['line2']) ? $_POST['line2'] : '';
$line3 = isset($_POST['line3']) ? $_POST['line3'] : '';
$line4 = isset($_POST['line4']) ? $_POST['line4'] : '';
$sbg = isset($_POST['sbg']) ? $_POST['sbg'] : '';
$nama = isset($_POST['nama']) ?$_POST['nama'] : '';
if($_POST){
// <?php
// https://www.malasngoding.com
// memanggil library php qrcode
include "phpqrcode/qrlib.php"; 
// $a =$_GET['key'];
// $line1 = isset($_POST['line1']) ? $_POST['line1']: '';
// $a1 =$_GET['line1'];
// $a2 =$_GET['line2'];
// $a3 =$_GET['line3'];
// $a4 =$_GET['line4']; 

include_once 'mongodb_config.php';
	$db = new DbManager();
	$conn = $db->getConnection();
	$db="data_smk";
 $coll="comand";


// $key =$_GET['key'];
// $line1 = isset($_GET['line1']) ? $_GET['line1'] : '';
// $line2 = isset($_GET['line2']) ? $_GET['line2'] : '';
// $line3 = isset($_GET['line3']) ? $_GET['line3'] : '';
// $line4 = isset($_GET['line4']) ? $_GET['line4'] : '';

echo '<br><br>'; 

$bulk = new MongoDB\Driver\BulkWrite(); 
$bulk->insert(
	[	'key' => $key,
 		'line1' => $line1, 
		'line2'=> $line2,
		'line3' => $line3,
		'line4'  => $line4,
		'sbg' => $sbg,
		'nama' => $nama,
		'jarak' => $jarak
		]); 
// $bulk->insert(['_id' => 2, 'x' => 2]); 
// $bulk->update(['x' => 2], ['$set' => ['x' => 1]]); 
// $bulk->insert(['_id' => 3, 'x' => 3]); 
// $bulk->delete(['x' => 1]); 
// $read = new MongoDB\Driver\Query($filter, $option);
// $conn = new MongoDB\Driver\Manager('mongodb://localhost:27017'); 
$result = $conn->executeBulkWrite("$db.$coll", $bulk); 
echo '<br>'; 
printf("Inserted %d document(s)\n", $result->getInsertedCount()); 
echo '<br>'; 
printf("Matched  %d document(s)\n", $result->getMatchedCount());
echo '<br>'; 
printf("Updated  %d document(s)\n", $result->getModifiedCount());
echo '<br>'; 
printf("Upserted %d document(s)\n", $result->getUpsertedCount()); 
echo '<br>'; 
printf("Deleted  %d document(s)\n", $result->getDeletedCount()); 
echo '<br>'; echo '<br>'; echo '<br>'; 
 
foreach ($result->getUpsertedIds() as $index => $id) { 
    printf('upsertedId[%d]: ', $index); 
    var_dump($id); 
} 
// isi qrcode yang ingin dibuat. akan muncul saat di scan
// $isi = "https://api.whatsapp.com/send?phone=6282196906898&text=$key $line1 $line2 $line3 $line4"; 

// https://www.malasngoding.com
 
// memanggil library php qrcode
// include "phpqrcode/qrlib.php"; 
 
// nama folder tempat penyimpanan file qrcode
// $penyimpanan = "temp/";
 
// membuat folder dengan nama "temp"
// if (!file_exists($penyimpanan))
//  mkdir($penyimpanan);
 
// isi qrcode yang ingin dibuat. akan muncul saat di scan
// $isi = 'https://www.malasngoding.com'; 
 
// perintah untuk membuat qrcode dan menyimpannya dalam folder temp
// atur level pemulihan datanya dengan QR_ECLEVEL_L | QR_ECLEVEL_M | QR_ECLEVEL_Q | QR_ECLEVEL_H
// QRcode::png($isi, $penyimpanan.'qrcodeku_L.png', QR_ECLEVEL_L); 
// QRcode::png($isi, $penyimpanan.'qrcodeku_M.png', QR_ECLEVEL_M); 
// QRcode::png($isi, $penyimpanan.'qrcodeku_Q.png', QR_ECLEVEL_Q); 
// QRcode::png($isi, $penyimpanan.'qrcodeku_H.png', QR_ECLEVEL_H);
 
// echo '<br><br><center><h2>SCAN ME</h2>';
// echo '<h3>www.malasngoding.com</h3>';
//  echo "<center><h3> $key</h3><br>";
 // menampilkan qrcode 
// echo '<img src="'.$penyimpanan.'qrcodeku_L.png">';
// echo '<img src="'.$penyimpanan.'qrcodeku_M.png">';
// echo '<img src="'.$penyimpanan.'qrcodeku_Q.png">';
// echo '<img  src="'.$penyimpanan.'qrcodeku_H.png" width="400" height="400"><br><br>';

// $isi = 'https://www.malasngoding.com'; 
echo  '<br><br><a href="wa.php" class="btn btn-primary btn-lg active" role="button" aria-pressed="true">home</a>';

}else{

?>



<html>
<body><center>
  <br><br>
<h2> Input data WA</h2>
<!-- <h1>The form method="post" attribute</h1> -->
<br><br>
<?php



	// $filter = [];
	// $option = [];
	// $read = new MongoDB\Driver\Query($filter, $option);
	// $records = $conn->executeQuery("$dbname.$coll", $read);
	// $res= json_encode(iterator_to_array($records));
	// $result= json_decode($res, true);




	// // $filter = [ 'kelas' => $kelas ] ;
	// $filter = [ 'kelas' => $kelas ,"pelajaran" => $pel , "namaTugas" => $tugas] ;
	// $option = ['sort' => ['kelas' => -1]];
	// $read = new MongoDB\Driver\Query($filter, $option);
	// //fetch records
	// $records = $conn->executeQuery("$dbname.$collection", $read);
	// $res= json_encode(iterator_to_array($records));
	// $result2= json_decode($res, true);



	// $filter1 = [ 'kelas' => $kelas ,'show' => '1'] ;
	// $option1 = ['sort' => ['kelas' => -1]];
	// $read1 = new MongoDB\Driver\Query($filter1, $option1);
	// //fetch records
	// $records1 = $conn->executeQuery("$dbname.$collection", $read1);
	// $res1= json_encode(iterator_to_array($records1));
	// $result3= json_decode($res1, true);
	// // $json = json_decode($rest, true); 
	// $count= json_encode(count($result3)); 

	var_dump($_POST);


?>



<!DOCTYPE html>

<html>

<head>
 <meta charset="utf-8">

	<meta name="viewport" content="width=device-width, initial-scale=1.0">

	<meta name="author" content="ilmu-detil.blogspot.com">

	<title>DATA BASE SISWA</title> 
<body>

 

<link rel="stylesheet" href="css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">

<script src="js/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>

<script src="js/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>

<script src="js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>










<form action="" method="post"  >

<select id="sbg" name="sbg" >  
  <!-- <option value="Select">Select</option> -->
  <option value="guru">guru</option>  
  <option value="siswa">siswa</option>  
  <option value="umum">umum</option>  
  <option value="pegawai">prgawai</option>  
  
</select>   <select id="Jarak" name="Jarak" >  
  <!-- <option value="Select">Select</option> -->
  <option value=" ">spasi</option>  
  <option value="*">*</option>  

  
</select>   

<br><br>

<label for="nama">nama:</label>
  <input type="text" id="nama" name="nama" required><br><br>
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
  <input type="submit" value="Submit" class="btn btn-primary btn-lg active" role="button" aria-pressed="true>


   <input  class="btn btn-xs btn-primary" type="submit">
</form>

<p>Click on the submit button, and the input will be sent to a page on the server called "action_page.php".</p> 

</body>
</html> 
<?PHP
}