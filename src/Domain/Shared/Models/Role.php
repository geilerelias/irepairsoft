<?php

namespace Domain\Shared\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Spatie\Permission\Models\Role as OriginalRole;

class Role extends OriginalRole
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
