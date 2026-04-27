export function highlightText(text, keywords = []) {
  if (!text || keywords.length === 0) return text;

  const escaped = keywords.map((k) => k.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
  const splitRegex = new RegExp(`(${escaped.join("|")})`, "gi");
  const testRegex = new RegExp(`^(${escaped.join("|")})$`, "i");

  return text.split(splitRegex).map((part, i) =>
    testRegex.test(part) ? (
      <span key={i} className="text-[#DD8560]">
        {part}
      </span>
    ) : (
      part
    ),
  );
}
