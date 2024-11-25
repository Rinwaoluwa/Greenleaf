import { Dimensions, StyleSheet } from "react-native";
import { fontPixel, heightPixel, normalise, pixelSizeHorizontal, pixelSizeVertical, widthPixel } from "../../theme/responsive";

const { width } = Dimensions.get('window');
const cardSize = (width - widthPixel(48)) / 2;


export const styles = StyleSheet.create({
  categoryGrid: {
    flexDirection: 'row',
    gap: normalise(15),
  },
  container: {
    width: widthPixel(160),
    height: cardSize,
    borderRadius: normalise(16),
    padding: normalise(16),
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: pixelSizeVertical(10),
  },
  image: {
    width: '80%',
    height: '60%',
    resizeMode: 'contain',
  },
  title: {
    fontSize: fontPixel(14),
    fontWeight: '600',
    color: '#1F2937',
    textAlign: 'center',
  },
  gridContainer: {
    paddingVertical: pixelSizeVertical(20),
  },
  columnWrapper: {
    justifyContent: "space-between",
    marginBottom: pixelSizeVertical(15),
  },
  loaderContainer: {
    height: heightPixel(300),
  },
});