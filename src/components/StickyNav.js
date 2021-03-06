import React, { useState, useRef, useEffect } from 'react'
import propTypes from 'prop-types'
import { Link } from 'react-scroll'
import { slugify } from '@open-tender/js'

const StickyNav = ({ items, offset = -100, duration = 500 }) => {
  const [isSticky, setSticky] = useState(false)
  const stickyRef = useRef(null)

  const handleScroll = () => {
    if (stickyRef.current) {
      setSticky(stickyRef.current.getBoundingClientRect().top < 60)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', () => handleScroll)
    }
  }, [])

  const stickyClass = `sticky ${isSticky ? 'ot-stuck' : ''}`
  const stickyInnerClass = `sticky__inner ot-sticky-inner ${
    isSticky ? 'ot-bg-color-primary ot-box-shadow' : ''
  }`

  return (
    <div className={stickyClass} ref={stickyRef}>
      <div className={stickyInnerClass}>
        <div className="container">
          <div className="sticky__items">
            <ul>
              {items.map((item) => {
                const sectionId = slugify(item)
                return (
                  <li key={sectionId} className="ot-preface ot-font-size-small">
                    <Link
                      activeClass="active"
                      className="ot-link-dark"
                      to={sectionId}
                      spy={true}
                      smooth={true}
                      offset={offset}
                      duration={duration}
                    >
                      {item}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

StickyNav.displayName = 'StickyNav'
StickyNav.propTypes = {
  items: propTypes.array,
  offset: propTypes.number,
}

export default StickyNav
