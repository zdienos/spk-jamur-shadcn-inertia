<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('sub_criterias', function (Blueprint $table) {
            $table->id();

            // foreign key yang terhubung ke tabel 'criterias'
            $table->foreignId('criteria_id')
                ->constrained('criterias') // relasi criterias
                ->cascadeOnDelete(); // hati hati ini,  parent Criteria dihapus, sub-criteria ikut terhapus

            $table->string('name');
            $table->integer('value');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('sub_criterias');
    }
};
