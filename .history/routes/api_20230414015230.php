<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;



Route::get('/items', function(Request $request) {
    $data = [
        [
            "id" => 7,
            "name" => "na like this",
            "description" => "",
            "created_at" => "2020-07-26T05:53:00.376501Z",
            "updated_at" => "2020-07-26T05:53:00.376501Z"
        ], [
            "id" => 5,
            "name" => "write a book",
            "description" => "hohoho",
            "created_at" => "2020-07-26T05:47:00.908706Z",
            "updated_at" => "2020-07-26T05:53:00.376501Z"
        ]
    ];
    return response()->json($data);
});

return [
    'paths' => ['api/*'],
    'allowed_methods' => ['*'],
    'allowed_origins' => ['*'],
    'allowed_origins_patterns' => [],
    'allowed_headers' => ['*'],
    'exposed_headers' => ['*'],
    'max_age' => 0,
    'supports_credentials' => false,
];

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
