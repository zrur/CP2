import { useRouter } from 'next/router';

const SlugPage = () => {
  const router = useRouter();
  const { slug } = router.query;

  return <div>Página dinâmica para: {slug}</div>;
};

export default SlugPage;
