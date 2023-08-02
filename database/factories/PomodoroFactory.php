<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class PomodoroFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'cycle_time' => 25,
            'short_break' => '5',
            'long_break' => '30',
            'cycle_count_lb' => '4'      
          ];
    }
}
