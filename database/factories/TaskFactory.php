<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class TaskFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'user_id' => $this->faker->randomNumber('#'),
            'pt_id' => $this->faker->randomNumber('#'),
            'body' => $this->faker->sentence(),
            'duration' => $this->faker->randomNumber('###')      
          ];
    }
}
