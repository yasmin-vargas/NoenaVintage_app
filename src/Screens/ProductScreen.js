import React, { useState, useEffect } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Styles } from '../Styles/Stylesheet';
import axios from 'axios';

const ProductScreen = ({ productId }) => {
    const [product, setProduct] = useState(null);
    const [selectedImage, setSelectedImage] = useState(null);

    useEffect(() => {
        // API call to fetch product details by productId
        const fetchProductDetails = async () => {
            try {
                const response = await axios.get(`http://127.0.0.1:8080/products/${productID}`);
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
    }, [productID]);  // Dependency array outside the function body

    if (!product) {
        return <Text>Loading...</Text>;
    }

    const handleImageClick = (image) => {
        setSelectedImage(image);
    };

    return (
        <View>
            <Text style={Styles.productStyles.productName}>{product.productName}</Text>
            <Text style={Styles.productStyles.productBrand}>{product.productBrand}</Text>
            <Text style={Styles.productStyles.productPrice}>{product.productPrice}</Text>
            <Text style={Styles.productStyles.productDescription}>{product.productDescription}</Text>

            {/* Gallery */}
            <ScrollView horizontal>
                {product.images.map((image) => (
                    <TouchableOpacity
                        key={image.imageID}
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
            <Image style={Styles.productStyles.productDetailsImage}
                source={{ uri: selectedImage ? selectedImage.imageUrl : '' }}
            />
        </View>
    );
};

export default ProductScreen;
