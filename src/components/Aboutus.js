import React, { Component } from 'react'
import '../styles/Aboutus.css'
import '../scripts/about_app'
export default class Aboutus extends Component {
  componentDidMount() {
    // Call your specific function here
    this.slider();
  }

  slider() {
    // Your specific function logic here
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
        <div className='Aboutus'>
          <section className="uni-up-margin">
            
          <div class="slideshow">
  <div class="slide s1-abt active"></div>
  <div class="slide s2-abt"></div>
  <div class="slide s3-abt"></div>
  <div class="slide s4-abt"></div>
</div>
<div className='blue-abt-overlay'>
  <div className='principal-abt'> <h1>About Us</h1></div>
</div>
<div class="dots">
  <span class="dot active"></span>
  <span class="dot"></span>
  <span class="dot"></span>
  <span class="dot"></span>
</div>

          </section>
          <div className="were-delivering-only-exceptio-parent">
            <div className="were-delivering-only-container">
              <p className="were-delivering-only title-abt "><span style={{ color: "black" }}> DCE REFRIGERATION Pvt Ltd </span> </p>
              <p className="title-abt"> is Delivering Only
                Exceptional</p>
              <p className="title-abt reveal"><span style={{ color: "black" }}>Quality Work</span></p>


            </div>
            <div className="flex-grid-2-abt">
              <div className="img-1-abt reveal-from-left">
                <img src={require('../images/abt-1.png')} alt="" />
              </div>
              <div className="content-1-abt reveal-from-right text">
                Maintaining high quality standards and ultimate customer satisfaction DCE Refrigeration Pvt. Ltd. is a name
                synonymous with industrial refrigeration. We are proud to say that we are one of the most sought after company
                throughout the nation.
                We have been manufacturing and supplying energy efficient solutions for your refrigeration requirements for more
                than a decade.

              </div>
            </div>

            <div className='text-abt reveal'>
              DCE Refrigeration Pvt Ltd, has been providing Services in the field of <span className='bold-dark-abt'> Industrial Refrigeration, using Ammonia as Natural Refrigerant in Dairy, Brewery, Beverages, Food Processing, with customs and innovative solution for over 25 Years.</span><br/>
              In Past 25 Years we have gained credibility and customer’s trust. We are able build and retain large faithful customer base. We are committed to meeting and exceeding customers expectation by providing Quality Services, Components, innovative and energy efficient solutions. We understand every plant, business and customer has unique requirement. We strive to design a tailor-made solution to every individual need.<br/>
              Under able guidance of <span className='bold-dark-abt'>Mr. Sanjay Ethape – Chief Managing Direct</span> and his experienced team we undertake Design, Engineering, Planning, erection and Commissioning of Ammonia Refrigeration Plants. Also; we undertake revamp; Upgradation of existing plants with new technical advances to enhance the capacity and efficiency.
              We have executed over <span className='bold-dark-abt'> 300 Projects in India and neighbouring countries </span> like, Nepal, Bangladesh and Sri Lanka. You can find the exhaustive list on the Map on this site.<br/>
              As per the International Agreement encouraging the use of alternative environmentally – friendly refrigerants, Ammonia becomes more attractive alternative. GLOBAL WARMING POTENTIAL and OZONE DEPLETION POTENTIAL are both ZERO for Ammonia.<br/>

            </div>
          </div>

          <hr className="margin" />

          <h1 className="abt-title-home title-home reveal">Our Timeline</h1>
          <div className='container-timeline-img-abt' id='style-5'>
            <img className='timeline-img-abt' src={require('../images/dce_timeline_1.jpg')}></img>
          </div>


          <hr className="margin" />

          <h1 className="abt-title-home title-home reveal">Our Speciality</h1>
        <div className="abt-overflow-hid">
            <div className="abt-mega-grid-2 home-mega-grid-2 reveal">
            <div className="abt-slider-home home-slider-col2 reveal-from-right">
                    <div className="home_slider">
                        <div className="content_1-home"></div>
                    </div>
                </div>

                <hr className="abt-line-home"/>

                <div className="text home-title-col1 reveal-from-left">
                Ammonia, composed of hydrogen and nitrogen, belongs to a class of refrigerants considered natural refrigerants. Ammonia is environmentally friendly and with zero environmental impact.<br/>  
                Industrial refrigeration systems employing Ammonia as refrigerant require some special planning to help mitigate the potential health and safety hazards. The biggest risk that may occur is an ammonia leak, which is both a health and safety hazard. The most common health concerns with ammonia are skin burns and difficulty in breathing.<br/>
                The odor threshold for anhydrous ammonia is 5 to 50 parts per million (ppm) and the maximum recommended exposure is 50 ppm over an 8-hour shift.<br/>
                With trusted Expert like DCE Refrigeration Pvt Ltd, customer is assured of Safeties in the plant, precautionary measure in the design stages itself. Training to operators and manger cadre is imparted prior to commissioning of the plant and safety regulations stringently explained and followed.<br/>

                </div>
                
                
            </div>

        </div>
          


        <hr className="margin" />



          <div className="were-delivering-only-exceptio-parent reveal">
            <div className="were-delivering-only-container">
              <p className="were-delivering-only m1rem title-abt reveal-from-left">Our <span class="blue-abt">Vision</span></p>
            </div>
            <div className="flex-grid-2-abt wrap-reverse">
              <div className="content-1-abt m1right reveal-from-left text-abt">
                <p className="text-abt flex-info-2-abt reveal-from-right"><img src={require("../images/Group 593.png")} className="info-image-abt" alt="" />
                Achieve a paramount position in the field of Industrial Refrigeration as a supplier of Environment friendly refrigeration products and services.</p>
                <p className="text-abt flex-info-2-abt reveal-from-right"><img src={require("../images/Group 594.png")} className="info-image-abt" alt="" />
                Continuous development of refrigeration systems to help reduce energy footprints by incorporating latest technologies and components.</p>
              </div>
              <div className="img-1-abt reveal-from-right">
                <img src={require("../images/abt-2.png")} alt="" />
              </div>
            </div>
          </div>
         



          <hr className="margin" />


          <div className="were-delivering-only-exceptio-parent reveal">
            <div className="were-delivering-only-container">
              <p className="were-delivering-only m1rem title-abt reveal-from-left">Our <span className="blue-abt">Mission</span></p>
            </div>
            <div className="flex-grid-2-abt ">
              <div className="img-1-abt reveal-from-left">
                <img src={require("../images/abt-3.png")} alt="" />
              </div>
              <div className="content-1-abt reveal-from-right text">
                <p className="text-abt flex-info-2-abt reveal-from-right"><img src={require("../images/Group 593.png")} className="info-image-abt" alt="" />
                To optimize customer’s energy consumption through advanced refrigeration systems.</p>
                <p className="text-abt flex-info-2-abt reveal-from-right"><img src={require("../images/Group 594.png")} className="info-image-abt" alt="" />
                Through continuous improvements provide best environment friendly refrigeration products & services</p>
                <p className="text-abt flex-info-2-abt reveal-from-right"><img src={require("../images/Group 595.png")} className="info-image-abt" alt="" />
                Keep pace with latest trends & technologies in Industrial refrigeration.</p>
                <div></div>
              </div>
            </div>
          </div>

          
.




         

          <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
          <script noModule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
        </div>
      </>
    )
  }
}
