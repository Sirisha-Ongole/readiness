<?php

namespace Tests\Feature;


use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use App\Models\User;
use App\Models\Task;
use App\Models\Pomodoro;
class PostTaskTest extends TestCase
{

    use RefreshDatabase;

    
/**
  * @test
  */
    public function createTask() {
        
        $this->withoutExceptionHandling();
        $this->actingAs($user = User::factory()->create(), 'api');
        $pomodoro = Pomodoro::factory()->create();


        $response = $this->post('/api/tasks',[
            'data' => [
                'type'  => 'tasks',
                'task_id' => 1,
                'attributes' => [
                    'pt_id' => 1,
                    'duration' => 250,
                    'body' => 'Testing task',
                ]
                ],
                'links' => [
                    'self' => url('/tasks/'.'1'),
                ] 
        ]);
        $task = Task::first();

        $this->assertCount(1, Task::all());
        $this->assertEquals($user->id, $task->user_id);
        //$this->assertEquals($pomodoro->id, $task->pt_id);
        $this->assertEquals('Testing task', $task->body);

        $response->assertStatus(201)->assertJson([
            'data' => [
                'type'  => 'tasks',
                'task_id' => $task->id,
                'attributes' => [
                    'user_id' => $user->id,
                    'pt_id' => $task->pt_id,
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
                    'duration' => $task->duration,
                    'body' => $task->body,
                ]
                ],
                'links' => [
                    'self' => url('/tasks/'.$task->id),
                ]
        ]);

    }
}
