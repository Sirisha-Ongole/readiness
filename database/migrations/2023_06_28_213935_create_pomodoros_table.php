<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePomodorosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('pomodoros', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('cycle_time');
            $table->unsignedBigInteger('short_break');
            $table->unsignedBigInteger('long_break');
            $table->unsignedBigInteger('cycle_count_lb');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('pomodoros');
    }
}
