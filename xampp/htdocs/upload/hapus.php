<?php
$id = $_GET["id"];
unlink("files/".$id);

// echo $id;
include_once 'mongodb_config.php';

$dbname = 'data_smk';
$collection = 'upload';


//DB connection
$db = new DbManager();
$conn = $db->getConnection();

// delete record
$delete = new MongoDB\Driver\BulkWrite();
$delete->delete(
	['image' => $id]
);

$result = $conn->executeBulkWrite("$dbname.$collection", $delete);

//print_r($result);

// verify
if ($result->getDeletedCount() == 1) {
    echo "Record successfully deleted";
	
} else {
    echo "Error while deleting record";
    
}










header("location:index.php");
?>