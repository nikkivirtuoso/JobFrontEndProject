import React, { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaBriefcase, FaEnvelope, FaCreditCard,FaBell } from 'react-icons/fa'; // Import the icons

const styles = {
  circularBorder: {
    borderRadius: '20px',
    // border: '2px solid #ccc', // Adjust the border style as needed
  },
  activeLink: {
      color: 'white',
      borderRadius: '20px',
    //   border: '1px solid #ccc',
    backgroundColor: '#DA4B2B',  // Color for the active link
  },
  inactiveLink: {
    color: 'grey', // Default color for inactive links
    },
    temp: {
        border: '5px',
        borderRadius: '30px',
        paddingLeft: '3px',
        paddingRight: '3px',
        paddingTop: '2px',
        paddingBottom:'2px'
  }
};

const Header = () => {
  const [activeLink, setActiveLink] = useState('#jobs'); // Default active link

  const handleNavClick = (link) => {
    setActiveLink(link);
  };

  return (
    <Navbar bg="transparent" expand="lg">
      <Container className="fluid">
        <Navbar.Brand href="#home">
          <span style={{fontSize:'20px',color:'#DA4B2B',backgroundColor:'#E7E7E7',padding:'10px'}}>Logo</span>
        </Navbar.Brand>
        <Nav className="align-items-center border" style={styles.temp}>
          <Nav.Link
            href="#jobs"
            className="d-flex align-items-center"
            style={activeLink === '#jobs' ? styles.activeLink : styles.inactiveLink}
            onClick={() => handleNavClick('#jobs')}
          >
            <FaBriefcase className="me-2" /> Jobs
          </Nav.Link>
          <Nav.Link
            href="#messages"
            className="d-flex align-items-center"
            style={activeLink === '#messages' ? styles.activeLink : styles.inactiveLink}
            onClick={() => handleNavClick('#messages')}
          >
            <FaEnvelope className="me-2" /> Messages
          </Nav.Link>
          <Nav.Link
            href="#payments"
            className="d-flex align-items-center"
            style={activeLink === '#payments' ? styles.activeLink : styles.inactiveLink}
            onClick={() => handleNavClick('#payments')}
          >
            <FaCreditCard className="me-2" /> Payments
          </Nav.Link>
        </Nav>
              <div className="d-flex align-items-center">
                  <FaBell className="me-3" size={20} />
          <img
            src="images/logo.png" // Replace with the actual user icon path
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="User Icon"
            style={styles.circularBorder} // Apply the circular border style
          />
        </div>
      </Container>
    </Navbar>
  );
};

export default Header;