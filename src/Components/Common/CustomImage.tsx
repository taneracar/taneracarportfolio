import Image from "next/image";

type TImageComponent = {
  src?: string;
  srcStatic?: string;
  alt: string;
  className?: string;
  quality?: number;
  priority?: boolean;
  fill?: boolean;
  width?: number;
  height?: number;
  ref?: React.Ref<HTMLImageElement>;
  style?: React.CSSProperties;
};

export default function CustomImage({
  src,
  srcStatic,
  alt,
  className,
  quality = 100,
  priority = false,
  fill = false,
  width = 3880,
  height = 2160,
  ref,
  style,
}: TImageComponent) {
  const fullUrl = srcStatic
    ? `/${srcStatic}`
    : `${process.env.NEXT_PUBLIC_API_URL}${src}`;

  if (!src && !srcStatic) return null;

  return fill ? (
    <Image
      src={fullUrl}
      alt={alt}
      className={className}
      quality={quality}
      priority={priority}
      fill
      ref={ref}
      style={style}
    />
  ) : (
    <Image
      src={fullUrl}
      alt={alt}
      className={className}
      quality={quality}
      priority={priority}
      width={width}
      height={height}
      ref={ref}
      style={style}
    />
  );
}
