<?php

namespace App\Http\Controllers;

use App\Models\Criteria;
use App\Models\SubCriteria;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SubCriteriaController extends Controller
{
    public function index()
    {
        return Inertia::render('SubCriteria/Index', [
            // Kirim daftar semua sub kriteria, beserta data induknya
            'subCriterias' => SubCriteria::with('criteria')->latest()->get(),
            // Kirim juga daftar semua kriteria untuk mengisi dropdown form
            'criterias' => Criteria::all(),
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'criteria_id' => 'required|exists:criterias,id',
            'name' => 'required|string|max:255',
            'value' => 'required|integer',
        ]);

        SubCriteria::create($validated);

        return redirect()->route('subcriteria.index')->with('message', 'Sub Kriteria berhasil ditambahkan.');
    }

    // public function update(Request $request, SubCriteria $subcriterion)
    // {
    //     $validated = $request->validate([
    //         'name' => 'required|string|max:255',
    //         'value' => 'required|integer',
    //         // criteria_id biasanya tidak diubah saat edit
    //     ]);

    //     $subcriterion->update($validated);

    //     return redirect()->route('subcriteria.index')->with('message', 'Sub Kriteria berhasil diupdate.');
    // }

    public function update(Request $request, SubCriteria $subcriterion)
    {
        // TAMBAHKAN 'criteria_id' DI SINI
        $validated = $request->validate([
            'criteria_id' => 'required|exists:criterias,id',
            'name' => 'required|string|max:25',
            'value' => 'required|integer',
        ]);

        $subcriterion->update($validated);

        return redirect()->route('subcriteria.index')->with('message', 'Sub Kriteria berhasil diupdate.');
    }

    public function destroy(SubCriteria $subcriterion)
    {
        $subcriterion->delete();

        return redirect()->route('subcriteria.index')->with('message', 'Sub Kriteria berhasil dihapus.');
    }
}
