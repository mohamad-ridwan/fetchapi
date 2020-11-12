import React from 'react'
import CardAuthor from '../cardauthor/CardAuthor'
import './CardNews.scss'

const CardNews=({
    flxDirecttion,
    bdrBottom,
    bdrRight,
    bdrLeft,
    paddWrapp,
    mrgnWrapp,
    maxHeightWrapp,
    widthWrapp,
    bgColorWrapp,
    bdrRadius,
    bxShadow,
    cursorWrapp,
    heightImg,
    imgCard,
    widthImg,
    widthContent,
    paddContent,
    fontTitle,
    title,
    marginAuthor,
    nameCard,
    date,
    iconComment,
    comment,
    fontIcon,
    fontAuth,
    fontDesk,
    deskripsi,

})=>{
    return(
        <>
        <div className="wrapper-cardNews" style={{
            flexDirection: `${flxDirecttion}`,
            borderBottom : `${bdrBottom}`,
            borderRight: `${bdrRight}`,
            borderLeft: `${bdrLeft}`,
            padding: `${paddWrapp}`,
            margin: `${mrgnWrapp}`,
            maxHeight: `${maxHeightWrapp}`,
            width: `${widthWrapp}`,
            backgroundColor: `${bgColorWrapp}`,
            borderRadius: `${bdrRadius}`,
            boxShadow: `${bxShadow}`,
            cursor: `${cursorWrapp}`
        }}>
            <img src={imgCard} alt="" className="img-card" style={{
                height: `${heightImg}`,
                width: `${widthImg}`
            }}/>
            
            <div className="box-content-paragraph" style={{
                width: `${widthContent}`,
                padding: `${paddContent}`
            }}>
                <h3 className="title" style={{
                    fontSize: `${fontTitle}`
                }}>
                    {title}
                </h3>

                {/* card author */}
                <CardAuthor
                    mrgn={marginAuthor}
                    nameCard={nameCard}
                    date={date}
                    iconComment={iconComment}
                    comment={comment}
                    fontIcon={fontIcon}
                    fontAuth={fontAuth}
                />
                {/* end card author */}

                <p className="deskripsi" style={{
                    fontSize: `${fontDesk}`
                }}>
                    {deskripsi}
                </p>
            </div>
        </div>
        </>
    )
}

export default CardNews