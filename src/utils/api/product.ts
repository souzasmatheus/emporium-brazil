const url = process.env.NEXT_PUBLIC_REST_API_ENDPOINT;
export async function getAllProducts() {
  const wholeURL: string = new URL('products', url).toString()
  const products = await fetch(wholeURL, {
    headers: {
      Accept: 'application/json, text/plain, */*',
      'User-Agent': '*',
    }
  });
  return (await products.json()).documents;
}

export async function getProductBySlug(slug) {
  const wholeURL: string = new URL('products', url).toString()
  const products = await fetch(wholeURL, {
    headers: {
      Accept: 'application/json, text/plain, */*',
      'User-Agent': '*',
    }
  });
  const response = await products.json()
  const data = response.documents.find((current) => current.fields.slug.stringValue === slug);

  const gallery = data.fields.gallery.arrayValue.values.map(value => ({ url: value.mapValue.fields.url }))
  const categories = data.fields.categories.arrayValue.values.map(value => ({ title: value.mapValue.fields.title.stringValue, slug: value.mapValue.fields.title.stringValue }))

  return {
    price: data.fields.price.stringValue,
    unit: data.fields.unit.stringValue,
    title: data.fields.title.stringValue,
    description: data.fields.description.stringValue,
    type: data.fields.type.stringValue,
    discountInPercent: data.fields.discountInPercent.stringValue,
    image: data.fields.image.stringValue,
    salePrice: data.fields.salePrice.stringValue,
    slug: data.fields.slug.stringValue,
    gallery,
    categories
  }
}
