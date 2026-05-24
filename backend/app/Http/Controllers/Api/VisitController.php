<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\VisitCount;
use Illuminate\Support\Facades\DB;

class VisitController extends Controller
{
    public function increment()
    {
        DB::table('visit_counts')->where('id', 1)->increment('count');

        $count = DB::table('visit_counts')->where('id', 1)->value('count');

        return response()->json(['count' => $count]);
    }

    public function show()
    {
        $count = DB::table('visit_counts')->where('id', 1)->value('count') ?? 0;

        return response()->json(['count' => $count]);
    }
}
