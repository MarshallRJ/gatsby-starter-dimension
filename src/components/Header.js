import React from 'react'
import PropTypes from 'prop-types'

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="logo">
            <span className="icon fa-leaf"></span>
        </div>
        <div className="content">
            <div className="inner">
                <h1>Consule</h1>
                <p>Carbon Footprint Consulting with Innovative business solutions and Agricultural QMS systems implementation and maintenance</p>
            </div>
        </div>
        <nav>
            <ul>
                {/* <li><a href="javascript:;" onClick={() => {props.onOpenArticle('intro')}}>Intro</a></li> */}
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('work')}}>What we do</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('about')}}>About</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('contact')}}>Contact</a></li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
