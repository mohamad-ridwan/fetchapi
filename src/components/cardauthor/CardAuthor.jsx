import React from 'react'
import './CardAuthor.scss'

const CardAuthor = ({mrgn, nameCard, date, iconComment, comment, fontIcon, fontAuth})=>{
    return(
        <>
        <div className="box-author" style={{
            margin: `${mrgn}`
        }}>
            <i className="fas fa-user" style={{
                fontSize: `${fontIcon}`
            }}></i>
            <p className="name txtGroup" style={{
                fontSize: `${fontAuth}`
            }}>
                {nameCard}
            </p>
            <i className="far fa-calendar-alt" id="date" style={{
                fontSize: `${fontIcon}`
            }}></i>
            <p className="date txtGroup" style={{
                fontSize: `${fontAuth}`
            }}>
                <u>{date}</u>
            </p>

            <i className={iconComment} id="comment" style={{
                fontSize: `${fontIcon}`
            }}></i>
            <p className="comment txtGroup" style={{
                fontSize: `${fontAuth}`
            }}>
                {comment}
            </p>
        </div>
        </>
    )
}

export default CardAuthor