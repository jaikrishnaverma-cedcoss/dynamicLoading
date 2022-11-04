import React, { useEffect, useState } from 'react'
import useFetch from '../useFetch';
import LoadedData from './LoadedData';

const Data = () => {
    let [currentlength, setlength] = useState(5)
    useEffect(() => {
        function handleScroll() {
            const isBottom =window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight;
            if (isBottom&&currentlength<100){
               setlength(prev => (prev<100)?prev + 5:prev)
            }
            if(currentlength>=100)
            window.removeEventListener("scroll", handleScroll);
        }
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    let data  = useFetch(currentlength)
    console.log(data)
    return (
        <>
            <div className="col full flexAIC p3">
              
                {
                    data.map(x => <LoadedData data={x} />)
                }
                {(currentlength>=100)?<h4 className="m2 w60 brd p1" style={{textAlign:"center",color:'#3a7e3a',background:"#cee5ce"}}>No More Feeds</h4>:<h4></h4>}
                
            </div>
        </>
    )
}

export default Data