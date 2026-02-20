import type { HTMLInputTypeAttribute } from "react";

type Props = {
    label: string
    type?: HTMLInputTypeAttribute
    placeholder: string
    onChange: (e: any) => void
}

export default function InputGlass({ label, type = "text", placeholder, onChange }: Props) {
    return (
        <div className="space-y-1 group">
            <label className="text-xs text-slate-400 uppercase tracking-wider ml-1 group-focus-within:text-cyan-400 transition-colors">{label}</label>
            <input
                type={type}
                placeholder={placeholder}
                onChange={onChange}
                className="w-full bg-slate-900/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-cyan-500/50 focus:bg-slate-900/60 focus:ring-1 focus:ring-cyan-500/20 transition-all"
            />
        </div>
    );
}