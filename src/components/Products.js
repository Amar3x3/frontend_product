import React, { Component } from 'react'
import '../styles/Products.css'
import '../scripts/products_app'
import axios from 'axios'
export default class Products extends Component {
    constructor(props){
        super(props);
        this.state={
            products :[],
            final :[]
        };
        this.getImage=this.getImage.bind(this);
    }
    componentDidMount(){
    axios.get('http://127.0.0.1:8080/productscontent/allproducts')
      .then((response)=> {
        if(response.data.length >= 0){
          this.setState({products:response.data});         
        }
        this.getImage();
      })
      .catch((error)=>{
        console.log(error);
      });

    }
    getImage(){
        Promise.all(
            this.state.products.map((p,idx) =>
            axios
              .get(`http://127.0.0.1:8080/productscontent/download/${p._id}`, { responseType: 'blob' })
              .then((response) => ({ p, url: URL.createObjectURL(response.data) }))
              .then((final) => {
                this.setState((prevState) => ({
                  final: [...prevState.final, final]
                }));
              })
              .catch((error) => {
                console.error(error);
              })
          ))
          
    }

   
    componentDidMount(){
        this.slider();
    }
      slider() {
        
        console.log('Component loaded!');
        const slides = document.querySelectorAll('.slide');
        const dots = document.querySelectorAll('.dot');
        let currentSlide = 0;
        function showSlide(index) {
          slides.forEach((slide, i) => {
            if (i === index) {
              slide.classList.add('active');
            } else {
              slide.classList.remove('active');
            }
          });
      
          dots.forEach((dot, i) => {
            if (i === index) {
              dot.classList.add('active');
            } else {
              dot.classList.remove('active');
            }
          });
        }
      
        function nextSlide() {
          currentSlide = (currentSlide + 1) % slides.length;
          showSlide(currentSlide);
        }
      
        dots.forEach((dot, i) => {
          dot.addEventListener('click', function() {
            currentSlide = i;
            showSlide(currentSlide);
          });
        });
      
        setInterval(nextSlide, 3000);
    
    
      }
    
  render() {
    
    return (
      <>
        <div className='Products'>
        <div className="products-ex uni-top-margin">

        <div class="slideshow">
  <div class="slide s1-prod active"></div>
  <div class="slide s2-prod"></div>
  <div class="slide s3-prod"></div>
  <div class="slide s4-prod"></div>
</div>
<div className='blue-abt-overlay'>
  <div className='principal-abt'> <h1>Our Products</h1></div>
</div>
<div class="dots">
  <span class="dot active"></span>
  <span class="dot"></span>
  <span class="dot"></span>
  <span class="dot"></span>
</div>
<div className="container-prod">




    
        <div className="blog-post">
            <div className="blog-post_img">
                <img src={require("../images/pro1.jpg")} alt=""/>
            </div>
            <div className="blog-post_info">
                <h1 className="blog-post_title title-product reveal-from-right">DCE CHILLER</h1>
                <p className="blog-post_text text reveal-from-left">The state of the art DCE chiller combines exceptional
                    efficiency, quality components, and performance monitoring to ensure the lowest total cost of
                    ownership. The DCE chiller delivers the benefits of industrial-quality ammonia refrigeration in
                    a convenient and factory built package so that the uncertainty of synthetic HFC refrigerants can
                    be easily avoided with a future-proof solution. The DCE chiller is an excellent solution and the
                    natural choice for temperature controlled storage, food production, process cooling, and more.
                    Because it uses a very low charge of ammonia in an outdoor package, it offers an extremely safe
                    option that is easy to install and easy to operate. The DCE chiller has been developed
                    specifically to minimize the refrigeration setup.</p>
                <a href="https://drive.google.com/file/d/18ElWwo7npKlgk1CXxXMsw-x48d2Mo3Gr/view?usp=share_link"
                    className="blog-post_cta reveal-from-left">Read More</a>
                <a href="../images/DCE-Chiller.pdf" className="blog-post_cta reveal-from-right">Download</a>
            </div>
        </div>

        {this.state.final.map((ele,idx)=>{
                    return(
                      <>
            <div key={ele._id} className="blog-post">
            <div className="blog-post_img">
                <img src={ele.url} alt="Not found"/>
            </div>
            <div className="blog-post_info">
                <h1 className="blog-post_title title-product reveal-from-right">{ele.title}</h1>
                <p className="blog-post_text text reveal-from-left">{ele.description}</p>
                <a href={ele.url}
                    className="blog-post_cta reveal-from-left">Read More</a>
                <a href="../images/DCE-Chiller.pdf" className="blog-post_cta reveal-from-right">Download</a>
            </div>
        </div>
                      </>
                    );
            } )} 


        {/* <div className="blog-post">
            <div className="blog-post_img">
                <img src={require("../images/pro1.jpg")} alt=""/>
            </div>
            <div className="blog-post_info">
                <h1 className="blog-post_title title-product reveal-from-right">DESUPERHEATER</h1>
                <p className="blog-post_text text reveal-from-left">Energy costs have increased significantly over the past
                    few years. In every industry, energy bill is being monitored closely and opportunities explored
                    to reduce it. Desuperheater is an easy solution for instant improvements in your energy bill. It
                    utilizes the waste heat from refrigeration to generate hot water. <br/> <br/> Generated hot water
                    can be used in following application: <br/>• Boiler feed water<br/>• Raw Syrup preparation<br/>•
                    CIP (Cleaning in place)<br/>• Pasteurization<br/>• Washing of cans/ utensils<br/>• Anywhere in
                    process where temperature range is from 30 °C to 70 °C is required </p>
                <a href="https://drive.google.com/file/d/1IEpa2YRj_k66Kl5TEzSByqNxylj1OI7S/view?usp=share_link"
                    className="blog-post_cta reveal-from-left">Read More</a>
                <a href="../images/DESUPERHEATER.pdf" className="blog-post_cta reveal-from-right">Download</a>
            </div>
        </div>

        <div className="blog-post">
            <div className="blog-post_img">
                <img src={require("../images/pro1.jpg")} alt=""/>
            </div>
            <div className="blog-post_info">
                <h1 className="blog-post_title title-product reveal-from-right">CIP(CLEANING IN PLACE) UNIT</h1>
                <p className="blog-post_text text reveal-from-left">Clean-in-place (CIP) is a method of cleaning the
                    interior surfaces of pipes, vessels, process equipment, filters and associated fittings, without
                    disassembly. The benefit to industries that use CIP is that the cleaning is faster, less
                    labor-intensive and more repeatable, and poses less of a chemical exposure risk to people. DCE
                    provides a portable CIP unit for effective cleaning of your semi welded heat exchangers.
                    <br/><br/> ADVANTAGES: <br/> • Cleaning is faster <br/>• Less labour with safety<br/>• Less chemical
                    exposure risk<br/>• Easily carried out frequently<br/>• Reverse and forward flow without changing
                    connections<br/>• No need to open PHE<br/>• Higher energy efficiency<br/>• Longer life of PHE<br/>•
                    No need of frequent replacement of Gaskets.
                </p>
                <a href="https://drive.google.com/file/d/1IHFeyN4gLdcDqHyNOSLSs6rJNTZhcH50/view?usp=share_link"
                    className="blog-post_cta reveal-from-left">Read More</a>
                <a href="../images/CIP-BROCHURE.pdf" className="blog-post_cta reveal-from-right">Download</a>
            </div>
        </div>

        <div className="blog-post">
            <div className="blog-post_img">
                <img src={require("../images/pro1.jpg")} alt=""/>
            </div>
            <div className="blog-post_info">
                <h1 className="blog-post_title title-product reveal-from-right">OIL CHARGING UNIT FOR COMPRESSORS</h1>
                <p className="blog-post_text text reveal-from-left">During the operation of industrial refrigeration units
                    it is necessary to perform scheduled and non-scheduled compressor oil change. This procedure is
                    rather difficult, especially if it is necessary to warm-up the compressor or if there is no oil
                    pump. DCE offers excellent opportunity that allows escaping any problems connected with oil
                    change. The portable unit is easy to operate and maintain.<br/><br/>ADVANTAGES:<br/>• Saves efforts
                    <br/>• Easy oil charging<br/>• Safe and comfortable<br/>• Entry of air in the system is avoided</p>
                <a href="https://drive.google.com/file/d/12R-CaHtqRt38rA10P9JR_eksfZMkPHr9/view?usp=sharing" className="blog-post_cta reveal-from-left">Read More</a>
                <a href="../images/OIL-CHARGING.pdf" className="blog-post_cta reveal-from-right">Download</a>
            </div>
        </div> */}

    </div>
</div>

        </div>
      </>
    )
  }
}
