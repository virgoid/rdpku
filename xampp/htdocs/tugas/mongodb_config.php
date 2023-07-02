<?php

class DbManager {

	//Database configuration
	private $dbhost = 'localhost';
	private $dbport = '27017';
	private $conn;
	
	function __construct(){
        //Connecting to MongoDB
        try {
			//Establish database connection  //mongodb+srv://user3:<password>@cluster0.meaflsf.mongodb.net/?retryWrites=true&w=majority
        //    $this->conn = new MongoDB\Driver\Manager('mongodb://'.$this->dbhost.':'.$this->dbport);
              $this->conn = new MongoDB\Driver\Manager('mongodb+srv://user3:user2@cluster0.meaflsf.mongodb.net/?retryWrites=true&w=majority');

        }catch (MongoDBDriverExceptionException $e) {
            echo $e->getMessage();
			echo nl2br("n");
        }
    }

	function getConnection() {
		return $this->conn;
	}

}

$dbname = 'data_smk';
$collection = 'tugas';
$apiToken = "5912662958:AAGACDWCFl6-PKGrW33D_qEQHkQEA8p55F0";
$folder="qrcode2";  //ganti directori

?>