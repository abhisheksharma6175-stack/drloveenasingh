import Image from "next/image";
import Link from "next/link";

interface PageBannerProps {
  title: string;
  imageSrc: string;
  eyebrow?: string;
}

export function PageBanner({ title, imageSrc, eyebrow = title }: PageBannerProps) {
  return (
    <section
      aria-labelledby="page-banner-heading"
      className="relative h-[360px] overflow-hidden sm:h-[420px] lg:h-[470px]"
    >
      <Image
        src={imageSrc}
        alt={`${title} page banner`}
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      <div aria-hidden="true" className="absolute inset-0 bg-slate-900/55" />
      <div aria-hidden="true" className="absolute inset-0 bg-blue-900/20" />

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center sm:px-6">
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-blue-100 sm:text-sm">
          {eyebrow}
        </p>
        <h1
          id="page-banner-heading"
          className="mb-4 text-3xl font-bold tracking-tight text-white drop-shadow-md sm:text-4xl lg:text-5xl"
        >
          {title}
        </h1>

        <nav aria-label="Breadcrumb">
          <ol className="flex items-center gap-2 text-sm sm:text-base">
            <li>
              <Link
                href="/"
                className="flex items-center gap-1.5 font-medium text-white/90 transition hover:text-white"
              >
                <svg
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-4 w-4 shrink-0"
                  aria-hidden="true"
                >
                  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                </svg>
                Home
              </Link>
            </li>

            <li aria-hidden="true">
              <svg
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-4 w-4 text-blue-300"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </li>

            <li>
              <span className="font-semibold text-blue-300">{title}</span>
            </li>
          </ol>
        </nav>
      </div>

      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-slate-50/25 to-transparent"
      />
    </section>
  );
}
