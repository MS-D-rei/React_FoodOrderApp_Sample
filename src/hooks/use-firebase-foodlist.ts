import { useCallback, useState } from 'react';
import { Meal } from '@/components/Meals/types';

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

  return {
    isLoading,
    httpError,
    sendGetRequest,
  };
};
