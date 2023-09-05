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

        $user = Auth::user(); 
        $tasks =new TaskCollectionResource(Task::all());
        return $tasks; 
    
        //$task = Task::all()->first();$user = Auth::user();
    }
   public function store(Request $request){

    $input = json_decode($request->getContent(), true);
    $validator = Validator::make($input['taskData'], [
        'pt_id' => 'required',
        'body' => 'required',
        'duration' => 'required'
    ]);

    if($validator->fails()){
        return  response()->json(['error'=>'Unauthorised'], 401);        
    }

    $task = request()->user()->tasks()->create($input['taskData']);
    return new TaskResource($task);

}
}
