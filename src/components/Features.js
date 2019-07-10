import React from 'react'
import PropTypes from 'prop-types'

const FeatureGrid = ({ grid }) => (
  <>
    <div className="questions_heading">
      {grid.heading}
    </div>
    <div className="columns is-multiline">
      {grid.Para.map(item => (
        
        <div key={item.text} className="column is-3">
          <section className="section">
            <div className="has-text-bold">
              <div
                style={{
                  width: '240px',
                  display: 'inline-block',
                }}
              >
              {item.main}
              </div>
            </div>
            <p className="question_text">{item.text}</p>
          </section>
        </div>
      ))}
    </div>
  </>
)

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      text: PropTypes.string,
    })
  ),
}

export default FeatureGrid
