<?php

class Util
{
  public static function loadControllerRouter($defaultController, $defaultRoute)
  {
    $defaultController = (isset($_POST["controller"])) ? $_POST["controller"] : $defaultController;
    $defaultRoute = (isset($_POST["route"])) ? $_POST["route"] : $defaultRoute;

    $controller = (isset($_GET["controller"])) ? $_GET["controller"] : $defaultController;
    $route = (isset($_GET["route"])) ? $_GET["route"] : $defaultRoute;


    return array("controller" => ucfirst($controller), "route" => strToLower($route));
  }

  public static function log($msg)
  {
    echo '<script>console.log("' . $msg . '");</script>';
  }
}
