import { motion } from "framer-motion";
import {
  AlertTriangle,
  ArrowRight,
  Building2,
  CheckCircle2,
  ChevronDown,
  Clock,
  Cpu,
  Flame,
  Gauge,
  Heart,
  HeartPulse,
  Hospital,
  MapPin,
  Navigation,
  Network,
  Quote,
  Radio,
  Route as RouteIcon,
  ShieldAlert,
  Siren,
  Sparkles,
  TrafficCone,
  Users,
  Wifi,
  Zap,
} from "lucide-react";
import { useState } from "react";

import heroImg from "@/assets/hero-ambulance.jpg";
import trafficImg from "@/assets/traffic-jam.jpg";
import dashboardImg from "@/assets/dashboard-mockup.jpg";

import { Nav } from "@/components/landing/Nav";
import { Reveal } from "@/components/landing/Reveal";
import { Counter } from "@/components/landing/Counter";

/* ---------- HERO ---------- */
function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-24">
      <div className="absolute inset-0 grid-bg opacity-40" aria-hidden />
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: "var(--gradient-hero)" }}
        aria-hidden
      />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[1.05fr_1fr] lg:items-center">
        <Reveal>
          <div className="glass mb-6 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            <span className="text-muted-foreground">Tecnologia GovTech para Smart Cities</span>
          </div>
          <h1 className="text-balance text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-[4.2rem]">
            Menos tempo no trânsito.{" "}
            <span className="text-gradient">Mais vidas salvas.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            GreenWave Emergency cria automaticamente uma{" "}
            <span className="text-foreground">Onda Verde Inteligente</span> para ambulâncias e
            viaturas, sincronizando semáforos em tempo real para garantir rotas mais rápidas e
            seguras.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#cta"
              className="group inline-flex items-center gap-2 rounded-xl px-6 py-3.5 text-sm font-medium text-primary-foreground transition hover:translate-y-[-1px] glow"
              style={{ background: "var(--gradient-accent)" }}
            >
              Solicitar Demonstração
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </a>
            <a
              href="#como-funciona"
              className="glass inline-flex items-center gap-2 rounded-xl px-6 py-3.5 text-sm font-medium transition hover:bg-white/5"
            >
              Ver Como Funciona
            </a>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-4 max-w-lg">
            {[
              { k: "40 → 18", v: "minutos médios" },
              { k: "-55%", v: "tempo de rota" },
              { k: "100%", v: "automático" },
            ].map((s) => (
              <div key={s.v} className="glass rounded-2xl p-4">
                <div className="text-xl font-semibold text-gradient">{s.k}</div>
                <div className="mt-1 text-xs text-muted-foreground">{s.v}</div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="relative">
            <div className="absolute -inset-6 rounded-[2rem] opacity-60 blur-3xl" style={{ background: "var(--gradient-accent)" }} aria-hidden />
            <div className="glass-strong relative overflow-hidden rounded-[1.75rem] p-2">
              <img
                src={heroImg}
                alt="Ambulância em uma rota verde inteligente sincronizada com semáforos"
                width={1536}
                height={1280}
                className="rounded-[1.4rem]"
              />
              {/* Floating telemetry card */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="glass-strong absolute bottom-6 left-6 rounded-2xl p-4 text-xs shadow-2xl"
              >
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Siren className="h-3.5 w-3.5 text-destructive" />
                  Viatura SAMU-07 · em rota
                </div>
                <div className="mt-2 flex items-center gap-3">
                  <div>
                    <div className="text-muted-foreground">ETA</div>
                    <div className="text-base font-semibold text-accent">04:32</div>
                  </div>
                  <div className="h-8 w-px bg-border" />
                  <div>
                    <div className="text-muted-foreground">Semáforos</div>
                    <div className="text-base font-semibold">12 sincronizados</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- PROBLEMA ---------- */
function Problema() {
  const cards = [
    { icon: TrafficCone, title: "Congestionamentos", text: "Ambulâncias ficam presas mesmo utilizando sirenes." },
    { icon: AlertTriangle, title: "Cruzamentos bloqueados", text: "Semáforos não reconhecem veículos em emergência." },
    { icon: ShieldAlert, title: "Manobras perigosas", text: "Condutores são obrigados a usar contramão e rotas arriscadas." },
    { icon: Clock, title: "Atendimento atrasado", text: "Segundos podem determinar a sobrevivência de uma vítima." },
  ];
  return (
    <section id="problema" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl">
              <img src={trafficImg} alt="Trânsito urbano congestionado ao entardecer" width={1280} height={896} loading="lazy" className="rounded-3xl" />
              <div className="absolute inset-0 rounded-3xl" style={{ background: "linear-gradient(180deg, transparent 50%, oklch(0.16 0.03 260 / 0.85))" }} />
              <div className="absolute bottom-5 left-5 right-5 flex items-center gap-3 glass-strong rounded-2xl p-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-destructive/15">
                  <Siren className="h-5 w-5 text-destructive" />
                </div>
                <div className="text-sm">
                  <div className="font-semibold">+2h em horário de pico</div>
                  <div className="text-xs text-muted-foreground">tempo real relatado por motoristas de ambulância</div>
                </div>
              </div>
            </div>
          </Reveal>
          <div>
            <Reveal>
              <div className="text-xs uppercase tracking-[0.2em] text-destructive">O custo da inércia</div>
              <h2 className="mt-3 text-4xl font-semibold leading-tight sm:text-5xl">
                O trânsito está <span className="text-gradient">custando vidas</span>.
              </h2>
              <p className="mt-4 max-w-xl text-muted-foreground">
                Veículos de emergência enfrentam um sistema viário projetado para o fluxo médio —
                não para o tempo crítico de quem precisa chegar primeiro.
              </p>
            </Reveal>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {cards.map((c, i) => (
                <Reveal key={c.title} delay={i * 0.06}>
                  <div className="glass group h-full rounded-2xl p-5 transition hover:-translate-y-1 hover:border-white/20">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-destructive/10 text-destructive transition group-hover:bg-destructive/20">
                      <c.icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-4 text-base font-semibold">{c.title}</h3>
                    <p className="mt-1.5 text-sm text-muted-foreground">{c.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- EVIDÊNCIAS ---------- */
function Evidencias() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <div className="text-xs uppercase tracking-[0.2em] text-accent">Pesquisa de campo</div>
            <h2 className="mt-3 text-4xl font-semibold sm:text-5xl">
              Problema validado com profissionais da linha de frente
            </h2>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {[
            { icon: Clock, big: "17", small: "anos", title: "de experiência", text: "Entrevista com motorista veterano de ambulância urbana." },
            { icon: Quote, big: "+2h", small: "no pico", title: "trajetos críticos", text: "Rotas que deveriam levar 40 min podem ultrapassar 2 horas." },
            { icon: HeartPulse, big: "1ª", small: "linha", title: "necessidade urgente", text: "Priorização inteligente do trânsito para salvar vidas." },
          ].map((c, i) => (
            <Reveal key={c.title} delay={i * 0.08}>
              <div className="glass relative h-full overflow-hidden rounded-3xl p-7">
                <div className="absolute -right-6 -top-6 h-28 w-28 rounded-full opacity-20 blur-2xl" style={{ background: "var(--gradient-accent)" }} />
                <div className="flex items-center gap-2 text-muted-foreground">
                  <c.icon className="h-4 w-4" />
                  <span className="text-xs uppercase tracking-wider">{c.title}</span>
                </div>
                <div className="mt-4 flex items-baseline gap-2">
                  <div className="text-5xl font-semibold text-gradient">{c.big}</div>
                  <div className="text-sm text-muted-foreground">{c.small}</div>
                </div>
                <p className="mt-3 text-sm text-muted-foreground">{c.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-10 glass-strong rounded-3xl p-8 md:p-10">
            <Quote className="h-6 w-6 text-accent" />
            <blockquote className="mt-4 text-xl leading-relaxed text-foreground/90 md:text-2xl">
              “Na hora de pico, o que deveria ser uma corrida de 40 minutos vira mais de duas
              horas. A gente sabe que do outro lado tem alguém esperando — e cada minuto pesa.”
            </blockquote>
            <div className="mt-5 flex items-center gap-3 text-sm text-muted-foreground">
              <div className="h-10 w-10 rounded-full" style={{ background: "var(--gradient-accent)" }} />
              <div>
                <div className="font-medium text-foreground">Motorista de ambulância</div>
                <div>17 anos de operação urbana · entrevistado pela pesquisa GreenWave</div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- COMO FUNCIONA ---------- */
function ComoFunciona() {
  const steps = [
    { icon: Siren, title: "Viatura inicia atendimento", text: "Despacho da ocorrência conecta a viatura à plataforma." },
    { icon: MapPin, title: "GPS identifica rota", text: "Localização e destino enviados em tempo real." },
    { icon: Cpu, title: "Sistema prevê cruzamentos", text: "IA antecipa os semáforos da rota." },
    { icon: Radio, title: "Comandos automáticos", text: "Semáforos recebem os comandos de prioridade." },
    { icon: Navigation, title: "Corredor verde criado", text: "Onda Verde sincronizada em tempo real." },
    { icon: CheckCircle2, title: "Chegada mais rápida", text: "Resposta no menor tempo possível." },
  ];
  return (
    <section id="como-funciona" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <div className="text-xs uppercase tracking-[0.2em] text-accent">Pipeline em tempo real</div>
            <h2 className="mt-3 text-4xl font-semibold sm:text-5xl">
              Como a <span className="text-gradient">Onda Verde Inteligente</span> funciona
            </h2>
            <p className="mt-4 text-muted-foreground">
              Seis etapas que acontecem em milissegundos, do despacho ao destino.
            </p>
          </div>
        </Reveal>

        <div className="relative mt-14">
          <div className="absolute left-0 right-0 top-9 hidden h-px lg:block" style={{ background: "linear-gradient(90deg, transparent, oklch(0.72 0.19 145 / 0.6), transparent)" }} />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-6">
            {steps.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.06}>
                <div className="glass group relative h-full rounded-2xl p-5 transition hover:-translate-y-1">
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl text-accent-foreground" style={{ background: "var(--gradient-accent)" }}>
                      <s.icon className="h-5 w-5" />
                    </div>
                    <span className="text-xs font-mono text-muted-foreground">0{i + 1}</span>
                  </div>
                  <h3 className="mt-4 text-sm font-semibold leading-tight">{s.title}</h3>
                  <p className="mt-1.5 text-xs text-muted-foreground">{s.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- DASHBOARD ---------- */
function Dashboard() {
  const stats = [
    { icon: Navigation, label: "Viaturas ativas", val: "24" },
    { icon: Wifi, label: "Semáforos online", val: "1.842" },
    { icon: Clock, label: "Tempo economizado", val: "12h 32m" },
    { icon: Gauge, label: "Latência da rede", val: "38ms" },
  ];
  return (
    <section id="dashboard" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <div className="text-xs uppercase tracking-[0.2em] text-accent">Centro de controle</div>
            <h2 className="mt-3 text-4xl font-semibold sm:text-5xl">Controle em tempo real</h2>
            <p className="mt-4 text-muted-foreground">
              Uma visão única do estado da malha viária, das viaturas e dos semáforos da cidade.
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="mt-12 grid gap-6 lg:grid-cols-[1.6fr_1fr]">
            <div className="glass-strong relative overflow-hidden rounded-3xl p-2">
              <img src={dashboardImg} alt="Mockup do dashboard GreenWave com mapa da cidade e telemetria" width={1600} height={1024} loading="lazy" className="rounded-[1.3rem]" />
              <div className="absolute left-6 top-6 glass-strong inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs">
                <span className="h-2 w-2 rounded-full bg-accent pulse-dot" />
                Live · São Paulo
              </div>
            </div>
            <div className="grid gap-4">
              {stats.map((s) => (
                <div key={s.label} className="glass flex items-center justify-between rounded-2xl p-5">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/15 text-primary">
                      <s.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground">{s.label}</div>
                      <div className="text-xl font-semibold">{s.val}</div>
                    </div>
                  </div>
                  <span className="text-xs text-accent">▲ ativo</span>
                </div>
              ))}
              <div className="glass rounded-2xl p-5">
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>Status da rede</span>
                  <span className="text-accent">100% operacional</span>
                </div>
                <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-white/5">
                  <div className="h-full rounded-full" style={{ width: "96%", background: "var(--gradient-accent)" }} />
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- BENEFÍCIOS ---------- */
function Beneficios() {
  const items = [
    { icon: Siren, title: "Para Ambulâncias", text: "Chegadas mais rápidas, rotas previsíveis e seguras." },
    { icon: Heart, title: "Para Pacientes", text: "Maior chance de atendimento dentro da janela crítica." },
    { icon: Hospital, title: "Para Hospitais", text: "Fluxo de chegada mais previsível e preparado." },
    { icon: Flame, title: "Para Bombeiros", text: "Menos obstáculos durante ocorrências de alto risco." },
    { icon: Building2, title: "Para Prefeituras", text: "Mobilidade urbana inteligente e dados operacionais." },
    { icon: Users, title: "Para a Sociedade", text: "Mais eficiência e segurança pública em todas as vias." },
  ];
  return (
    <section id="beneficios" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <div className="text-xs uppercase tracking-[0.2em] text-accent">Impacto</div>
            <h2 className="mt-3 text-4xl font-semibold sm:text-5xl">Benefícios para toda a cidade</h2>
          </div>
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <Reveal key={it.title} delay={i * 0.05}>
              <div className="glass group relative h-full overflow-hidden rounded-3xl p-7 transition hover:-translate-y-1 hover:border-white/20">
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-0 blur-3xl transition group-hover:opacity-40" style={{ background: "var(--gradient-accent)" }} />
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 text-accent">
                  <it.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-semibold">{it.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{it.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- SMART CITY ---------- */
function SmartCity() {
  return (
    <section className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <div className="text-xs uppercase tracking-[0.2em] text-accent">Smart City Stack</div>
            <h2 className="mt-3 text-4xl font-semibold sm:text-5xl">Uma solução para cidades inteligentes</h2>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-14 glass-strong rounded-3xl p-8 md:p-12">
            <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1.1fr]">
              {[
                { icon: MapPin, label: "GPS Inteligente" },
                { icon: Wifi, label: "Semáforos IoT" },
                { icon: Network, label: "Dados em Tempo Real" },
              ].map((b, i) => (
                <div key={b.label} className="contents">
                  <div className="flex flex-col items-center gap-3 text-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/15 text-primary glass">
                      <b.icon className="h-7 w-7" />
                    </div>
                    <div className="text-sm font-medium">{b.label}</div>
                  </div>
                  <div className="hidden text-2xl text-muted-foreground lg:block">+</div>
                  {i === 2 && (
                    <>
                      <div className="hidden text-2xl text-accent lg:block">=</div>
                      <div className="flex flex-col items-center gap-3 text-center">
                        <div className="flex h-16 w-16 items-center justify-center rounded-2xl text-accent-foreground glow-green" style={{ background: "var(--gradient-accent)" }}>
                          <Sparkles className="h-7 w-7" />
                        </div>
                        <div className="text-sm font-semibold">Mobilidade Urbana Inteligente</div>
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- PARCEIROS ---------- */
function Parceiros() {
  const logos = [
    "SAMU",
    "Corpo de Bombeiros",
    "Sec. Mobilidade",
    "Hospitais",
    "Centros de Controle",
    "Defesa Civil",
  ];
  return (
    <section className="relative py-20">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="text-center text-xs uppercase tracking-[0.25em] text-muted-foreground">
            Construído para integrar com
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {logos.map((l) => (
              <div key={l} className="glass flex h-16 items-center justify-center rounded-xl text-sm font-medium text-muted-foreground transition hover:text-foreground">
                {l}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- INDICADORES ---------- */
function Indicadores() {
  const m = [
    { val: 55, suffix: "%", label: "Redução estimada do tempo de deslocamento" },
    { val: 30, suffix: "%", label: "Menos retenção em cruzamentos" },
    { val: 24, suffix: "/7", label: "Monitoramento contínuo" },
    { val: 100, suffix: "%", label: "Fluxo automatizado" },
  ];
  return (
    <section className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <div className="text-xs uppercase tracking-[0.2em] text-accent">Performance</div>
            <h2 className="mt-3 text-4xl font-semibold sm:text-5xl">Métricas que importam</h2>
          </div>
        </Reveal>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {m.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08}>
              <div className="glass relative h-full overflow-hidden rounded-3xl p-8 text-center">
                <div className="absolute inset-x-8 -top-12 h-24 rounded-full opacity-30 blur-3xl" style={{ background: "var(--gradient-accent)" }} />
                <div className="relative text-6xl font-semibold text-gradient">
                  <Counter to={s.val} suffix={s.suffix} />
                </div>
                <p className="relative mt-3 text-sm text-muted-foreground">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- MVP ---------- */
function Mvp() {
  const steps = ["Pesquisa", "Validação", "Protótipo", "Piloto", "Escala Municipal"];
  return (
    <section className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-center">
          <Reveal>
            <div className="text-xs uppercase tracking-[0.2em] text-accent">Roadmap</div>
            <h2 className="mt-3 text-4xl font-semibold sm:text-5xl">
              Projeto validado e <span className="text-gradient">pronto para piloto</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              O MVP já foi prototipado e validado com profissionais da área de emergência.
              O próximo passo é a implantação de um piloto controlado em corredores estratégicos urbanos.
            </p>
            <a href="#cta" className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-accent hover:underline">
              Quero estruturar um piloto <ArrowRight className="h-4 w-4" />
            </a>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="glass-strong rounded-3xl p-8">
              <div className="relative">
                <div className="absolute left-5 top-2 bottom-2 w-px md:left-1/2 md:-translate-x-1/2" style={{ background: "linear-gradient(180deg, transparent, oklch(0.72 0.19 145 / 0.6), transparent)" }} />
                <ul className="space-y-6">
                  {steps.map((s, i) => (
                    <li key={s} className="relative flex items-center gap-4 md:justify-center">
                      <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-background ring-1 ring-white/15">
                        <div className={`h-3 w-3 rounded-full ${i < 4 ? "bg-accent" : "bg-muted"}`} />
                        {i < 4 && <div className="absolute inset-0 rounded-full pulse-dot" />}
                      </div>
                      <div className="flex-1 md:flex-none md:w-40 md:text-center">
                        <div className="text-sm font-semibold">{s}</div>
                        <div className="text-xs text-muted-foreground">
                          {i < 4 ? "concluído" : "próxima fase"}
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------- FAQ ---------- */
function Faq() {
  const items = [
    { q: "Como os semáforos recebem os comandos?", a: "Via integração segura com a central de tráfego municipal e/ou módulos IoT instalados nos controladores. A comunicação é criptografada e auditável." },
    { q: "O sistema substitui a infraestrutura atual?", a: "Não. GreenWave funciona como uma camada de inteligência sobre a infraestrutura existente, aproveitando os semáforos e centrais que a cidade já possui." },
    { q: "Existe risco para outros veículos?", a: "O corredor verde é criado de forma coordenada, respeitando ciclos mínimos de segurança e tempos de transição já validados em normas de tráfego." },
    { q: "A solução pode ser aplicada em qualquer cidade?", a: "Sim. A arquitetura é modular e escalável, adaptando-se desde corredores específicos até malhas municipais inteiras." },
    { q: "Como ocorre a integração com o SAMU?", a: "Por API conectada ao sistema de despacho, ativando a Onda Verde no momento em que a ocorrência é aberta." },
  ];
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="relative py-28">
      <div className="mx-auto max-w-4xl px-6">
        <Reveal>
          <div className="text-center">
            <div className="text-xs uppercase tracking-[0.2em] text-accent">Perguntas frequentes</div>
            <h2 className="mt-3 text-4xl font-semibold sm:text-5xl">Tire suas dúvidas</h2>
          </div>
        </Reveal>
        <div className="mt-12 space-y-3">
          {items.map((it, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={it.q} delay={i * 0.04}>
                <div className="glass overflow-hidden rounded-2xl">
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition hover:bg-white/5"
                    aria-expanded={isOpen}
                  >
                    <span className="font-medium">{it.q}</span>
                    <ChevronDown className={`h-5 w-5 text-muted-foreground transition ${isOpen ? "rotate-180 text-accent" : ""}`} />
                  </button>
                  <div className={`grid transition-all duration-300 ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                    <div className="overflow-hidden">
                      <p className="px-6 pb-5 text-sm text-muted-foreground">{it.a}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------- CTA FINAL ---------- */
function CtaFinal() {
  return (
    <section id="cta" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] p-10 md:p-16">
            <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
            <div className="absolute inset-0 grid-bg opacity-50" />
            <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full opacity-40 blur-3xl" style={{ background: "var(--gradient-accent)" }} />
            <div className="absolute -bottom-20 -left-20 h-80 w-80 rounded-full opacity-30 blur-3xl bg-destructive" />
            <div className="relative mx-auto max-w-3xl text-center">
              <div className="glass mb-6 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs">
                <Zap className="h-3 w-3 text-accent" />
                Pronto para implantação piloto
              </div>
              <h2 className="text-5xl font-semibold tracking-tight sm:text-6xl">
                Cada segundo <span className="text-gradient">conta</span>.
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-lg text-muted-foreground">
                Transforme a mobilidade urbana em uma aliada da saúde pública.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <a
                  href="#"
                  className="inline-flex items-center gap-2 rounded-xl px-6 py-3.5 text-sm font-medium text-primary-foreground transition hover:translate-y-[-1px] glow"
                  style={{ background: "var(--gradient-accent)" }}
                >
                  Solicitar Demonstração <ArrowRight className="h-4 w-4" />
                </a>
                <a href="#" className="glass-strong inline-flex items-center gap-2 rounded-xl px-6 py-3.5 text-sm font-medium transition hover:bg-white/5">
                  Agendar Apresentação
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- FOOTER ---------- */
function Footer() {
  return (
    <footer className="border-t border-white/5 py-14">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl" style={{ background: "var(--gradient-accent)" }}>
                <RouteIcon className="h-5 w-5 text-background" strokeWidth={2.5} />
              </div>
              <div>
                <div className="text-sm font-semibold">GreenWave Emergency</div>
                <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Smart City · GovTech</div>
              </div>
            </div>
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">
              Onda Verde Inteligente para veículos de emergência. Construído para cidades que
              querem reduzir o tempo de resposta e salvar vidas.
            </p>
          </div>
          {[
            { title: "Empresa", links: ["Sobre", "Tecnologia", "Parceiros", "Contato"] },
            { title: "Soluções", links: ["SAMU", "Bombeiros", "Mobilidade", "Hospitais"] },
            { title: "Legal", links: ["Privacidade", "Termos", "LGPD", "Segurança"] },
          ].map((c) => (
            <div key={c.title}>
              <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{c.title}</div>
              <ul className="mt-4 space-y-2.5 text-sm">
                {c.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="text-foreground/80 transition hover:text-accent">{l}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-6 text-xs text-muted-foreground md:flex-row">
          <div>© {new Date().getFullYear()} GreenWave Emergency. Todos os direitos reservados.</div>
          <div className="flex items-center gap-4">
            <a href="#" className="transition hover:text-foreground">LinkedIn</a>
            <a href="#" className="transition hover:text-foreground">X</a>
            <a href="#" className="transition hover:text-foreground">YouTube</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export function Landing() {
  return (
    <div className="dark min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <Problema />
        <Evidencias />
        <ComoFunciona />
        <Dashboard />
        <Beneficios />
        <SmartCity />
        <Parceiros />
        <Indicadores />
        <Mvp />
        <Faq />
        <CtaFinal />
      </main>
      <Footer />
    </div>
  );
}
