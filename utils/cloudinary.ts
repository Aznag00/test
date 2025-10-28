import { uploadImage } from "src/api/cloudinary";

export const uploadImageToCloudinary = async (file: File) => {
  try {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'school-management');
    formData.append('folder', 'school-management');

    const imageUrl = await uploadImage(formData);

    return imageUrl;
  } catch (error) {
    console.error('Error uploading image to Cloudinary:', error);
    throw new Error('Error uploading image to Cloudinary');
  }
};
