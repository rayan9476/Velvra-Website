"use client";
import SearchBar from "./components/SearchBar";
import HeroCarousel from "./components/HeroCarousel";
import NewArrival from "./components/NewArrival";
import BrandsSection from "./components/BrandsSection";
import Collections from "./components/Collections";
import JustForYou from "./components/JustForYou";
import TrendingTags from "./components/TrendingTags";
import VelvraSection from "./components/VelvraSection";
import FollowUsSection from "./components/FollowUsSection";

export default function Home() {
  return (
    <>
      <SearchBar />

      <main>
        <HeroCarousel />

        <NewArrival />
        <BrandsSection />
        <Collections />

        <JustForYou />
        <TrendingTags />
        <VelvraSection />
        <FollowUsSection />
      </main>
    </>
  );
}
