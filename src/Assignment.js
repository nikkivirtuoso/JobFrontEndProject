import {React,useState} from 'react';
import { Button, Badge, Card, ListGroup, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaTrash, FaEdit, FaMapMarkerAlt, FaFigma, FaCoins } from 'react-icons/fa';
import { SiAdobexd,SiAdobeillustrator } from 'react-icons/si';
import { AiOutlineUser, AiOutlineUsergroupAdd, AiOutlineMessage, AiOutlineEye } from 'react-icons/ai';
// import { faCoins } from '@fortawesome/free-solid-svg-icons';
import Header from './components/header';

const styles = {
  headerButtons: {
    color: '#000',
    border: 'none',
    // marginRight: '10px',
    // marginBelow:'5px',
  },
  jobTitle: {
    fontSize: '24px',
    fontWeight: 'bold',
    margin: '10px',
    marginLeft: '0px',
    marginBottom:'10px'
  },
  badge: {
    backgroundColor: '#e0e0e0',
    color: '#000',
    marginRight: '10px'
  },
  successBadge: {
    backgroundColor: '#28a745',
    color: '#fff'
  },
  deleteButton: {
    backgroundColor: '#f8d7da',
    color: '#d9534f',
    border: '1px solid #DA4B2B',
    outline: 'none',
    alignItems: 'center',
    borderRadius: '5px',
    padding: '5px 12.5%',
    marginLeft:'10px'
  },
  editButton: {
    backgroundColor: '#DA4B2B',
    color: '#fff',
    border: '1px solid #d9534f',
    outline: 'none',
    alignItems: 'center',
    borderRadius: '5px',
    padding: '5px 12.5%'
  },
  statsContainer: {
    padding: '10px',
  },
  statItem: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '10px ',
  },
  statLabel: {
    display: 'flex',
    alignItems: 'center'
  },
  statValue: {
    fontWeight: 'bold'
  },
  customBadge: {
    backgroundColor: '#fff',
    color: 'grey',
    margin: '8px',
    padding: '5px 10px',
    borderRadius: '5px',
    display: 'inline-block',
    border: 'none'
  },
  trackSection: {
    backgroundColor: "#D3D3D3"
  },
  qualificationsInitials: {
    marginTop: '20px',
    fontSize: '10px',
    fontWeight: 'bold',
    color:'grey',
  },
  qualifications: {
    fontSize: '12px',
    fontWeight: 'bold',
  },
  skillRequired: {
    fontsize:'8px'
  },
  temp: {
    backgroundColor: '#F1FBF3',
    color: '#5DB992',
    borderRadius: '30px',
    display: 'inline-block',
    marginLeft: '10px',
    fontSize: '10px',
    fontWeight: 'bold',
    // paddingLeft: '5px',
    paddingRight:'5px',
    border:'1px solid green'
  }
};

const companyInfo = {
  name: 'Atlassian',
  logo: '/images/logo.png',
  details: {
    companySize: '1k - 2k Employees',
    type: 'Private',
    sector: 'Information Technology, Infrastructure',
    foundedIn: '2019',
    funding: 'Bootstrapped',
    foundedBy: 'Scott Farquhar, Mike Cannon-Brookes'
  }
};

const JobListing = () => {
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };
   const getButtonStyle = (buttonName) => ({
    ...styles.customBadge,
    color: activeButton === buttonName ? '#DA4B2B' : 'Black',
     borderRadius: '0px',
     marginLeft: '0px',
    paddingLeft:'0px',
  });
  return (
    <>
    <Header/>
    <Container className='fluid'>
      <Row className="border-top border-bottom no-gutters">
          <Col>
            <Button
              style={getButtonStyle('Job preview')}
              onClick={() => handleButtonClick('Job preview')}
            >
              Job preview
            </Button>
            <Button
              style={getButtonStyle('Applicants')}
              onClick={() => handleButtonClick('Applicants')}
            >
              Applicants
            </Button>
            <Button
              style={getButtonStyle('Match')}
              onClick={() => handleButtonClick('Match')}
            >
              Match
            </Button>
            <Button
              style={getButtonStyle('Messages')}
              onClick={() => handleButtonClick('Messages')}
            >
              Messages
            </Button>
          </Col>
        </Row>
      <Row className='no-gutters'>
        <Col md={8} className="border-end">
          <div>
            <Row>
              <Col md={12}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <Card.Title style={styles.jobTitle}>Senior Product Designer</Card.Title>
                  <span style={{ marginLeft: '10px', color: 'grey', fontSize: '14px',marginRight:'10px' }}><span style={{marginRight:'10px'}}>&#8226;</span>posted 2 days ago</span>
                    <div style={styles.temp}>
                      <span style={{ margin: '2px'}}>&#9679;</span>Open</div>
                </div>
                <Card.Subtitle className="mb-1">
                    <span style={{color:'grey',marginRight:'20px'}}><FaMapMarkerAlt />Delaware, USA</span>
                    <span style={{margin:'2px',color:'grey'}}>&#8226;</span>
                  <span style={styles.customBadge}><FaCoins style={{margin:'2px'}}/>$300k-$400k</span>
                </Card.Subtitle>
                <Row className="border-bottom border-top pb-2">
                  <Col>
                    <Row>
                      <span className="mx-1" style={styles.qualificationsInitials}>Skill Required:</span>
                      <span className="mx-1"><Badge bg="light" text="dark"><FaFigma style={{ marginRight: '5px', color: '#F24E1E' }} /> Figma</Badge></span>
                      <span className="mx-1"><Badge bg="light" text="dark"><SiAdobeillustrator style={{ marginRight: '5px', color: '#FF9A00' }} /> Adobe Illustrator</Badge></span>
                      <span className="mx-1"><Badge bg="light" text="dark"><SiAdobexd style={{ marginRight: '5px', color: '#FF61F6' }} /> Adobe XD</Badge></span>
                    </Row>
                  </Col>
                  <Col>
                    <Row>
                      <span className="mx-1" style={styles.qualificationsInitials}>Preferred Language:</span>
                      <Row className="mx-1" style={styles.qualifications}>English</Row>
                    </Row>
                  </Col>
                  <Col>
                    <Row>
                      <span className="mx-1" style={styles.qualificationsInitials}>Type:</span>
                      <Row className="mx-1" style={styles.qualifications}>Full Time</Row>
                    </Row>
                  </Col>
                  <Col>
                    <Row>
                      <span className="mx-1" style={styles.qualificationsInitials}>Years Of Experience:</span>
                      <Row className="mx-1" style={styles.qualifications}>3+ Years of Experience</Row>
                    </Row>
                  </Col>
                </Row>
                    <h5 style={styles.qualificationsInitials}>About the job</h5>
<div style={{ fontSize: '14px', lineHeight:'1.5'}}>
  <div style={{ lineHeight: '0.8' }}>
    <p style={{marginTop:'15px',marginBottom:'9px'}}>1. Handle the UI/UX research design</p>
    <p style={{marginBottom:'9px'}}>2. Work on researching on latest web applications designs & trends</p>
    <p style={{marginBottom:'9px'}}>3. Work on conceptualizing and visualizing</p>
    <p style={{marginBottom:'9px'}}>4. Work on creating graphics content and other graphic related works</p>
  </div>
  <p style={{ margin: '0px' }}>Benefits:</p>
  <ul style={{margin:'0px'}}>
    <li>Health insurance</li>
    <li>Provident Fund</li>
  </ul>
  <p style={{ margin: '0px' }}>Schedule:</p>
  <ul style={{margin:'0px'}}>
    <li>Day shift</li>
  </ul>
  <p style={{ margin: '0px' }}>Supplemental pay types:</p>
  <ul style={{margin:'0px'}}>
    <li>Performance bonus</li>
    <li>Yearly bonus</li>
  </ul>
  <p style={{ margin: '0px' }}>Work Location: In person</p>
</div>
              </Col>
            </Row>
            <Row className="align-items-center my-4 border-top pt-3">
              <Col xs="auto">
                <img src={companyInfo.logo} alt={companyInfo.name} style={{ width: '40px', height: '40px',borderRadius:'5px',margin:'0px' }} />
              </Col>
              <Col>
                <p style={{fontSize:'20px',margin:'0px'}}>{companyInfo.name}</p>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <div>
                  <strong style={styles.qualificationsInitials}>Company size</strong>
                  <p>{companyInfo.details.companySize}</p>
                </div>
                <div>
                  <strong style={styles.qualificationsInitials}>Sector</strong>
                  <p>{companyInfo.details.sector}</p>
                </div>
                <div>
                  <strong style={styles.qualificationsInitials}>Founded In</strong>
                  <p>{companyInfo.details.foundedIn}</p>
                </div>
              </Col>
              <Col md={6}>
                <div>
                  <strong style={styles.qualificationsInitials}>Type</strong>
                  <p>{companyInfo.details.type}</p>
                </div>
                <div>
                  <strong style={styles.qualificationsInitials}>Funding</strong>
                  <p>{companyInfo.details.funding}</p>
                </div>
                <div>
                  <strong style={styles.qualificationsInitials}>Founded By</strong>
                  <p>{companyInfo.details.foundedBy}</p>
                </div>
              </Col>
            </Row>
          </div>
        </Col>
        <Col md={4} className="">
          <div className="d-flex align-items-center mt-4 fluid">
            <Button style={styles.deleteButton} className="me-2">
              <FaTrash /> Delete job
            </Button>
            <Button style={styles.editButton}>
              <FaEdit /> Edit job
            </Button>
          </div>
          <div style={styles.statsContainer}>
            <div style={styles.statItem} className='border-bottom'>
              <div style={styles.statLabel}>
                <AiOutlineUser className="me-2" /> Applicants
              </div>
              <div style={styles.statValue}>400</div>
            </div>
            <div style={styles.statItem} className='border-bottom'>
              <div style={styles.statLabel}>
                <AiOutlineUsergroupAdd className="me-2" /> Matches
              </div>
              <div style={styles.statValue}>100</div>
            </div>
            <div style={styles.statItem} className='border-bottom'>
              <div style={styles.statLabel}>
                <AiOutlineMessage className="me-2" /> Messages
              </div>
              <div style={styles.statValue}>147</div>
            </div>
            <div style={styles.statItem}>
              <div style={styles.statLabel}>
                <AiOutlineEye className="me-2" /> Views
              </div>
              <div style={styles.statValue}>800</div>
            </div>
          </div>
        </Col>
      </Row>
    </Container></>
  );
};

export default JobListing;