import Image from "next/image";

const Homepage = () => {
  return (
    <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
      {/* IMAGE CONTAINER */}
      <div className="h-1/2 lg:h-full lg:w-1/2 relative">
        <Image src="/hero.png" alt="image d'accueil" fill className="object-contain" />
      </div>
      {/* TEXT CONTAINER */}
      <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
        {/* TITLE */}
        <h1 className="text-4xl md:text-6xl font-bold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </h1>

        {/* DESC */}
        <p className="md:text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid in fuga amet ipsum enim
          impedit natus nulla eligendi rem earum accusantium facilis unde, maxime expedita! Nihil
          eveniet fugiat, provident, fugit earum dolores quo adipisci nesciunt ad at vero
          accusantium cum exercitationem deserunt architecto recusandae possimus nobis dolorem id
          veniam ducimus!
        </p>

        {/* BUTTONS */}
        <div className="w-full flex gap-4">
          <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">
            View My Work
          </button>
          <button className="p-4 rounded-lg ring-1 ring-black">Contact Me</button>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
