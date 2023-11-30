/* import MapView, { Marker } from 'react-native-maps';
const Map = () => {
    const [selectedGLSPoint, setSelectedGLSPoint] = useState(null);

    const handleMapPress = (event) => {
        const { coordinate } = event.nativeEvent;
        setSelectedGLSPoint(coordinate);
    };

    return (
        <View>
            <MapView
                style={{ flex: 1, height: 200 }}
                initialRegion={{
                    latitude: 37.78825, // Set initial coordinates
                    longitude: -122.4324,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
                onPress={handleMapPress}
            >
                {selectedGLSPoint && (
                    <Marker coordinate={selectedGLSPoint} title="GLS Pickup Point" />
                )}
            </MapView>
        </View>
    );
};

export default Map;

 */