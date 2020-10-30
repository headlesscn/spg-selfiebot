import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import Helmet from "react-helmet"
import { withPrefix } from "gatsby"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Helmet>
        <link href="https://unpkg.com/cloudinary-video-player@1.4.3/dist/cld-video-player.min.css" rel="stylesheet" />
        <script src="https://unpkg.com/cloudinary-core@2.10.3/cloudinary-core-shrinkwrap.min.js" type="text/javascript"></script>
        <script src="https://unpkg.com/cloudinary-video-player@1.4.3/dist/cld-video-player.min.js" type="text/javascript"></script>

        <script src="https://cdn.bootcdn.net/ajax/libs/jquery/2.2.4/jquery.min.js" type="text/javascript" />
        <script src={withPrefix('script.js')} type="text/javascript" />
      </Helmet>
    <SEO title="SelfieBot, Automatic Face/Body Tracking Gimbal" />
    <div style={{
          margin: `20px auto`,
          textAlign: `center`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}><h2>SelfieBot</h2>
    <p>Automatic Face\Body Tracking Gimbal</p>
    </div>
    <video controls preload="auto" style={{
      width: `100% !important`,
    }}>
                  <source src='https://res.cloudinary.com/waimo/video/upload/v1604060886/SelfieBot-m_yjgaa4.mp4' />
                </video>
    
    <img src="https://res.cloudinary.com/waimo/image/upload/v1604060298/en_kfpilc.png" alt="" />
  </Layout>
)

export default IndexPage
