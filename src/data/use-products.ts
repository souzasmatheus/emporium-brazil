import { useCollection } from "@nandorojo/swr-firestore";
import Fuse from 'fuse.js';
const options = {
  // isCaseSensitive: false,
  // includeScore: false,
  shouldSort: true,
  // includeMatches: false,
  // findAllMatches: false,
  // minMatchCharLength: 1,
  // location: 0,
  threshold: 0.3,
  // distance: 100,
  // useExtendedSearch: false,
  // ignoreLocation: false,
  // ignoreFieldNorm: false,
  minMatchCharLength: 2,
  keys: ['title'],
};
function search(list, pattern) {
  const fuse = new Fuse(list, options);

  return fuse.search(pattern).map((current) => current.item);
}
// import productFetcher from 'utils/api/product';
const productFetcher = (url) => fetch(url).then((res) => res.json());
interface Props {
  type: string;
  text?: any;
  category?: any;
  offset?: number;
  limit?: number;
}
export default function useProducts(variables: Props) {
  const { type, text, category, offset = 0, limit = 20 } = variables ?? {};
  const { data, mutate, error, loading } = useCollection('products')

  // need to remove when you using real API integration
  // const [formattedData, setFormattedData] = useState(false);
  let products = data?.filter((current) => current.type === type);
  console.log(`category: ${category}`)
  if (category) {
    products = products?.filter((product) =>
      product.categories.find(
        (category_item) => category_item.slug === category
      )
    );
  }
  if (text) {
    products = search(products, text);
  }
  // let localOffset = offset;
  // let localLimit = limit;
  // const fetchMore = async (os, lmt) => {
  //   localOffset = os;
  //   localLimit = lmt;
  //   setFormattedData(true);
  // };
  // console.log('object');
  // data: [
  //   ...state.data,
  //   ...state.total.slice(
  //     state.data.length,
  //     state.data.length + state.limit
  //   ),
  // ],
  // need to implement fetchMore
  // const hasMore = products?.length > localOffset + localLimit;
  return {
    loading,
    error,
    data: products?.slice(offset, offset + limit),
    // hasMore,
    mutate,
    // fetchMore,
  };
}


// import { useCollection } from "@nandorojo/swr-firestore";

// export default function useProduct() {
//   const { data, mutate, error, loading } = useCollection('products')

//   console.log(`data: ${JSON.stringify(data)}`)

//   return {
//     loading,
//     error,
//     data,
//     mutate
//   };
// }
