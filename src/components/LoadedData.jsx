import React from 'react'
import Spinner from './Spinner'

const LoadedData = (props) => {
  const [show, setShow] = React.useState(false)

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      setShow(true)
    }, 2000)

    return () => clearTimeout(timeout)

  }, [show])

  if (!show) return <Spinner/>
  return (
   <>
    <div className="w60 col m1 hm0">
                <div className="row full line dbg" style={{ borderRadius: "5px 5px 0px 0px" }}><p className='m1'>{props.data.title}</p></div>
                <div className="row full line fclr" style={{ borderRadius: "0px 0px 5px 5px" }}><p className="m1">{props.data.body}</p></div>
    </div>
   </>
  )
}

export default LoadedData