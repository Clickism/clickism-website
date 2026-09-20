import Image from "next/image";

/**
 * Record of custom icons
 */
export const customIcons = {
  clickism: icon("clickism.png"),
  clickvillagers: icon("clickvillagers.webp"),
  clickmobs: icon("clickmobs.webp"),
  clicksigns: icon("clicksigns.webp"),
  clickui: icon("clickuisign.png")
};

/**
 * Creates a new image for the given relative path
 * @param path path to the image from /public/icons
 */
function icon(path: string) {
  return <Image src={`/icons/${path}`} alt="icon" width={22} height={22} />;
}
