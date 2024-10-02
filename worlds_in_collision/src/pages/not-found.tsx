import Image from 'next/image';
import notFoundImage from '../public/404.png';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold">Página não encontrada!</h1>
      <Image src={notFoundImage} alt="404 Not Found" width={400} height={300} />
    </div>
  );
};

export default NotFound;
