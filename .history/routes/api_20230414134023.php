<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

$con = mysqli_connect("localhost", "root", "", "react_laravel_app");
$response = array();
if($con) {
    $sql = "select * from scholarships";
    $result = mysqli_query($con,$sql);
    if($result){
        $i=0;
        while($row = mysqli_fetch_assoc($result)){
$response [$i]['id'] = $row ['id'];
$response [$i]['name'] = $row['name'];
$response[$i]['country'] = $row['country'];
$i++;
        }
        echo json_encode($response,JSON_PRETTY_PRINT)
    }

    
}




Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
