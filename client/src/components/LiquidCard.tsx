import type React from "react";

type Props = {
    children: React.ReactNode
    className?: string
}

const GlassCard = ({ children, className }: Props) => (
    <div className={`backdrop-blur-md p-4 bg-white/10 border border-white/20 rounded-2xl shadow-xl ${className}`}>
        {children}
    </div>
);

export default GlassCard;