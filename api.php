<?php

if (isset($_GET["username"]) && isset($_GET["password"])) {
  if ($_GET["username"] === "DIG" && $_GET["password"] === "3134") {
    echo(json_encode(
      [
          "username" => $_GET["username"],
          "password" => $_GET["password"]
      ]
    ));
  }
}