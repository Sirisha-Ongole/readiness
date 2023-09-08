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
//write delete function
public function delete($id){
    $task = Task::find($id);
    $task->delete();
    return response()->json(['success'=>'Task deleted successfully'], $this-> successStatus); 
}

//write update function
public function update(Request $request, $id){
    $input = json_decode($request->getContent(), true);
    $validator = Validator::make($input['taskData'], [
        'pt_id' => 'required',
        'body' => 'required',
        'duration' => 'required'
    ]);

    if($validator->fails()){
        return  response()->json(['error'=>'Unauthorised'], 401);        
    }

    $task = Task::find($id);
    $task->pt_id = $input['taskData']['pt_id'];
    $task->body = $input['taskData']['body'];
    $task->duration = $input['taskData']['duration'];
    $task->save();
    return response()->json(['success'=>'Task updated successfully'], $this-> successStatus); 

}
}