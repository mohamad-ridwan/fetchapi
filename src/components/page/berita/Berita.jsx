import React, { useState } from 'react'
import CardAuthor from '../../cardauthor/CardAuthor'
import './Berita.scss'
import imgBerita from '../../../img/profil.jpeg'

const Berita = ()=>{

    let [hover, setHover] = useState(false)
    
    return(
        <>
        <div className="wrapper-berita">
            <h2 className="title-berita">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea, labore?
            </h2>

            <div className="container-img">
                <img src={imgBerita} alt="" className="img-berita"/>
            </div>
            
            
            {/* card author */}
            <div className="box-author">
            <CardAuthor
                nameCard={"Mohamad Ridwan Apriyadi"}
                date={"07:00 AM"}
            />
            </div>
            {/* end card author */}

            <p className="desc-berita">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur id debitis laborum assumenda quia nostrum quisquam non explicabo reprehenderit laboriosam!
                <br/>
                <br/>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat dolorem ducimus consectetur sed unde asperiores, dolores veniam sit quis laudantium, atque necessitatibus expedita magnam nulla deserunt et rerum eaque saepe!
                <br/><br/>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta sunt dicta iusto illo molestias consequatur omnis commodi minus suscipit qui! Necessitatibus officia tempore culpa nam amet dolore voluptatibus aut! Deserunt autem repudiandae libero atque sit maiores officiis unde laboriosam quasi eaque. Est enim eaque dolore cupiditate, quae rerum ipsa quod?
                <br/><br/>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis perferendis accusamus, facere sapiente optio molestias quasi tempore deserunt labore dolore blanditiis molestiae voluptatem adipisci, reiciendis possimus ratione consequuntur repellat vel dolor nisi tempora consequatur voluptatibus dolorem. Voluptatibus quam consequuntur, natus voluptatem qui necessitatibus? Provident aspernatur voluptatem quae possimus illo nemo officia cumque, unde odit quia sapiente incidunt! Deserunt sunt dolores veritatis architecto sit reprehenderit, ratione aliquam unde. Eum accusamus quas ex eligendi neque, facilis possimus sapiente libero nobis, tempore delectus commodi beatae quia. Ab perspiciatis officia dignissimos ipsam deserunt temporibus! Voluptatem possimus officiis tempora fuga reprehenderit necessitatibus eveniet deleniti. Error?
                <br/><br/>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga saepe voluptatibus placeat officiis autem aspernatur magnam tempore, temporibus eveniet dolorum omnis debitis? Nostrum quibusdam facilis, ipsam officia mollitia nihil quasi assumenda numquam, itaque ducimus incidunt error exercitationem cupiditate. Esse adipisci possimus porro, omnis soluta eos iste minima blanditiis sequi, necessitatibus consequuntur in nulla ipsum amet. Iusto, tenetur architecto! Eveniet, odit iste laborum nam quas blanditiis omnis quo id enim qui nulla cupiditate suscipit dignissimos voluptas quos provident ad! Molestias deleniti quo quae iusto facere. Similique facere eius qui consequatur, voluptatum, minus amet perferendis assumenda laudantium eligendi modi exercitationem ipsam impedit dolore, voluptate illum! Praesentium labore modi voluptate optio id rem repellendus, repellat animi ut, aliquam officia, suscipit dignissimos aliquid? Maiores, ex consequuntur repudiandae nihil exercitationem quia labore itaque in rem temporibus nobis fugiat vitae unde, quas saepe veritatis est modi impedit commodi, id consequatur. Laborum nulla nostrum, maxime similique atque natus praesentium, optio ullam, cum quos provident ipsum temporibus quisquam unde vitae minima ex pariatur ratione maiores. Est minus praesentium ratione alias laudantium, officiis blanditiis maiores nam fugit placeat, ipsa voluptatem, voluptas mollitia error tenetur iure autem repellendus! Quidem nulla et minus expedita. Quam quaerat culpa, obcaecati eius voluptates voluptate.
            </p>
        </div>
        </>
    )
}

export default Berita