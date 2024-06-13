"use client";
import { ComponentPropsWithoutRef } from "react";

const placeHolder =
  "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNc8hQAAjMBi4NvWkoAAAAASUVORK5CYII=)";

type Props = { blurPlaceholder?: string } & ComponentPropsWithoutRef<"img">;

export default function Image({
  blurPlaceholder,
  alt,
  className,
  style,
  onLoad,
  ...props
}: Props) {
  const defaultStyles = {
    backgroundSize: "cover",
    backgroundPosition: "50% 50%",
    backgroundRepeat: "no-repeat",
    backgroundImage: blurPlaceholder ? blurPlaceholder : placeHolder,
    ...style,
  };

  return (
    <img
      decoding="async"
      loading="lazy"
      alt={alt}
      style={defaultStyles}
      {...props}
      className={styles.avatar + " " + (className ? className : "")}
      onLoad={(e) => {
        e.currentTarget.style.background = "unset";
        onLoad && onLoad(e);
      }}
    />
  );
}
