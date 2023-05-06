<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ScholarshipController;

$db = mysqli_connect('localhost:3306', 'root', '', 'test');


Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/scholarships', 'ScholarshipController@index');
    








