// eslint-disable-next-line no-unused-vars
import React from 'react';

const ContactUs = () => {
    return (
        <div id='contact' className="contact-us">
            <h1>Contact Us</h1>
            <form>
                <input type="text" placeholder="Your Name" />
                <input type="email" placeholder="Your Email" />
                <textarea placeholder="Your Message"></textarea>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default ContactUs;