import { Activity } from "lucide-react";

export function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-6 pt-4">
        <nav className="glass-strong flex items-center justify-between rounded-2xl px-5 py-3">
          <a href="#top" className="flex items-center gap-2">
            <div className="relative flex h-9 w-9 items-center justify-center rounded-xl" style={{ background: "var(--gradient-accent)" }}>
              <Activity className="h-5 w-5 text-background" strokeWidth={2.5} />
            </div>
            <div className="leading-tight">
              <div className="text-sm font-semibold tracking-tight">GreenWave</div>
              <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Emergency</div>
            </div>
          </a>
          <ul className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
            <li><a href="#problema" className="transition hover:text-foreground">Problema</a></li>
            <li><a href="#como-funciona" className="transition hover:text-foreground">Como funciona</a></li>
            <li><a href="#dashboard" className="transition hover:text-foreground">Dashboard</a></li>
            <li><a href="#beneficios" className="transition hover:text-foreground">Benefícios</a></li>
            <li><a href="#faq" className="transition hover:text-foreground">FAQ</a></li>
          </ul>
          <a
            href="#cta"
            className="rounded-xl px-4 py-2 text-sm font-medium text-primary-foreground transition hover:opacity-90"
            style={{ background: "var(--gradient-accent)" }}
          >
            Solicitar Demo
          </a>
        </nav>
      </div>
    </header>
  );
}
