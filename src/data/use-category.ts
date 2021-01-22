import { useCollection } from "@nandorojo/swr-firestore";

export default function useCategory() {
  const { data, mutate, error, loading } = useCollection('categories')

  return {
    loading,
    error,
    data,
    mutate
  };
}
