import React, { Children } from "react";
import './Footer.css';
import PropTypes from 'prop-types';
function Footer(props) {  // Changed function Footer() to function Footer(props).
    return (
        <div className="Footer">
            <h1>{props.children}</h1>
        </div>
    );
}

Footer.propTypes = {
    children: PropTypes.node  // Changed PropTypes.object to PropTypes.node.
};

export default Footer;