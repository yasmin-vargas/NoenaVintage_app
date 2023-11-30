import React, { useState, useEffect } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Styles } from '../Styles/Stylesheet';

const ProductScreen = ({ productId }) => {
    const [product, setProduct] = useState(null);
    const [selectedImage, setSelectedImage] = useState(null);

    useEffect(() => {
        // API call to fetch product details by productId
        const fetchProductDetails = async () => {
            try {
                const response = await fetch(`http://127.0.0.1:8080/api/products/${productId}`);
                if (!response.ok) {
                    throw new Error(`Failed to fetch product details: ${response.status}`);
                }

                const productData = await response.json();
                setProduct(productData);
            } catch (error) {
                console.error('Error fetching product details:', error);
            }
        };
        fetchProductDetails();  // Call the function to initiate the API call
    }, [productId]);  // Dependency array outside the function body

    if (!product) {
        return <Text>Loading...</Text>;
    }

    const handleImageClick = (image) => {
        setSelectedImage(image);
    };

    return (
        <View>
            <Text>{product.productName}</Text>
            <Text>{product.productBrand}</Text>
            <Text>{product.productDescription}</Text>

            {/* Gallery */}
            <ScrollView horizontal>
                {product.images.map((image) => (
                    <TouchableOpacity
                        key={image.imageId}
                        onPress={() => handleImageClick(image)}
                    >
                        <Image
                            source={{ uri: image.imageUrl }}
                            style={Styles.imageStyle}
                        />
                    </TouchableOpacity>
                ))}
            </ScrollView>

            {/* Selected Image */}
            <Image
                source={{ uri: selectedImage ? selectedImage.imageUrl : '' }}
                style={{ width: '100%', height: 300 }}
            />
        </View>
    );
};

export default ProductScreen;
