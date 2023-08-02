<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class Pomodoro extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {        
        return [
                'type'  => 'pomodoro',
                'attributes' => [
                    'pmodoro_id' => $this->id,
                    'cycle_time' => $this->cycle_time,
                    'long_break' => $this->long_break,
                    'short_break' => $this->short_break,
                    'cycle_count' => $this->cycle_count_lb,
                    ],
        ];

    }
}