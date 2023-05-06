<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ScholarshipSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('scholarships')->insert([
            ['name' => 'Scholarship A', 'country' => 'USA'],
            ['name' => 'Scholarship B', 'country' => 'Canada'],
            ['name' => 'Scholarship C', 'country' => 'UK'],
        ]);
    }
}
