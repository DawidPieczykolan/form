<?php 

	header('Access-Control-Allow-Origin: *');
	$conn= new mysqli('localhost', 'root', '', 'dbase');
	if(mysqli_connect_error()){
		echo mysqli_connect_error();
		exit();
	}
	else{
		$name = $_POST['name'];
		$surname = $_POST['surname'];
		$mobile = $_POST['mobile'];
		$email = $_POST['email'];
		$age = $_POST['age'];
		$adress = $_POST['adress'];
		$zipcode = $_POST['zipcode'];
		

		
		$sql = "INSERT INTO users(name,surname,mobile,email,age,adress,zipcode) VALUES('$name','$surname','$mobile','$email','$age','$adress','$zipcode');";
		$res = mysqli_query($conn, $sql);
		
		if($res){
			echo "Sukces!";
		}
		else{
			echo "blond";
		}
	}
	$conn->close();

	

?>
