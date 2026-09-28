import Image from "next/image";

export default function Home() {
  return (
    <main className="relative flex min-h-dvh flex-col overflow-hidden text-foreground">
      <Image
        src="/bg.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="animate-slow-zoom object-cover"
      />
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(8,12,20,0.78) 0%, rgba(8,12,20,0.68) 45%, rgba(8,12,20,0.82) 100%)",
        }}
      />

      <div className="relative z-10 flex min-h-dvh flex-col items-center px-6 py-10 sm:px-8 sm:py-12">
        <header className="animate-fade-in flex w-full justify-center pt-2 sm:pt-4">
          <Image
            src="/logo-white.png"
            alt="Eastbound"
            width={220}
            height={48}
            priority
            className="h-auto w-[160px] sm:w-[200px]"
          />
        </header>

        <section className="flex flex-1 flex-col items-center justify-center text-center">
          <p
            className="animate-fade-up text-[11px] font-medium uppercase tracking-[0.28em] text-foreground sm:text-xs"
            style={{ animationDelay: "120ms" }}
          >
            Eastbound Group
          </p>

          <div
            aria-hidden
            className="animate-draw-line mt-5 h-px w-10 bg-accent sm:mt-6"
            style={{ animationDelay: "320ms" }}
          />

          <h1
            className="animate-fade-up mt-7 font-serif text-[2.75rem] font-normal leading-none tracking-tight text-foreground sm:mt-8 sm:text-6xl md:text-7xl"
            style={{ animationDelay: "280ms" }}
          >
            Arriving soon
          </h1>

          <p
            className="animate-fade-up mt-6 max-w-[34rem] text-base font-light leading-relaxed text-muted sm:mt-7 sm:text-lg"
            style={{ animationDelay: "440ms" }}
          >
            From luxury FITs and incentive travel to photography, culinary tours
            and educational trips, Eastbound designs classic, seamless and
            signature travel experiences across India, Nepal, Bhutan, Sri Lanka
            and the UAE for tour operators, travel agents, wholesalers globally.
          </p>
        </section>

        <footer
          className="animate-fade-in pb-2 text-center text-[10px] font-medium uppercase tracking-[0.22em] text-muted sm:pb-4 sm:text-[11px]"
          style={{ animationDelay: "700ms" }}
        >
          Eastbound · Timeless Expeditions Across Five Countries
        </footer>
      </div>
    </main>
  );
}
