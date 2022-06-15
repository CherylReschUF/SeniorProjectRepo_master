import React from "react";
import "./style.css"

function CrossSite() {
  return (
    <div className="crosssite">

      <div className="container" style={{textAlign: "center", backgroundColor: "#FA4616"}}>
          <br /><br />
          <h1 className="font-weight-light">Cross Site Scripting</h1>
          <br />
          </div>
          <div className="container" style={{textAlign: "center", marginInline: "10%"}}>
          <p>
            What is Cross Site Scripting (XSS)?
            <br />
            
          </p>

          <p>
            Cross Site Scripting is when an attacker injects malicous scripts into a normally safe website.
            These attacks can happen when data untrusted data is sent to an a site and is not validated, allowing the script to enter the site.
            This can be as simple as not validating the data when a user inputs their age into your site, allowing the attacker to write and injects scripts through that vulnerability.
            Let's see how XSS attacks work.
          </p>
          <p>
            HTML and JavaScript
          </p>
          <p>
            HTML, which stands for HyperText Markup Language, is the coding language that sets and describes how webpages display and structure content.
            Elements, key words enlosed by &#60;&#62;, structure the content of our page, such as &#60;b&#62;&#60;/b&#62;, which allows us to <b>bold</b> text.
            JavaScript is another core foundation of the world wide web alongside HTML that often handles client side actions on most websites. Many web development frameworks are built on JavaScript.
            The &#60;script&#62;&#60;/script&#62; element allows us to wrap JavaScript code inside an HTML document.
          </p>
          <img
            className="img-fluid rounded mb-4 mb-lg-0"
            src="ScriptingExample.png"
            alt=""
            >
            </img>
            <p>
              What are the dangers of an XSS attack? 
            </p>
            <p>
              One common purpose of XSS attacks is to spread worms. In cybersecurity, a worm is a type of malware that spreads and replicates itself from computer to computer.
              The fastest spreading computer virus of all time is an XSS worm known as Samy, named after its creator.
              Released onto MySpace in 2005, over million users had run the virus after just twenty hours.
              When infected, the users profile would add Samy as a friend and display the phrase "but most of all, samy is my hero", spreading the worm to people who view that page.
              For those interested, here is a video on the first internet <a href="https://mashable.com/video/morris-worm-computer-virus-kernel-panic">worm</a>.
              <br></br>
              <img
                src="xss-example.png"
                alt=""></img>
                <br></br>
              Attacks using malicious JavaScript can also be used to steal information, such as credit card information entered or stored on a site,
              and hijack cookies or sessions. Using the injected code, a hacker can send themselves the session id, allowing them to access the site under the identity of a user.
              Above is an illustration of a basic XSS attack that steals the victim's cookie data.
              The malicious script is first entered into the application by the attacker.
              A visiting user requests the the latest comment, which not contains the malicious script.
              The script then runs on the user's browser and sends their cookie information to the attacker, unbeknownst to the victim.
            </p>
            <p>
              How can we defend against XSS attacks?
            </p>
            <p>
              One type of XSS attack is a stored XSS attack. These target improper handling of dynamic content in an HTML file
              by using corrupted data retrieved from a database to execute their script.
              When another user visits the site and the page is rendered, the data is retrieved from the backend database and the script is executed.
              One way to combat this is to replace the data coming in to make sure it is treated as something to display and not an HTML tag.
              For instance, replacing &#60; with its HTML entity encoding. This process works similar to escape characters in strings.
              <img
              src="html-entities-header-600x342.png"
              alt=""
              ></img>
              <br></br>
              Another method of protecting against XSS is to set a content security policy.
              A content security policy is a feature alowed by modern browsers that gives control to the page creator on where JavaScript is allowed to be run.
              By setting the policy, the creator can prevent any scripting inside of areas where dynamic content is run on the page.
              Additionally, whitelisting can be used to prevent acceptance of malicious data.
              Instead of a user entering their birthday, they can pick from a list of dates.
              In React, the framework used to build this platform, there are built in safeguards for escaping HTML tages in dynamic rendering.
            </p>
          <br />   
      </div>

      <div className="container2" style={{textAlign: "center", marginInline: "10%"}}>
      <img
              className="img-fluid rounded mb-4 mb-lg-0"
              src="XSSInfoGraphic1.png"
              alt=""
              width="600"
              height="600"
            />
            <img
              className="img-fluid rounded mb-4 mb-lg-0"
              src="XSSInfoGraphic2.png"
              alt=""
              width="600"
              height="600"
            />
      </div>

      <div className="row" style={{textAlign: "center", marginInline: "10%"}}>
        <div className="column">
        <img
          className="imgbox center-fit"
          src="XSSSEPInfographic.png" alt=""
          resizeMode="stretch" />
        </div>
        <div className="column">
          <br></br><br></br>
          One form of attack called Search Engine Poisoning manipultes algorithms to attract prey to a malicious link, scroll through the graphic and learn more about how criminals exploit search engines.
          By doing this, attackers can gain spread XSS attacks to users that mistakenly visit thier compromised site.
          This is why one should always be weary when clicking links on even trusted search engines.
        </div>
      </div>
          </div>

  );
}

export default CrossSite;