import React, { Component } from 'react'
import CardNews from '../../cardnews/CardNews'
import CardSosmed from '../../cardsosmed/CardSosmed'
import Navbar from '../../navbar/Navbar'
import './Home.scss'
import profil from '../../../img/profil.jpeg'
import Axios from 'axios'
import img from '../../../img/2.jpeg'

class Home extends Component{

    state = {
        getCard : [],
        beritaTerkini: []
    }

    componentWillMount(){
        Axios.get("http://localhost:3001/cardshome?userId=1")
       .then((result)=>{
            this.setState({
                getCard: result.data
            })
       })
       .catch(function(error){
           console.log(error);
       })
    }

    componentDidMount(){
        Axios.get("http://localhost:3001/beritaTerkini?userId=2")
        .then((res)=>{
            this.setState({
                beritaTerkini: res.data
            })
        })
        .catch(function(error){
            console.log(error)
        })
    }

    render(){

        return(
            <>
        <div className="wrapper-home">
            {/* section one */}
            <section className="section-one">
                {/* row kiri */}
                <div className="rowKiri">
                    {/* Mapping Data */}
                    {this.state.getCard.map(e=>{
                        return (
                            <CardNews
                            key={e.id}
                            imgCard={`https://picsum.photos/100/100?${e.image}`}
                            title={e.title}
                            deskripsi={e.deskripsi}
                            nameCard={e.name}
                            date={e.date}
                            bdrBottom={"3px solid #eee"}
                            bdrLeft={"3px solid #eee"}
                            bdrRight={"3px solid #eee"}
                            paddWrapp={"20px"}
                            widthWrapp={"100%"}
                            widthImg={"30%"}
                            widthContent={"70%"}
                            paddContent={"0 0 0 20px"}
                            marginAuthor={"10px 0"}
                            fontDesk={"11pt"}
                            iconComment={"fas fa-comments"}
                            comment={"Comment"}
                            fontAuth={"11pt"}
                            fontIcon={"9pt"}
                            heightImg={"auto"}
                        />
                        )
                    })}
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

                        <img src={profil} alt="" className="img-profil"/>

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
                    {this.state.beritaTerkini.map(i=>{
                        return(
                            <CardNews
                                key={i.id}
                                imgCard={img}
                                nameCard={i.name}
                                date={i.date}
                                deskripsi={i.deskripsi}
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
                                heightImg={"200px"}
                            />
                        )
                    })}
                </div>
            </section>
            {/* end section two */}
        </div>
        </>
        )
    }
}

export default Home