import Link from "next/link";
import Image from "next/image";
import style from "/styles/head.module.scss"
import { useState } from "react";


export default function Techno(){

  const [gauche, setGauche] = useState(false)
  const [close, setClose] = useState(false)

  return(
    <>
      
      {/* -----------------------entete------------------ */}
      <div className={style.header}>
        <Image src = '/assets/fd.png' width={1024} height={720} className={style.img_fond}/>
        <div className={style.hamburger} onClick={() => setClose(!close)}>
          <div className={`${close? style.close1:style.line1}`}></div>
          <div className={`${close? style.go:style.line2}`}></div>
          <div className={`${close? style.close2:style.line2}`}></div>
        </div>
        <nav className={style.navigation}>
          <ul className={`${close? style.ul:style.back}`}>
            <li className={style.li}><Link href='/' className={style.liens}>Solutions et services</Link></li>
            <li className={style.li}><Link href='/' className={style.liens}>Des produits</Link></li>
            <li className={style.li}><Link href='/' className={style.liens}>Les technologies</Link></li>
            <li className={style.li}><Link href='/' className={style.liens}>Ressources humaines</Link></li>
            <li className={style.li}><Link href='/' className={style.liens}>Institutionnel</Link></li>
          </ul>
          <button className = {style.last}><Link href='/' className={style.liens}>Communication</Link></button>
        </nav>

        <div className={style.textes}>
            <h1 className={style.h1}>23 ans d'expérience<br/>Dans les technologies</h1>
            <p className={style.p_head}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam illo atque<br/>laboriosam repellat ipsum est nostrum iste explicabo corrupti?<br/>Officiis fugiat facere id aperiam dolorum sint temporibus quos nulla iste?
            </p>

            <div className={style.mouv}>
              <p className={`${gauche ? style.p1_ferm : style.p1}`}>cliquez sur le boutton</p>
              <button onClick={() => setGauche(!gauche)} className={`${gauche ? style.gauche : style.btn1}`}>inscription</button>
            </div>
        </div>
      </div>


      {/* --------------1er body------------------ */}
      <section className={style.section1}>
          <h3 className='display-5'>gestion de la qualité et des processus</h3>
          <p className='h5'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam illo atque
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam illo atque<br/>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam illo atqueLorem ipsum dolor sit amet <br/>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam illo atque
          </p>
          <div className={style.grp1}>
              <div className='row text-center'>
              <div className='col-md-6 col-xl-4'>
                <Image src='/assets/Group 29.png' width={67} height={67} className={style.logo}/>
                <h3 className='h3'>Crown</h3>
                <p className='h5'> Lorem ipsum dolor sit amet consectetur <br/>adipisicing elit.Aperiam illo atque<br/> Lorem ipsum dolor sit amet consectetur </p>
              </div>

              <div className='col-md-6 col-xl-4'>
                <Image src='/assets/Group 32.png' width={67} height={67} className={style.logo}/>
                <h3 className='h3'>Figma Logo</h3>
                <p className='h5'> Lorem ipsum dolor sit amet consectetur <br/>adipisicing elit.Aperiam illo atque<br/> Lorem ipsum dolor sit amet consectetur</p>
              </div>

              <div className='col-md-6 col-xl-4'>
                <Image src='/assets/Group 30.png' width={67} height={67} className={style.logo}/>
                <h3 className='h3'>Chart Bar</h3>
                <p className='h5'> Lorem ipsum dolor sit amet consectetur <br/>adipisicing elit.Aperiam illo atque<br/> Lorem ipsum dolor sit amet consectetur</p>
              </div>

              <div className='col-md-6 col-xl-4'>
                <Image src='/assets/Group 31.png' width={67} height={67} className={style.logo}/>
                <h3 className='h3'>Chart Pie Slice</h3>
                <p className='h5'> Lorem ipsum dolor sit amet consectetur <br/>adipisicing elit.Aperiam illo atque<br/> Lorem ipsum dolor sit amet consectetur </p>
              </div>

              <div className='col-md-6 col-xl-4'>
                <Image src='/assets/Star2.png' width={67} height={67} className={style.logo}/>
                <h3 className='h3'>Star</h3>
                <p className='h5'> Lorem ipsum dolor sit amet consectetur <br/>adipisicing elit.Aperiam illo atque<br/> Lorem ipsum dolor sit amet consectetur</p>
              </div>

              <div className='col-md-6 col-xl-4'>
                <Image src='/assets/File2.png' width={67} height={67}className={style.logo}/>
                <h3 className='h3'>File</h3>
                <p className='h5'> Lorem ipsum dolor sit amet consectetur <br/>adipisicing elit.Aperiam illo atque<br/> Lorem ipsum dolor sit amet consectetur</p>
              </div>
            </div>
          </div>
          
      </section>
      
      <section className={style.section2}>
          <div className={style.bg_img}>
            <h3 className='display-5'>Que proposons-nous avec la gestion des tests ?</h3>
            <p className='h5'>Solutions prises en charge par nos soins</p>

            <div className={style.contient}>
              <div className={`row ${style.row}`}>
              <p className='col-md-2'>
              Nous augmentons la <br/>Qualité du logiciel
              </p>

              <div className='col-md-1'> <Image src ='/assets/Stats-Group 33.png' width={32} height={32} className={style.fleche}/></div>
            
              <p className='col-md-2'>
                Nous déterminons <br/>les erreurs possibles
              </p>

              <div className='col-md-1'> <Image src ='/assets/Stats-Group 33.png' width={32} height={32} className={style.fleche}/></div>

              <p className='col-md-2'>
                Nous empêchons <br/>les risques possibles
              </p>

              <div className='col-md-1'> <Image src ='/assets/Stats-Group 33.png' width={32} height={32} className={style.fleche}/></div>

              <p className='col-md-3'>
                Nous offrons des économies <br/>En temps et en coût
              </p>
            </div>
            </div>
          </div>
      </section>

      <section className={`container ${style.section3}`}>
          <div className={`row ${style.row}`}>
            <div className={`col-lg-4 ${style.grp3}`}>
              <p className={`display-3 ${style.titre3}`}>Gestion de la qualité et des processus</p>
              <p className={`h6 ${style.p3}`}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam illo atque
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam illo atque<br/>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam illo atqueLorem ipsum dolor sit amet <br/>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam illo atque
              </p>
         

              <button className={`btn btn-danger ${style.bnt3}`}>souscrire</button>
            </div>
          
            <Image className="col-lg-4" src='/assets/Illustration.jpg' width={504} height={480}/>

            <div className={`col-lg-4 ${style.grps3}`}>
              <p className={`display-3 ${style.titre3}`}>Gestion de la qualité et des processus</p>
              <p className={`h6 ${style.p3}`}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam illo atque
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam illo atque<br/>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam illo atqueLorem ipsum dolor sit amet <br/>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam illo atque
              </p>
         

              <button className={`btn btn-danger ${style.bnt3}`}>souscrire</button>
            </div>

          </div>

          <div className={`row ${style.row}`}>
            <Image className="col-lg-4" src='/assets/Illustration2.jpg' width={504} height={480}/>

            <div className={`col-lg-4 ${style.gp3}`}>
                <p className={`display-3 ${style.titre3}`}>Gestion et analyse des tests</p>
                <p className={`h6 ${style.p3}`}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam illo atque
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam illo atque<br/>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam illo atqueLorem ipsum dolor sit amet <br/>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam illo atque
                </p>

              <button className={`btn btn-danger ${style.bnt3}`}>soumettre</button>
            </div>
          </div>

      </section>

      <section className={style.section4}>
        <div className={style.title}>
          <p className={style.p_title}>Nos références</p>
          <p className={style.p_title2}>Nos partenaires commerciaux qui nous font confiance et travaillent avec nous</p>
        </div>

        <div className={style.partenaires}>
          <div className="col-xl-3 "> <Image src='/assets/logo1.png' width={170} height ={96} className={style.part_img}/></div>

          <div className={`col-xl-2 ${style.intervalle}`}>
            <div> <Image src='/assets/Google Logo.png' width={170} height ={96} className={style.part_img}/></div>
            <div> <Image src='/assets/BookMyShow Logo.png' width={170} height ={96} className={style.part_img}/></div>
          </div>

          <div className={`col-xl-2 ${style.intervalle}`}>
            <div> <Image src='/assets/logo2.png' width={170} height ={96} className={style.part_img}/></div>
            <div> <Image src='/assets/logo3.png' width={170} height ={96} className={style.part_img}/></div>
            <div className={style.interne}> <Image src='/assets/logo4.png' width={170} height ={96} className={style.part_img}/></div>
          </div>

          <div className={`col-xl-2 ${style.intervalle}`}>
            <div> <Image src='/assets/logo5.png' width={170} height ={96} className={style.part_img}/></div>
            <div> <Image src='/assets/logo6.png' width={170} height ={96} className={style.part_img}/></div>
          </div>

          <div className='col-xl-2'> <Image src='/assets/logo7.png' width={170} height ={96} className={style.part_img}/></div>
        </div>
      </section>

      <section className={style.section5}>
           <Image src ='/assets/user.png' width={120} height={120}/>
           <p className={style.p_user}>Contactez-nous</p>
           <p className={style.p_user2}>Contactez-nous pour obtenir des informations<br/>détaillées sur nos solutions, services et produits.</p>
           <button className={`btn btn-danger ${style.btn_user}`}>Contactez-nous</button>
      </section>

      <div className={style.footer}>
          <div className={`d-flex ${style.table}`}>
              <div  className={style.col}>
                  <p className={style.row}>Solutions et Services</p>
                  <div className={style.scope}>Développement de logiciels</div>
                  <div className={style.scope}>Externalisation</div>
                  <div className={style.scope}>Gestion de la qualité et des processus</div>
                  <div className={style.scope}>Conseil</div>
                </div>

                <div className={style.col} >
                  <p className={style.row}>Des produits</p>
                  <div className={style.scope}>Système de gestion de l'éducation</div>
                  <div className={style.scope}>Système de gestion du capital humain</div>
                  <div className={style.scope}>Système de gestion de la relation client</div>
                </div>


                <div className={style.col}>
                  <p className={style.row}>Institutionnel</p>
                  <div className={style.scope}>à propos de nous</div>
                  <div className={style.scope}>Documents et compétences</div>
                </div>

                <div className={style.col}>
                  <p className={style.row}>Communication</p>
                  <div className={style.scope}>Formulaire de demande d'informations</div>
                </div>
          </div>

          <div className={style.laster}>
            <p className={style.p_foot}>©Copyright 15/03/23-by Fred@zDucdev</p>
            <div className={`d-flex ${style.reseau}`}>
              <Image src = '/assets/face.png' width={32} height={32}/>
              <Image src = '/assets/twit.png' width={32} height={32}/>
              <Image src = '/assets/insta.png' width={32} height={32}/>
              <Image src = '/assets/link.png' width={32} height={32}/>
            </div>
          </div>
      </div>
    </>
  )
}