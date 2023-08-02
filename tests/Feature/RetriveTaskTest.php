<?php

namespace Tests\Feature;

use App\Models\Pomodoro;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use App\Models\User;
use App\Models\Task;


class RetriveTaskTest extends TestCase
{

    use RefreshDatabase;

  /**
  * @test
  */
    public function Retrivetasks() {
        $this->actingAs($user = User::factory()->create(), 'api');
        $tasks = Task::factory()->count(2)->create();
        $pomodoro = Pomodoro::factory()->create();

        $response = $this->get('/api/tasks');

        $response->assertStatus(200);
        //$this->assertEquals($pomodoro->id, $tasks->first()->pt_id);

        $response->assertJson([
            'data' => [
                [
                    'data' => [
                        'type'  => 'tasks',
                        'task_id' => $tasks->first()->id,
                        'attributes' => [
                            'user_id' => $user->id,
                            'pt_id' => $tasks->first()->pt_id,
                            'pomodoro_template' => [
                                'type' => 'pomodoro',
                                'pmodoro_id' => $pomodoro->id,
                                'attributes' => [
                                    'cycle_time' => $pomodoro->cycle_time,
                                ],
                                'links' => [
                                    'self' => url('/pomodoro/'.$pomodoro->id),
                                ]
                                ],
                            'duration' => $tasks->first()->duration,
                            'body' => $tasks->first()->body,
                            ]
                        ],
                    ],
                    [
                        'data' => [
                            'type'  => 'tasks',
                            'task_id' => $tasks->last()->id,
                            'attributes' => [
                                'user_id' => $user->id,
                                'pt_id' => $tasks->last()->pt_id,
                                'pomodoro_template' => [
                                    'type' => 'pomodoro',
                                    'pmodoro_id' => $pomodoro->id,
                                    'attributes' => [
                                        'cycle_time' => $pomodoro->cycle_time,
                                    ],
                                    'links' => [
                                        'self' => url('/pomodoro/'.$pomodoro->id),
                                    ]
                                    ],
                                'duration' => $tasks->last()->duration,
                                'body' => $tasks->last()->body,
                                ]
                            ],
                        ],

                ],
                'links' => [
                    'self' => url('/tasks/'),
                ]
        ]);
    }
}