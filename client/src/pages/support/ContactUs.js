import { Link } from 'react-router-dom';

import EmailForm from '../../components/Forms/EmailForm';

const ContactUs = (props) => {
    return (
        <section className="main-content-container">
            <div className="main-content-row">
                <h3>Contact Us</h3>
            </div>
            <div className="main-content-row">
                <EmailForm />
                {/* Add our team member's github usernames and make links to the accounts */}
            </div>
        </section>
    );
};

export default ContactUs;