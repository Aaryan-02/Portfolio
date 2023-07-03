import React from 'react'

const Contact2 = () => {
    return (
        <div>
            <div className="contact-section contact-wrapper">
                <div className="fake-big">@</div>
                <form className="contact-form">
                    <div className="contact-heading">
                        <div id="header">
                            <h2>Contact me</h2>
                        </div>
                        <p>
                            I'm interested in freelance opportunities - especially ambitious or
                            large projects. However, if you have other request or question,
                            don't hesitate to use the form.
                        </p>
                    </div>

                    <div className="form-input-wrapper">
                        <div className="form-input-group">
                            <input type="text" placeholder="Name" name="name" className="name" />
                            <span></span>
                        </div>
                        <div className="form-input-group">
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                className="email"
                            />
                            <span></span>
                        </div>
                    </div>
                    <div className="form-input-group">
                        <input
                            type="text"
                            placeholder="Subject"
                            className="subject"
                            name="subject"
                        />
                        <span></span>
                    </div>
                    <div className="form-input-group">
                        <textarea
                            type="text"
                            placeholder="Message"
                            className="textarea"
                            name="message"
                        ></textarea>
                        <span></span>
                    </div>
                    <div className="message"></div>
                    <button type="submit" className="contact-button submit-button">
                        <div>
                            <span className="bg"></span>
                            <span className="base"></span>
                            <span className="text">
                                Send Message
                            </span>
                        </div>
                    </button>
                </form>

                <div className="google-map">
                    <iframe
                        title='myFrame'
                        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d63040.59859799887!2d7.4678272!3d9.060352!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sng!4v1656675150678!5m2!1sen!2sng"
                        style={{ border: 0 }}
                        allowfullscreen=""
                        loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"
                    ></iframe>
                    <div className="map-content">
                        <p>Jacek Jeznach</p>
                        <span>
                            Poland, ul. Maciejowicka
                            <br />
                            11/2, 70-786 Szczecin
                        </span>
                        <br />
                        <span>@: Jacekjeznach@gmail.com</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact2
