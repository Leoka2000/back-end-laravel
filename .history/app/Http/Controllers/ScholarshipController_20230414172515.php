<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ScholarshipController extends Controller
{
    public function index()
{
    $scholarships = DB::table('scholarships')
        ->select('id', 'name', 'country')
        ->get();

    return response()->json($scholarships);
}
}
