import Image from "next/image";

export default function Hero() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center gap-4 px-6 text-center">
      <Image
        src="/foto.jpg"
        alt="Muhammad Nizar Hasdian"
        width={160}
        height={160}
        priority
        className="h-40 w-40 rounded-full object-cover"
      />

      <h1 className="text-3xl font-bold">Muhammad Nizar Hasdian</h1>

      <p className="text-lg text-zinc-300">Data Analyst & Business Analyst</p>

      <p className="max-w-md text-zinc-400">
        To me, data is a tool for finding insights that support better business decisions.
      </p>

      <div className="mt-2 flex gap-3">
        <a
          href="#contact"
          className="rounded-full bg-white px-5 py-2 font-medium text-zinc-900"
        >
          Get in touch
        </a>
        <a
          href="/cv.pdf"
          target="_blank"
          className="rounded-full border border-zinc-600 px-5 py-2"
        >
          View my CV
        </a>
      </div>
    </section>
  );
}