<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateVisitCountsTable extends Migration
{
    public function up()
    {
        Schema::create('visit_counts', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('count')->default(0);
            $table->timestamps();
        });

        // Seed the single counter row
        DB::table('visit_counts')->insert(['count' => 0]);
    }

    public function down()
    {
        Schema::dropIfExists('visit_counts');
    }
}
