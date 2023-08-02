<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
   
    protected $guarded = [];

    use HasFactory;

    public function pt(){
        return $this->belongsTo(Pomodoro::class,'pt_id','id');
    }

    public function checkUser(){
        return $this->belongsTo(User::class,'user_id','id');
    }
}
