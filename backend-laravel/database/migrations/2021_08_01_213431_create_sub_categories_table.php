<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSubCategoriesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('sub_categories', function (Blueprint $table) {
            $table->id();
            // nullable borrar despues de que toda la base este poblada
            $table->foreignId('id_categories')->nullable()->constrained('categories');            
          $table->string('name');
         // $table->unsignedBigInteger('id_categories')->nullable();
         // $table->foreign('id_categories')->references('id')->on('categories')->onUpdate('cascade');
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
        Schema::dropIfExists('sub_categories');
    }
}
