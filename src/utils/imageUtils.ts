/**
 * A utility for handling lazy loading and optimization of images
 * Used to improve performance and Core Web Vitals scores
 */

// Get image dimensions for proper aspect ratio
export const getImageDimensions = (imagePath: string): Promise<{width: number, height: number}> => {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => {
      resolve({
        width: img.width,
        height: img.height
      });
    };
    img.src = imagePath;
  });
};

// Format image dimensions for proper aspect ratio in components
export const formatImageDimensions = (width: number, height: number, maxWidth: number): {width: number, height: number} => {
  const aspectRatio = width / height;
  const calculatedHeight = maxWidth / aspectRatio;
  
  return {
    width: maxWidth,
    height: calculatedHeight
  };
};

// Generate srcSet for responsive images
export const generateSrcSet = (imagePath: string, sizes: number[] = [320, 640, 768, 1024, 1280, 1600]): string => {
  const extension = imagePath.split('.').pop();
  const basePath = imagePath.substring(0, imagePath.lastIndexOf('.'));
  
  return sizes.map(size => `${basePath}-${size}w.${extension} ${size}w`).join(', ');
};

// Get appropriate size for preloaded images based on viewport width
export const getResponsiveImageSize = (
  viewportWidth: number,
  imageSizes: {breakpoint: number, imageWidth: number}[]
): number => {
  // Sort sizes by breakpoint in descending order
  const sortedSizes = [...imageSizes].sort((a, b) => b.breakpoint - a.breakpoint);
  
  // Find the first size where the viewport width is greater than or equal to the breakpoint
  const appropriateSize = sortedSizes.find(size => viewportWidth >= size.breakpoint);
  
  // Return the image width for the appropriate size, or the smallest size if none found
  return appropriateSize ? appropriateSize.imageWidth : sortedSizes[sortedSizes.length - 1].imageWidth;
};
