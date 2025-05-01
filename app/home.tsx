import React from "react";
import {
  Alert,
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Product from "./model/product";

interface State {
  products: Product[];
}

export default class HomeScreen extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      products: [
        new Product(
          "product 1",
          100.99,
          "https://i.pinimg.com/564x/7a/0b/8e/7a0b8e716ff86321c989fa5c3802dec5.jpg"
        ),
        new Product(
          "product 2",
          150.5,
          "https://media.istockphoto.com/id/1354031012/photo/red-t-shirt-mockup-men-as-design-template-tee-shirt-blank-isolated-on-white-front-view.jpg?s=612x612&w=0&k=20&c=_5QLLkUa0-ZzSK1rp6Ie-ZRBPOEku4as4ZMrZg-y2GI="
        ),
        new Product(
          "product 3",
          120.0,
          "https://i.pinimg.com/736x/bd/ef/cb/bdefcbc72735f64db17f3250b1e64245.jpg"
        ),
        new Product(
          "product 4",
          180.5,
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShxqfanJ0ztwBQz_j58ZxsMi0lvG3bNK7XMQ&s"
        ),
      ],
    };
  }

  handleAddToCart = (product: Product) => {
    const updatedProducts = this.state.products.map((p) =>
      p === product ? { ...p, quantity: p.quantity + 1 } : p
    );
    this.setState({ products: updatedProducts });
    Alert.alert("Added to cart", `${product.name} added to cart!`);
  };

  incrementQuantity = (product: Product) => {
    const updatedProducts = this.state.products.map((p) =>
      p === product ? { ...p, quantity: p.quantity + 1 } : p
    );
    this.setState({ products: updatedProducts });
  };

  decrementQuantity = (product: Product) => {
    const updatedProducts = this.state.products.map((p) =>
      p === product
        ? { ...p, quantity: p.quantity > 1 ? p.quantity - 1 : 0 }
        : p
    );
    this.setState({ products: updatedProducts });
  };

  renderProduct = ({ item }: { item: Product }) => {
    return (
      <View style={styles.card}>
        <Image source={{ uri: item.imageUrl }} style={styles.image} />
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.price}>₹ {item.price.toFixed(2)}</Text>

        {item.quantity === 0 ? (
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.handleAddToCart(item)}
          >
            <Text style={styles.buttonText}>Add to Cart</Text>
          </TouchableOpacity>
        ) : (
          <View style={styles.quantityContainer}>
            <TouchableOpacity onPress={() => this.decrementQuantity(item)}>
              <Text style={styles.quantityButton}>-</Text>
            </TouchableOpacity>
            <Text style={styles.quantityText}>{item.quantity}</Text>
            <TouchableOpacity onPress={() => this.incrementQuantity(item)}>
              <Text style={styles.quantityButton}>+</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    );
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={this.state.products}
          renderItem={this.renderProduct}
          keyExtractor={(_, index) => index.toString()}
          numColumns={2}
          contentContainerStyle={styles.grid}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fef4ff",
  },
  grid: {
    padding: 8,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    margin: 8,
    flex: 1,
    alignItems: "center",
    elevation: 3,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginBottom: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
    textAlign: "center",
  },
  price: {
    fontSize: 14,
    color: "#555",
    marginVertical: 6,
  },
  button: {
    backgroundColor: "#b2f5ea",
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginTop: 5,
  },
  buttonText: {
    color: "#333",
    fontWeight: "bold",
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f2f2f2",
    borderRadius: 20,
    paddingVertical: 6,
    paddingHorizontal: 14,
    marginTop: 5,
  },
  quantityButton: {
    fontSize: 18,
    fontWeight: "bold",
    paddingHorizontal: 10,
    color: "#444",
  },
  quantityText: {
    fontSize: 16,
    fontWeight: "600",
    marginHorizontal: 6,
  },
});
