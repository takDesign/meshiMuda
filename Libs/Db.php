<?php

class Db
{
  // var $con;
  var $db;
  static public function connect()
  {
    $db = parse_ini_file("../../db_config_meshi_muda.ini");
    return mysqli_connect($db["host"], $db["username"], $db["password"], $db["database"]);
  }

  static public function query($con, $sql)
  {
    // Util::log($sql);
    return  mysqli_query($con, $sql);
  }
}
