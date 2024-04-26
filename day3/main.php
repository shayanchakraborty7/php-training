<!DOCTYPE html>
<html lang="en">
<head>
   <meta charset="UTF-8">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <title>Basic Calculator</title>
   <link rel="stylesheet" href="main.css">
</head>
<body>
   <div class="main">
   <form action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>" method="post">
   
   <center>
   <div class="sign">
      <span class="fast-flicker"> Basic </span> Calculator <span class="flicker"> using </span> php
    </div>
   <div class="in">
   <input type="number" name="num01" placeholder="Number one" class='first'>
   <select name="operator" class='selectt'>
      <option value="add">+</option>
      <option value="subtract">-</option>
      <option value="multiply">*</option>
      <option value="divide">/</option>
      <option value="power">**</option>
      <option value= "modulus">%</option>
      <option value="sine">sin()</option>
      <option value="cos">cos()</option>
   </select>
   <input type="number" name="num02" placeholder="Number two" class='second'>
  
   </div>
   <button class = 'calculate'>Calculate</button>
</center>
   
</form>
</div>
<?php if($_SERVER["REQUEST_METHOD"] == "POST"){

$num01 = filter_input(INPUT_POST,"num01",FILTER_SANITIZE_NUMBER_FLOAT);
$num02 = filter_input(INPUT_POST,"num02",FILTER_SANITIZE_NUMBER_FLOAT);
$operator = htmlspecialchars($_POST["operator"]);
   
$value = 0;
   switch($operator){
      case "add":
         $value = $num01 + $num02;
         break;
      case "subtract":
         $value = $num01 - $num02;
         break;
      case "multiply" :
         $value = $num01 * $num02;
         break;
      case "divide":
         $value = $num01 / $num02;
         break;
      case "power":
         $value = $num01 ** $num02;
         break;
      case "modulus":
         $value = $num01 % $num02;
         break;
      case "sine":
         $value = sin($num01);
         break;
      case "cos":
         $value = cos($num02);
         break;
      default:
         echo "<p class='calc-error'>Something went wrong</p>";
   }
   
   echo "<p class='result'>Result ={$value}</p>";

}
?>
</body>
</html>

