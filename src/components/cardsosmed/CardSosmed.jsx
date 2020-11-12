import React from 'react'
import './CardSosmed.scss'

const CardSosmed=({
    marginRight,
    margintop,
    bgColorSatu,
    bgColorDua,
    icon,
    nameSosmed
})=>{
    return(
        <>
        <div className="card-sosmed" style={{
            marginRight: `${marginRight}`,
            marginTop: `${margintop}`,
            backgroundColor: `${bgColorSatu}`,
        }}>
            <button className="btn-icon" style={{
               backgroundColor: `${bgColorDua}` 
            }}>
                <i className={icon}></i>
            </button>

            <p className="name-sosmed">
                {nameSosmed}
            </p>
        </div>
        </>
    )
}

export default CardSosmed