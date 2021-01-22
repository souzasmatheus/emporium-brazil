import { useCollection } from "@nandorojo/swr-firestore";

type Category = {
  title: string;
  slug: string;
  icon: string;
}

export default function useCategory() {
  const { data, mutate, error, loading } = useCollection<Category>('categories')

  return {
    loading,
    error,
    data,
    mutate
  };
}
