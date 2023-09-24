import { usePathname, useRouter, useSearchParams } from 'next/navigation';

function useQueryParams() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  function addParam(key: string, value: string) {
    // if param already exists edit the params
    if (searchParams.has(key)) {
      editParam(key, value);
      return;
    }
    const params = new URLSearchParams(searchParams);
    params.append(key, value);
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  }

  function editParam(key: string, value: string) {
    const params = new URLSearchParams(searchParams);
    params.set(key, value);
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  }

  function removeParam(key: string) {
    const params = new URLSearchParams(searchParams);
    params.delete(key);
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  }

  function getParam(key: string) {
    return searchParams.get(key);
  }

  return { addParam, editParam, removeParam, getParam };
}

export default useQueryParams;




// import { useRouter,useParams,usePathname } from 'next/navigation';
// import { useEffect } from 'react';

// export function useSearchQuery() {
//   const router = useRouter();
//   const params = useParams();
//   const pathname =usePathname()


//   const setQuery=(key:string,value:string)=>{
//      const searchParams = new URLSearchParams(params.toString());
//       searchParams.set(key, value);
//        const newSearch = searchParams.toString();
//  router.push(`${pathname}?${newSearch}`, undefined,);
//   }

//     const removeQuery=(key:string)=>{
//      const searchParams = new URLSearchParams(params.toString());
//      // If the value is null, remove the key from the search parameters
//       searchParams.delete(key);
//        const newSearch = searchParams.toString();
//  router.push(`${pathname}?${newSearch}`, undefined,);
//   }


//   return {setQuery,removeQuery}
// }