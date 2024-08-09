<?php

use App\Http\Controllers\TaskController;

// Rota para listar todas as tarefas
Route::get('/tasks', [TaskController::class, 'index']);

// Rota para criar uma nova tarefa
Route::post('/tasks', [TaskController::class, 'store']);

// Rota para obter uma tarefa específica por ID
Route::get('/tasks/{task}', [TaskController::class, 'show']);

// Rota para atualizar uma tarefa existente por ID
Route::put('/tasks/{task}', [TaskController::class, 'update']);

// Rota para excluir uma tarefa existente por ID
Route::delete('/tasks/{task}', [TaskController::class, 'destroy']);

