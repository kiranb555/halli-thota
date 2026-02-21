import Image from 'next/image';
import { Fragment } from 'react/jsx-runtime';

function Home() {
  return (
      <main className="mt-5 mb-5 mx-5">
        <div className="marquee w-full">
          {[1,2,3,4,5].map((item) => (
            <Fragment key={item}>
              <span className="text-red-500 pr-3 animate-ping pl-5">Sale</span>
              <span className="text-green-500 animate-pulse">ಈ ವೆಬ್‌ಸೈಟ್ ಮಾರಾಟಕ್ಕಿದೆ ಸಂಪರ್ಕಿಸಿ - <span className="text-black animate-pulse">9741621201</span></span>
            </Fragment>
          ))} 
        </div>
        <h1 className="md:text-9xl text-5xl font-bold text-center mt-10">
          <span  className="text-pink-500 pr-3 animate-pulse">Halli</span>
          <span className="text-green-500 animate-pulse">Thota</span>
        </h1>
        <h1 className="p-20 md:text-5xl text-3xl font-bold text-center text-red-500">ಈ ವೆಬ್‌ಸೈಟ್ ಮಾರಾಟಕ್ಕಿದೆ ಸಂಪರ್ಕಿಸಿ - <span className="text-black">9741621201</span></h1>
        <div className='flex justify-center'>
          <Image src="/halli-thota.png" alt="halli-thota" width={500} height={500} className='align-center'/>
        </div>
      </main>
  );
}


export default Home;