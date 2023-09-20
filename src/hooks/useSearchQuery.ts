import { useRouter,useParams,usePathname } from 'next/navigation';
import { useEffect } from 'react';

export function useSearchQuery() {
  const router = useRouter();
  const params = useParams();
  const pathname =usePathname()


  const setQuery=(key:string,value:string)=>{
     const searchParams = new URLSearchParams(params.toString());
      searchParams.set(key, value);
       const newSearch = searchParams.toString();
 router.push(`${pathname}?${newSearch}`, undefined,);
  }

    const removeQuery=(key:string)=>{
     const searchParams = new URLSearchParams(params.toString());
     // If the value is null, remove the key from the search parameters
      searchParams.delete(key);
       const newSearch = searchParams.toString();
 router.push(`${pathname}?${newSearch}`, undefined,);
  }


  return {setQuery,removeQuery}
}