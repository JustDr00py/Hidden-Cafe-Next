import React from 'react'
import Head from 'next/head'

const Menu = (props) => {
  return (
    <>
      <div className="menu-container">
        <Head>
          <title>Menu - Hidden Cafe</title>
          <meta property="og:title" content="Menu - Hidden Cafe" />
        </Head>
        <img alt="image" src="/front-1500w.png" className="menu-image1" />
        <img alt="image" src="/back-1500w.png" className="menu-image2" />
      </div>
      <style jsx>
        {`
          .menu-container {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .menu-image1 {
            width: 100%;
            padding: var(--dl-space-space-threeunits);
            object-fit: cover;
            padding-top: var(--dl-space-space-threeunits);
          }
          .menu-image2 {
            width: 100%;
            padding: var(--dl-space-space-threeunits);
            object-fit: cover;
          }
        `}
      </style>
    </>
  )
}

export default Menu
