<?php

session_start();

include("autoload.php");

$controller = "authentication";
$route = "default";

if (isset($_GET["controller"]) && isset($_GET["route"])) {
  $controller = $_GET["controller"];
  $route = $_GET["route"];
}

$routeInfo = Util::loadControllerRouter($controller, $route);

$oController = new $routeInfo["controller"]();

if (method_exists($oController, $routeInfo["route"])) {
  $oController->preTrip();
  $oController->{$routeInfo["route"]}();
  $oController->postTrip();
} else {
  $oController->error($routeInfo["controller"], $routeInfo["route"]);
}
