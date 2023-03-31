import { createCanvas, loadImage } from 'canvas';


// Function to compress image using canvas
export const compressImage = async(file, quality) => {
  if (!(file instanceof Blob)) {
    throw new Error("Invalid file parameter");
  }
  const reader = new FileReader();
  reader.readAsDataURL(file);
  return new Promise((resolve) => {
    reader.onload = (event) => {
      const img = new Image();
      img.src = event.target.result;
      img.onload = () => {
        const elem = document.createElement("canvas");
        const width = img.width;
        const height = img.height;
        elem.width = width;
        elem.height = height;
        const ctx = elem.getContext("2d");
        ctx.drawImage(img, 0, 0, width, height);
        ctx.canvas.toBlob(
          (blob) => {
            const compressedFile = new File([blob], file.name, {
              type: file.type === "image/jpg" ? "image/jpg" : "image/png",
              lastModified: Date.now(),
            });
            resolve(compressedFile);
          },
          file.type === "image/jpg" ? "image/jpg" : "image/png",
          quality
        );
      };
    };
  });
}

  
  // Function to convert data URL to file
export const dataURLtoFile = async(dataURL, fileName) => {
    const mimeType = dataURL.split(",")[0].split(":")[1].split(";")[0]; // Extract the MIME type from the data URL
    const binaryString = atob(dataURL.split(",")[1]); // Convert the base64-encoded data to a binary string
    const bytes = new Uint8Array(binaryString.length); // Create a new Uint8Array to hold the bytes
    for (let i = 0; i < binaryString.length; i++) {
      bytes[i] = binaryString.charCodeAt(i); // Populate the Uint8Array with the bytes from the binary string
    }
    return new File([bytes], fileName, { type: mimeType }); // Create a new File object with the bytes and MIME type
  };
  