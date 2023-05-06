<?php

namespace App\Http\Controllers;
use App\Models\Scholarship;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

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
