<?php

namespace App\Http\Controllers;

use App\Models\Criteria;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CriteriaController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('criteria/index', [
            'criteria' => Criteria::latest()->get(),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('criteria/create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate(['nama' => 'required|string|max:25']);

        Criteria::create($request->all());

        return redirect()->route('criteria.index')->with('message', 'Kriteria berhasil ditambahkan.');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $criteria = Criteria::findOrFail($id);

        return Inertia::render('criteria/edit', [
            'criterion' => $criteria
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $request->validate(['nama' => 'required|string|max:255']);

        $criterioa = Criteria::findOrFail($id);
        $criterioa->update([
            'nama' => $request->nama,
        ]);

        return redirect()->route('criteria.index')->with('message', 'Kriteria berhasil diupdate.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $criteria = Criteria::findOrFail($id);
        $criteria->delete();

        return redirect()->route('criteria.index')->with('message', 'Kriteria berhasil dihapus.');
    }
}
