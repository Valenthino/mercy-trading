/**
 * Plain <img> wrapper. We use a regular img (not next/image) because the site
 * is statically exported with unoptimized images — this keeps things simple and
 * portable to any static host.
 */
export function PageImage({
  src,
  alt,
  className = "",
  priority = false,
}: {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      className={className}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
    />
  );
}
