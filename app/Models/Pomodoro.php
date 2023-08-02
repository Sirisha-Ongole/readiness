<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Laravel\Passport\HasApiTokens;
use Illuminate\Notifications\Notifiable;

class Pomodoro extends Model
{
    use HasFactory;
    protected $guarded = [];

    public function tasks(){
        return $this->hasMany(Task::class, 'pt_id', 'id');
    }

}
