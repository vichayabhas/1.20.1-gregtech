// priority: 0

// Visit the wiki for more info - https://kubejs.com/

console.info('Hello, World! (Loaded server scripts)')


ServerEvents.recipes((event) => {
    event.replaceOutput({ id: 'gtceu:neutron_activator/naquadria' }, Item.of('gtceu:naquadria_sulfate_dust', 3), Item.of('gtceu:naquadria_sulfate_dust', 9))
    event.replaceOutput({ id: 'gtceu:chemical_plant/enriched_naquadah_residue_solution' }, Fluid.of('gtceu:enriched_naquadah_residue_solution', 1000), Fluid.of('gtceu:enriched_naquadah_residue_solution', 2000))
    // event.remove({ id: 'gtceu:dehydrator/xenoauric_fluoroantimonic_acid' })
    event.recipes.gtceu.centrifuge('test')
        .inputFluids(Fluid.of('gtceu:naquadria_waste',19000))
        .itemOutputs('64x gtceu:antimony_trifluoride_dust')
        .itemOutputs('64x gtceu:antimony_trifluoride_dust')
        .itemOutputs('64x gtceu:antimony_trifluoride_dust')
        .itemOutputs('10x gtceu:antimony_trifluoride_dust')
        .itemOutputs(Item.of('gtceu:gallium_sulfide_dust',19))
        .outputFluids(Fluid.of('gtceu:fluorine',40000))
        .outputFluids(Fluid.of('water',99000))
        .outputFluids(Fluid.of('gtceu:oxygen',73000))
        .outputFluids(Fluid.of('gtceu:sulfuric_acid',87500))
        .EUt(5)
        .duration(5)
        event.remove({id:'gtceu:dehydrator/naquadria_waste'})
        event.remove({id:'gtceu:distillation_tower/naquadria_waste_separation'})
        event.remove({id:'gtceu:distillery/naquadria_waste_separation_to_enriched_naquadah_solution'})
        event.remove({id:'gtceu:distillery/naquadria_waste_separation_to_naquadria_solution'})
        event.remove({id:'gtceu:distillery/naquadria_waste_separation_to_sulfuric_acid'})
})