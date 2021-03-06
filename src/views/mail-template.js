exports.mail_template = function (user)
{
	return `
	<!DOCTYPE html>
	<html>

	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<meta http-equiv="x-ua-compatible" content="ie=edge">
		<title> New Quote Request </title>
		<!-- Google Font: Secular One -->
		<link rel="preconnect" href="https://fonts.googleapis.com">
		<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
		<link href="https://fonts.googleapis.com/css2?family=Secular+One&display=swap" rel="stylesheet">
		<style>
			body {
				font-size: 1em;
				font-weight: 500;
				font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
				font-size-adjust: calc(100% - 155px);
				letter-spacing: 0.025rem;
				color: #000022;
				background-color: #F0EFF4;
			}

			.font-bold {
				font-weight: 800;
			}

			.container {
				margin: 25px;
				padding: 15px;
			}

			.message-container #main-text span::before {
				content: "\“";
				font-size: 2rem;
				font-family: 'Secular One', sans-serif;
			}

			.message-container #main-text span::after {
				content: "\"";
				font-size: 2rem;
				font-family: 'Secular One', sans-serif;
			}

			.message-container #main-text span {
				transform: rotate(360deg);
			}

			.message-container #main-text span {
				left: 10%;
				margin: 1rem;
				padding: 1rem;
			}
		</style>
	</head>

	<body>
		<div id="body-container" class="container">
			<div id="preheader-container" class="preheader-container">
				<div id="preheader" class="preheader">
					<p id="preheader-text">
						A preheader is a short summary text that follows the subject line when an email is viewed in the
						inbox.
					</p>
				</div>
			</div>
			<div id="main-container" class="message-container">
				<div id="message" class="message-box">
					<p id="main-text">
						Hello Mr. Ishpreet Singh, <br><br>
						An Anonymous user requests to add the following quote into your database.<br><br><br><br>
						<span id="user-request" class="font-bold">
							${user.user_request_message}
						</span>
						<br>
						<br>
						<br>
						Thanks,<br>
						Anonymous
					</p>
				</div>
			</div>
		</div>
	</body>

	</html>
	`
}