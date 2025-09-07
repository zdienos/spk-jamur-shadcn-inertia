<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class SubCriteria extends Model
{
    use HasFactory;

    protected $fillable = [
        'criteria_id',
        'name',
        'value',
    ];

    // relasi satu SubCriteria dimiliki oleh satu Criteria (one to one)
    public function criteria(): BelongsTo
    {
        return $this->belongsTo(Criteria::class);
    }
}
