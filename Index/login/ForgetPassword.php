<?php
	
	require "ClassDatabase.php";
	require "mailer.php";
	if(isset($_POST['submit'])){
		// connect database
		$db = new Database();
		$db->connect();
		// get infor
		$username = addslashes($_POST['username']);
		$email = addslashes($_POST['email']);
		// my sql
		$sql = "SELECT username,email FROM users WHERE username = '$username' AND email = '$email'";
		$query = mysqli_query($db->connect,$sql);
		$row = mysqli_fetch_assoc($query);
		// var_dump($row);
		if($row){
			$mail = new Mail();
			$newPass=$mail->createRandomPass(12);
			$mail->forgetPassword($email,$newPass);
			$sql = "UPDATE users SET password = md5('$newPass') WHERE username = '$username' AND email = '$email' ";
			$query = mysqli_query($db->connect,$sql);
			echo 1;		}
		else{
			echo 0;
			
			// header('Location: http://localhost/KITTT/frontEnd_KIT/Index/');
		}
		// if(mysqli_num_rows($db->connect,$query)){
		
			

		// }
		// else{
		// 	echo "<script type='text/javascript'>alert('hello');</script>";
		// }

	}
?>