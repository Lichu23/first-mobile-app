import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Button,
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { ProductSummary } from "../types/product";
import { getAllProducts } from "../lib/products";
import { AnimatedProductCard } from "./ProductCard";

function Main() {
  const inset = useSafeAreaInsets();
  const [products, setProducts] = useState<ProductSummary[]>([]);
  useEffect(() => {
    getAllProducts().then((product) => setProducts(product));
  }, []);

  return (
    <View
      style={{
        paddingTop: inset.top,
        paddingBottom: inset.bottom,
      }}
    >
      {products.length === 0 ? (
        <View style={styles.activityIndicator}>
          <ActivityIndicator size="large" />
        </View>
      ) : (
        <FlatList
          data={products}
          keyExtractor={(product) => product.title}
          renderItem={({ item, index }) => (
            <View style={{ alignItems: "center" }}>
              <AnimatedProductCard index={index} product={item} />
            </View>
          )}
        />
      )}
    </View>
  );
}

const { height, width } = Dimensions.get("window");

const styles = StyleSheet.create({
  activityIndicator: {
    position: "absolute",
    top: height / 2 - 20, // ajustar según el tamaño del indicador
    left: width / 2 - 20,
  },
});
export default Main;
