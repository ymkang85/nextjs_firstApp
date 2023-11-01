import React from 'react'

const layout = (props) => {
    return (
        <div className="sm:container mx-auto relative isolate px-6 pt-20 lg:px-8">
       <h1>Update</h1>
          <div className="pt-10 px-32">
       {props.children} 
       </div>
    </div>
    )
}

export default layout