<!DOCTYPE html>
<html lang="en">

<body>
    <?php
    $f= $_POST ["f"];
    echo fizzbuzz($f);
    function fizzbuzz($f)
    {
           if ($f%3==0)
           {
                echo "fizz";
           }
           if($f%5==0)
           {
             echo "buzz";
           }
           if($f%3==0&&$f%5==0)
           {
             echo "fizzbuzz";
           }
           if($f%3==1&&$f%5==1)
           {
             echo $f;
           }
    }
    ?>
</body>
</html
