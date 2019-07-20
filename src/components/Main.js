import React from 'react'
import PropTypes from 'prop-types'
import * as emailjs from 'emailjs-com'
import { toast, ToastContainer } from 'react-toastify';

import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'

emailjs.init(process.env.GATSBY_EMAIL_JS_ID);

class Main extends React.Component {

	state = {
		email: "",
		message: "",
		name: ""
	}

	onChange = (e) => {
		e.preventDefault();
		let state = {};
		state[e.target.name] = e.target.value;

		this.setState(state);
	}

	oneEmail = (e) => {
		if (e)
			e.preventDefault();
		const { name, email, message } = this.state;
		if (!name)
			return toast.error('Please fill in your name');
		else if (!email)
			return toast.error('Please fill in your email');
		else if (!message)
			return toast.error('Please fill the message');
		else {

			var template_params = {
				"reply_to": email,
				"from_name": name,
				"to_name": 'consule',
				"message_html": `${message} <br><br> ${email}`
			}

			var service_id = "default_service";
			var template_id = "template_JmKTvpkq";
			emailjs.send(service_id, template_id, template_params);

			this.props.onCloseArticle();
		}
	}

	onReset = (e) => {
		if (e)
			e.preventDefault();
		this.setState({ name: "", email: "", message: "" });
	}

	render() {

		let { email, name, message } = this.state;

		let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>


		return (
			<div ref={this.props.setWrapperRef} id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>
        <article id="intro" className={`${this.props.article === 'intro' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Intro</h2>
          <span className="image main"><img src={pic01} alt="" /></span>
          <p>Aenean ornare velit lacus, ac varius enim ullamcorper eu. Proin aliquam facilisis ante interdum congue. Integer mollis, nisl amet convallis, porttitor magna ullamcorper, amet egestas mauris. Ut magna finibus nisi nec lacinia. Nam maximus erat id euismod egestas. By the way, check out my <a href="#work">awesome work</a>.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dapibus rutrum facilisis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam tristique libero eu nibh porttitor fermentum. Nullam venenatis erat id vehicula viverra. Nunc ultrices eros ut ultricies condimentum. Mauris risus lacus, blandit sit amet venenatis non, bibendum vitae dolor. Nunc lorem mauris, fringilla in aliquam at, euismod in lectus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In non lorem sit amet elit placerat maximus. Pellentesque aliquam maximus risus, vel sed vehicula.</p>
          {close}
        </article>

        <article id="work" className={`${this.props.article === 'work' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">What we do</h2>
          <span className="image main"><img src={pic02} alt="" /></span>
          <h3>Carbon Consulting</h3>
          <p>We do annual Carbon Footprint Calculations and reports with practical solutions to assist with improved on energy consumption. We also do long term Carbon Footprint Project implementation and management.</p>
          <h3>QMS Implementation, improvement and management</h3>
          <p>We assist Agri - businesses with GMPs, HACCP, ISO implementation, improvement and maintenance.We also provide pre - audit assistance.</p>
          <h3>Training and awareness</h3>
          <p>We provide workshops
          for organisations on better carbon footprint management strategies and behaviour change
          for employees and students. </p>
          {close}
        </article>

        <article id="about" className={`${this.props.article === 'about' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">About</h2>
          <span className="image main"><img src={pic03} alt="" /></span>
          <p>Lorem ipsum dolor sit amet, consectetur et adipiscing elit. Praesent eleifend dignissim arcu, at eleifend sapien imperdiet ac. Aliquam erat volutpat. Praesent urna nisi, fringila lorem et vehicula lacinia quam. Integer sollicitudin mauris nec lorem luctus ultrices. Aliquam libero et malesuada fames ac ante ipsum primis in faucibus. Cras viverra ligula sit amet ex mollis mattis lorem ipsum dolor sit amet.</p>
          {close}
        </article>

        <article id="contact" className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Contact</h2>
          <form onSubmit={this.oneEmail} onReset={this.onReset}>
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" onChange={this.onChange} value={name} />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" onChange={this.onChange} value={email}/>
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" onChange={this.onChange} value={message} rows="4"></textarea>
            </div>
            <ul className="actions">
              <li><input type="submit" value="Send Message" className="special"/></li>
              <li><input type="reset" value="Reset" /></li>
            </ul>
          </form>
          <ul className="icons">
            <li><a href="#" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
            <li><a href="#" className="icon fa-facebook"><span className="label">Facebook</span></a></li>
            <li><a href="#" className="icon fa-instagram"><span className="label">Instagram</span></a></li>
            <li><a href="#" className="icon fa-github"><span className="label">GitHub</span></a></li>
          </ul>
          {close}
        </article>

      </div>
		)
	}
}

Main.propTypes = {
	route: PropTypes.object,
	article: PropTypes.string,
	articleTimeout: PropTypes.bool,
	onCloseArticle: PropTypes.func,
	timeout: PropTypes.bool,
	setWrapperRef: PropTypes.func.isRequired,
}

export default Main