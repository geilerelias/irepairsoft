<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Domain\Shared\Models\Role;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class RoleController extends Controller
{
    //si no quieren funcionar limpia la cache
    /*php artisan optimize:clear
        # or
    php artisan config:clear*/

    public function __construct()
    {
        $this->middleware('can:role list', ['only' => ['index', 'show']]);
        $this->middleware('can:role create', ['only' => ['create', 'store']]);
        $this->middleware('can:role edit', ['only' => ['edit', 'update']]);
        $this->middleware('can:role delete', ['only' => ['destroy']]);
    }


    /**
     * Display a listing of the resource.
     *
     * @return \Inertia\Response
     */
    public function index()
    {
        $roles = (new Role)->newQuery();
        //$roles = Role::withCount('users')->get();
        $roles->latest();
        $roles = $roles->paginate(100)->onEachSide(2)->appends(request()->query());
        return Inertia::render('Admin/Role/Index', [
            'roles' => $roles,
            'can' => [
                'create' => Auth::user()->can('role create'),
                'edit' => Auth::user()->can('role edit'),
                'delete' => Auth::user()->can('role delete'),
            ]
        ]);
    }

    public function create()
    {
        return inertia('Admin/Role/Create');
    }

    public function store(Request $request, Role $roleModel)
    {
        $roleData = $this->validateRoleData($request);

        $role = $this->createRole($roleModel, $roleData);

        return redirect()->route('role.index')
            ->with('success', 'El rol se ha creado exitosamente.');
    }

    private function validateRoleData(Request $request)
    {
        return $request->validate([
            'name' => 'required|unique:roles',
            'description' => 'nullable|string',
        ]);
    }

    private function createRole(Role $roleModel, array $data)
    {
        return $roleModel->create($data);
    }

    public function show(Role $role)
    {
        return inertia('Admin/Role/Show', compact('role'));
    }

    public function edit(Role $role)
    {
        return inertia('Admin/Role/Edit', compact('role'));
    }

    public function update(Request $request, Role $role)
    {
        $data = $request->validate([
            'name' => 'required|unique:roles,name,' . $role->id,
        ]);

        $role->update($data);

        return redirect()->route('role.index');
    }

    public function destroy(Role $role)
    {
        $role->delete();

        return redirect()->route('role.index');
    }
}
