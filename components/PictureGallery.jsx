import Image from "next/image"

const PictureGallery = () => {
  return (
    <div>
      <div>
    <Image
        src='/art.jpg' 
        alt='Art Piece'
        width={2000}
        height={1000}
        className="mx-auto mt-24 max-w-full sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-lg "
      />
          </div>
    </div>
  );
}

export default PictureGallery;
