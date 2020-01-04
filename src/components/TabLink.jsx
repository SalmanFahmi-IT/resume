import React from "react"

export default function TabLink({ index, isSelected, setCurrentTab, text}){
    return(
        <li 
            onClick={() => {
                setCurrentTab(index)
                console.log('index', index)
            }}
            className={isSelected ? 'active' : ''}
        >
            {text}
        </li>
    );
}