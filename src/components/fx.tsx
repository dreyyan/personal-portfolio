import { useEffect, useRef, useState, type CSSProperties, type PointerEvent, type ReactNode } from "react";

const prefersReducedMotion = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const delayStyle = (ms: number) => ({ "--d": `${ms}ms` }) as CSSProperties;

/** Fades and lifts its children in the first time they scroll into view. */
export const Reveal = ({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.dataset.shown = "";
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return <div ref={ref} className={`reveal ${className}`} style={delayStyle(delay)}>{children}</div>;
};

/** Splits text into words that rise in one after another. */
export const SplitWords = ({ text, start = 0, step = 70 }: { text: string; start?: number; step?: number }) => (
  <>
    {text.split(" ").map((word, i) => (
      <span key={i}>
        <span className="word-rise" style={delayStyle(start + i * step)}>{word}</span>{" "}
      </span>
    ))}
  </>
);

/** Cycles through phrases, sliding each one up and out. */
export const RotatingPhrase = ({ phrases, delay = 0, interval = 2800, className = "" }: { phrases: string[]; delay?: number; interval?: number; className?: string }) => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (prefersReducedMotion()) return;
    const id = window.setInterval(() => setActive(i => (i + 1) % phrases.length), interval);
    return () => window.clearInterval(id);
  }, [phrases.length, interval]);

  const previous = (active - 1 + phrases.length) % phrases.length;

  return (
    <span className={`word-rise inline-grid overflow-hidden pb-[0.12em] align-top ${className}`} style={delayStyle(delay)}>
      {phrases.map((phrase, i) => (
        <span
          key={phrase}
          className="col-start-1 row-start-1 transition-[transform,opacity,filter] duration-700 ease-(--ease-out-soft)"
          style={{
            transform: i === active ? "none" : i === previous ? "translateY(-105%)" : "translateY(105%)",
            opacity: i === active ? 1 : 0,
            filter: i === active ? "none" : "blur(8px)",
          }}
        >
          {phrase}
        </span>
      ))}
    </span>
  );
};

/** Tilts toward the mouse in 3D and moves a glare highlight (--gx/--gy) with it. */
export const Tilt = ({ children, max = 10, className = "" }: { children: ReactNode; max?: number; className?: string }) => {
  const ref = useRef<HTMLDivElement>(null);

  const set = (vars: Record<string, string>) => {
    for (const [key, value] of Object.entries(vars)) ref.current?.style.setProperty(key, value);
  };

  const onMove = (e: PointerEvent) => {
    if (e.pointerType !== "mouse" || prefersReducedMotion() || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width;
    const y = (e.clientY - r.top) / r.height;
    set({ "--rx": `${(0.5 - y) * max}deg`, "--ry": `${(x - 0.5) * max}deg`, "--gx": `${x * 100}%`, "--gy": `${y * 100}%` });
  };

  return (
    <div ref={ref} onPointerMove={onMove} onPointerLeave={() => set({ "--rx": "0deg", "--ry": "0deg" })} className={`tilt ${className}`}>
      {children}
    </div>
  );
};

/** Gives an element a soft glow that follows the cursor (--mx/--my). */
export const Spotlight = ({ children, className = "" }: { children: ReactNode; className?: string }) => {
  const onMove = (e: PointerEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
  };
  return <div onPointerMove={onMove} className={`spot ${className}`}>{children}</div>;
};

/** Pulls its child slightly toward the cursor, like a magnet. */
export const Magnetic = ({ children, strength = 0.3 }: { children: ReactNode; strength?: number }) => {
  const ref = useRef<HTMLSpanElement>(null);

  const onMove = (e: PointerEvent) => {
    if (e.pointerType !== "mouse" || prefersReducedMotion() || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const dx = (e.clientX - (r.left + r.width / 2)) * strength;
    const dy = (e.clientY - (r.top + r.height / 2)) * strength;
    ref.current.style.transform = `translate(${dx}px, ${dy}px)`;
  };

  return (
    <span
      ref={ref}
      onPointerMove={onMove}
      onPointerLeave={() => ref.current && (ref.current.style.transform = "")}
      className="inline-block transition-transform duration-300 ease-(--ease-out-soft)"
    >
      {children}
    </span>
  );
};

/** A small badge that bobs up and down. */
export const FloatChip = ({ children, delay = 0, enter = 0, className = "" }: { children: ReactNode; delay?: number; enter?: number; className?: string }) => (
  <span className={`pointer-events-none absolute z-10 ${className}`} style={{ transform: "translateZ(60px)" }}>
    <span className="chip-in" style={{ "--enter": `${enter}ms` } as CSSProperties}>
      <span
        className="float inline-flex items-center gap-2 rounded-full border border-line bg-surface/85 px-3 py-1.5 font-mono text-xs text-ink shadow-lg shadow-black/30 backdrop-blur-md"
        style={delayStyle(delay)}
      >
        {children}
      </span>
    </span>
  </span>
);

/**
 * Canvas grid of dots that gently waves, brightens and parts around the cursor,
 * and sends out a ripple wherever you click.
 */
export const DotField = ({ className = "" }: { className?: string }) => {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const still = prefersReducedMotion();
    const gap = 26;
    const radius = 170;
    let width = 0;
    let height = 0;
    let frame = 0;
    let visible = true;
    const mouse = { x: -1e4, y: -1e4, tx: -1e4, ty: -1e4 };
    const ripples: { x: number; y: number; t: number }[] = [];

    const draw = (time: number) => {
      ctx.clearRect(0, 0, width, height);
      mouse.x += (mouse.tx - mouse.x) * 0.14;
      mouse.y += (mouse.ty - mouse.y) * 0.14;
      while (ripples.length && time - ripples[0].t > 1800) ripples.shift();

      for (let y = gap / 2; y < height; y += gap) {
        for (let x = gap / 2; x < width; x += gap) {
          const wave = still ? 0 : Math.sin(time * 0.0011 + x * 0.011 + y * 0.007);
          const dx = x - mouse.x;
          const dy = y - mouse.y;
          const dist = Math.hypot(dx, dy) || 1;
          let glow = Math.max(0, 1 - dist / radius);
          let ox = (dx / dist) * glow * glow * 16;
          let oy = (dy / dist) * glow * glow * 16;

          for (const ripple of ripples) {
            const age = time - ripple.t;
            const rx = x - ripple.x;
            const ry = y - ripple.y;
            const rd = Math.hypot(rx, ry) || 1;
            const band = Math.max(0, 1 - Math.abs(rd - age * 0.6) / 50) * (1 - age / 1800);
            glow = Math.max(glow, band);
            ox += (rx / rd) * band * 10;
            oy += (ry / rd) * band * 10;
          }

          const alpha = 0.12 + wave * 0.05 + glow * 0.75;
          ctx.fillStyle = glow > 0.03 ? `rgba(103, 232, 208, ${alpha})` : `rgba(148, 163, 184, ${alpha})`;
          ctx.beginPath();
          ctx.arc(x + ox, y + oy, 1 + glow * 1.6 + wave * 0.2, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      if (still) draw(0);
    };

    const loop = (time: number) => {
      if (visible && !document.hidden) draw(time);
      frame = requestAnimationFrame(loop);
    };

    const onMove = (e: globalThis.PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.tx = e.clientX - rect.left;
      mouse.ty = e.clientY - rect.top;
      if (mouse.x < -1000) {
        mouse.x = mouse.tx;
        mouse.y = mouse.ty;
      }
    };
    const onLeave = () => {
      mouse.tx = mouse.ty = -1e4;
    };
    const onDown = (e: globalThis.PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      if (x >= 0 && y >= 0 && x <= width && y <= height) ripples.push({ x, y, t: performance.now() });
    };

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(canvas);
    const visibility = new IntersectionObserver(([entry]) => (visible = entry.isIntersecting));
    visibility.observe(canvas);
    resize();

    if (!still) {
      frame = requestAnimationFrame(loop);
      window.addEventListener("pointermove", onMove);
      window.addEventListener("pointerdown", onDown);
      document.documentElement.addEventListener("pointerleave", onLeave);
    }

    return () => {
      cancelAnimationFrame(frame);
      resizeObserver.disconnect();
      visibility.disconnect();
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerdown", onDown);
      document.documentElement.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return <canvas ref={ref} aria-hidden="true" className={`pointer-events-none ${className}`} />;
};
