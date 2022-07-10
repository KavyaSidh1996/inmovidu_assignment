<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Hash;
use Illuminate\Http\Request;
use App\Models\User;

class UserController extends Controller
{
    public function store(Request $request)
    {
 
        $request->validate([
            'name'=> 'required',
            'email'=>'required|email|max:255',
            'password'=>'required|confirmed|min:8',
        ]);

        $user = new User;
        $user->name=$request->get('name');
        $user->email=$request->get('email');
        $user->password=Hash::make($request->get('password'));
        $user->save();
        return $user;

        
    }
}
