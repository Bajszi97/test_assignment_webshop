import { useLazyQuery } from "@apollo/client";
import { useCartContext } from "./useCartContext";
import { findProduct } from "@/utils/queries";
import { Product } from "@/types/DomainModels";

export const useQuickShop = () => {
  const [getProduct] = useLazyQuery(findProduct);
  const { addItem, setIsCartOpen } = useCartContext();

  const getDefaultAttributes = (product: Product) => {
    return product.attributes.reduce<Record<string, string>>(
      (defaults, attributeSet) => {
        defaults[attributeSet.slug] = attributeSet.items[0].slug;
        return defaults;
      },
      {},
    );
  };

  const quickShopProduct = async (productSlug: string) => {
    try {
      const { data } = await getProduct({
        variables: { slug: productSlug },
      });

      if (data?.product) {
        addItem({
          product: data.product,
          quantity: 1,
          selectedAttributes: getDefaultAttributes(data.product),
        });
        setIsCartOpen(true);
      } else {
        throw new Error("Could not fetch product for quick shopping.");
      }
    } catch (error) {
      console.error("Error fetching product for quick shopping:", error);
    }
  };

  return { quickShopProduct };
};
