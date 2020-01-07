<?php

class User
{

  static public function showUsers($email)
  {
    $results = Db::query(Db::connect(), "SELECT * FROM users WHERE strEmail='" . mysqli_real_escape_string(Db::connect(), $email) . "'");
    // $results = Db::query(Db::connect(), "SELECT * FROM users");
    // header("Content-Type: application/json; charset=utf-8");
    $record = mysqli_fetch_assoc($results);
    print json_encode($record, JSON_PRETTY_PRINT);
  }

  static public function processLogin($email, $password)
  {
    //   $results = Db::query(Db::connect(), "SELECT * FROM users WHERE strEmail='" . mysqli_real_escape_string(Db::connect(), $email) . "'");

    //   $user = mysqli_fetch_assoc($results);

    //   //POST is the users input, so if it matches the hashed password in the db then success!
    //   if (password_verify($password, $user["strPassword"])) {
    //     $_SESSION["id"] = $user["id"];
    //     $_SESSION["email"] = $user["strEmail"];
    //     $_SESSION["firstName"] = $user["strFirstName"];
    //     $_SESSION["lastName"] = $user["strLastName"];
    //     return true;
    //   } else {
    //     return false;
    //   }
  }

  static public function saveRegister($firstName, $lastName, $email, $password)
  {
    $con = Db::connect();
    // setting variables to be false to later turn true once validation occurs
    $validFirstName = false;
    $validLastName = false;
    $validEmail = false;
    $validPassword = false;
    $error = '';
    // first name validation - only letters, minimum of 2
    if (isset($firstName)) {
      $reg = "/^([a-zA-Z' ]+){2,}$/";
      $reg_check = preg_match($reg, $firstName);
      $validFirstName = ($reg_check) ? true : false;
      if (!$validFirstName) {
        $error .= '&firstNameError=true';
      }
    }
    // last name validation - only letters, minimum of 2
    if (isset($lastName)) {
      $reg = "/^([a-zA-Z' ]+){2,}$/";
      $reg_check = preg_match($reg, $lastName);
      $validLastName = ($reg_check) ? true : false;
      if (!$validLastName) {
        $error .= '&lastNameError=true';
      }
    }
    // email validation - letters & numbers, must have 1 @, must have 1 . , email suffix must be a minimum of 2 characters
    if (isset($email)) {
      $reg = "/[a-zA-Z0-9.\-_]{3,}+@{1}[a-zA-Z0-9]{4,}[.]{1}[a-zA-Z]{2,}/";
      $reg_check = preg_match($reg, $email);
      $validEmail = ($reg_check) ? true : false;
      if (!$validEmail) {
        $error .= '&emailError=true';
      }
      // Check if this email already exists in the db
      $arrClean["strEmail"] = mysqli_real_escape_string($con, $email);
      $result = Db::query($con, "SELECT * FROM users WHERE strEmail = '" . $arrClean["strEmail"] . "'");
      if (count(mysqli_fetch_assoc($result)) != 0) {
        $validEmail = false;
        $error .= '&emailExistsError=true';
      }
    }
    // password validation -
    if (isset($password)) {
      $reg = '/\A(?=.*?[a-zA-Z])(?=.*?\d)(?=.*?[!-\/:-@[-`{-~])[!-~]{8,100}+\z/i'; // check if it is longer than 8 charactors and  has lowercase, uppercase, number, special charactor
      $reg_check = preg_match($reg, $password);
      $validPassword = ($reg_check) ? true : false;
      if (!$validPassword) {
        $error .= '&passwordError=true';
      }
    }
    // if validation is true, sanitize and hash password
    if ($validFirstName && $validLastName && $validEmail && $validPassword) {
      $arrClean["strFirstName"] = mysqli_real_escape_string($con, $firstName);
      $arrClean["strLastName"] = mysqli_real_escape_string($con, $lastName);
      // $arrClean["strEmail"] = mysqli_real_escape_string($con, $email);

      $hashedPassword = password_hash($password, PASSWORD_DEFAULT);

      // This somehow has to be $con instead of using Db::connect();
      $statement = $con->prepare("INSERT INTO users (strFirstName, strLastName, strEmail, strPassword) VALUES (?, ?, ?, ?)");
      $statement->bind_param("ssss", $arrClean["strFirstName"], $arrClean["strLastName"], $arrClean["strEmail"], $hashedPassword); //ssis is the pattern - so ss is the string, string
      $statement->execute();

      $results = Db::query($con, "SELECT * FROM users WHERE strEmail = '" . $arrClean["strEmail"] . "'");

      $user = mysqli_fetch_assoc($results);

      $_SESSION["id"] = $user["id"];
      $_SESSION["email"] = $user["strEmail"];
      $_SESSION["firstName"] = $user["strFirstName"];
      $_SESSION["lastName"] = $user["strLastName"];

      return 'Success!!!';
      // header("location: index.php?controller=cart&route=checkout&account=true");
    } else if (isset($error)) {
      return 'Error!!!';
      // header("location: index.php?controller=cart&route=login$error");
    }
  } // end save register

}
