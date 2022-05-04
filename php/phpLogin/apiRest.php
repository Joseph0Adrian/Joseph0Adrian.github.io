<?php       
    function GET(){
        $fakeData = file_get_contents('https://jsonplaceholder.typicode.com/users');
        $fakeProducts = json_decode($fakeData, true );
        return $fakeProducts;
    }
?>