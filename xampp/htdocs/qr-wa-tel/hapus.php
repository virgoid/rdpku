<?php

//var_dump($_GET);
//echo($_GET['id']);
$id=$_GET['id'];
$url=$_GET["url"];
echo $id;
echo $actual_link= base64_decode($url);
// $decoded = Base32::decode($encoded);

include_once 'mongodb_config.php';
$db = new DbManager();
$conn = $db->getConnection();
$collection1 ="comand";

// // read all records
// $filter = ['_id' => new MongoDB\BSON\ObjectId($id)] ;
// //$option = [];
// $option = [];
// $read = new MongoDB\Driver\Query($filter, $option);
// //fetch records
// $records = $conn->executeQuery("$dbname.$collection1", $read);
// // echo json_encode(iterator_to_array($records));
// $records1 = $conn->executeQuery("$dbname.$collection1", $read);
// // var_dump(intval($json['ID']));
// $res1= json_encode(iterator_to_array($records1));
// $result= json_decode($res1, true);
// // var_dump($result);
// // var_dump($result['0']['sesi']);
// $sesi = $result['0']['selesai'];
// $kls = $result['0']['kelas'];

// $update2 = new MongoDB\Driver\BulkWrite();
// if ($sesi === "1"){
// 	$update2->update(
// 		['_id' => new MongoDB\BSON\ObjectId($id)], ['$set' => ["selesai" => "0" ]], ['multi' => false, 'upsert' => false]
// 	);
//  }else{
// 	$update2->update(
// 		['_id' => new MongoDB\BSON\ObjectId($id)], ['$set' => ["selesai" => "1" ]], ['multi' => false, 'upsert' => false]
// 	);
// 	}
// $result = $conn->executeBulkWrite("$dbname.$collection", $update2);





$deletes = new MongoDB\Driver\BulkWrite();
$deletes->delete(
    ['_id' => new MongoDB\BSON\ObjectId($id)],
    ['limit' => 1]
);


$result = $conn->executeBulkWrite("$dbname.$collection1", $deletes);

if($result) {
	echo nl2br("Record deleted successfully \n");
}


header("location: $actual_link");
















date_default_timezone_set('Asia/Makassar'); // Zona Waktu indonesia
// echo date('h:i:s a'); // menampilkan jam sekarang
// echo "<br/>";
$waktu= date('H:i:s'); //kombinasi jam dan tanggal
$date=date('d-m-Y');
// echo $json['alamat'];
$day = date('D', strtotime($waktu));
$dayList = array(
    'Sun' => 'Minggu',
    'Mon' => 'Senin',
    'Tue' => 'Selasa',
    'Wed' => 'Rabu',
    'Thu' => 'Kamis',
    'Fri' => 'Jumat',
    'Sat' => 'Sabtu'
);
// echo "Tanggal {$tanggal} adalah hari : " . $dayList[$day];


?>