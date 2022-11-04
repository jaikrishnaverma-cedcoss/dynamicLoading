import React, { useEffect, useState } from 'react'
import useFetch from '../useFetch';
import LoadedData from './LoadedData';

const Data = () => {
    let [currentlength, setlength] = useState(5)
    useEffect(() => {
        function handleScroll() {
            const isBottom =window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight;
            if (isBottom){
               setlength(prev => prev + 5)
                
            }
        }
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    
    let { data } = useFetch(currentlength)
    return (
        <>
            <div className="col full flexAIC p3">
                {console.log(data)}
                {
                    data.map(x => <LoadedData data={x} />)
                }
            </div>
        </>
    )
}

export default Data