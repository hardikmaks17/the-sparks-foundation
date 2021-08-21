<!doctype html>
<html lang="en">

<head>
	<!-- Required meta tags -->
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	<title>Payment Gateway Integration</title>
	<!-- Bootstrap CSS -->
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
	<link rel="stylesheet" type="text/css" href="css/navbar.css">
	<link rel="stylesheet" type="text/css" href="css/style.css">
</head>

<body class="bg-dark">
	<header>
		<?php
		include 'navbar.php';
		?>
	</header>
	<main>
		<div class="m-container">
			<div>
				<div class="m-container-item">
					<h1 class="title">Feeding the hunger...</h1>
					<q class="tagline">No donation is too big or too small. What's important is we help them all.</q>
				</div>
				<div class="m-container-item">
					<form><script src="https://checkout.razorpay.com/v1/payment-button.js" data-payment_button_id="pl_HnQqZlj1ysxys1" async></script></form>
				</div>
			</div>
		</div>
	</main>
	<footer class="footer text-center py-2">
		<p>© Project created by <a href="https://www.linkedin.com/in/hardikmaks17/">Hardik Makwana</a> under <a href="https://www.linkedin.com/company/the-sparks-foundation/">The Sparks Foundation</a> internship. <b>(#GripAugust21)</b></p>
	</footer>
	<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
	<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx" crossorigin="anonymous"></script>
</body>
</html>