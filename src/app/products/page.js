"use client";

import ShopPage from "../components/Shoppage";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
export default function Products() {
  const searchParams = useSearchParams();

  const [defaultGender, setdefaultGender] = useState("");
  const [defaultCategory, setdefaultCategory] = useState("All apparel");
  const [defaultSubcategory, setdefaultSubcategory] = useState("");

  useEffect(() => {
    const gender = searchParams.get("gender");
    const category = searchParams.get("category");
    const subcategory = searchParams.get("subcategory");

    if (!gender || !category || !subcategory) return;

    setdefaultGender(gender);
    setdefaultCategory(category);
    setdefaultSubcategory(subcategory);
  }, [searchParams]);

  return (
    <>
      <ShopPage
        defaultGender={defaultGender}
        setdefaultGender={setdefaultGender}
        defaultCategory={defaultCategory}
        setdefaultCategory={setdefaultCategory}
        defaultSubcategory={defaultSubcategory}
        setdefaultSubcategory={setdefaultSubcategory}
      />
    </>
  );
}
