import React from 'react'
import {Carousel} from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Products from '../components/Products'
import i1 from '../Images/1.jpg'
import i2 from '../Images/2.jpg'
import i3 from '../Images/3.jpg'
import i4 from '../Images/4.jpg'
import t1 from '../Images/t1.png'
import t2 from '../Images/t2.png'
import t3 from '../Images/t3.png'
import t4 from '../Images/t4.png'


export default function Home(){
    const containerStyles = {
        height: "auto",
        backgroundColor:"#2D615D",
        margin: "0px auto",
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
      };
      
    const headingStyle = {
        height:"50px",
        padding:"10px",
        backgroundColor:"#516E01",
        color:"white",
        fontFamily:"Ariel, sans-serif",
    }


    return(
        <div style={containerStyles}>
        
            <Carousel infiniteLoop autoPlay showStatus={false} showThumbs={false} interval={3000} className="carousel">
                <div>
                    <img src={i1} alt="" />
                </div>
                <div>
                    <img src={i2} alt="" />
                </div>
                <div>
                    <img src={i3} alt="" />
                </div>
                <div>
                    <img src={i4} alt="" />
                </div>
            </Carousel>

            <div>
           <div className="news">
             <div>
                <h1>Agricultural News</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur adipisci esse fugit, non id vitae totam repudiandae quisquam laudantium molestias tempora maiores error, doloremque nulla delectus eligendi facilis amet explicabo?</p>
             </div>
            </div>


            <div className="partner-group">
                <div>
                    <h1>Our Partners</h1>
                    <div className="partners">
                        <div style={{animationDelay:"0.2s"}}><img src={t1} alt="" /></div>
                        <div style={{animationDelay:"0.5s"}}><img src={t2} alt="" /></div>
                        <div style={{animationDelay:"0.8s"}}><img src={t3} alt="" /></div>
                        <div style={{animationDelay:"1s"}}><img src={t4} alt="" /></div>
                    </div>
                </div>
            </div>
            <div className="products">
                <h1>Products</h1>
                <div className='product'>
                    <div >
                        <img src={i1} alt="" style={{
                            width:"100%",
                            height:"60%",
                        }}/>
                        <h2>pxyz</h2>
                        <a href="/"><button>Link</button></a>
                    </div>
                    <div>
                        <img src={i1} alt="" style={{
                            width:"100%",
                            height:"60%",
                        }}/>
                        <h2>pxyz</h2>
                        <a href="/"><button>Link</button></a>
                    </div>
                    <div>
                        <img src={i1} alt="" style={{
                            width:"100%",
                            height:"60%",
                        }}/>
                        <h2>pxyz</h2>
                        <a href="/"><button>Link</button></a>
                    </div>
                    <div>
                        <img src={i1} alt="" style={{
                            width:"100%",
                            height:"60%",
                        }}/>
                        <h2>pxyz</h2>
                        <a href="/"><button>Link</button></a>
                    </div>
                    <div>
                        <img src={i1} alt="" style={{
                            width:"100%",
                            height:"60%",
                        }}/>
                        <h2>pxyz</h2>
                        <a href="/"><button>Link</button></a>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}