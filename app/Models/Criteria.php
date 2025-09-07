<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Criteria extends Model
{
    use HasFactory;

    // Tentukan primary key kustom
    // protected $primaryKey = 'id_criteria';

    // Tentukan kolom yang boleh diisi secara massal
    protected $fillable = [
        'name',
    ];
}
