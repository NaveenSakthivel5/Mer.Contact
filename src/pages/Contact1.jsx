import './Contact1.css'

export default function Contact1() {
  return (
    <div className="contact-1">
      <div className="container-4">
        <div className="container-16">
          <img className="layer-1" src="src/assets/vectors/Layer11_x2.svg" />
          <div className="about-contact">about&emsp;&emsp;-&emsp;&emsp;contact</div>
        </div>
        <div className="contact">CONTACT</div>
        <div className="have-an-inquiry-about-mercellenie-get-in-touch-with-us">
          Have an inquiry about Mercellenie ? <br />
          Get in touch with us.
        </div>
        <div className="group-18">
          <div className="rectangle-1550"></div>
          <div className="rectangle-1549"></div>
          <div className="rectangle-1548"></div>
        </div>

        {/* New Flex Container for Columns */}
        <div className="columns-container">
          {/* First Column */}
          <div className="column-left">
            <div className="container-13">
              <div className="container-19">
                <span className="general-query">GENERAL QUERY</span>
                <span className="infomercellinie-com">info@mercellinie.com</span>
                <div className="phone-number-1">PHONE NUMBER</div>
                <div className="container">+91-986563789</div>
                <div className="location">LOCATION</div>
                <div className="no-529530-intermediate-ring-rd-domlur-bengaluru-karnataka-560071">
                  No. 529, 530, Intermediate <br />
                  Ring Rd, Domlur, Bengaluru, <br />
                  Karnataka 560071
                </div>
              </div>
            </div>
          </div>

          {/* Second Column */}
          <div className="column-center">
            <div className="frame-52">
              <div className="group-52">
                <div className="container-2" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <label className="writing-us-for" htmlFor="writing-us-for">writing us for?</label>
                  <div className="arrow-drop-down-24-dp-e-8-eaed-fill-0-wght-400-grad-0-opsz-2411">
                    <img className="vector" src="src/assets/vectors/Vector8_x2.svg" />
                  </div>
                </div>

                <div className="container-1">
                  <input
                    type="text"
                    id="full-name"
                    className="input-field"
                    placeholder="Full Name"
                    style={{ backgroundColor: 'transparent', border: 'none', color: '#BBBBBB', width: '100%' }}
                  />
                </div>

                <div className="container-18">
                  <input
                    type="email"
                    id="email-address"
                    className="input-field"
                    placeholder="Email Address"
                    style={{ backgroundColor: 'transparent', border: 'none', color: '#BBBBBB', width: '100%' }}
                  />
                </div>

                <div className="container-12">
                  <input
                    type="tel"
                    id="phone-number"
                    className="input-field"
                    placeholder="Phone Number"
                    style={{ backgroundColor: 'transparent', border: 'none', color: '#BBBBBB', width: '100%' }}
                  />
                </div>

                <div className="container-6">
                  <textarea
                    id="message"
                    className="input-field"
                    placeholder="Message"
                    style={{ backgroundColor: 'transparent', border: 'none', color: '#BBBBBB', width: '100%', height: '100px' }}
                  />
                </div>
              </div>
              <div className="frame-51">
                <button className="submit-button" style={{ backgroundColor: '#FFDD33', color: '#060606', border: 'none', padding: '15px 0', width: '100%' }}>
                  SUBMIT
                </button>
              </div>
            </div>
          </div>


          {/* Third Column */}
          <div className="column-right">
            <div className="vendors-manufactures-partners-media">
              vendors<br />
              manufactures<br />
              partners<br />
              media
            </div>
          </div>
        </div>
      </div>

      {/* Vector below container-4 */}  
      <div className="vector-container">
        <img className="vector-1" src="src/assets/vectors/Vector3_x2.svg" />
      </div>

      {/* Icons below vector */}
      <div className="download-icons">
        <div className="download-1">
          <img className="vector-2" src="src/assets/vectors/Vector7_x2.svg" />
        </div>
        <div className="download-2">
          <img className="vector-3" src="src/assets/vectors/Vector5_x2.svg" />
        </div>
        <div className="download-3">
          <img className="vector-4" src="src/assets/vectors/Vector6_x2.svg" />
        </div>
        <div className="download-4">
          <img className="vector-5" src="src/assets/vectors/Vector13_x2.svg" />
        </div>
        <div className="download">
          <img className="vector-6" src="src/assets/vectors/Vector2_x2.svg" />
        </div>
      </div>

      {/* Footer below icons */}
      <div className="footer">
        <span className="mercellinie">©2024 MERCELLINIE</span>
        <span className="privacy-policy">PRIVACY POLICY</span>
        <span className="made-by-wings">Made by wings</span>
      </div>

      <div className="bottom-background"></div>
    </div>
  );
}
