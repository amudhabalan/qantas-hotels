import { useSelector } from 'react-redux';

export function useHotelsSelector() {
  const { loading, hotels, error } = useSelector((state) => state.hotels);

  return {
    loading,
    hotels,
    error,
  };
}
