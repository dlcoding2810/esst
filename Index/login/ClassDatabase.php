<?php
	// class xử lí database
class Database{
	public $connect = NULL;

	private $host = 'localhost',
			$username = 'root',
			$password = '',
			$db_name = 'webkit';
	public function connect(){
		$this->connect = mysqli_connect($this->host, $this->username, $this->password, $this->db_name);
	}
	public function disconnect(){
		if($this->connect){
			mysqli_close($this->connect);
		}
	}
	// public function create($table){
	// 	$query = " INSERT INTO news (title, description, url_thumbnail,content,tags) 
	// 	VALUES ( ' ".$_POST["title"]. "','" .$_POST["description"]. "','" .$_POST["thumbnail"]. "','" .$_POST["content"]. "','" .$_POST["tags"]." ' ) ";
	// 	mysqli_query($this->connect,$query);
	// }


}

?>