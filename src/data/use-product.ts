import { useCollection } from "@nandorojo/swr-firestore";
interface Props {
  slug: string;
}

type Product = {
  slug: string;
}

export default function useProduct({ slug }: Props) {
  const { data, mutate, error } = useCollection<Product>('products')

  const loading = !data && !error;
  // need to remove when you using real API integration
  let product = data?.filter((current) => current.slug === slug);

  console.log(`product: ${product}`)
  return {
    loading,
    error,
    data: product,
    // user: data,
    mutate,
  };
}
