import React, { useState } from "react";
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Product from "./model/product";

export default function HomeScreen() {
  // Sample product data with updated image URLs
  const [products, setProducts] = useState<Product[]>([
    new Product("Black T-Shirt", 100.99, 1, "https://i.pinimg.com/564x/7a/0b/8e/7a0b8e716ff86321c989fa5c3802dec5.jpg"),
    new Product("Red T-Shirt", 150.50, 1, "https://media.istockphoto.com/id/1354031012/photo/red-t-shirt-mockup-men-as-design-template-tee-shirt-blank-isolated-on-white-front-view.jpg?s=612x612&w=0&k=20&c=_5QLLkUa0-ZzSK1rp6Ie-ZRBPOEku4as4ZMrZg-y2GI="),
    new Product("Orange T-Shirt", 120.00, 1, "https://i.pinimg.com/736x/bd/ef/cb/bdefcbc72735f64db17f3250b1e64245.jpg"),
    new Product("Blue T-Shirt", 180.50, 1, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShxqfanJ0ztwBQz_j58ZxsMi0lvG3bNK7XMQ&s"),
  ]);

  const handleAddToCart = (product: Product) => {
    alert(`${product.name} added to cart!`);
  };

  const handleQuantityChange = (index: number, change: number) => {
    const updatedProducts = [...products];
    const newQuantity = updatedProducts[index].quantity + change;
    if (newQuantity >= 1) {
      updatedProducts[index].quantity = newQuantity;
      setProducts(updatedProducts);
    }
  };

  const renderProduct = ({ item, index }: { item: Product; index: number }) => (
    <View style={styles.productCard}>
      <Image source={{ uri: item.imageUrl }} style={styles.productImage} />
      <Text style={styles.productName}>{item.name}</Text>
      <Text style={styles.productPrice}>₹ {item.price.toFixed(2)}</Text>
      <View style={styles.quantityContainer}>
        <TouchableOpacity
          style={styles.quantityButton}
          onPress={() => handleQuantityChange(index, -1)}
        >
          <Text style={styles.quantityButtonText}>-</Text>
        </TouchableOpacity>
        <Text style={styles.quantityText}>{item.quantity}</Text>
        <TouchableOpacity
          style={styles.quantityButton}
          onPress={() => handleQuantityChange(index, 1)}
        >
          <Text style={styles.quantityButtonText}>+</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={styles.addToCartButton}
        onPress={() => handleAddToCart(item)}
      >
        <Text style={styles.addToCartText}>Add to Cart</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Product List</Text>
      <FlatList
        data={products}
        renderItem={renderProduct}
        keyExtractor={(item, index) => index.toString()}
        numColumns={2}
        contentContainerStyle={styles.productList}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9",
    padding: 10,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 10,
    color: "#333",
  },
  productList: {
    justifyContent: "space-between",
  },
  productCard: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    margin: 10,
    flex: 1,
    alignItems: "center",
    elevation: 3,
  },
  productImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginBottom: 10,
  },
  productName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 5,
  },
  productPrice: {
    fontSize: 14,
    color: "#666",
    marginBottom: 10,
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  quantityButton: {
    backgroundColor: "#ddd",
    padding: 5,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  quantityButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  quantityText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  addToCartButton: {
    backgroundColor: "#4CAF50",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  addToCartText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
