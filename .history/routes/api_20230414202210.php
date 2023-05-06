<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

$db = mysqli_connect('127.0.0.1:3306', 'root', '', 'test');


Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/scholarships', 'ScholarshipController@index');
    








