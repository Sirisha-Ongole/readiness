<?php

namespace App\Http\Controllers;

use App\Http\Resources\Pomodoro as PomodoroResource;
use App\Models\Pomodoro;
use Illuminate\Http\Request;
use Validator;

class PomodoroController extends Controller
{
    public function index(){
        $pomodoro = Pomodoro::all();
        return new PomodoroResource($pomodoro);
    }

    public function store(Request $request){

        $input = $request->all();
        $validator = Validator::make($input, [
            'cycle_time' => 'required',
            'short_break' => 'required',
            'long_break' => 'required',
            'cycle_count_lb' => 'required'
        ]);


        if($validator->fails()){
            return  response()->json(['error'=>'Unauthorised'], 401);        
        }

        $task = Pomodoro::create($input);
        return new PomodoroResource($task);
    }
}
