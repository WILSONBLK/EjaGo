"use client";

import Nav from "./components/Nav";
import RegisterSection from "./components/RegisterSection";

export default function Home() {
  return (
    <>
      <Nav />

      {/* HERO */}
      <section className="relative flex min-h-screen flex-col justify-end overflow-hidden px-[52px] pb-[88px] max-md:px-[18px] max-md:pt-[110px]">
        {/* Background rings + glow */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute right-[-120px] top-1/2 h-[600px] w-[600px] -translate-y-1/2 rounded-full border border-[rgba(11,93,59,0.13)] animate-[pr_6s_ease-in-out_infinite]" />
          <div className="absolute right-[-230px] top-1/2 h-[820px] w-[820px] -translate-y-1/2 rounded-full border border-[rgba(11,93,59,0.07)] animate-[pr_6s_ease-in-out_1.8s_infinite]" />
          <div className="absolute right-[-340px] top-1/2 h-[1040px] w-[1040px] -translate-y-1/2 rounded-full border border-[rgba(11,93,59,0.04)] animate-[pr_6s_ease-in-out_3.6s_infinite]" />
          <div className="absolute right-[-80px] top-1/2 h-[700px] w-[700px] -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(11,93,59,0.2)_0%,transparent_65%)]" />
        </div>

        <div className="a1 mb-6 text-[0.56rem] font-bold uppercase tracking-[0.55em] text-[color:var(--g)]">
          Premium Mobility — Nigeria
        </div>

        <h1 className="a2 max-w-[860px] font-serif text-[clamp(3.2rem,7.5vw,7rem)] font-bold leading-[0.91] tracking-[-0.025em]">
          Freedom
          <br />
          <em className="italic text-[color:var(--g)]">on the Go.</em>
        </h1>

        <p className="a3 mt-7 max-w-[460px] text-[0.8rem] font-light leading-[2] tracking-[0.05em] text-[color:var(--muted)]">
          Stop wasting money on transport.
          <br />
          <strong className="font-semibold text-[color:var(--off)]">
            Own a premium bike
          </strong>{" "}
          — move freely, move smart,
          <br />
          move on your own terms.
        </p>

        <div className="a4 mt-10 flex flex-wrap items-center gap-[14px]">
          <button
            className="btn solid bg-[color:var(--g)] px-[34px] py-4 text-[0.6rem] font-bold uppercase tracking-[0.35em] text-white transition-all hover:-translate-y-[2px] hover:bg-[color:var(--g2)]"
            onClick={() =>
              document
                .getElementById("register")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Get Early Access
          </button>

          <button
            className="btn outline border border-[#252525] bg-transparent px-[34px] py-4 text-[0.6rem] font-bold uppercase tracking-[0.35em] text-[color:var(--muted)] transition-colors hover:border-[#555555] hover:text-[color:var(--off)]"
            onClick={() =>
              document
                .getElementById("bikes")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            See the Bikes ↓
          </button>
        </div>

        <div className="a5 mt-[52px] flex items-center gap-[14px]">
          <div className="h-px w-10 bg-[color:var(--g)]" />
          <div className="text-[0.52rem] font-semibold uppercase tracking-[0.4em] text-[color:var(--muted)]">
            Scroll to explore
          </div>
        </div>
      </section>

      <hr className="border-0 border-t border-[color:var(--line)] mx-[52px] max-md:mx-[18px]" />

      {/* WHY EJAGO */}
      <section
        id="about"
        className="mx-auto max-w-[1160px] px-[52px] py-[110px] max-md:px-[18px]"
      >
        <div className="mb-4 text-[0.56rem] font-bold uppercase tracking-[0.55em] text-[color:var(--g)]">
          Why EjaGo
        </div>

        <h2 className="sec-h mb-[14px] font-serif text-[clamp(2rem,4.5vw,3.6rem)] font-bold leading-[1.02]">
          Not just a bike.
          <br />
          <em className="italic text-[color:var(--g)]">A better life.</em>
        </h2>

        <p className="sec-sub mb-[52px] max-w-[500px] text-[0.74rem] font-light leading-[2] tracking-[0.05em] text-[color:var(--muted)]">
          Transport stress is real. The cost is real. EjaGo gives you a way out
          — a premium, affordable bike that pays for itself in the money you
          stop wasting on fares.
        </p>

        <div className="grid grid-cols-3 gap-[2px] max-md:grid-cols-1">
          {[
            {
              num: "01",
              title: "Move Freely",
              desc: "No more waiting for okada. No more overcrowded buses. No more depending on anyone. Get up and go — on your own schedule, your own terms.",
            },
            {
              num: "02",
              title: "Save Money",
              desc: "The average Nigerian spends thousands every week on transport. Your EjaGo bike pays for itself within months — and keeps saving you money every single day after that.",
            },
            {
              num: "03",
              title: "Earn If You Want",
              desc: "Your bike can work for you too. Complete deliveries when you want extra income. No pressure — fully optional. Your bike, your choice.",
            },
          ].map((item) => (
            <div
              key={item.num}
              className="relative overflow-hidden bg-[color:var(--ink2)] px-8 py-10 transition-colors hover:bg-[color:var(--ink3)]"
            >
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[3px] origin-left scale-x-0 bg-[color:var(--g)] transition-transform duration-300 hover:scale-x-100" />
              <div className="mb-6 font-serif text-[3.5rem] font-bold leading-none text-[#1a1a1a]">
                {item.num}
              </div>
              <div className="mb-3 text-[0.72rem] font-bold uppercase tracking-[0.18em] text-[color:var(--off)]">
                {item.title}
              </div>
              <div className="text-[0.7rem] font-light leading-[2] tracking-[0.04em] text-[color:var(--muted)]">
                {item.desc}
              </div>
            </div>
          ))}
        </div>
      </section>

      <hr className="border-0 border-t border-[color:var(--line)] mx-[52px] max-md:mx-[18px]" />

      {/* BIKES */}
      <section
        id="bikes"
        className="border-y border-[color:var(--line)] bg-[#090909] px-[52px] py-[110px] max-md:px-[18px]"
      >
        <div className="mx-auto max-w-[1160px]">
          <div className="mb-4 text-[0.56rem] font-bold uppercase tracking-[0.55em] text-[color:var(--g)]">
            The Lineup
          </div>

          <h2 className="sec-h mb-[14px] font-serif text-[clamp(2rem,4.5vw,3.6rem)] font-bold leading-[1.02]">
            Built to <em className="italic text-[color:var(--g)]">move.</em>
          </h2>

          <p className="mb-[52px] max-w-[500px] text-[0.74rem] font-light leading-[2] tracking-[0.05em] text-[color:var(--muted)]">
            Every EjaGo bike is designed to feel premium, ride smooth, and last.
            Clean design. Zero compromise.
          </p>

          <div className="grid grid-cols-3 gap-[2px] max-md:grid-cols-1">
            {/* Classic */}
            <div className="overflow-hidden bg-[color:var(--ink2)]">
              <div className="bike-visual flex h-[260px] items-center justify-center bg-[color:var(--ink3)]">
                <div className="relative h-[110px] w-[110px] animate-[spin_8s_linear_infinite] rounded-full border-[3px] border-[color:var(--g)]">
                  <div className="absolute left-1/2 top-1/2 h-[10px] w-[10px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[color:var(--g)]" />
                  {[0, 45, 90, 135].map((deg) => (
                    <div
                      key={deg}
                      className="absolute left-1/2 top-1/2 h-px w-1/2 origin-left bg-[rgba(11,93,59,0.4)]"
                      style={{ transform: `rotate(${deg}deg)` }}
                    />
                  ))}
                </div>
              </div>

              <div className="px-7 pb-8 pt-7">
                <div className="mb-2 text-[0.8rem] font-bold uppercase tracking-[0.15em] text-[color:var(--off)]">
                  EjaGo Classic
                </div>
                <div className="mb-5 text-[0.68rem] font-light leading-[1.9] tracking-[0.04em] text-[color:var(--muted)]">
                  The flagship. Lightweight, smooth, premium finish. Built for
                  daily campus and city movement. Available in Forest Green and
                  Matte Black.
                </div>
                <div className="inline-flex items-center gap-[7px] border border-[rgba(11,93,59,0.35)] px-3 py-[6px] text-[0.52rem] font-bold uppercase tracking-[0.28em] text-[color:var(--g)]">
                  <div className="h-[5px] w-[5px] rounded-full bg-[color:var(--g)]" />
                  Available Now
                </div>
              </div>
            </div>

            {/* Electric */}
            <div className="coming overflow-hidden bg-[color:var(--ink2)] opacity-65">
              <div className="relative flex h-[260px] items-center justify-center bg-[color:var(--ink3)]">
                <div className="absolute right-4 top-4 bg-[rgba(11,93,59,0.9)] px-3 py-[5px] text-[0.48rem] font-bold uppercase tracking-[0.3em] text-white">
                  Coming Soon
                </div>
                <div className="relative h-[110px] w-[110px] animate-[spin_4s_linear_infinite] rounded-full border-[3px] border-[color:var(--g)]">
                  <div className="absolute left-1/2 top-1/2 h-[10px] w-[10px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[color:var(--g)]" />
                  {[0, 45, 90, 135].map((deg) => (
                    <div
                      key={deg}
                      className="absolute left-1/2 top-1/2 h-px w-1/2 origin-left bg-[rgba(11,93,59,0.4)]"
                      style={{ transform: `rotate(${deg}deg)` }}
                    />
                  ))}
                </div>
              </div>

              <div className="px-7 pb-8 pt-7">
                <div className="mb-2 text-[0.8rem] font-bold uppercase tracking-[0.15em] text-[color:var(--off)]">
                  EjaGo Electric
                </div>
                <div className="mb-5 text-[0.68rem] font-light leading-[1.9] tracking-[0.04em] text-[color:var(--muted)]">
                  Zero effort. Full freedom. The EjaGo E-Bike brings electric
                  assist to your daily movement — further, faster, effortlessly.
                </div>
                <div className="inline-flex items-center gap-[7px] border border-[rgba(11,93,59,0.35)] px-3 py-[6px] text-[0.52rem] font-bold uppercase tracking-[0.28em] text-[color:var(--g)]">
                  <div className="h-[5px] w-[5px] rounded-full bg-[color:var(--g)]" />
                  Coming Soon
                </div>
              </div>
            </div>

            {/* Rentals */}
            <div className="coming overflow-hidden bg-[color:var(--ink2)] opacity-65">
              <div className="relative flex h-[260px] items-center justify-center bg-[color:var(--ink3)]">
                <div className="absolute right-4 top-4 bg-[rgba(11,93,59,0.9)] px-3 py-[5px] text-[0.48rem] font-bold uppercase tracking-[0.3em] text-white">
                  Coming Soon
                </div>
                <div className="relative h-[110px] w-[110px] animate-[spin_12s_linear_infinite] rounded-full border-[3px] border-[color:var(--g)] border-dashed">
                  <div className="absolute left-1/2 top-1/2 h-[10px] w-[10px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[color:var(--g)]" />
                  {[0, 90].map((deg) => (
                    <div
                      key={deg}
                      className="absolute left-1/2 top-1/2 h-px w-1/2 origin-left bg-[rgba(11,93,59,0.4)]"
                      style={{ transform: `rotate(${deg}deg)` }}
                    />
                  ))}
                </div>
              </div>

              <div className="px-7 pb-8 pt-7">
                <div className="mb-2 text-[0.8rem] font-bold uppercase tracking-[0.15em] text-[color:var(--off)]">
                  EjaGo Rentals
                </div>
                <div className="mb-5 text-[0.68rem] font-light leading-[1.9] tracking-[0.04em] text-[color:var(--muted)]">
                  Not ready to own? Rent by the day or week. Full EjaGo
                  experience — no long-term commitment required.
                </div>
                <div className="inline-flex items-center gap-[7px] border border-[rgba(11,93,59,0.35)] px-3 py-[6px] text-[0.52rem] font-bold uppercase tracking-[0.28em] text-[color:var(--g)]">
                  <div className="h-[5px] w-[5px] rounded-full bg-[color:var(--g)]" />
                  Coming Soon
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr className="border-0 border-t border-[color:var(--line)] mx-[52px] max-md:mx-[18px]" />

      {/* HOW IT WORKS */}
      <section className="mx-auto max-w-[1160px] px-[52px] py-[110px] max-md:px-[18px]">
        <div className="mb-4 text-[0.56rem] font-bold uppercase tracking-[0.55em] text-[color:var(--g)]">
          How It Works
        </div>
        <h2 className="sec-h mb-[14px] font-serif text-[clamp(2rem,4.5vw,3.6rem)] font-bold leading-[1.02]">
          Simple from
          <br />
          <em className="italic text-[color:var(--g)]">day one.</em>
        </h2>
        <p className="mb-[48px] max-w-[500px] text-[0.74rem] font-light leading-[2] tracking-[0.05em] text-[color:var(--muted)]">
          Register your interest, we reach you on WhatsApp, you choose your
          bike and payment plan — it arrives at your door.
        </p>

        <div className="grid grid-cols-4 border border-[color:var(--line)] max-md:grid-cols-2">
          {[
            {
              n: "01",
              t: "Register",
              d: "Express your interest in under 60 seconds. No payment required at this stage.",
            },
            {
              n: "02",
              t: "We Connect",
              d: "EjaGo reaches you on WhatsApp within 24 hours to discuss your bike and payment plan.",
            },
            {
              n: "03",
              t: "Confirm",
              d: "Pick your bike. Pay upfront or through flexible installments over 1–3 months.",
            },
            {
              n: "04",
              t: "It Arrives",
              d: "Your EjaGo bike is delivered to your door in approximately 2 weeks. Ride free.",
            },
          ].map((s, i) => (
            <div
              key={s.n}
              className={[
                "border-r border-[color:var(--line)] px-[26px] py-9",
                i === 3 && "border-r-0",
                "max-md:border-b max-md:last:border-b-0",
                "max-md:[&:nth-child(even)]:border-r-0",
              ]
                .filter(Boolean)
                .join(" ")}
            >
              <div className="mb-5 font-serif text-[3rem] font-bold leading-none text-[#1c1c1c]">
                {s.n}
              </div>
              <div className="mb-[10px] text-[0.62rem] font-bold uppercase tracking-[0.2em] text-[color:var(--off)]">
                {s.t}
              </div>
              <div className="text-[0.68rem] font-light leading-[1.9] tracking-[0.04em] text-[color:var(--muted)]">
                {s.d}
              </div>
            </div>
          ))}
        </div>
      </section>

      <hr className="border-0 border-t border-[color:var(--line)] mx-[52px] max-md:mx-[18px]" />

      {/* DELIVERY BUSINESS */}
      <section className="mx-auto max-w-[1160px] px-[52px] py-[110px] max-md:px-[18px]">
        <div className="mb-4 text-[0.56rem] font-bold uppercase tracking-[0.55em] text-[color:var(--g)]">
          Delivery & Earning
        </div>
        <h2 className="sec-h mb-[14px] font-serif text-[clamp(2rem,4.5vw,3.6rem)] font-bold leading-[1.02]">
          Your bike.
          <br />
          <em className="italic text-[color:var(--g)]">Your income.</em>
        </h2>
        <p className="mb-[48px] max-w-[500px] text-[0.74rem] font-light leading-[2] tracking-[0.05em] text-[color:var(--muted)]">
          For students and riders who want their bike to do more than just move
          them — EjaGo opens up real earning opportunities on campus and beyond.
        </p>

        <div className="grid grid-cols-2 gap-[2px] max-md:grid-cols-1">
          {[
            {
              icon: "🚴",
              title: "Campus Delivery Rider",
              desc: "Join EjaGo's campus delivery network. Get jobs sent to you on WhatsApp. Complete deliveries on your schedule. Earn flat pay per job — no boss, no fixed hours.",
              tag: "Earn Per Delivery",
            },
            {
              icon: "📦",
              title: "Delivery for Businesses",
              desc: "Restaurants, vendors, online sellers — EjaGo riders handle your last-mile campus deliveries fast and cheap. Simple WhatsApp dispatch. No app needed to get started.",
              tag: "For Campus Businesses",
            },
            {
              icon: "🏢",
              title: "Platform Partnerships",
              desc: "Already running on Uber Bike, Bolt, or another platform? EjaGo bikes are built for exactly this. Durable, reliable, and affordable enough to make the numbers work.",
              tag: "Uber · Bolt · More",
            },
            {
              icon: "💰",
              title: "Your Bike Pays You Back",
              desc: "Between your transport savings and what you earn from deliveries, your EjaGo bike stops being an expense and starts being an asset. That is the EjaGo model.",
              tag: "Freedom + Income",
            },
          ].map((c) => (
            <div
              key={c.title}
              className="relative overflow-hidden border border-transparent bg-[color:var(--ink2)] px-9 py-10 transition-colors hover:border-[rgba(11,93,59,0.3)] hover:bg-[color:var(--ink3)]"
            >
              <div className="absolute left-0 top-0 h-full w-[3px] origin-top scale-y-0 bg-[color:var(--g)] transition-transform duration-300 hover:scale-y-100" />
              <div className="mb-5 text-[2rem]">{c.icon}</div>
              <div className="mb-3 text-[0.72rem] font-bold uppercase tracking-[0.18em] text-[color:var(--off)]">
                {c.title}
              </div>
              <div className="text-[0.7rem] font-light leading-[2] tracking-[0.04em] text-[color:var(--muted)]">
                {c.desc}
              </div>
              <div className="mt-5 inline-flex items-center gap-[7px] border border-[rgba(11,93,59,0.35)] px-3 py-[6px] text-[0.52rem] font-bold uppercase tracking-[0.28em] text-[color:var(--g)]">
                {c.tag}
              </div>
            </div>
          ))}
        </div>
      </section>

      <hr className="border-0 border-t border-[color:var(--line)] mx-[52px] max-md:mx-[18px]" />

      {/* BATCH / BUSINESS */}
      <section className="mx-auto max-w-[1160px] px-[52px] pb-[110px] max-md:px-[18px]">
        <div className="grid overflow-hidden border border-[color:var(--line)] bg-[color:var(--ink2)] grid-cols-2 max-md:grid-cols-1">
          <div className="border-r border-[color:var(--line)] px-12 py-[52px] max-md:border-r-0 max-md:border-b">
            <div className="mb-4 text-[0.56rem] font-bold uppercase tracking-[0.5em] text-[color:var(--g)]">
              For Teams & Businesses
            </div>
            <h3 className="mb-4 font-serif text-[clamp(1.6rem,3vw,2.6rem)] font-bold leading-[1.05]">
              Need more
              <br />
              than one?
              <br />
              <em className="italic text-[color:var(--g)]">We handle it.</em>
            </h3>
            <p className="mb-7 text-[0.7rem] font-light leading-[2] tracking-[0.05em] text-[color:var(--muted)]">
              Outfitting a delivery operation, a logistics team, or a fleet for
              your business? EjaGo handles batch orders with dedicated support
              and pricing.
            </p>
            <div className="flex flex-col gap-3">
              {[
                "Delivery businesses — build your fleet on EjaGo bikes",
                "Logistics partners — bulk orders with custom configuration",
                "Campus vendors — equip your team for fast, cheap movement",
                "Ride platforms — Uber Bike, Bolt, and more — talk to us",
              ].map((text) => (
                <div key={text} className="flex items-start gap-3">
                  <div className="mt-[6px] h-[6px] w-[6px] flex-shrink-0 rounded-full bg-[color:var(--g)]" />
                  <div className="text-[0.68rem] font-light leading-[1.8] tracking-[0.04em] text-[color:var(--muted)]">
                    <strong className="font-semibold text-[color:var(--off)]">
                      {text.split(" — ")[0]}
                    </strong>{" "}
                    — {text.split(" — ")[1]}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col justify-center gap-6 bg-[rgba(11,93,59,0.04)] px-12 py-[52px]">
            {[
              { n: "5+", l: "Minimum batch order" },
              { n: "~2wks", l: "Delivery turnaround" },
              { n: "Custom", l: "Pricing for bulk orders" },
            ].map((stat) => (
              <div
                key={stat.l}
                className="border-l-2 border-[color:var(--g)] pl-5"
              >
                <div className="font-serif text-[2.4rem] font-bold text-[color:var(--g)] leading-none">
                  {stat.n}
                </div>
                <div className="mt-1 text-[0.56rem] font-semibold uppercase tracking-[0.3em] text-[color:var(--muted)]">
                  {stat.l}
                </div>
              </div>
            ))}

            <a
              href="https://wa.me/+2347055946707?text=Hi%20EjaGo%2C%20I%27m%20interested%20in%20a%20batch%20order."
              target="_blank"
              rel="noreferrer"
              className="mt-2 block bg-[color:var(--g)] px-[34px] py-4 text-center text-[0.6rem] font-bold uppercase tracking-[0.35em] text-white transition-all hover:-translate-y-[2px] hover:bg-[color:var(--g2)]"
            >
              Enquire on WhatsApp
            </a>
          </div>
        </div>
      </section>

      <hr className="border-0 border-t border-[color:var(--line)] mx-[52px] max-md:mx-[18px]" />

      {/* REGISTER */}
      <RegisterSection />

      {/* FOOTER */}
      <footer className="flex items-center justify-between border-t border-[color:var(--line)] px-[52px] py-12 max-md:flex-col max-md:gap-5 max-md:text-center max-md:px-[18px]">
        <img
          src="/logo.png"
          alt="EjaGo"
          className="h-8 w-auto"
        />
        <div className="text-right text-[0.57rem] font-light leading-[2.2] tracking-[0.17em] text-[#2a2a2a] max-md:text-center">
          Freedom on the Go. Earn as You Go.
          <br />
          <a
            href="https://wa.me/+2347055946707"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-[6px] text-[0.57rem] font-bold uppercase tracking-[0.18em] text-[color:var(--g)] hover:opacity-75"
          >
            💬 +234 705 594 6707
          </a>
          <br />
          <span>ejago.ng &nbsp;·&nbsp; © 2025 EjaGo. All rights reserved.</span>
        </div>
      </footer>
    </>
  );
}