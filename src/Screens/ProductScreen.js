import React, { useState, useEffect } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Styles } from '../Styles/Stylesheet';
import axios from 'axios';

const ProductScreen = ({ productID }) => {
    const [product, setProduct] = useState(null);
    const [selectedImage, setSelectedImage] = useState(null);

    useEffect(() => {
        const fetchProductDetails = async () => {  // API call to fetch product details by productID
            try {
                const response = await axios.get(`http://127.0.0.1:8080/products/${productID}`);
                if (response.status !== 200)  {
                    throw new Error(`Failed to fetch product details: ${response.status}`);
                }
                const productData = await response.json();
                setProduct(productData);
                setSelectedImage(productData.productImages[0]); // Set the first image as the selected image by default
            } catch (error) {
                console.error('Error fetching product details:', error);
            }
        };
        fetchProductDetails();  // Calls the function to initiate the API call
    }, [productID]);  // Dependency array outside the function body

    if (!product) {
        return <Text>Loading...</Text>;
    }

    const handleImageClick = (productImage) => {
        setSelectedImage(productImage);
    };

    return (
        <View>
            <Text style={Styles.productStyles.productName}>{product.productName}</Text>
            <Text style={Styles.productStyles.productBrand}>{product.productBrand}</Text>
            <Text style={Styles.productStyles.productPrice}>{product.productPrice}</Text>
            <Text style={Styles.productStyles.productDescription}>{product.productDescription}</Text>

            {/* Gallery */}
            <ScrollView horizontal>
                {/* the image object represents a ProductImage entity, and it has access to its associated Image entity's imageURL*/}
                {product.productImages.map((productImage) => (
                    <TouchableOpacity
                        key={productImage.getProductImageID()}
                        onPress={() => handleImageClick(productImage.getImage())}
                    >
                        <Image
                            source={{ uri: productImage.getImage().getImageURL() }}
                            style={Styles.imageStyle}
                        />
                    </TouchableOpacity>
                ))}
            </ScrollView>

            {/* Selected Image */}
            <Image style={Styles.productStyles.productDetailsImage}
                source={{ uri: selectedImage ? selectedImage.getImage().getImageURL() : '' }}
            />
        </View>
    );
};

export default ProductScreen;
