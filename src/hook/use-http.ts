function useHttp<T>(url: string) {
  const fetchData = async (): Promise<T> => {
    const respone = await fetch(url);

    const data = (await respone.json());

    return data;
  };

  return fetchData
  
}

export default useHttp;
