import { renderShareImage, shareImageContentType, shareImageSize } from "@/lib/share-image";

export const alt = "Tarifs Thyssen Digital : sites internet dès 990 €, maintenance dès 349 € par an";
export const size = shareImageSize;
export const contentType = shareImageContentType;

export default function Image() {
  return renderShareImage({
    title: "Des tarifs clairs, sans surprise.",
    subtitle: "Sites dès 990 € · Maintenance dès 349 €/an",
  });
}
