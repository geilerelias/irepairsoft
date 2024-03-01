<?php

namespace Database\Seeders;

use Domain\Shared\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;
use Spatie\Permission\PermissionRegistrar;

class BasicAdminPermissionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Reset cached roles and permissions
        app()[PermissionRegistrar::class]->forgetCachedPermissions();
        // create permissions
        Permission::create(['name' => 'permission list', 'description' => 'Permite listar los permisos', 'guard_name' => 'sanctum']);
        Permission::create(['name' => 'permission create', 'description' => 'Permite crear los permisos', 'guard_name' => 'sanctum']);
        Permission::create(['name' => 'permission edit', 'description' => 'Permite editar los permisos', 'guard_name' => 'sanctum']);
        Permission::create(['name' => 'permission delete', 'description' => 'Permite eliminar los permisos', 'guard_name' => 'sanctum']);
        Permission::create(['name' => 'role list', 'description' => 'Permite listar los roles', 'guard_name' => 'sanctum']);
        Permission::create(['name' => 'role create', 'description' => 'Permite crear los roles', 'guard_name' => 'sanctum']);
        Permission::create(['name' => 'role edit', 'description' => 'Permite editar los roles', 'guard_name' => 'sanctum']);
        Permission::create(['name' => 'role delete', 'description' => 'Permite eliminar los roles', 'guard_name' => 'sanctum']);
        Permission::create(['name' => 'user list', 'description' => 'Permite listar los usuarios', 'guard_name' => 'sanctum']);
        Permission::create(['name' => 'user create', 'description' => 'Permite crear los usuarios', 'guard_name' => 'sanctum']);
        Permission::create(['name' => 'user edit', 'description' => 'Permite editar los usuarios', 'guard_name' => 'sanctum']);
        Permission::create(['name' => 'user delete', 'description' => 'Permite eliminar los usuarios', 'guard_name' => 'sanctum']);
        Permission::create(['name' => 'post list', 'description' => 'Permite listar los post', 'guard_name' => 'sanctum']);
        Permission::create(['name' => 'post create', 'description' => 'Permite crear post', 'guard_name' => 'sanctum']);
        Permission::create(['name' => 'post edit', 'description' => 'Permite editar los post', 'guard_name' => 'sanctum']);
        Permission::create(['name' => 'post delete', 'description' => 'Permite eliminar los post', 'guard_name' => 'sanctum']);


        // create roles and assign existing permissions
        $role1 = Role::create(['name' => 'writer', 'description' => 'Se le da el privilegio de lectura y escritura', 'guard_name' => 'sanctum']);
        $role1->givePermissionTo('permission list');
        $role1->givePermissionTo('role list');
        $role1->givePermissionTo('user list');
        $role1->givePermissionTo('post list');
        $role1->givePermissionTo('post create');
        $role1->givePermissionTo('post edit');
        $role1->givePermissionTo('post delete');

        $role2 = Role::create(['name' => 'admin', 'description' => 'Se le da el privilegio de realizar todas las opciones de edición, lectura y escritura', 'guard_name' => 'sanctum']);
        $role2->givePermissionTo('permission list');
        $role2->givePermissionTo('permission create');
        $role2->givePermissionTo('permission edit');
        $role2->givePermissionTo('role list');
        $role2->givePermissionTo('role create');
        $role2->givePermissionTo('role edit');
        $role2->givePermissionTo('user list');
        $role2->givePermissionTo('user create');
        $role2->givePermissionTo('user edit');
        $role2->givePermissionTo('post list');
        $role2->givePermissionTo('post create');
        $role2->givePermissionTo('post edit');

        $role3 = Role::create(['name' => 'super-admin', 'description' => 'Concede todos los permiso al usuario', 'guard_name' => 'sanctum']);
        $role3->givePermissionTo(Permission::all());

        $user = User::factory()->create([
            'name' => 'Geiler Elias Radillo Sarmiento',
            'email' => 'geilerelias@gmail.com',
            'password' => Hash::make('gers150595'),
        ]);
        $user->assignRole($role3);

        $user = User::factory()->create([
            'name' => 'Ledis Beatriz Sarmiento Guerra',
            'email' => 'ledisbersage@gmail.com',
            'password' => Hash::make('cristiana'),
        ]);
        $user->assignRole($role1);


        $user = User::factory()->create([
            'name' => 'Super Admin',
            'email' => 'superadmin@irepairsoft.xyz',
        ]);
        $user->assignRole($role3);

        $user = User::factory()->create([
            'name' => 'Admin User',
            'email' => 'admin@irepairsoft.xyz',
        ]);
        $user->assignRole($role2);
        $user = User::factory()->create([
            'name' => 'Example User',
            'email' => 'test@irepairsoft.xyz',
        ]);
        $user->assignRole($role1);
    }
}
