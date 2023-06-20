<?php
	if (!empty($_SERVER['HTTPS']) && ('on' == $_SERVER['HTTPS'])) {
		$uri = 'https://';
	} else {
		$uri = 'http://';
	}
	
$url = $_SERVER['REQUEST_URI']; //returns the current URL
$parts = explode('/',$url);
$dir = $_SERVER['SERVER_NAME'];
for ($i = 0; $i < count($parts) - 1; $i++) {
 $dir .= $parts[$i] . "/";
}
$ur1 = $uri.$dir."files/";








 include_once 'mongodb_config.php';


var_dump($_FILES['uploadedfile']['name']);
$target_path = "files/";
$target_path = $target_path . basename( $_FILES['uploadedfile']['name']);
if(move_uploaded_file($_FILES['uploadedfile']['tmp_name'], $target_path))
{

   

$dbname = 'data_smk';
$collection = 'upload';

//DB connection
$db = new DbManager();
$conn = $db->getConnection();

//record to add
// $data = json_decode(file_get_contents("php://input", true));

//////////////////////////////////////////////////////////////////////
// $filter = ["ID" => intval($_POST['ID'])];
// $option = [];
// $read = new MongoDB\Driver\Query($filter, $option);

// //fetch records
// $records = $conn->executeQuery("$dbname.$collection", $read);
// // echo json_encode(iterator_to_array($records));
// $count= json_encode(count((iterator_to_array($records))));
// /////////////////////////////////////////////////////////////

// if (!$count >= 1){
    
$permitted_chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
$permitted_chars1 = '0123456789abcdefghijklmnopqrstuvwxyz';
function generate_string($input, $strength = 16) {
    $input_length = strlen($input);
    $random_string = '';
    for($i = 0; $i < $strength; $i++) {
        $random_character = $input[mt_rand(0, $input_length - 1)];
        $random_string .= $random_character;
    }
    return $random_string;
}

$cak= generate_string($permitted_chars1, 6);
$cak1 = substr(md5(time()), 0, 6);

  $cacak =(rand(1000,99999));

$nm=$_FILES['uploadedfile']['name'];
$ur="https://web2.smkn2-palopo.sch.id/UPLOAD/files/";
///*
$myarray = array( 
 //   "id" => intval($_POST['ID']),
    "id" => $cak, 
    "image" => $nm,  
    "url" => $ur1.$nm       
       ); 

// insert record

$insert = new MongoDB\Driver\BulkWrite();
$insert->insert($myarray);
$result = $conn->executeBulkWrite("$dbname.$collection", $insert);
  
   
   header("Location: index.php");
}
// }
else
 {echo "Error uploading file. Please try again!";
}