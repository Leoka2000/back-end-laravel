<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

$con = mysqli_connect("localhost", "root", "", "react_laravel_app")




Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
