<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Task;
use \App\Http\Resources\Task as TaskResource;
use \App\Http\Resources\TaskCollection as TaskCollectionResource;
use Illuminate\Support\Facades\Auth;
use Validator;
class TaskController extends Controller
{

    public $successStatus = 200;
    public function index(){

        //$task = Task::all()->first();$user = Auth::user();
        $user = Auth::user(); 
        $tasks =new TaskCollectionResource(Task::all());
        return $tasks; 
    
    }
   public function store(Request $request){

    $input = $request->all();
   
    $validator = Validator::make($input, [
        'pt_id' => 'required',
        'body' => 'required',
        'duration' => 'required'
    ]);

    if($validator->fails()){
        return  response()->json(['error'=>'Unauthorised'], 401);        
    }

    $task = request()->user()->tasks()->create($input);
    return new TaskResource($task);


//     $data = request()->validate([
//         'data.attributes.pt_id' => '',
//         'data.attributes.body' => '',
//         'data.attributes.duration' => '',
//     ]);

   
//     $task = request()->user()->tasks()->create($data['data']['attributes']);
//     return new TaskResource($task);
//    }

}
}
