import React from "react";


export default function ContentWrapper (props){
    
    return(
        <div className="w-full h-screen max-w-[1200px] mx-auto px-[20px]">
            {props.children}
        </div>
    )
}