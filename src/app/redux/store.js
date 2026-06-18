import { configureStore } from "@reduxjs/toolkit";
import blogInfoReducer from "./features/BlogInfoSlice";
import blogsReducer from "./features/blogsSlice";
import heroCarouselReducer from "./features/HeroCarouselSlice";
import productsReducer from "./features/ProductsSlice";
import productDetailReducer from "./features/ProductDetailSlice";
import collectionsReducer from "./features/CollectionsSlice";
import collectionItemReducer from "./features/CollectionItemSlice";
import collectionDetailReducer from "./features/CollectionDetailSlice";
import checkoutReducer from "./features/CheckoutSlice";
import cartReducer from "./features/CartSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

const persistConfig = {
  key: "collectionDetail",
  storage,
  wishlist: ["wishlist"],
};

const persistedCollectionDetail = persistReducer(
  persistConfig,
  collectionDetailReducer,
);

export const store = configureStore({
  reducer: {
    blogInfo: blogInfoReducer,
    blogs: blogsReducer,
    hero: heroCarouselReducer,
    products: productsReducer,
    productsDetail: productDetailReducer,
    collections: collectionsReducer,
    collectionItem: collectionItemReducer,
    collectionDetail: persistedCollectionDetail,
    checkout: checkoutReducer,
    cart: cartReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
