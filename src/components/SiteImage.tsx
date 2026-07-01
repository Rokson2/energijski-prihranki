import Image from 'next/image';

interface Props {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}

export default function SiteImage({ src, alt, className = '', priority = false }: Props) {
  return (
    <div className={`relative overflow-hidden rounded-2xl ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="object-cover"
        priority={priority}
        loading={priority ? undefined : 'lazy'}
      />
    </div>
  );
}
