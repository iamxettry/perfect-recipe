import React, { useState } from "react";
import { FiCamera } from "react-icons/fi";
import { EggNoodle } from "../../../assets";
import { FaImage } from "react-icons/fa6";
import { MdOutlineDelete } from "react-icons/md";
const RecipeImageUploader = () => {
  const [images, setImages] = useState(EggNoodle);
  const [coverImage, setCoverImage] = useState(null);

  //   upload image
  const handleImageUpload = (e) => {
    // for the multiple images
    // const files = Array.from(e.target.files);
    // const newImage = files.map((file) => ({
    //   id: URL.createObjectURL(file),
    //   file: file,
    // }));
    // setImages([...images, ...newImage]);

    // for single image
    const newImage = URL.createObjectURL(e.target.files[0]);
    setImages(newImage);
  };

  //   cover image selector
  //   const handleSetAsCover = (imageId) => {
  //     const selectedImage = images.find((image) => image.id === imageId);
  //     setCoverImage(selectedImage);
  //   };

  const handleImageRemove = (imageId) => {
    // setImages(images.filter((image) => image.id !== imageId));

    // if (coverImage && coverImage.id === imageId) {
    //   setCoverImage(null);
    // }

    setImages(null);
  };
  return (
    <div className="">
      {images ? (
        <div className="w-4/5  h-72  overflow-hidden relative ">
          {/* image */}
          <img
            src={images}
            alt=""
            className="w-full h-full aspect-auto object-contain"
          />

          {/* buttons */}
          <div className="absolute top-1 left-1 flex gap-4">
            <button
              onClick={() => setCoverImage(images)}
              className=" px-3 py-1 border border-red-500 bg-white/70 rounded-md "
            >
              Set as cover
            </button>
            <button className=" px-3 py-1 border border-red-500 bg-white/70 rounded-md ">
              Change Image
            </button>
          </div>

          <button
            onClick={() => handleImageRemove()}
            className="  border bg-white border-red-600 rounded-md  absolute left-2  bottom-2 "
          >
            <MdOutlineDelete size={24} className="text-red-600" />
          </button>
        </div>
      ) : (
        <label className="w-4/5  h-32  border border-red-200  flex justify-center items-center  cursor-pointer">
          <FaImage className="text-neutral-500 mx-2" />
          <span className="text-center text-neutral-500">Upload new image</span>
          <input
            type="file"
            className="hidden"
            onChange={(e) => handleImageUpload(e)}
          />
        </label>
      )}
      <div className=" my-4 flex gap-4">
        {/* Add image */}
        <label className="w-32 h-24 rounded-lg border flex flex-col items-center justify-center border-red-400   cursor-pointer  ">
          <FiCamera size={28} className="text-red-500" />
          <span className="font-medium mt-3">Add Photo</span>
          <input
            type="file"
            className="hidden"
            onChange={(e) => handleImageUpload(e)}
            multiple
          />
        </label>

        {/* cover image */}
        <div className="w-32 h-24 rounded-lg  border-red-400 border-2  relative overflow-hidden ">
          <span className="bg-red-400 px-1  p-0.5 rounded-tl-md rounded-br-md float-start">
            Cover
          </span>
          {coverImage ? (
            <div className="">
              <img
                src={coverImage}
                alt="Cover"
                className="absolute w-full h-full -z-40  object-cover "
              />
            </div>
          ) : (
            <img src={EggNoodle} className="absolute w-full h-full -z-40  object-cover" />
          )}
        </div>
      </div>
    </div>
  );
};

export default RecipeImageUploader;
