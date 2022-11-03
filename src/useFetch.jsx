import { useEffect, useState } from "react";
 
const useFetch = (limit) => {
  const [state, setState] = useState({data:[],loading:true});
 
  useEffect(() => {

    fetch(`https://jsonplaceholder.typicode.com/posts?_start=2&_limit=${limit}`)
    .then((res) => res.json())
    .then((data) => {
      state.data=data
      state.loading=false
        setState({...state})
    })
  }, [limit]);
 
  return state;
};
 
export default useFetch;