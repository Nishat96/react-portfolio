import React from 'react';
import emailjs from 'emailjs-com';
import './ContactMe.css';

const ContactMe = () => {
    function sendEmail(e){
        e.preventDefault();

    emailjs.sendForm('service_m696m', 'template_gmailm696m', e.target, 'user_1CHmQTzwVdpEqaT68S4yv')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
    }
    return (
        <div className="container" id="contact">
           <form onSubmit={sendEmail}>
                <div className="row pt-5 mx-auto">
                    <div className="col-8 form-group mx-auto">
                        <input type="text" className="form-control" Placeholder="Name" name="name"/>
                    </div>
                    <div className="col-8 form-group pt-2 mx-auto">
                        <input type="email" className="form-control" Placeholder="Email Address" name="email"/>
                    </div>
                    <div className="col-8 form-group pt-2 mx-auto">
                        <input type="text" className="form-control" Placeholder="Subject" name="subject"/>
                    </div>
                    <div className="col-8 form-group pt-2 mx-auto">
                        <textarea className="form-control" cols="30" rows="8" Placeholder="Your Message" name="message"/>
                    </div>
                    <div className="col-8 pt-3 mx-auto">
                        <input type="submit" className="btn btn-info" Value="Send Message"/>
                    </div>
                </div>

           </form>
        </div>
    );
};

export default ContactMe;