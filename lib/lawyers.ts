export type Lawyer = {
  name?: string | null;
  image?: string | null;
  position?: string | null;
  specialization?: string | null;
  about?: string | null;
  linkedin?: string | null;
  facebook?: string | null;
};

function text(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

function websiteUrl(value: unknown): string {
  const url = text(value);
  if (!url) return "";

  try {
    const parsed = new URL(url);
    return parsed.protocol === "https:" || parsed.protocol === "http:"
      ? parsed.href
      : "";
  } catch {
    return "";
  }
}

export function getLawyerProfile(lawyer?: Lawyer | null) {
  const image = text(lawyer?.image);
  const isLocalImage = image.startsWith("/") && !image.startsWith("//") && !image.includes("\\");

  return {
    name: text(lawyer?.name) || "Team member",
    image: isLocalImage ? image : websiteUrl(image),
    position: text(lawyer?.position),
    specialization: text(lawyer?.specialization),
    about: text(lawyer?.about),
    linkedin: websiteUrl(lawyer?.linkedin),
    facebook: websiteUrl(lawyer?.facebook),
  };
}
