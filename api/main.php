<?php
  error_reporting(0);
  $type   = $_POST['type'];
  $return = [];
  switch ($type) {
    case 'get_list':
      $response           = get_item_list();
      $return['status']   = $response['status'];
      $return['msg']      = $response['msg'];
      $return['data']     = $response['data'];
      echo json_encode($return);
      break;
    
    default:
      $return['status']   = false;
      $return['msg']      = 'Something went wrong!';
      echo json_encode($return);
      break;
  }
  function connect(){

      $servername = "localhost";
      $username   = "admin";
      $password   = "admin123";
      $db         = "shopping_cart";

      // Create connection
      $conn = new mysqli($servername, $username, $password,$db);

      // Check connection
      if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
      }
      return $conn;
  }
  function get_item_list(){
    $conn       =  connect();
    $sql        = "SELECT * FROM items"; 
    $result     = $conn->query($sql);  
    $data       = [];
     while($row = $result->fetch_assoc()) {
        $data[] = $row;
    }

    $response['status']   = true;
    $response['msg']      = '';
    $response['data']     = $data;
    return $response;
  }

?>