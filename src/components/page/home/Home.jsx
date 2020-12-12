import React, { Component, useEffect, useState } from 'react'
import CardNews from '../../cardnews/CardNews'
import CardSosmed from '../../cardsosmed/CardSosmed'
import Navbar from '../../navbar/Navbar'
import './Home.scss'
import profil from '../../../img/profil.jpeg'
import Axios from 'axios'

const Home = () => {

    let [getData, setGetData] = useState([])

    useEffect(() => {
        Axios.get("http://localhost:6235/v9/blog/posts")
            // jika berhasil masuk
            .then(result => {
                const resAPI = result.data

                setGetData(resAPI.data)
            })
            .catch(err => {
                console.log('data failed :', err)
            })
    }, [])

    const [postData, setPostData] = useState({
        title: '',
        deskripsi: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault()

        fetch("http://localhost:3005/cardshome", {
            method: 'POST',
            mode: 'cors',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                title: postData.title,
                deskripsi: postData.deskripsi
            })
        })
            .then(res => {
                res.json()
            })
            .then(result => {
                console.log(result)
                setPostData(result)
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <>
            <div className="wrapper-home">
                {/* section one */}
                <section className="section-one">
                    {/* row kiri */}
                    <div className="rowKiri">
                        {/* Mapping Data */}

                        {getData ? getData.map(e => {
                            return (
                                <CardNews
                                    key={e._id}
                                    imgCard={`http://localhost:62542/${e.image}`}
                                    title={e.title}
                                    deskripsi={e.body}
                                    flxDirecttion={"column"}
                                    widthWrapp={"calc(90%/3)"}
                                    widthImg={"100%"}
                                    widthContent={"100%"}
                                    marginAuthor={"0 0 10px 0"}
                                    fontDesk={"10pt"}
                                    fontIcon={"10pt"}
                                    fontAuth={"10pt"}
                                    paddContent={"10px"}
                                    mrgnWrapp={"20px 0"}
                                    bgColorWrapp={"#fff"}
                                    bdrRadius={"5px"}
                                    cursorWrapp={"pointer"}
                                    bxShadow={"0 1px 4px -1px rgba(0,0,0,0.2)"}
                                    heightImg={"auto"}
                                    maxHeightImg={"200px"}
                                    maxHeightWrapp={"auto"}
                                />
                            )
                        }) : (
                                <div className="oke">oke</div>
                            )}
                    </div>
                    {/* end row kiri */}

                    {/* row kanan */}
                    <div className="rowKanan">
                        {/* column sosmed */}
                        <div className="column-sosmed">
                            {/* Facebook */}
                            <CardSosmed
                                bgColorSatu="#002480"
                                bgColorDua="rgba(255, 255, 255, 0.336)"
                                icon="fab fa-facebook"
                                nameSosmed="Facebook"
                            />
                            {/* end facebook */}

                            {/* Twitter */}
                            <CardSosmed
                                bgColorSatu="#002480"
                                bgColorDua="rgba(255, 255, 255, 0.336)"
                                icon="fab fa-twitter"
                                nameSosmed="Twitter"
                            />
                            {/* end Twitter */}

                            {/* Github */}
                            <CardSosmed
                                margintop="10px"
                                bgColorSatu="#002480"
                                bgColorDua="rgba(255, 255, 255, 0.336)"
                                icon="fab fa-github"
                                nameSosmed="Github"
                            />
                            {/* end github */}

                            {/* instagram */}
                            <CardSosmed
                                margintop="10px"
                                bgColorSatu="#002480"
                                bgColorDua="rgba(255, 255, 255, 0.336)"
                                icon="fab fa-instagram"
                                nameSosmed="Instagram"
                            />
                            {/* end instagram*/}
                        </div>
                        {/* end column sosmed */}

                        {/* profil */}
                        <div className="column-profil">
                            <h4 className="welcome">
                                Hi There, I am ...
                        </h4>

                            <img src={profil} alt="" className="img-profil" />

                            <h4 className="name-profil">
                                Mohamad Ridwan Apriyadi
                        </h4>

                            <p className="subject-profil">
                                Mahasiswa Jvalley dari bidang Front End Dev.
                        </p>
                        </div>
                        {/* end profil */}
                    </div>
                    {/* end row kanan */}
                </section>
                {/* end section one */}

                {/* section two */}
                <section className="section-two">
                    <h1 className="title-berita-two">
                        Berita Terkini
                </h1>

                    <div className="column-card">

                        {/* Input yg di masukkan user */}
                        {/* {userInput.map(e=>{
                        return(
                            <CardNews
                                key={e._id}
                                imgCard={`http://localhost:4000/${e.image}`}
                                title={e.title}
                                deskripsi={e.body}
                                flxDirecttion={"column"}
                                widthWrapp={"calc(90%/3)"}
                                widthImg={"100%"}
                                widthContent={"100%"}
                                marginAuthor={"0 0 10px 0"}
                                fontDesk={"10pt"}
                                fontIcon={"10pt"}
                                fontAuth={"10pt"}
                                paddContent={"10px"}
                                mrgnWrapp={"20px 0"}
                                bgColorWrapp={"#fff"}
                                bdrRadius={"5px"}
                                cursorWrapp={"pointer"}
                                bxShadow={"0 1px 4px -1px rgba(0,0,0,0.2)"}
                                heightImg={"auto"}
                                maxHeightImg={"200px"}
                                maxHeightWrapp={"auto"}
                            />
                        )
                    })} */}
                        {/* end Input yg di masukkan user */}
                    </div>
                </section>
                {/* end section two */}

                {/* Section three */}
                <div className="section-three">
                    <h2 className="judul-input">
                        Input Blog Post
                </h2>

                    <label htmlFor="label" className="label-change">
                        Text Default
                </label>

                    <input type="text" className="tes-input"
                        placeholder="tes real change text"
                    />

                    <form type="submit" className="box-input">
                        <input type="text" className="input-title inputGroup" placeholder="masukkan title"
                            onChange={(e) => {
                                setPostData({
                                    ...postData,
                                    title: e.target.value
                                })
                                console.log('input success', postData)
                            }}
                        />
                        <input type="text" className="input-body inputGroup" placeholder="masukkan body"
                            onChange={(e) => {
                                setPostData({
                                    ...postData,
                                    deskripsi: e.target.value
                                })
                                console.log('input success', postData)
                            }}
                        />
                        <input type="file" name="img" accept="image/*"
                        ></input>
                        <button className="btn-submit"
                            onClick={handleSubmit}
                        >
                            Simpan
                    </button>
                    </form>
                </div>
                {/* end section three */}
            </div>
        </>
    )
}

export default Home