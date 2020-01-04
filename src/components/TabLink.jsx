import React from "react"

export default function TabLink({ index, isSelected, setCurrentTab, text}){
    return(
        <button 
            onClick={() => {
                setCurrentTab(index)
                console.log('index', index)
            }}
            className={isSelected ? 'active' : 'inactive'}
        >
            {text}
        </button>
    );
}