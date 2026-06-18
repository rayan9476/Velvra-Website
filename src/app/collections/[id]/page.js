"use client";
import { useParams } from "next/navigation";
import { useEffect } from "react";
import Link from "next/link";
import CollectionHeader from "@/app/components/CollectionHeader";
import ProductCards from "@/app/components/ProductCards";
import DividerSVG from "@/app/components/DividerSVG";
import FadeIn from "@/app/components/FadeIn";
import CollectionsProducts from "@/app/components/CollectionsProducts";
import CollectionsHeroSection from "@/app/components/CollectionsHeroSection";
import { fetchProducts, fetchCollection } from "@/app/lib/services";
import { useDispatch, useSelector } from "react-redux";
import {
  setCollection,
  setError,
  setLoading,
} from "@/app/redux/features/CollectionDetailSlice";

const collectionsData = {
  1: {
    title: "October",
    subtitle: "COLLECTION",
    accentNumber: "10",
    heroImage:
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=900&q=90",
    products: [
      {
        id: 1,
        name: "Silk Draped Midi Dress",
        brand: "VELVRA",
        price: 180,
        oldPrice: 220,
        image:
          "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=600&q=80",
      },
      {
        id: 2,
        name: "Leather Combat Boots",
        brand: "VELVRA",
        price: 245,
        oldPrice: 300,
        image:
          "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=600&q=80",
      },
      {
        id: 3,
        name: "Gold Ring Set",
        brand: "VELVRA",
        price: 85,
        oldPrice: 110,
        image:
          "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&q=80",
      },
      {
        id: 4,
        name: "Pearl Drop Earrings",
        brand: "VELVRA",
        price: 95,
        oldPrice: 120,
        image:
          "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&q=80",
      },
      {
        id: 5,
        name: "Gold Bangle Bracelet",
        brand: "VELVRA",
        price: 120,
        oldPrice: 150,
        image:
          "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&q=80",
      },
      {
        id: 6,
        name: "Diamond Tennis Bracelet",
        brand: "VELVRA",
        price: 340,
        oldPrice: 420,
        image:
          "https://images.unsplash.com/photo-1573408301185-9519f94816b5?w=600&q=80",
      },
    ],
    relatedCollections: [
      {
        id: 2,
        title: "BLACK COLLECTION",
        image:
          "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=600&q=80",
      },
      {
        id: 3,
        title: "HAE BY VELVRA",
        image:
          "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&q=80",
      },
      {
        id: 4,
        title: "BLACK COLLECTION",
        image:
          "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=600&q=80",
      },
      {
        id: 5,
        title: "HAE BY VELVRA",
        image:
          "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&q=80",
      },
    ],
  },
  2: {
    title: "Black",
    subtitle: "COLLECTION",
    accentNumber: "02",
    heroImage:
      "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=900&q=90",
    products: [
      {
        id: 1,
        name: "Black Velvet Gown",
        brand: "VELVRA",
        price: 320,
        oldPrice: 400,
        image:
          "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&q=80",
      },
      {
        id: 2,
        name: "Structured Blazer",
        brand: "VELVRA",
        price: 195,
        oldPrice: 240,
        image:
          "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&q=80",
      },
      {
        id: 3,
        name: "Black Leather Clutch",
        brand: "VELVRA",
        price: 145,
        oldPrice: 180,
        image:
          "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&q=80",
      },
      {
        id: 4,
        name: "Onyx Drop Earrings",
        brand: "VELVRA",
        price: 110,
        oldPrice: 140,
        image:
          "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&q=80",
      },
      {
        id: 5,
        name: "Black Ankle Boots",
        brand: "VELVRA",
        price: 265,
        oldPrice: 320,
        image:
          "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=600&q=80",
      },
      {
        id: 6,
        name: "Silk Slip Dress",
        brand: "VELVRA",
        price: 175,
        oldPrice: 220,
        image:
          "https://images.unsplash.com/photo-1485462537746-965f33f7f6a7?w=600&q=80",
      },
    ],
    relatedCollections: [
      {
        id: 1,
        title: "OCTOBER COLLECTION",
        image:
          "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&q=80",
      },
      {
        id: 3,
        title: "HAE BY VELVRA",
        image:
          "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&q=80",
      },
      {
        id: 4,
        title: "BLACK COLLECTION",
        image:
          "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=600&q=80",
      },
      {
        id: 5,
        title: "HAE BY VELVRA",
        image:
          "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&q=80",
      },
    ],
  },
  3: {
    title: "Hae",
    subtitle: "BY VELVRA",
    accentNumber: "03",
    heroImage:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=900&q=90",
    products: [
      {
        id: 1,
        name: "Ivory Wrap Dress",
        brand: "VELVRA",
        price: 210,
        oldPrice: 260,
        image:
          "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=600&q=80",
      },
      {
        id: 2,
        name: "Camel Wool Coat",
        brand: "VELVRA",
        price: 380,
        oldPrice: 460,
        image:
          "https://images.unsplash.com/photo-1548624313-0396a54c3b9d?w=600&q=80",
      },
      {
        id: 3,
        name: "Gold Chain Necklace",
        brand: "VELVRA",
        price: 130,
        oldPrice: 160,
        image:
          "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&q=80",
      },
      {
        id: 4,
        name: "Suede Shoulder Bag",
        brand: "VELVRA",
        price: 295,
        oldPrice: 360,
        image:
          "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&q=80",
      },
      {
        id: 5,
        name: "Cashmere Turtleneck",
        brand: "VELVRA",
        price: 165,
        oldPrice: 200,
        image:
          "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600&q=80",
      },
      {
        id: 6,
        name: "Nude Strappy Heels",
        brand: "VELVRA",
        price: 185,
        oldPrice: 230,
        image:
          "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=600&q=80",
      },
    ],
    relatedCollections: [
      {
        id: 1,
        title: "OCTOBER COLLECTION",
        image:
          "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&q=80",
      },
      {
        id: 2,
        title: "BLACK COLLECTION",
        image:
          "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=600&q=80",
      },
      {
        id: 4,
        title: "BLACK COLLECTION",
        image:
          "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=600&q=80",
      },
      {
        id: 5,
        title: "HAE BY VELVRA",
        image:
          "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&q=80",
      },
    ],
  },
};

export default function CollectionDetail() {
  const { id } = useParams();

  const dispatch = useDispatch();

  const { wishlist, collection, isLoading, error } = useSelector(
    (state) => state.collectionDetail,
  );

  useEffect(() => {
    const load = async () => {
      try {
        dispatch(setLoading());
        const collection = await fetchCollection(id);

        const allProducts = await fetchProducts();

        const mapped = {
          id: collection.collection.id,
          number: collection.collection.number,
          title: collection.collection.title,
          image: collection.collection.image,
          accent: collection.collection.accent,
          accentNumber: collection.collection.accent_number, // You can enhance this to use different SVGs based on accent
        };

        const shuffled = [...allProducts];

        for (let i = shuffled.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }

        const randomProducts = shuffled.slice(0, 6);

        dispatch(
          setCollection({
            ...mapped,
            products: randomProducts,
            // Show only first 6 products for now
            relatedCollections: randomProducts.slice(0, 4),
          }),
        );
      } catch (err) {
        dispatch(
          setError(err.response?.data?.message || "Something went wrong"),
        );
      }
    };

    load();
  }, [id]);

  if (isLoading) return <p>...loading</p>;
  if (error) return <p>...error</p>;

  return (
    <div className="bg-[#0A0A0A] min-h-screen px-2.5 md:px-4 lg:px-5  pt-4 md:pt-5 lg:pt-6 xl:pt-7 2xl:pt-8 3xl:pt-10  ">
      <div className="w-full">
        {/* Header */}
        <CollectionHeader title={"Velvra"} subtitle={"Collection"} />

        {/* Hero section*/}
        <CollectionsHeroSection collection={collection} />

        {/* Divider */}
        <div className="h-[1px] bg-[#2A2A2A] mx-4 my-6 md:my-8" />

        {/* Products Grid */}
        <div className="px-3 md:px-4">
          <CollectionsProducts collection={collection} wishlist={wishlist} />
        </div>

        {/* You May Also Like */}
        <div className="px-4 mt-14 md:mt-20">
          <FadeIn>
            <div className="flex flex-col items-center mb-8 md:mb-10">
              <h2 className="flex flex-col items-center justify-center  font-[Tenor_Sans] text-[24px]  md:text-[32px] lg:text-[38px] xl:text-[44px] 2xl:text-[64px] 3xl:text-[66px]  font-normal text-[#F5F0E8] leading-[34.5px] md:leading-[50.5px]  lg:leading-[55.5px]  xl:leading-[60.5px] 2xl:leading-[70.5px] 3xl:leading-[90.5px]  tracking-[5px] uppercase text-center">
                You May Also Like
              </h2>

              <DividerSVG
                className="w-[7rem] md:w-[8rem] lg:w-[9rem] xl:w-[10rem] 2xl:w-[18rem]"
                fill={"#C9A84C"}
              />
            </div>
          </FadeIn>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5 lg:gap-6">
            {collection.relatedCollections.map((related, index) => (
              <FadeIn key={related.id} delay={index * 100}>
                <Link href={`/products/${related.id}`}>
                  <ProductCards {...related} infoget={false} />
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* Bottom padding */}
        <div className="pb-16 md:pb-24" />
      </div>
    </div>
  );
}
