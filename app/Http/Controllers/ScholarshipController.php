<?php

namespace App\Http\Controllers;
use App\Models\Scholarship;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ScholarshipController extends Controller

{
    public function index()
    {
        $scholarships = Scholarship::select('id', 'name', 'country', 'level', 'style', 'funding', 'description', 'link', 'image')->get();

        return response()->json($scholarships);
    }
}
