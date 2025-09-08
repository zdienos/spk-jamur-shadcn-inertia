<?php

namespace App\Http\Controllers;

use App\Models\Classification;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ClassificationController extends Controller
{
    public function index()
    {
        return Inertia::render('Classification/Index', [
            'classifications' => Classification::latest()->get(),
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:25',
            'description' => 'nullable|string',
        ]);

        Classification::create($validated);

        return redirect()->route('classification.index')->with('message', 'Klasifikasi berhasil ditambahkan.');
    }

    public function update(Request $request, Classification $classification)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'nullable|string',
        ]);

        $classification->update($validated);

        return redirect()->route('classification.index')->with('message', 'Klasifikasi berhasil diupdate.');
    }

    public function destroy(Classification $classification)
    {
        $classification->delete();

        return redirect()->route('classification.index')->with('message', 'Klasifikasi ' . $classification->name . ' berhasil dihapus.');
    }
}
