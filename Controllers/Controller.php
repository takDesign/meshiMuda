<?php

abstract class Controller extends App
{
  var $data;
  var $body;
  var $nav;

  public function loadRoute($controller, $route)
  {
    $data = file_get_contents("http://localhost:8080/index.php?controller=$controller&route=$route");
    return json_decode($data);
  }

  public function error($controller, $route)
  {
    Util::log("error: was unable to load Route: $route inside of Controller: $controller");
  }

  public function loadView($path, $data = "")
  {
    ob_start(); // stop sending to the browser, instead catch everything that would go to the browser and hold it until told to do otherways

    include($path);

    $html = ob_get_contents(); // put whatever was supposed to be out, and put it into the variable

    ob_clean(); // delete everything that you were holding

    return $html;
  }

  public abstract function
  default(); // require anyone that extends from this class to have the default method
  public abstract function preTrip();
  public abstract function postTrip();
}
