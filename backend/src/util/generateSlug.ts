export function generateSlug(text: string): string {
  return text
    .toString()                   // Convert to string
    .normalize("NFKD")            // Normalize accents
    .toLowerCase()                // Convert to lowercase
    .trim()                       // Remove whitespace at start/end
    .replace(/[\u0300-\u036f]/g, "") // Remove diacritics
    .replace(/[^a-z0-9 -]/g, "")  // Remove invalid chars
    .replace(/\s+/g, "-")         // Replace whitespace with -
    .replace(/-+/g, "-");         // Replace multiple - with single -
}
