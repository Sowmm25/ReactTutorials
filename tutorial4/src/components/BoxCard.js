
export const BoxCard = ({result,children}) => {
  return (

    <div className={`box ${result}`}>
      {/* console.log({result}) */}
        {children}
        {/* console.log({children}) */}

    </div>
  
    
  )
}