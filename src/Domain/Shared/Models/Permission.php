<?php

namespace Domain\Shared\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Spatie\Permission\Models\Permission as OriginalPermission;

class Permission extends OriginalPermission
{
    use HasFactory;

    protected $fillable = [
        'name',
        'description',
        'guard_name',
        'updated_at',
        'created_at',
    ];
}
