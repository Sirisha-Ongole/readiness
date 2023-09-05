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

        $input = json_decode($request->getContent(), true);
        $validator = Validator::make($input['pomoData'], [
            'cycle_time' => 'required',
            'short_break' => 'required',
            'long_break' => 'required',
            'cycle_count_lb' => 'required'
        ]);

        if($validator->fails()){
            return  response()->json(['error'=>'Unauthorised'], 401);        
        }
        
        $pomodoro = Pomodoro::where('cycle_time', $input['pomoData']['cycle_time'])
                            ->where('short_break', $input['pomoData']['short_break'])
                            ->where('long_break', $input['pomoData']['long_break'])
                            ->where('cycle_count_lb', $input['pomoData']['cycle_count_lb'])
                            ->first();
        if($pomodoro){
            return new PomodoroResource($pomodoro);
        }else {
            $newPomodoro = Pomodoro::create($input['pomoData']);
            return new PomodoroResource($newPomodoro);
        }

       
    }
}
