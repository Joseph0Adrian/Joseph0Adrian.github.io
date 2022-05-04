<?php
// We need to use sessions, so you should always start sessions using the below code.
session_start();
// If the user is not logged in redirect to the login page...
if (!isset($_SESSION['loggedin'])) {
	header('Location: index.html');
	exit;
}

include('apiRest.php');
$fakeProducts = GET();
?>

<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>Home Page</title>
		<link href="style.css" rel="stylesheet" type="text/css">
		<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.1/css/all.css">
        <link href="style.css" rel="stylesheet" type="text/css">
	</head>
	<body class="loggedin">
		<nav class="navtop">
			<div>
				<h1>Website Title</h1>
				<a href="profile.php"><i class="fas fa-user-circle"></i>Profile</a>
				<a href="logout.php"><i class="fas fa-sign-out-alt"></i>Logout</a>
			</div>
		</nav>
		<div class="content">
			<h2>Home Page</h2>
			<p>Welcome back, <?=$_SESSION['name']?>!</p>
		</div>
		<div class="content">
			<h2>Fake data test</h2>
			<div>
				<?php for($i=0; $i<count($fakeProducts); $i++):?>
					<h3>Title: <?= $fakeProducts[$i]['name'];?></h3>
					<h4>Publishing house: <?= $fakeProducts[$i]['username'];?></h4>
					<h4>Website: <?= $fakeProducts[$i]['website'];?></h4>
					<button>Agregar +</button>
					<br>
				<?php endfor; ?>
			</div>
		</div>
	</body>
</html>