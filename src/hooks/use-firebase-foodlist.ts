import { useCallback, useState } from 'react';
import { Meal } from '@/components/Meals/types';
import { UserAddress } from '@/components/Cart/types';
import { CartItemType } from '@/store/cart-type';

interface UseFirebaseFoodListProps {
  url: string;
  method?: string;
  body?: string;
  headers?: HeadersInit;
}

export const useFirebaseFoodList = (
  firebaseRequest: UseFirebaseFoodListProps
) => {
  const [isLoading, setIsLoading] = useState(false);
  const [httpError, setHttpError] = useState<string | undefined>(undefined);

  const sendGetRequest = useCallback(async () => {
    setIsLoading(true);
    setHttpError(undefined);
    try {
      const response = await fetch(firebaseRequest.url, {
        method: firebaseRequest.method ? firebaseRequest.method : 'Get',
        headers: firebaseRequest.headers ? firebaseRequest.headers : {},
        body: firebaseRequest.body
          ? JSON.stringify(firebaseRequest.body)
          : null,
      });
      if (!response.ok) {
        throw new Error('response is not ok');
      }
      console.log(response);
      const data: Meal[] = await response.json();
      let foodList: Meal[] = [];
      for (let key in data) {
        foodList.push({
          id: key,
          name: data[key].name,
          description: data[key].description,
          price: data[key].price,
        });
      }
      setIsLoading(false);
      return foodList;
    } catch (err) {
      if (err instanceof Error) {
        console.log(err);
        setHttpError(err.message);
        setIsLoading(false);
      } else {
        console.log(`Unexpected error: ${err}`);
        setIsLoading(false);
      }
    }
  }, [firebaseRequest]);

  const sendPostRequest = async (
    userInfo: UserAddress,
    orderedItems: CartItemType[]
  ) => {
    try {
      const response = await fetch(firebaseRequest.url, {
        method: 'POST',
        body: JSON.stringify({
          userInfo: userInfo,
          orderedItems: orderedItems,
        }),
        headers: {
          'Context-Type': 'application/json',
        },
      });
      console.log(response);
      const data = await response.json();
      console.log(data);
    } catch (err) {
      if (err instanceof Error) {
        console.log(err);
      } else {
        console.log(`Unexpected Error: ${err}`);
      }
    }
  };

  return {
    isLoading,
    httpError,
    sendGetRequest,
    sendPostRequest
  };
};
