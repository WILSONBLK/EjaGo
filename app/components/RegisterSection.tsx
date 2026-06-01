"use client";

import { useMemo, useState } from "react";

type Interest = "buy" | "ride" | "business";

const INTEREST_LABELS: Record<Interest, string> = {
  buy: "buy a bike on installments",
  ride: "ride and earn with deliveries",
  business: "batch/business order",
};

export default function RegisterSection() {
  const [interest, setInterest] = useState<Interest>("buy");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const waLink = useMemo(() => {
    const msg = `Hi EjaGo! My name is ${name}. I am interested in: ${INTEREST_LABELS[interest]}. My WhatsApp: ${phone}`;
    return `https://wa.me/+2347055946707?text=${encodeURIComponent(msg)}`;
  }, [interest, name, phone]);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      document
        .getElementById("sbox")
        ?.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }, 50);
  }

  return (
    <section
      id="register"
      className="border-t border-[color:var(--line)] bg-[color:var(--surface)] px-[52px] py-[110px] max-md:px-[18px]"
    >
      <div className="mx-auto max-w-[1160px]">
        <div className="grid grid-cols-[1fr_1fr] gap-[80px] items-start max-md:grid-cols-1">
          {/* LEFT ASIDE */}
          <aside className="sticky top-[100px] max-md:static">
            <div className="sec-label text-[0.56rem] font-bold tracking-[0.55em] uppercase text-[color:var(--g)] mb-4">
              Get Early Access
            </div>

            <h2 className="font-serif text-[clamp(1.8rem,3.5vw,3rem)] font-bold leading-[1.05] mb-4">
              <em className="italic text-[color:var(--g)]">Be first.</em>
              <br />
              Not second.
            </h2>

            <p className="text-[0.72rem] font-light text-[color:var(--muted)] tracking-[0.05em] leading-[2] mb-7">
              Register your interest. No payment required. EjaGo will reach you
              on WhatsApp personally to discuss your bike and next steps.
            </p>

            <div className="flex items-center gap-[14px] border border-[color:var(--line)] px-5 py-[18px] transition-colors hover:border-[color:var(--g)]">
              <div className="text-[1.4rem]">💬</div>
              <div>
                <a
                  href="https://wa.me/+2347055946707"
                  target="_blank"
                  rel="noreferrer"
                  className="block text-[0.62rem] font-bold tracking-[0.18em] uppercase text-[color:var(--g)]"
                >
                  Chat us directly on WhatsApp
                </a>
                <span className="mt-[2px] block text-[0.54rem] font-light tracking-[0.1em] uppercase text-[color:var(--muted)]">
                  +234 705 594 6707 · We reply fast
                </span>
              </div>
            </div>
          </aside>

          {/* RIGHT SIDE */}
          <div>
            {!submitted && (
              <>
                {/* INTEREST BUTTONS */}
                <div className="flex flex-col gap-[2px] mb-5">
                  <InterestButton
                    active={interest === "buy"}
                    icon="🔑"
                    title="I want to buy a bike"
                    desc="Own an EjaGo on flexible installments"
                    onClick={() => setInterest("buy")}
                  />

                  <InterestButton
                    active={interest === "ride"}
                    icon="🚴"
                    title="I want to ride and earn"
                    desc="Use my bike for deliveries and income"
                    onClick={() => setInterest("ride")}
                  />

                  <InterestButton
                    active={interest === "business"}
                    icon="📦"
                    title="I need bikes for my business"
                    desc="Batch order for a team or operation"
                    onClick={() => setInterest("business")}
                  />
                </div>

                {/* FORM */}
                <form
                  id="reg-form"
                  onSubmit={onSubmit}
                  className="flex flex-col gap-[13px]"
                >
                  <div className="grid grid-cols-2 gap-[12px] max-md:grid-cols-1">
                    <div className="flex flex-col gap-[6px]">
                      <label
                        htmlFor="fname"
                        className="text-[0.52rem] font-bold tracking-[0.28em] uppercase text-[color:var(--muted)]"
                      >
                        Full Name
                      </label>
                      <input
                        id="fname"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Your name"
                        required
                        className="w-full bg-[color:var(--surface)] border border-[color:var(--border)] px-[14px] py-[13px] text-[0.8rem] font-light text-[color:var(--text)] outline-none transition-colors focus:border-[color:var(--g)] placeholder:text-[color:var(--muted)]"
                      />
                    </div>

                    <div className="flex flex-col gap-[6px]">
                      <label
                        htmlFor="fphone"
                        className="text-[0.52rem] font-bold tracking-[0.28em] uppercase text-[color:var(--muted)]"
                      >
                        WhatsApp Number
                      </label>
                      <input
                        id="fphone"
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+234 800 000 0000"
                        required
                        className="w-full bg-[color:var(--surface)] border border-[color:var(--border)] px-[14px] py-[13px] text-[0.8rem] font-light text-[color:var(--text)] outline-none transition-colors focus:border-[color:var(--g)] placeholder:text-[color:var(--muted)]"
                      />
                    </div>
                  </div>

                  <p className="border-l-2 border-[color:var(--g)] pl-3 text-[0.6rem] font-light leading-[1.8] tracking-[0.05em] text-[color:var(--muted)]">
                    No payment required. EjaGo will reach you on WhatsApp within
                    24 hours to personally discuss your interest and next steps.
                  </p>

                  <button
                    type="submit"
                    className="mt-1 w-full bg-[color:var(--g)] px-[28px] py-[17px] text-[0.6rem] font-bold tracking-[0.35em] uppercase text-white transition-transform transition-colors hover:bg-[color:var(--g2)] hover:-translate-y-[1px]"
                  >
                    Register — Get Early Access
                  </button>
                </form>
              </>
            )}

            {/* SUCCESS BOX */}
            <div
              id="sbox"
              className={`mt-0 ${
                submitted ? "flex" : "hidden"
              } flex-col gap-4 border border-[color:var(--g)] bg-[rgba(11,93,59,0.06)] p-8`}
            >
              <div className="text-[1.6rem]">✓</div>
              <div className="text-[0.85rem] font-bold tracking-[0.2em] uppercase">
                You&apos;re registered.
              </div>
              <div className="text-[0.7rem] font-light leading-[1.9] tracking-[0.05em] text-[color:var(--muted)]">
                EjaGo will reach you on WhatsApp within 24 hours. No payment has
                been taken. Get ready to move different.
              </div>

              <a
                href={waLink}
                target="_blank"
                rel="noreferrer"
                id="wa-link"
                className="mt-1 inline-flex items-center gap-[9px] bg-[color:var(--g)] px-6 py-[14px] text-[0.6rem] font-bold uppercase tracking-[0.3em] text-white transition-colors hover:bg-[color:var(--g2)]"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Open WhatsApp Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/** Small subcomponent for the interest selector buttons */
type InterestButtonProps = {
  active: boolean;
  icon: string;
  title: string;
  desc: string;
  onClick: () => void;
};

function InterestButton({ active, icon, title, desc, onClick }: InterestButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={[
        "flex w-full items-center justify-between bg-[color:var(--ink2)] border border-transparent",
        "px-[18px] py-4 text-left transition-colors",
        "hover:bg-[color:var(--ink3)] hover:border-[color:var(--border)]",
        active && "bg-[color:var(--gdim)] border-[color:var(--g)]",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className="flex items-center gap-3">
        <div className="text-[1.1rem]">{icon}</div>
        <div>
          <span className="block text-[0.63rem] font-bold uppercase tracking-[0.17em] text-[color:var(--off)]">
            {title}
          </span>
          <span className="mt-[2px] block text-[0.58rem] font-light tracking-[0.04em] text-[color:var(--muted)]">
            {desc}
          </span>
        </div>
      </div>
      <div
        className={[
          "text-[0.9rem] transition-colors",
          active ? "text-[color:var(--g)]" : "text-[color:var(--muted)]",
        ].join(" ")}
      >
        →
      </div>
    </button>
  );
}