import { renderShareImage, shareImageContentType, shareImageSize } from "@/lib/share-image";

export const alt = "Thyssen Digital : création de sites internet pour artisans et TPE des Hauts-de-France";
export const size = shareImageSize;
export const contentType = shareImageContentType;

export default function Image() {
  return renderShareImage({
    title: "Création de sites internet pour les artisans et TPE des Hauts-de-France",
    subtitle: "Dès 990 € · Devis gratuit",
  });
}
