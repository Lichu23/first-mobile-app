import React, { useEffect, useRef } from "react";
import { Animated, Image, StyleSheet, Text, View } from "react-native";
import { ProductSummary } from "../types/product";

interface PropsAnimated {
  product: ProductSummary;
  index: number;
}

export function AnimatedProductCard({ product, index }: PropsAnimated) {
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 500,
      delay: index * 500,
      useNativeDriver: true,
    }).start();
  }, [opacity, index]);

  return (
    <Animated.View style={{ opacity }}>
      <Image
        resizeMode={"contain"}
        source={{ uri: product.image }}
        style={styles.image}
      />
      <Text className="font-mono">{product.title}</Text>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  image: { width: 200, height: 300 },
});
