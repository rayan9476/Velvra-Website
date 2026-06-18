import Image from "next/image";
import FadeIn from "./FadeIn";

function CollectionsHeroSection({ collection }) {
  console.log("Collection:", collection.title);
  return (
    <FadeIn>
      <figure
        aria-label={collection.title}
        className="relative w-full overflow-hidden"
        aria-hidden="true"
        style={{ height: "clamp(340px, 75vw, 680px)" }}
      >
        <Image
          src={collection.image}
          alt={collection.title}
          fill
          className="object-cover object-top grayscale"
          priority
        />
        {collection.accentNumber && (
          <div
            aria-hidden="true"
            className="absolute bottom-[-15px] right-[-5px] font-[Tenor_Sans] font-normal text-white/10 select-none pointer-events-none leading-none"
            style={{ fontSize: "clamp(100px, 22vw, 220px)" }}
          >
            {collection.accentNumber}
          </div>
        )}
      </figure>
    </FadeIn>
  );
}

export default CollectionsHeroSection;
