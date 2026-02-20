import LiquidCard from '@/components/LiquidCard'
import InputGlass from '@/components/LiquidInput';
import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react';

export const Route = createFileRoute('/new-char/')({
    component: RouteComponent,
})

type Attributes = {
    agi: number; // Agilidade
    for: number; // Força
    int: number; // Intelecto
    pre: number; // Presença
    vig: number; // Vigor
};

type Character = {
    id: string;
    characterName: string;
    class: 'Combatente' | 'Ocultista' | 'Especialista';
    nex: number;
    attributes: Attributes;
};

function RouteComponent() {
    const [newChar, setNewChar] = useState<Partial<Character>>({
        attributes: { agi: 1, for: 1, int: 1, pre: 1, vig: 1 },
    });

    return <div className="min-h-screen bg-linear-to-b from-slate-900 via-slate-800 to-slate-900">
        <div className='flex justify-center'>
            <LiquidCard className='m-8 p-8 min-w-4xl'>
                <div className="mb-16 animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 shadow-2xl shadow-black/20 relative overflow-hidden">
                        {/* Brilho decorativo no topo do card */}
                        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />

                        <h2 className="text-xl font-light mb-6 text-cyan-100">Registrar Novo Agente</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                            <InputGlass
                                label="Nome do Agente"
                                placeholder="Ex: Arthur Cervero"
                                onChange={(e) => setNewChar({ ...newChar, characterName: e.target.value })}
                            />

                            <div className="space-y-1">
                                <label className="text-xs text-slate-400 uppercase tracking-wider ml-1">Classe</label>
                                <select
                                    className="w-full bg-slate-900/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-slate-200 focus:outline-none focus:border-cyan-500/50 focus:bg-slate-900/60 transition-all"
                                    onChange={(e) => setNewChar({ ...newChar, class: e.target.value as any })}
                                >
                                    <option value="">Selecione...</option>
                                    <option value="Combatente">Combatente</option>
                                    <option value="Especialista">Especialista</option>
                                    <option value="Ocultista">Ocultista</option>
                                </select>
                            </div>

                        </div>
                    </div>
                </div>
            </LiquidCard>
        </div>
    </div>
}
