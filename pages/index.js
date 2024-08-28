import React, { Fragment } from 'react'
import Head from 'next/head'

import Navbar8 from '../components/navbar8'
import Hero17 from '../components/hero17'
import Features24 from '../components/features24'
import CTA26 from '../components/cta26'
import Testimonial17 from '../components/testimonial17'
import Footer4 from '../components/footer4'

const Home = (props) => {
  return (
    <>
      <div className="home-container">
        <Head>
          <title>Hidden Cafe</title>
          <meta property="og:title" content="Hidden Cafe" />
        </Head>
        <Navbar8
          link1={
            <Fragment>
              <span className="home-text10 thq-link thq-body-small">
                Link 1
              </span>
            </Fragment>
          }
          link2={
            <Fragment>
              <span className="home-text11 thq-link thq-body-small">
                Link 2
              </span>
            </Fragment>
          }
          link3={
            <Fragment>
              <span className="home-text12 thq-link thq-body-small">
                Link 3
              </span>
            </Fragment>
          }
          link4={
            <Fragment>
              <span className="home-text13 thq-link thq-body-small">
                Link 4
              </span>
            </Fragment>
          }
          page1={
            <Fragment>
              <span className="home-text14 thq-body-large">Page One</span>
            </Fragment>
          }
          page2={
            <Fragment>
              <span className="home-text15 thq-body-large">Page Two</span>
            </Fragment>
          }
          page3={
            <Fragment>
              <span className="home-text16 thq-body-large">Page Three</span>
            </Fragment>
          }
          page4={
            <Fragment>
              <span className="home-text17 thq-body-large">Page Four</span>
            </Fragment>
          }
          action1={
            <Fragment>
              <span className="home-text18">MENU</span>
            </Fragment>
          }
          action2={
            <Fragment>
              <span className="home-text19">CONTACT US</span>
            </Fragment>
          }
          logoSrc="/logo%202-1500h.png"
          page1Description={
            <Fragment>
              <span className="home-text20 thq-body-small">
                Page One Description
              </span>
            </Fragment>
          }
          page2Description={
            <Fragment>
              <span className="home-text21 thq-body-small">
                Page Two Description
              </span>
            </Fragment>
          }
          page3Description={
            <Fragment>
              <span className="home-text22 thq-body-small">
                Page Three Description
              </span>
            </Fragment>
          }
          page4Description={
            <Fragment>
              <span className="home-text23 thq-body-small">
                Page Four Description
              </span>
            </Fragment>
          }
        ></Navbar8>
        <Hero17
          action1={
            <Fragment>
              <span className="home-text24 thq-body-small">MENU</span>
            </Fragment>
          }
          action2={
            <Fragment>
              <span className="home-text25 thq-body-small">DIRECTIONS</span>
            </Fragment>
          }
          content1={
            <Fragment>
              <span className="home-text26 thq-body-large">
                Discover Your Favorite Breakfast and Lunch Café, Tucked Away at
                the Base of Camarillo Springs, Camarillo.
              </span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="home-text27 thq-heading-1">
                <span>
                  The
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="home-text29">Hidden Gem</span>
                <span> of Camarillo</span>
              </span>
            </Fragment>
          }
          content11={
            <Fragment>
              <span className="home-text31 thq-body-large">
                <span className="home-text32">HOURS OF OPERATION:</span>
                <br className="home-text33"></br>
                <span className="home-text34">SUNDAY: 7AM - 2PM</span>
                <br className="home-text35"></br>
                <span className="home-text36">MONDAY: CLOSED</span>
                <br className="home-text37"></br>
                <span className="home-text38">TUESDAY: 7AM - 2PM</span>
                <br className="home-text39"></br>
                <span className="home-text40">WEDNESDAY: 7AM - 2PM</span>
                <br className="home-text41"></br>
                <span className="home-text42">THURSDAY: 7AM - 2PM</span>
                <br className="home-text43"></br>
                <span className="home-text44">FRIDAY: 7AM - 2PM</span>
                <br className="home-text45"></br>
                <span className="home-text46">SATURDAY: 7AM - 2PM</span>
                <br className="home-text47"></br>
                <br className="home-text48"></br>
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
              <span className="home-text49 thq-heading-2">ABOUT US</span>
            </Fragment>
          }
          feature2Title={
            <Fragment>
              <span className="home-text50 thq-heading-2">Feature #2</span>
            </Fragment>
          }
          feature3Title={
            <Fragment>
              <span className="home-text51 thq-heading-2">Feature #3</span>
            </Fragment>
          }
          feature1ImgSrc="/lattestones-1400w.jpg"
          feature1Description={
            <Fragment>
              <span className="home-text52 thq-body-small">
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
              <span className="home-text55">Order Now</span>
            </Fragment>
          }
          content1={
            <Fragment>
              <span className="home-text56 thq-body-large">
                Whether you&apos;re purchasing a gift for a friend or family
                member or simply contributing to a local cause, order your
                E-Gift Cards now!
              </span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="home-text57 thq-heading-2">
                Order Your E-Gift Cards Now!
              </span>
            </Fragment>
          }
        ></CTA26>
        <Testimonial17
          review1={
            <Fragment>
              <span className="home-text58 thq-body-small">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla.
              </span>
            </Fragment>
          }
          review2={
            <Fragment>
              <span className="home-text59 thq-body-small">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla.
              </span>
            </Fragment>
          }
          review3={
            <Fragment>
              <span className="home-text60 thq-body-small">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla.
              </span>
            </Fragment>
          }
          review4={
            <Fragment>
              <span className="home-text61 thq-body-small">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla.
              </span>
            </Fragment>
          }
          content1={
            <Fragment>
              <span className="home-text62 thq-body-small">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla.
              </span>
            </Fragment>
          }
          heading1={
            <Fragment>
              <span className="home-text63 thq-heading-2">Testimonials</span>
            </Fragment>
          }
          author1Name={
            <Fragment>
              <span className="home-text64 thq-body-large">Author Name</span>
            </Fragment>
          }
          author2Name={
            <Fragment>
              <span className="home-text65 thq-body-large">Author Name</span>
            </Fragment>
          }
          author3Name={
            <Fragment>
              <span className="home-text66 thq-body-large">Author Name</span>
            </Fragment>
          }
          author4Name={
            <Fragment>
              <span className="home-text67 thq-body-large">Author Name</span>
            </Fragment>
          }
          author1Position={
            <Fragment>
              <span className="home-text68 thq-body-small">
                Position, Company name
              </span>
            </Fragment>
          }
          author2Position={
            <Fragment>
              <span className="home-text69 thq-body-small">
                Position, Company name
              </span>
            </Fragment>
          }
          author3Position={
            <Fragment>
              <span className="home-text70 thq-body-small">
                Position, Company name
              </span>
            </Fragment>
          }
          author4Position={
            <Fragment>
              <span className="home-text71 thq-body-small">
                Position, Company name
              </span>
            </Fragment>
          }
        ></Testimonial17>
        <Footer4 rootClassName="footer4root-class-name"></Footer4>
      </div>
      <style jsx>
        {`
          .home-container {
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
            text-decoration: none;
          }
          .home-text11 {
            display: inline-block;
          }
          .home-text12 {
            display: inline-block;
            text-decoration: none;
          }
          .home-text13 {
            display: inline-block;
          }
          .home-text14 {
            display: inline-block;
            font-style: normal;
            font-weight: 600;
          }
          .home-text15 {
            display: inline-block;
            font-style: normal;
            font-weight: 600;
          }
          .home-text16 {
            display: inline-block;
            font-style: normal;
            font-weight: 600;
          }
          .home-text17 {
            display: inline-block;
            font-style: normal;
            font-weight: 600;
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
            display: inline-block;
          }
          .home-text23 {
            display: inline-block;
          }
          .home-text24 {
            display: inline-block;
          }
          .home-text25 {
            display: inline-block;
          }
          .home-text26 {
            color: rgb(247, 243, 243);
            display: inline-block;
          }
          .home-text27 {
            color: rgb(255, 255, 255);
            display: inline-block;
          }
          .home-text29 {
            color: #e84b4b;
          }
          .home-text31 {
            display: inline-block;
            text-align: center;
          }
          .home-text32 {
            color: #ffffff;
            font-style: normal;
            font-weight: 700;
          }
          .home-text33 {
            color: #000000;
            font-style: normal;
            font-weight: 700;
          }
          .home-text34 {
            color: #ffffff;
          }
          .home-text35 {
            color: #ffffff;
          }
          .home-text36 {
            color: #e84b4b;
          }
          .home-text37 {
            color: #e84b4b;
          }
          .home-text38 {
            color: #ffffff;
          }
          .home-text39 {
            color: #ffffff;
          }
          .home-text40 {
            color: #ffffff;
          }
          .home-text41 {
            color: #ffffff;
          }
          .home-text42 {
            color: #ffffff;
          }
          .home-text43 {
            color: #ffffff;
          }
          .home-text44 {
            color: #ffffff;
          }
          .home-text45 {
            color: #ffffff;
          }
          .home-text46 {
            color: #ffffff;
          }
          .home-text47 {
            color: #ffffff;
          }
          .home-text48 {
            color: #000000;
          }
          .home-text49 {
            color: rgb(232, 75, 75);
            display: inline-block;
          }
          .home-text50 {
            display: inline-block;
          }
          .home-text51 {
            display: inline-block;
          }
          .home-text52 {
            color: rgb(255, 255, 255);
            display: inline-block;
          }
          .home-text55 {
            display: inline-block;
          }
          .home-text56 {
            display: inline-block;
          }
          .home-text57 {
            display: inline-block;
          }
          .home-text58 {
            display: inline-block;
            text-align: left;
          }
          .home-text59 {
            display: inline-block;
            text-align: left;
          }
          .home-text60 {
            display: inline-block;
            text-align: left;
          }
          .home-text61 {
            display: inline-block;
            text-align: left;
          }
          .home-text62 {
            display: inline-block;
          }
          .home-text63 {
            color: #e84b4b;
            display: inline-block;
          }
          .home-text64 {
            display: inline-block;
          }
          .home-text65 {
            display: inline-block;
          }
          .home-text66 {
            display: inline-block;
          }
          .home-text67 {
            display: inline-block;
          }
          .home-text68 {
            display: inline-block;
          }
          .home-text69 {
            display: inline-block;
          }
          .home-text70 {
            display: inline-block;
          }
          .home-text71 {
            display: inline-block;
          }
        `}
      </style>
    </>
  )
}

export default Home
