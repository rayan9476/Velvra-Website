"use client";
import { usePathname } from "next/navigation";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import { SessionProvider } from "next-auth/react";
import { CartProvider } from "./components/contexts/CartContext";
import "@/bones/registry";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
export default function LayoutClient({ children }) {
  const pathname = usePathname();

  const shouldHideFooter =
    pathname === "/checkout" ||
    pathname === "/admin" ||
    pathname === "/admin/signin" ||
    pathname === "/admin/signup";

  const shouldHideHeader =
    pathname === "/admin" ||
    pathname === "/admin/signin" ||
    pathname === "/admin/signup";

  return (
    <>
      <SessionProvider>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <CartProvider>
              {!shouldHideHeader && (
                <header role="contentinfo" aria-label="Site header">
                  <Navbar />
                </header>
              )}

              <main className=" flex-1 flex-col items-center justify-center  mt-[60px] lg:mt-[70px] 2xl:mt-[80px] 3xl:mt-[90px]">
                {children}
              </main>

              {!shouldHideFooter && <Footer />}
            </CartProvider>
          </PersistGate>
        </Provider>
      </SessionProvider>
    </>
  );
}
