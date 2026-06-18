"use client";
import { useRef, useEffect } from "react";
import ImageModal from "@/app/components/ImageModal";
import ProductDetailSwiper from "@/app/components/ProductDetailSwiper";
import YouMayAlsoLike from "@/app/components/YouMayAlsoLike";
import ProductDetailSection from "@/app/components/ProductDetailSection";
import { useParams } from "next/navigation";
import { fetchProduct, fetchProducts } from "@/app/lib/services";
import { Skeleton } from "boneyard-js/react";
import { useDispatch, useSelector } from "react-redux";
import {
  setProducts,
  setRelated,
  setLoading,
  setError,
} from "../../redux/features/ProductDetailSlice";

// const product = {
//   brand: "VELVRA",
//   name: "Luxury Boucle Knit Cardigan Black",
//   price: 120,
//   colors: ["#111111", "#C9A84C", "#9A9A9A"],
//   sizes: ["S", "M", "L", "XL"],
//   images: [
//     "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800",
//     "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800",
//     "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800",
//   ],
//   materials:
//     "We work with monitoring programmes to ensure compliance with safety, health and quality standards for our products. Each piece is crafted with the finest materials sourced ethically from trusted suppliers.",
//   care: "To keep your jackets and coats clean, you only need to freshen them up and go over them with a cloth or a clothes brush. If you need to dry clean a garment, look for a dry cleaner that uses technologies that are respectful of the environment.",
//   careIcons: [
//     {
//       icon: (
//         <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
//           <g opacity="0.5">
//             <path
//               d="M7.65101 11.4464L3.8407 18.5405H19.9806L11.9881 3.54681L8.73526 9.33982"
//               stroke="black"
//             />
//             <path d="M3.77869 6.95447L21.8082 16.0002" stroke="black" />
//           </g>
//         </svg>
//       ),
//       text: "Do not use bleach",
//     },
//     {
//       icon: (
//         <svg
//           width="24"
//           height="24"
//           viewBox="0 0 24 24"
//           fill="none"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <g opacity="0.5">
//             <rect
//               x="4.38623"
//               y="4.48956"
//               width="15"
//               height="15"
//               stroke="black"
//             />
//             <path
//               fill-rule="evenodd"
//               clip-rule="evenodd"
//               d="M20.3549 16.3966L2.24756 7.38008L2.6933 6.48492L20.8006 15.5015L20.3549 16.3966Z"
//               fill="black"
//             />
//             <path
//               fill-rule="evenodd"
//               clip-rule="evenodd"
//               d="M14.845 14.7508C14.1197 15.4898 13.1095 15.9481 11.9922 15.9481C9.78469 15.9481 7.99512 14.1586 7.99512 11.951C7.99512 11.7507 8.00985 11.5538 8.0383 11.3614L7.1064 10.8974C7.0335 11.2371 6.99512 11.5896 6.99512 11.951C6.99512 14.7109 9.2324 16.9481 11.9922 16.9481C13.5047 16.9481 14.8601 16.2763 15.7765 15.2147L14.845 14.7508ZM8.31483 10.382C8.92473 8.95439 10.3416 7.95392 11.9922 7.95392C14.1998 7.95392 15.9893 9.74349 15.9893 11.951C15.9893 12.6751 15.7968 13.3543 15.4601 13.94L16.3567 14.3865C16.7597 13.6659 16.9893 12.8353 16.9893 11.951C16.9893 9.1912 14.7521 6.95392 11.9922 6.95392C9.94954 6.95392 8.19312 8.17955 7.41823 9.93554L8.31483 10.382Z"
//               fill="black"
//             />
//           </g>
//         </svg>
//       ),
//       text: "Do not tumble dry",
//     },
//     {
//       icon: (
//         <svg
//           width="24"
//           height="24"
//           viewBox="0 0 24 24"
//           fill="none"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <g opacity="0.5">
//             <path
//               d="M2.69629 5.23634L4.81603 19.2713H19.108L21.3883 4.78668"
//               stroke="black"
//             />
//             <path
//               d="M8.25888 6.65004C8.29179 7.72475 9.06165 9.87416 11.8778 9.87416C14.694 9.87416 15.6612 7.68087 15.7928 6.58423C16.0012 7.69183 17.4049 9.8873 20.4316 9.80834M3.37659 10.0942C4.01512 10.1514 5.46946 9.8998 6.17853 8.43593"
//               stroke="black"
//             />
//             <path d="M3.19226 2.7464L20.4393 20.3469" stroke="black" />
//           </g>
//         </svg>
//       ),
//       text: "Dry clean with tetrachloroethylene",
//     },
//     {
//       icon: (
//         <svg
//           width="24"
//           height="24"
//           viewBox="0 0 24 24"
//           fill="none"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <g opacity="0.5">
//             <path
//               d="M7.66513 6.05865H14.9542C16.4447 6.05865 19.5971 6.94068 20.2831 10.4688M20.2831 10.4688C20.9691 13.997 20.9773 17.0433 20.8956 18.1254H3.00989C3.1324 15.614 4.68824 10.5913 9.93146 10.5913C15.1747 10.5913 19.0172 10.5097 20.2831 10.4688Z"
//               stroke="black"
//             />
//             <circle cx="12.7492" cy="14.2665" r="0.735026" fill="black" />
//           </g>
//         </svg>
//       ),
//       text: "Iron at a maximum of 110°C / 230°F",
//     },
//   ],
//   relatedProducts: [
//     {
//       id: 1,
//       brand: "VELVRA",
//       name: "Reversible Angora Cardigan",
//       price: 120,
//       image:
//         "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400",
//     },
//     {
//       id: 2,
//       brand: "VELVRA",
//       name: "Wool Turtleneck Sweater",
//       price: 145,
//       image:
//         "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400",
//     },
//     {
//       id: 3,
//       brand: "VELVRA",
//       name: "Cashmere Blend Coat",
//       price: 280,
//       image: "https://images.unsplash.com/photo-1548624313-0396a54c3b9d?w=400",
//     },
//     {
//       id: 4,
//       brand: "VELVRA",
//       name: "Silk Draped Blouse",
//       price: 95,
//       image:
//         "https://images.unsplash.com/photo-1485462537746-965f33f7f6a7?w=400",
//     },
//   ],
// };

export default function ProductDetail() {
  const dispatch = useDispatch();

  const { activeImg, product, related, isLoading, error } = useSelector(
    (state) => state.productsDetail,
  );

  const swiperRef = useRef(null);
  useEffect(() => {
    if (!swiperRef.current) return;

    if (activeImg) {
      swiperRef.current.autoplay.stop();
    } else {
      swiperRef.current.autoplay.start();
    }
  }, [activeImg]);

  const { id } = useParams();

  useEffect(() => {
    const load = async () => {
      try {
        // Fetch main product
        dispatch(setLoading());
        const data = await fetchProduct(id);
        // Parse JSON fields from database
        const parsed = {
          ...data,
          price: Number(data.price),
          colors:
            typeof data.colors === "string"
              ? JSON.parse(data.colors)
              : data.colors || ["#111111"],
          sizes:
            typeof data.sizes === "string"
              ? JSON.parse(data.sizes)
              : data.sizes || ["S", "M", "L", "XL"],
          images:
            typeof data.images === "string"
              ? JSON.parse(data.images)
              : data.images || [data.image],
        };

        dispatch(setProducts(parsed));
        // Fetch related products from same category
        const all = await fetchProducts();
        const relatedProducts = all.slice(0, 4);

        dispatch(setRelated(relatedProducts));
      } catch (err) {
        setError(err.response?.data?.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    load();
  }, [id]);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  return (
    <>
      <Skeleton name="product-details" loading={isLoading} error={error}>
        <div className=" px-2.5 md:px-4 lg:px-5  pt-4 md:pt-5 lg:pt-6 xl:pt-7 2xl:pt-8 3xl:pt-10  ">
          <div className="flex flex-col lg:flex-row lg:gap-8 ">
            <div className="just-for-you  w-full lg:w-[55%] xl:w-[50%]">
              <ProductDetailSwiper product={product} swiperRef={swiperRef} />
            </div>

            <ProductDetailSection product={product} />
          </div>

          <YouMayAlsoLike product={related} />
        </div>
      </Skeleton>

      {activeImg && <ImageModal img={activeImg} />}
    </>
  );
}
