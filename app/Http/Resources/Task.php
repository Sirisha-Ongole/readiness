<?php

namespace App\Http\Resources;

use App\Models\Pomodoro;
use App\Models\User;
use Illuminate\Http\Resources\Json\JsonResource;
use App\Http\Resources\Pomodoro as PomodoroResource;
use App\Models\Task as TaskModel;

class Task extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        $pomodoro = TaskModel::with('pt')->getRelation('pt')->get()->first();
        $user = TaskModel::with('checkUser')->getRelation('checkUser')->get()->first();

        return [
            'data' => [
                'type'  => 'tasks',
                'attributes' => [
                    'task_id' => $this->id,
                    'user_id' => $user->id,
                    'pt_id' => $this->pt_id,
                    'duration' => $this->duration,
                    'body' => $this->body,
                    'current_pomo_phase_name' => $this->current_pomo_phase_name,
                    'current_pomo_phase_duration' => $this->current_pomo_phase_duration,
                    'current_pomo_phase_cycle' => $this->current_pomo_phase_cycle,
                    'pomodoro_template' => new PomodoroResource($pomodoro),
                ]
                ]

        ];

    }
}
