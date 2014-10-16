<?php

  if (intval($_GET['getStatus'])==1||intval($_GET['getStatus'])==2||intval($_GET['getStatus'])==3||intval($_GET['getStatus'])==4||intval($_GET['getStatus'])==5)
  {
    //echo "it is working mothafuckaaa";
    $getStatus = intval($_GET['getStatus']);
    //echo $getStatus;
    $con = mysqli_connect('127.0.0.1','root','',"led");
    if (!$con) {
      die('Could not connect: ' . mysqli_error($con));
    }

    mysqli_select_db($con,"led");
    $sql="SELECT `ID`,`h`,`l`,`s`,`p`,`step`,`sleep` FROM `maincolors` WHERE id = '".$getStatus."'"; //to edit
    $result = mysqli_query($con,$sql);

    while($row = mysqli_fetch_array($result)) {
      echo $row['h'].", ".$row['l'].", ".$row['s'].", ".$row['p'].", ".$row['step'].", ".$row['sleep'];
      if (intval($row['p']) != -1)
      {echo '<p>Shine!
        <div class="btn-group-lg" data-toggle="buttons">
          <label class="btn btn-primary active">
            <input type="radio" name="options" id="" checked> On
          </label>
          <label class="btn btn-default active">
            <input type="radio" name="options" id=""> Off
          </label>
        </div>
      </p>';}
      else{echo '<p>Shine!
        <div class="btn-group-lg" data-toggle="buttons">
          <label class="btn btn-default">
            <input type="radio" name="options" id="" checked> On
          </label>
          <label class="btn btn-primary active">
            <input type="radio" name="options" id=""> Off
          </label>
        </div>
      </p>';}


      echo '<br>
      <button type="button" class="btn btn-default btn-lg">
         White
      </button>
      <button type="button" class="btn btn-default btn-lg">
         Red
      </button>
      <button type="button" class="btn btn-default btn-lg">
         Green
      </button>
      <button type="button" class="btn btn-default btn-lg">
         Blue
      </button>
      <br><br>
      Bright
      <div class="btn-group">
        <button type="button" class="btn btn-default"><span class="glyphicon glyphicon-plus"></span></button>
        <button type="button" class="btn btn-default"><span class="glyphicon glyphicon-minus"></span></button>
      </div>
      <br>
      <br>
      <button type="button" class="btn btn-default btn-lg">
         Rainboooow!
      </button>';
    }
  }
?>
