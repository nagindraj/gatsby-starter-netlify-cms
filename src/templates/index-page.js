import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'

export const IndexPageTemplate = ({
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
  pricing
}) => (
  <div>
    <div
      className="full-width-image margin-top-0"
      style={{
        backgroundPosition: `top left`,
        backgroundAttachment: `fixed`,
      }}
    >
      <div
        style={{
          display: 'flex',
          height: '150px',
          lineHeight: '1',
          justifyContent: 'space-around',
          alignItems: 'left',
          flexDirection: 'column',
        }}
      >
        <h1
          className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
          style={{
            position: 'absolute',
            top: '110px',
            left: '35%',
            fontSize: '72px !important',
            color: 'antiquewhite',
            lineHeight: '1',
            padding: '0.25em',
            zIndex: '-1'
          }}
        >
          {title}
        </h1>
        <h3
          className="has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen"
          style={{
            color: '#7C9CDE',
            lineHeight: '1',
            padding: '0.25em',
          }}
        >
          {subheading}
        </h3>
      </div>
    </div>
    <div className="pricing">
      <div className="">
        <h1 className="title">{pricing.heading}</h1>
      </div>
      <table>
          <tr>
            <td className="col_title">{pricing.bank.title}</td>
            <td className="col_price">{pricing.bank.price}</td>
          </tr>
          <tr>
            <td className="col_title">{pricing.card.title}</td>
            <td className="col_price">{pricing.card.price}</td>
          </tr>
          <tr>
            <td className="col_title">{pricing.reorder.title}</td>
            <td className="col_price">{pricing.reorder.price}</td>
          </tr>
          <tr>
            <td className="col_title">{pricing.atm.title}</td>
            <td className="col_price">{pricing.atm.price}</td>
          </tr>
          <tr>
            <td className="col_title">{pricing.transaction.title}</td>
            <td className="col_price">{pricing.transaction.price}</td>
          </tr>
          <tr>
            <td className="col_title">{pricing.trading.title}</td>
            <td className="col_price">{pricing.trading.price}</td>
          </tr>
      </table>
    </div>
    <div className="main_desc">
          <p>
            {description}
          </p>
    </div>
    <div className="main_pitch_title">
          <p>
            {mainpitch.title}
          </p>
    </div>
    <div className="main_pitch_desc">
          <p>
            {mainpitch.description}
          </p>
    </div>
  </div>
)

IndexPageTemplate.propTypes = {
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
  pricing: PropTypes.object
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
        pricing={frontmatter.pricing}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
        pricing {
          heading
          bank {
            title
            price
          }
          card {
            title
            price
          }
          reorder {
            title
            price
          }
          atm {
            title
            price
          }
          transaction {
            title
            price
          }
          trading {
            title
            price
          }
        }
      }
    }
  }
`
