import ImageCollage from './ImageCollage';

export default function PanchshilAbout() {
  return (
    <div className="bg-[#2e2752] text-white min-h-screen flex flex-col">
      <main className="flex-grow flex flex-col md:flex-row p-8 gap-8">
        <div className="md:w-1/2 relative">
          <ImageCollage />
        </div>
        <div className="md:w-1/2 flex flex-col justify-center">
          <h1 className="text-4xl font-bold mb-4">
            Enhancing lifestyles with modern luxury and thoughtful design.
          </h1>
          <p className="text-lg mb-4">
            At Sanjay Developers, we create luxury residential and commercial properties, transforming spaces into thoughtfully designed, modern masterpieces.  
            <br /><br />
            Driven by innovation and a commitment to quality, we ensure seamless execution from start to finish, consistently surpassing expectations in affordable and premium developments alike.
          </p>
        </div>
      </main>  
    </div>
  );
}
