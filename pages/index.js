import React, { Fragment } from 'react'
import Head from 'next/head'

import Script from 'dangerous-html/react'

import Navbar8 from '../components/navbar8'
import Hero17 from '../components/hero17'
import Features24 from '../components/features24'
import CTA26 from '../components/cta26'
import Testimonial17 from '../components/testimonial17'
import Footer4 from '../components/footer4'

const Home = (props) => {
  return (
    <>
      <div className="home-container1">
        <Head>
          <title>Hidden Cafe</title>
          <meta property="og:title" content="Hidden Cafe" />
        </Head>
        <Navbar8
          page1={
            <Fragment>
              <span className="home-text10 thq-body-large">Page One</span>
            </Fragment>
          }
          page2={
            <Fragment>
              <span className="home-text11 thq-body-large">Page Two</span>
            </Fragment>
          }
          page3={
            <Fragment>
              <span className="home-text12 thq-body-large">Page Three</span>
            </Fragment>
          }
          page4={
            <Fragment>
              <span className="home-text13 thq-body-large">Page Four</span>
            </Fragment>
          }
          action1={
            <Fragment>
              <span className="home-text14">MENU</span>
            </Fragment>
          }
          action2={
            <Fragment>
              <span className="home-text15">CONTACT US</span>
            </Fragment>
          }
          logoSrc="/logo%202-1500h.png"
          page1Description={
            <Fragment>
              <span className="home-text16 thq-body-small">
                Page One Description
              </span>
            </Fragment>
          }
          page2Description={
            <Fragment>
              <span className="home-text17 thq-body-small">
                Page Two Description
              </span>
            </Fragment>
          }
          page3Description={
            <Fragment>
              <span className="home-text18 thq-body-small">
                Page Three Description
              </span>
            </Fragment>
          }
          page4Description={
            <Fragment>
              <span className="home-text19 thq-body-small">
                Page Four Description
              </span>
            </Fragment>
          }
        ></Navbar8>
        <Hero17
          action1={
            <Fragment>
              <span className="home-text20 thq-body-small">MENU</span>
            </Fragment>
          }
          action2={
            <Fragment>
              <span className="home-text21 thq-body-small">VIEW ON MAP</span>
            </Fragment>
          }
          content1={
            <Fragment>
              <span className="home-text22 thq-body-large">
                Discover Your Favorite Breakfast and Lunch Café, Tucked Away at
                the Base of Camarillo Springs, Camarillo.
              </span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="home-text23 thq-heading-1">
                <span>A </span>
                <span className="home-text25">Hidden Gem</span>
                <span> in Camarillo</span>
              </span>
            </Fragment>
          }
          content11={
            <Fragment>
              <span className="home-text27 thq-body-large">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                commodo diam libero vitae erat.
              </span>
            </Fragment>
          }
          image1Src="/2016-05-07-1500w.jpg"
          image2Src="/fried%20chicken-1500w.jpg"
          image3Src="/eggs_benedict-1500w.jpg"
          image4Src="/chilaquiles-1500w.jpg"
          image5Src="/cinnamon%20roll-1500w.jpg"
          image6Src="/mimosas-1500w.jpg"
          image7Src="/cfs-1500w.jpg"
          image8Src="/cheese_burger-1500w.jpg"
          image9Src="/chicken_waffles-1500w.jpg"
          image10Src="/portuguese%20sausage-1500w.jpg"
          image11Src="/bacon_eggs_1-1500w.jpg"
          image12Src="/sausage_eggs-1500w.jpg"
        ></Hero17>
        <Features24
          feature1Title={
            <Fragment>
              <span className="home-text28 thq-heading-2">ABOUT US</span>
            </Fragment>
          }
          feature2Title={
            <Fragment>
              <span className="home-text29 thq-heading-2">Feature #2</span>
            </Fragment>
          }
          feature3Title={
            <Fragment>
              <span className="home-text30 thq-heading-2">Feature #3</span>
            </Fragment>
          }
          feature1ImgSrc="/lattestones-1400w.jpg"
          feature1Description={
            <Fragment>
              <span className="home-text31 thq-body-small">
                <span>
                  Hidden Cafe is a charming family-run cafe nestled in the
                  foothill of Camarillo Springs. Specializing in a unique blend
                  of classic breakfast dishes with a tropical touch, owners
                  Jesse and Joanna bring over three decades of experience in the
                  culinary world. Their Chamorro heritage adds a special flavor
                  to the community&apos;s dining scene.
                </span>
                <br></br>
              </span>
            </Fragment>
          }
        ></Features24>
        <CTA26
          action1={
            <Fragment>
              <span className="home-text34">Order Now</span>
            </Fragment>
          }
          content1={
            <Fragment>
              <span className="home-text35 thq-body-large">
                Whether you&apos;re purchasing a gift for a friend or family
                member or simply contributing to a local cause, order your
                E-Gift Cards now!
              </span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="home-text36 thq-heading-2">
                Order Your E-Gift Cards Now!
              </span>
            </Fragment>
          }
        ></CTA26>
        <div id="directions" className="home-container2">
          <h1 className="home-text37">LOCATION</h1>
          <div className="home-container3">
            <div className="home-container4">
              <Script
                html={`<div class="mapouter"><div class="gmap_canvas"><iframe class="gmap_iframe" width="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=Hidden Cafe&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe><a href="https://embed-googlemap.com">embed-googlemap.com</a></div><style>.mapouter{position:relative;text-align:right;width:100%;height:400px;}.gmap_canvas {overflow:hidden;background:none!important;width:100%;height:400px;}.gmap_iframe {height:400px!important;}</style></div>`}
              ></Script>
            </div>
          </div>
        </div>
        <Testimonial17
          review1={
            <Fragment>
              <span className="home-text38 thq-body-small">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla.
              </span>
            </Fragment>
          }
          review2={
            <Fragment>
              <span className="home-text39 thq-body-small">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla.
              </span>
            </Fragment>
          }
          review3={
            <Fragment>
              <span className="home-text40 thq-body-small">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla.
              </span>
            </Fragment>
          }
          review4={
            <Fragment>
              <span className="home-text41 thq-body-small">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla.
              </span>
            </Fragment>
          }
          content1={
            <Fragment>
              <span className="home-text42 thq-body-small">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla.
              </span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="home-text43 thq-heading-2">Testimonials</span>
            </Fragment>
          }
          author1Name={
            <Fragment>
              <span className="home-text44 thq-body-large">Author Name</span>
            </Fragment>
          }
          author2Name={
            <Fragment>
              <span className="home-text45 thq-body-large">Author Name</span>
            </Fragment>
          }
          author3Name={
            <Fragment>
              <span className="home-text46 thq-body-large">Author Name</span>
            </Fragment>
          }
          author4Name={
            <Fragment>
              <span className="home-text47 thq-body-large">Author Name</span>
            </Fragment>
          }
          author1Position={
            <Fragment>
              <span className="home-text48 thq-body-small">
                Position, Company name
              </span>
            </Fragment>
          }
          author2Position={
            <Fragment>
              <span className="home-text49 thq-body-small">
                Position, Company name
              </span>
            </Fragment>
          }
          author3Position={
            <Fragment>
              <span className="home-text50 thq-body-small">
                Position, Company name
              </span>
            </Fragment>
          }
          author4Position={
            <Fragment>
              <span className="home-text51 thq-body-small">
                Position, Company name
              </span>
            </Fragment>
          }
          rootClassName="testimonial17root-class-name"
        ></Testimonial17>
        <Footer4 rootClassName="footer4root-class-name"></Footer4>
      </div>
      <style jsx>
        {`
          .home-container1 {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            background-color: var(--dl-color-gray-black);
          }
          .home-text10 {
            display: inline-block;
            font-style: normal;
            font-weight: 600;
          }
          .home-text11 {
            display: inline-block;
            font-style: normal;
            font-weight: 600;
          }
          .home-text12 {
            display: inline-block;
            font-style: normal;
            font-weight: 600;
          }
          .home-text13 {
            display: inline-block;
            font-style: normal;
            font-weight: 600;
          }
          .home-text14 {
            display: inline-block;
          }
          .home-text15 {
            display: inline-block;
          }
          .home-text16 {
            display: inline-block;
          }
          .home-text17 {
            display: inline-block;
          }
          .home-text18 {
            display: inline-block;
          }
          .home-text19 {
            display: inline-block;
          }
          .home-text20 {
            display: inline-block;
          }
          .home-text21 {
            display: inline-block;
          }
          .home-text22 {
            color: rgb(247, 243, 243);
            display: inline-block;
          }
          .home-text23 {
            color: rgb(255, 255, 255);
            display: inline-block;
          }
          .home-text25 {
            color: #e84b4b;
          }
          .home-text27 {
            display: inline-block;
          }
          .home-text28 {
            color: rgb(232, 75, 75);
            display: inline-block;
          }
          .home-text29 {
            display: inline-block;
          }
          .home-text30 {
            display: inline-block;
          }
          .home-text31 {
            color: rgb(255, 255, 255);
            display: inline-block;
          }
          .home-text34 {
            display: inline-block;
          }
          .home-text35 {
            display: inline-block;
          }
          .home-text36 {
            display: inline-block;
          }
          .home-container2 {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            padding: var(--dl-space-space-threeunits);
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-text37 {
            color: rgb(232, 75, 75);
            font-family: 'Impact';
          }
          .home-container3 {
            width: 100%;
            height: 400px;
            padding: var(--dl-space-space-twounits);
          }
          .home-container4 {
            display: contents;
          }
          .home-text38 {
            display: inline-block;
            text-align: left;
          }
          .home-text39 {
            display: inline-block;
            text-align: left;
          }
          .home-text40 {
            display: inline-block;
            text-align: left;
          }
          .home-text41 {
            display: inline-block;
            text-align: left;
          }
          .home-text42 {
            display: inline-block;
          }
          .home-text43 {
            color: #e84b4b;
            display: inline-block;
          }
          .home-text44 {
            display: inline-block;
          }
          .home-text45 {
            display: inline-block;
          }
          .home-text46 {
            display: inline-block;
          }
          .home-text47 {
            display: inline-block;
          }
          .home-text48 {
            display: inline-block;
          }
          .home-text49 {
            display: inline-block;
          }
          .home-text50 {
            display: inline-block;
          }
          .home-text51 {
            display: inline-block;
          }
          @media (max-width: 479px) {
            .home-text23 {
              text-align: left;
            }
            .home-text25 {
              color: #e84b4b;
            }
            .home-container3 {
              height: 400px;
              padding: var(--dl-space-space-halfunit);
            }
          }
        `}
      </style>
    </>
  )
}

export default Home
