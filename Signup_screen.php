<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link href="Signup_screen.css" rel="stylesheet" />
    <link
      rel="icon"
      type="image/png"
      sizes="10x10"
      href="Images/1618c217a72e62b638c998b57ec2151a.png"
    />
    <title>GameGrid</title>
  </head>
  <body>
    <div id="root">
      <div class="background">
        <!-- <p>Game<span>Grid</span></p> -->
      </div>
      <div class="form">

        <?php


if(isset($_POST["submit"])) {
    $fname=$_POST["fname"];
    $lname=$_POST["lname"];
    $email=$_POST["email"];
    $password=$_POST["password"];
    $repeatpassword=$_POST["repeatpassword"];
    $phone=$_POST["phone"];
    $dob=$_POST["dob"];

    $errors = array();
    if (empty($fname) || empty($lname) || empty($email) || empty($password) || empty($repeatpassword)  || empty($dob)) {
        $errors[] = "All fields are required";
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errors[] = "Invalid email format";
    }

    if ($password !== $repeatpassword) {
        $errors[] = "Passwords do not match";
    }

    if (strlen($password) < 8) {
        $errors[] = "Password must be at least 8 characters long";
    }

    if(count($errors) == 0) {
        foreach ($errors as $error) {
            echo $error . "<br>";
        }
    }else{
        require_once "database.php";
        $sql = "INSERT INTO users (first_name, last_name, email, password, phone, date_of_birth) VALUES ('$fname', '$lname', '$email', '$password', '$phone', '$dob')";
        $stmt = mysqli_stmt_init($conn);
        $preparestmt =mysqli_stmt_prepare($stmt, $sql);
        $result = mysqli_query($conn, $sql);
        if($preparestmt){
          mysqli_stmt_bind_param($stmt, "ssssss", $fname, $lname, $email, $password, $phone, $dob);
          mysqli_stmt_execute($stmt);
          echo "<div>Registration successful</div>";
        }
        else{
          echo "<div>Registration failed</div>";
        }
    }

}


?>

        <form action="index.php" method="post" id="form">
          <div class="cont2">
            <div class="cont" id="first-name">
              <label for="firstname">First Name</label>
              <br />
              <input
                type="text"
                class="feild field"
                id="firstname"
                name="first-name"
                required
              />
              <div class="error"></div>
            </div>

            <div class="cont" id="last-name">
              <label for="lastname">Last Name</label>
              <br />
              <input
                type="text"
                class="feild field"
                id="lastname"
                name="last-name"
                required
              />
              <div class="error"></div>
            </div>
          </div>

          <div class="cont" id="e-mail">
            <label for="email">E-mail</label>
            <br />
            <input
              type="email"
              class="feild field"
              id="email"
              name="email"
              placeholder="example@example.com"
              required
            />
            <div class="error"></div>
          </div>

          <div class="cont" id="user-name">
            <label for="Username">Username</label>
            <br />
            <input
              type="Username"
              class="feild field"
              id="username"
              name="Username"
              placeholder="Username"
              required
            />
            <div class="error"></div>
          </div>

          <div class="cont" id="phone-number">
            <label for="phone">Phone Number</label>
            <br />
            <input
              type="number"
              class="feild"
              id="phonenumber"
              name="phone"
              placeholder="Optional"
            />
            <div class="error"></div>
          </div>

          <div class="cont" id="d-o-b">
            <label for="dob">Date of Birth</label>
            <br />
            <input
              type="date"
              class="feild"
              id="dateofbirth"
              name="dob"
              required
            />
            <div class="error"></div>
          </div>

          <div class="cont" id="pass-word">
            <label for="password">Password</label>
            <br />
            <input
              type="password"
              class="feild field"
              id="password"
              name="password"
              required
            />
            <div class="error"></div>
          </div>

          <div class="cont" id="repeat-password">
            <label for="repeat-password">Repeat Password</label>
            <br />
            <input
              type="password"
              class="feild field"
              id="repeatpassword"
              name="repeat_password"
              required
            />
            <div class="error"></div>
          </div>
        </form>
        <div class="cont">
          <button class="register" onclick="checkIfValid()">Register</button>
        </div>
      </div>
      <div class="logo" onclick="switchToWelcomePage()"></div>
      <!-- <img src="Images/1618c217a72e62b638c998b57ec2151a.png" alt="" class="logo" onclick="switchToWelcomePage()" width="400px"> -->
    </div>

    <script src="Signup_screen.js"></script>

    <!-- <script src="Signup_screen.js"></script> -->
  </body>
</html>
