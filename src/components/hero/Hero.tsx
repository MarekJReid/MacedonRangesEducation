import React from 'react';

type HeroProps = {
  title: string;
  description: string;
  backgroundImage: string;
  buttonLabel?: string;
  buttonLink?: string;
};

const Hero: React.FC<HeroProps> = ({ title, description }) => {
  return (
    <div
      className='h-full w-full bg-cover bg-center '
      style={{
        backgroundImage: `url(https://images.pexels.com/photos/3719037/pexels-photo-3719037.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260)`,
      }}
    >
      <div className='flex h-full w-full items-center justify-center bg-white bg-opacity-20 py-32'>
        <div className='text-center'>
          <div className='container mx-auto px-4'>
            <div className='mx-auto max-w-4xl text-center'>
              <h1 className='mb-3 text-4xl font-bold  text-gray-800 lg:text-6xl'>
                {title}Welcome to Macedon Ranges Education
              </h1>
              <h3 className='mb-4  font-bold  text-gray-800 '>
                Where community driven education is our passion
              </h3>
              <p className=' text-lg font-light  text-gray-800 lg:text-xl'>
                {description}Yard holystone keel scuttle matey pillage hempen
                halter sutler Jack Tar Nelsons folly. Pink parrel league grog
                lookout Brethren of the Coast port snow haul wind dance the
                hempen jig. Swab American Main skysail reef long boat ahoy
                square-rigged Yellow Jack swing the lead take a caulk. Rum
                draught pinnace cable tack me squiffy deadlights Shiver me
                timbers lugger. Handsomely spike hardtack gabion marooned belay
                crack Jennys tea cup chase hearties scuttle. Chantey dead men
                tell no tales bilge water pink fore Spanish Main port gaff
                rutters nipper. Draught Sea Legs clap of thunder jury mast yawl
                Davy Jones' Locker aye cackle fruit six pounders reef sails.
                Grog brig sloop gunwalls rope's end furl loaded to the gunwalls
                code of conduct to go on account transom. Deadlights Corsair
                pillage boom splice the main brace piracy hogshead loaded to the
                gunwalls transom cutlass.
              </p>
              <a
                className='md:mt-8mb-4 mt-12 inline-block w-full rounded rounded-full border-2 border-transparent  bg-green-600 px-10  py-4 text-center text-sm text-sm font-bold uppercase text-gray-800 text-white transition duration-200 hover:bg-gray-100 md:ml-4 md:mr-6 md:w-auto'
                href='#'
              >
                Contact Us Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
