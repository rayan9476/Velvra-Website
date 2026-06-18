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
import { Skeleton } from "boneyard-js/react";
import { useEffect, useState } from "react";

export default function Home() {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);
  return (
    <>
      <Skeleton name="home-page" loading={isLoading} error={null}>
        <SearchBar />

        <HeroCarousel />

        <NewArrival />
        <BrandsSection />
        <Collections />

        <JustForYou />
        <TrendingTags />
        <VelvraSection />
        <FollowUsSection />
      </Skeleton>
    </>
  );
}
