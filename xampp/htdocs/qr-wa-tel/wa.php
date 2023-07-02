
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">


<?php
$actual_link2 = (empty($_SERVER['HTTPS']) ? 'http' : 'https') . "://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]";
$actual_link= base64_encode($actual_link2);

$nama = isset($_GET['nama']) ? $_GET['nama'] : '';
$kelas = isset($_GET['kelas']) ? $_GET['kelas'] : '';
$pel = isset($_GET['pel']) ? $_GET['pel'] : '';
$tugas = isset($_GET['tugas']) ? $_GET['tugas'] : '';
// var_dump($_POST);

// $key =$_POST['key'];
// $line1 = isset($_POST['line1']) ? " ".$_POST['line1']."" : '';
// $line2 = isset($_POST['line2']) ? " ".$_POST['line2']."" : '';
// $line3 = isset($_POST['line3']) ? " ".$_POST['line3']."" : '';
// $line4 = isset($_POST['line4']) ? " ".$_POST['line4']."" : '';
if($_GET){
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
// var_dump($_GET);

$key =$_GET['key'];
$line1 = isset($_GET['line1']) ? $_GET['line1'] : '';
$line2 = isset($_GET['line2']) ? $_GET['line2'] : '';
$line3 = isset($_GET['line3']) ? $_GET['line3'] : '';
$line4 = isset($_GET['line4']) ? $_GET['line4'] : '';
$jarak = isset($_GET['jarak']) ? $_GET['jarak'] :" ";
// $jarak = " ";
if ($_GET['jarak'] == ""){
	$jarak = " ";
}else{
	$_GET['jarak'];

}
// isi qrcode yang ingin dibuat. akan muncul saat di scan
$isi = "https://api.whatsapp.com/send?phone=6282196906898&text=$key$jarak$line1$jarak$line2$jarak$line3$jarak$line4"; 

// https://www.malasngoding.com
 
// memanggil library php qrcode
// include "phpqrcode/qrlib.php"; 
 
// nama folder tempat penyimpanan file qrcode
$penyimpanan = "temp/";
 
// membuat folder dengan nama "temp"
if (!file_exists($penyimpanan))
 mkdir($penyimpanan);
 
// isi qrcode yang ingin dibuat. akan muncul saat di scan
// $isi = 'https://www.malasngoding.com'; 
 
// perintah untuk membuat qrcode dan menyimpannya dalam folder temp
// atur level pemulihan datanya dengan QR_ECLEVEL_L | QR_ECLEVEL_M | QR_ECLEVEL_Q | QR_ECLEVEL_H
// QRcode::png($isi, $penyimpanan.'qrcodeku_L.png', QR_ECLEVEL_L); 
// QRcode::png($isi, $penyimpanan.'qrcodeku_M.png', QR_ECLEVEL_M); 
// QRcode::png($isi, $penyimpanan.'qrcodeku_Q.png', QR_ECLEVEL_Q); 
QRcode::png($isi, $penyimpanan.'qrcodeku_H.png', QR_ECLEVEL_H);
 
echo '<br><br><center><h2>SCAN ME</h2>';
// echo '<h3>www.malasngoding.com</h3>';
 echo "<center><h3> $key</h3><br>";
 // menampilkan qrcode 
// echo '<img src="'.$penyimpanan.'qrcodeku_L.png">';
// echo '<img src="'.$penyimpanan.'qrcodeku_M.png">';
// echo '<img src="'.$penyimpanan.'qrcodeku_Q.png">';
echo '<img  src="'.$penyimpanan.'qrcodeku_H.png" width="400" height="400"><br><br>';

// $isi = 'https://www.malasngoding.com'; 
echo  '<br><br><a href="wa.php" class="btn btn-primary btn-lg active" role="button" aria-pressed="true">home</a>';

}else{

?>



<html>
<body><center>
  <br><br>
<h2> Input data WA</h2>
<!-- <h1>The form method="post" attribute</h1> -->
<!-- <br><br> -->

<?php
$sbg = isset($_POST['sbg']) ? $_POST['sbg'] : '';
echo "sebagai ->".$sbg."<br><br>";
include_once 'mongodb_config.php';
	$db = new DbManager();
	$conn = $db->getConnection();
 $coll="comand";

	$filter = [];
	$option = [];
	$read = new MongoDB\Driver\Query($filter, $option);
	$records = $conn->executeQuery("$dbname.$coll", $read);
	$res= json_encode(iterator_to_array($records));
	$result= json_decode($res, true);




	// $filter = [ 'kelas' => $kelas ] ;
	$filter = [ 'kelas' => $kelas ,"pelajaran" => $pel , "namaTugas" => $tugas] ;
	$option = ['sort' => ['kelas' => -1]];
	$read = new MongoDB\Driver\Query($filter, $option);
	//fetch records
	$records = $conn->executeQuery("$dbname.$collection", $read);
	$res= json_encode(iterator_to_array($records));
	$result2= json_decode($res, true);



	$filter1 = [ 'kelas' => $kelas ,'show' => '1'] ;
	$option1 = ['sort' => ['kelas' => -1]];
	$read1 = new MongoDB\Driver\Query($filter1, $option1);
	//fetch records
	$records1 = $conn->executeQuery("$dbname.$collection", $read1);
	$res1= json_encode(iterator_to_array($records1));
	$result3= json_decode($res1, true);
	// $json = json_decode($rest, true); 
	$count= json_encode(count($result3)); 

	// var_dump($result2);


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


<div>

</div>

<div class="container">

<div>

		<div class="btn-group"> </div>

	</div>
	<form action="" method="post">
	<table class="table">
  <thead>
    <tr>
	<th>
        
		<div class="col-md-6">
		<select name="sbg"  id="sbg"  class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
		<option value="">Select sebagai</option>
		<?php 
	   $new_array = array();
	   $exists    = array();
	   foreach( $result as $element ) {
		   if( !in_array( $element['sbg'], $exists )) {
			   $new_array[] = $element;
			   $exists[]    = $element['sbg'];
		   }
	   }
	   
	   $response2= json_encode( $new_array );
	   $result11=json_decode($response2, true);
		  foreach ($result11 as  $row)
		{
			echo '<option value="'.$row["sbg"].'">'.$row["sbg"].'</option>';
		}
		?>  
	</select>
		
	<th >

	  <input  class="btn btn-xs btn-primary" type="submit">
	  <!-- <a class="btn btn-xs btn-danger" href="index.php?kelas=<?php echo $tugas01?>&pel=<?php echo $nm2;?>&tugas=<?php echo $nm3;?>">Aktif</a> -->
</div><?php
//  $row["sbg"]
 ?>
	  </th>
	  <th>
	  &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
	  &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
	  &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
	  &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
	  &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
	  &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
	  &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
	  &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
	  &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
	  </th>
	  <th>
	  <!-- <input  class="btn btn-xs btn-primary" type="submit"> -->
	  <a class="btn btn-xs btn-success " href="input.php">input</a>

	  </th>
	  <!-- <th ></th> -->
    </tr>
  </thead>
  
  <?php
// var_dump($_POST);

$sbg = isset($_POST['sbg']) ? $_POST['sbg'] : '';
$filter1 = [ 'sbg' => $sbg] ;
	$option1 = [];
	$read1 = new MongoDB\Driver\Query($filter1, $option1);
	//fetch records
	$records1 = $conn->executeQuery("$dbname.$coll", $read1);
	$res1= json_encode(iterator_to_array($records1));
	$result23= json_decode($res1, true);
	// $json = json_decode($rest, true); 
	$count= json_encode(count($result23)); 


// var_dump($result23); 
// echo $sbg

//   echo $row["nama"];
//   echo $pel1;
//   echo $nm3;
  ?>
</table>

 
<!-- <input type="submit"> -->
</form>







	<div class ="row">

		<div class="col-md-12">

			<table class="table table-striped table-bordered table-hover">

				<tr>
				<th>no</th>
                <th>nama</th>
				
						<th>Key</th>
					<th>line1</th>
					<th>line2</th>
					<th>line3</th>
					<th>line4</th>
					<th>Jarak</th>

					<th>Aksi</th>


					
				</tr>		
				 <?php

	$no=0;

	foreach ($result23 as  $obj) { 
	$no++;
	 ?>
   <tr>

	   <td><?php echo $no; ?></td>
	  <td><b><?php echo $obj['nama']; ?></b></td>
	   <td><?php echo $obj['key']; ?></td>
	  
	   
	   <td> <?php echo isset($obj['line1']) ? $obj['line1']: '' ?></td>
	   <td>  <?php echo isset($obj['line2']) ? $obj['line2']: '' ?></td>
	   <td>  <?php echo isset($obj['line3']) ? $obj['line3']: '' ?></td>
	   <td>  <?php echo isset($obj['line4']) ? $obj['line4']: '' ?></td>
	   <td>  <?php echo isset($obj['jarak']) ? $obj['jarak']: '' ?></td>
</td>

<!-- <td> -->
	   

		  
<td> 

		
		
<!-- <a class="btn btn-xs btn btn-success" href="wa.php?id=<?php echo $obj['_id']['$oid'];?>&url='coba'"> selesai</a> -->
<a class="btn btn-xs btn-primary" href="wa.php?key=<?php echo $obj['key'];?>&line1=<?php echo isset($obj['line1']) ? $obj['line1']: '' ?>&line2=<?php echo isset($obj['line2']) ? $obj['line2']: '' ?>&line3=<?php echo isset($obj['line3']) ? $obj['line3']: '' ?>&line4=<?php echo isset($obj['line4']) ? $obj['line4']: '' ?>&jarak=<?php echo isset($obj['jarak']) ? $obj['jarak']: '' ?>"> kirim</a>
		 <a class="btn btn-xs btn btn-danger" href="hapus.php?id=<?php echo $obj['_id']['$oid'];?>&url=<?php echo $actual_link;?>"> hapus</a>

	   </td>
 <!-- <td><?php echo $obj['show']; ?></td> -->

   </tr>

   <?php 

   }

//    };

			?>

			</table>

		</div> 

	</div>

</div>

</body>


<!-- 


<select>  
  <option value="Select">Select</option>}  
  <option value="Vineet">Vineet Saini</option>  
  <option value="Sumit">Sumit Sharma</option>  
  <option value="Dorilal">Dorilal Agarwal</option>  
  <option value="Omveer">Omveer Singh</option>  
  <option value="Rohtash">Rohtash Kumar</option>  
  <option value="Maneesh">Maneesh Tewatia</option>  
  <option value="Priyanka">Priyanka Sachan</option>  
  <option value="Neha">Neha Saini</option>  
</select>   
<br><br>


<form action="" method="get"  >
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
</form>

<p>Click on the submit button, and the input will be sent to a page on the server called "action_page.php".</p> 

</body>
</html> -->
<?PHP
}