<?php

class Authentication extends Controller
{

  public function
  default()
  {
  }

  public function show()
  {
    User::showUsers("dw@supernatural.com");
  }

  public function login()
  {
    // $bLogInStatus = User::processLogin($_POST["email"], $_POST["password"]);

    // if ($bLogInStatus) {
    //   header("location: index.php?controller=cart&route=checkout&login=true");
    // } else {
    //   header("location: index.php?controller=cart&route=login&error=true");
    // }
  }

  public function register()
  {
    User::saveRegister($_POST["strFirstName"], $_POST["strLastName"], $_POST["strEmail"], $_POST["strPassword"]);
  }

  public function preTrip()
  {
    // this function will run before doing any routes inside this controller
    // $categories = Categories::getAll();
    // $this->nav = $this->loadView("Views/partials/categoryNav.php", $categories);
  }

  public function postTrip()
  {
    // this function will run after running a routes inside this controller
  }
}
