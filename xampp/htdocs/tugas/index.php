<?php

// include_once("./config.php");
$actual_link2 = (empty($_SERVER['HTTPS']) ? 'http' : 'https') . "://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]";
$actual_link= base64_encode($actual_link2);
// $encoded = Base32::encode($actual_link2);

// echo $actual_link;

$kelas = isset($_GET['kelas']) ? $_GET['kelas'] : '';
$pel = isset($_GET['pel']) ? $_GET['pel'] : '';
$tugas = isset($_GET['tugas']) ? $_GET['tugas'] : '';


include_once 'mongodb_config.php';
	$db = new DbManager();
	$conn = $db->getConnection();


	$filter = [];
	$option = [];
	$read = new MongoDB\Driver\Query($filter, $option);
	$records = $conn->executeQuery("$dbname.$collection", $read);
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

	<title>DATA BASE SISWA</title> -

	<!-- <link rel="stylesheet" href="assets/css/bootstrap.min.css">

	<link rel="stylesheet" href="assets/css/ilmudetil.css">

</head>

<body>

	<style type="text/css">

	body{

		font-family: sans-serif;

	}

	table{

		margin: 20px auto;

		border-collapse: collapse;

	}

	table th,

	table td{

		border: 1px solid #3c3c3c;

		padding: 3px 8px;

 

	}

	a{

		background: blue;

		color: #fff;

		padding: 8px 10px;

		text-decoration: none;
		border-radius: 2px;

	}

	</style>

 

	<?php

	//  header("Content-type: application/vnd-ms-excel");

	//  header("Content-Disposition: attachment; filename=Data Pegawai.xls");

	// ?>

-->

<body>

 
<div class="container">

	<!-- <div class="jumbotron"> -->
<center>
		<h3>SMKN 2 Palopo </h3>      

		<p>Data Tugas Siswa oleh Guru</p>      

	<!-- </div> -->

</div> 









<!-- <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">

<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>

<script src="https://cdn.jsdelivr.net/npm/popper.js@1.14.3/dist/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script> -->



<link rel="stylesheet" href="css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">

<script src="js/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>

<script src="js/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>

<script src="js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>







<div>





</div>











<div class="container">

<div>
	

<a class="btn btn-primary" href="/tugas/"><i class="icon-plus"></i> Home</a>
<!--

<a class="btn btn-primary" href="kelas.php?kelas=<?php  echo $_GET['kelas'] ?>"><i class="icon-plus"></i> daftar siswa</a>

<a class="btn btn-primary" href="kelas1.php?kelas=<?php  echo $_GET['kelas'] ?>"><i class="icon-plus"></i> lbl siswa</a> 


<a class="btn btn-primary" href="reg.php?kelas=<?php  echo $_GET['kelas'] ?>"><i class="icon-plus"></i> reg</a>

<a class="btn btn-primary" href="absen.php?kelas=<?php  echo $_GET['kelas'] ?>"><i class="icon-plus"></i> Hadir</a>
<a class="btn btn-primary" href="kartuA10.php?kelas=<?php  echo $_GET['kelas'] ?>&n=1"><i class="icon-plus"></i>Kartu</a>
<a class="btn btn-primary" href="nilai.php?kelas=<?php  echo $_GET['kelas'] ?>&s=sm1"><i class="icon-plus"></i>Nilai</a>
---->
		<!-- <a class="btn btn-primary" href="index.php"><i class="icon-plus"></i> all</a> -->

		<div class="btn-group"> </div>

	</div>










	<form action="" method="get">
	<table class="table">
  <thead>
    <tr>
	<th>

            
            
<div class="col-md-6">
	<select name="kelas"  id="kelas"  class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
		<option value="">Select Kelas</option>
		<?php 
	   $new_array = array();
	   $exists    = array();
	   foreach( $result as $element ) {
		   if( !in_array( $element['kelas'], $exists )) {
			   $new_array[] = $element;
			   $exists[]    = $element['kelas'];
		   }
	   }
	   
	   $response2= json_encode( $new_array );
	   $result11=json_decode($response2, true);
		  foreach ($result11 as  $row)
		{
			echo '<option value="'.$row["kelas"].'">'.$row["kelas"].'</option>';
		}
		?>  
	</select>
</div>




<th >
<th>

            
           
<div class="col-md-6"> 
 <select name="pel"  id="pel"  class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
 <option value="">Select Pelajaran</option>
		<?php 
	   $new_array = array();
	   $exists    = array();
	   foreach( $result as $element ) {
		   if( !in_array( $element['pelajaran'], $exists )) {
			   $new_array[] = $element;
			   $exists[]    = $element['pelajaran'];
		   }
	   }
	   
	   $response2= json_encode( $new_array );
	   $result12=json_decode($response2, true);
		  foreach ($result12 as  $row)
		{
			echo '<option value="'.$row["pelajaran"].'">'.$row["pelajaran"].'</option>';
		}
		?>  
	</select>
</div>




<th >
	<th>

            
            
                <div class="col-md-6">
                    <select name="tugas"  id="tugas"  class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <option value="">Select nama Tugas</option>
                        <?php 
                       $new_array = array();
					   $exists    = array();
					   foreach( $result as $element ) {
						   if( !in_array( $element['namaTugas'], $exists )) {
							   $new_array[] = $element;
							   $exists[]    = $element['namaTugas'];
						   }
					   }
					   
					   $response2= json_encode( $new_array );
					   $result13=json_decode($response2, true);
						  foreach ($result13 as  $row)
                        {
                            echo '<option value="'.$row["namaTugas"].'">'.$row["namaTugas"].'</option>';
                        }
                        ?>  
                    </select>
                </div>
                
            
           
       
      <th >
	  <input  class="btn btn-xs btn-primary" type="submit">
	  <!-- <a class="btn btn-xs btn-danger" href="index.php?kelas=<?php echo $tugas01?>&pel=<?php echo $nm2;?>&tugas=<?php echo $nm3;?>">Aktif</a> -->

	  </th>
	  <!-- <th ></th> -->
    </tr>
  </thead>
  
  <?php
//   echo $nm11;
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

					<th>No.</th>

					<th>ids</th>
<th>idg</th>
<th>nama</th>
					<th>kelas</th>

					<th>pelajaran</th>
						<th>Tugas</th>
					<th>Nama Guru</th>
					<th>tanggal</th>
					<th>selesai<br></th>

					<th>&nbsp&nbsp&nbsp&nbsp&nbsp&nbspOpsi&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</th>

				</tr>		
				 <?php

	$no=0;

	foreach ($result2 as  $obj) { 
	$no++;
	 ?>
   <tr>

	   <td><?php echo $no; ?></td>
	   <td><?php echo $obj['ids']; ?></td>
	   <td><?php echo $obj['idg']; ?></td>
	   <td><?php echo $obj['nama']; ?></td>
	   <td><?php echo $obj['kelas']; ?></td>
	   <td><?php echo $obj['pelajaran']; ?></td>
	   <td><?php echo $obj['namaTugas']; ?></td>
	   <td><?php echo $obj['NamaGuru']; ?></td>
	   <td><?php echo $obj['date']; ?></td>
	   <td><?php echo $obj['selesai']; ?></td>
	   
<!-- 	   

		<form method="post" action="foto/index.php" >

		   <input type="hidden" class="form-control" name="id" id="id" value="<?php echo $obj['_id']['$oid'];?>">

		   <input type="hidden" class="form-control" name="nama" id="nama" value="<?php echo $obj['nama'];?>">

                      

		  <a>  <button class="btn btn-success" type="submit" >photo</button></a> -->
		  
<td> 

<!--

	    <a class="btn btn-xs btn-primary" href="foto/index.php?id=<?php echo $obj['_id']['$oid'];?>">photo</a>
<a class="btn btn-xs btn-primary" href="foto/index2.php?id=<?php echo $obj['_id']['$oid'];?>">Photo2</a>

		

<a class="btn btn-xs btn-primary" href="foto/index1.php?id=<?php echo $obj['_id']['$oid'];?>">photo1</a>

				  

		   <a class="btn btn-xs btn-danger" href="index3_delete.php?id=<?php echo $obj['_id']['$oid'];?>">Delete</a> 

		   <a class="btn btn-xs btn-danger" href="index3_aktif.php?id=<?php echo $obj['_id']['$oid'];?>">set</a> 

<a class="btn btn-xs btn-primary" href="foto/index4b.php?id=<?php echo $obj['_id']['$oid'];?>">cam3</a>
 <a class="btn btn-xs btn-danger" href="view2.php?id=<?php echo $obj['_id']['$oid'];?>">view</a>
<a class="btn btn-xs btn btn-success" href="cetak2.php?id=<?php echo $obj['_id']['$oid'];?>">IDcard2</a>
			   <a class="btn btn-xs btn btn-success" href="absen.php?id=<?php echo $obj['ID'];?>">absen</a>
/////////////////////////////////////////////////////////////////////////////////////////////////
-->
		
		
<a class="btn btn-xs btn btn-success" href="selesai.php?id=<?php echo $obj['_id']['$oid'];?>&url=<?php echo $actual_link ?>"> selesai</a>
<a class="btn btn-xs btn-danger" href="hapus.php?id=<?php echo $obj['_id']['$oid'];?>&url=<?php echo $actual_link ?>"> Hapus</a>
	<!-- <a class="btn btn-xs btn-primary" href="foto/index3b.php?id=<?php echo $obj['_id']['$oid'];?>">hapus</a> -->

        <!-- <a class="btn btn-xs btn btn-success" href="cetak2.php?id=<?php echo $obj['_id']['$oid'];?>">cardD</a>
		<a class="btn btn-xs btn btn-success" href="cetak3.php?id=<?php echo $obj['_id']['$oid'];?>">cardB</a>
      <a class="btn btn-xs btn-danger" href="view2.php?id=<?php echo $obj['_id']['$oid'];?>">qrcode</a>
	  <br>
<a class="btn btn-xs btn-danger" href="show.php?id=<?php echo $obj['_id']['$oid'];?>">Aktif</a>
<a class="btn btn-xs btn-danger" href="sesi.php?id=<?php echo $obj['_id']['$oid'];?>">sesi</a> -->
<!-- <a><form action="show.php" method="post">
 <input type="hidden" name="<?php echo $obj['_id']['$oid'];?>"><br>
<input type="submit">

</form>
	</a> -->
<!--
<html>
<body>
<a
<form action="show.php" method="post">
 <input type="hidden" name="<?php echo $obj['_id']['$oid'];?>"><br>
<input type="submit">
</form>

</body>
</html>



//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
<a class="btn btn-xs btn-primary" href="foto/index6.php?id=<?php echo $obj['_id']['$oid'];?>">cam4</a>
		<a class="btn btn-xs btn-primary" href="foto/index7.php?id=<?php echo $obj['_id']['$oid'];?>">cam5</a>
		<a class="btn btn-xs btn-primary" href="foto/index8.php?id=<?php echo $obj['_id']['$oid'];?>">cam6</a>


	 
	           <a class="btn btn-xs btn--red" href="foto/index2b.php?id=<?php echo $obj['_id']['$oid'];?>">cam1</a>
	
 
        <a class="btn btn-xs btn-primary" href="foto/index4.php?id=<?php echo $obj['_id']['$oid'];?>">photo4</a>
		<a class="btn btn-xs btn-primary" href="foto/index5.php?id=<?php echo $obj['_id']['$oid'];?>">cam4</a>
		
		  

 <a class="btn btn-xs btn-danger" href="foto/index.php?id=<?php echo $obj['_id']['$oid'];?>">add</a>		   -->

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