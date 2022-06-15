import React from "react";

function InputValidation() {
  return (
    <div className="inputvalidation" style={{textAlign: "center"}}>

<div className="container" style={{textAlign: "center", backgroundColor: "#FA4616"}}>
          <br /><br />
          <h1 className="font-weight-light">Input Validation</h1>
          <br />   
      </div>

      <div className="container" style={{textAlign: "center", marginInline: "10%"}}>
          <p>
            Input validation is about ensuring inputs supplied into software is appropriate. When there is not proper
            input validation, attackers can input values or even executable code that attacks your program. 
            Two examples of this are cross-site scripting and buffer overflow, both of which have their own modules
            dedicated to them you can access through the navigation bar at the top of the page. To quickly summarize them,
            attackers can write in either executable malicious code, or intentionally invalid inputs to take advantage 
            of your memory storage organization. On the cross-site scripting and buffer overflow page, you will see
            exactly how this can happen, and what is done to prevent it.  
            
          </p>  
      </div>

      <div className="row" style={{textAlign: "center"}} >
      <img
              className="img-fluid rounded mb-4 mb-lg-0 column"
              src="GatorStandLogo.png"
              alt=""
              height="430"
            /> 
            <img
              className="img-fluid rounded mb-4 mb-lg-0 column"
              src="HackerManLogoEdit.png"
              alt=""
            /> 
      </div>
      

      <div className="container" style={{textAlign: "center", marginInline: "10%"}}>
          <p>
          As a rule of thumb, anywhere user input is involved, it should be limited to as specific a format as possible.
            For example, if a date of birth is asked for, your code should verify the entered value represent a valid 
            date of birth. If integers are asked, do not allow non integer values to be entered. Without even considering
            input validation attacks, by reducing the type of input that can make it through your software, you limit both 
            an attackers capability and reduce your chance of bugs. Programmers should follow strict exception handling in
            when implementing input restrictions, this is the first line of defense. 
          </p>
          <p>
            Basics of Performing Input Validation
          </p>
          <p>
            There are two types of input validation: syntactical and Semantic.
            Syntactical input validation is making sure the structure of your data is correct, such as 10 digits in a phone number.
            Semantic validation is checking the correctness of the values, such as checking if a date actually exists.
            Many of you probably already have experiences with the basics of input validation, such as checking valid numbers, making sure inputs are in the proper range,
            and regular expressions.
            <br></br>
            <br></br>
            Regular expressions are a common form of input validation. One simple way to illustrate this is email validation. In the example below,
            we check the string for a range of valid values. Inside the brackets is a list of characters accepted by the system.
            Should any characters not on that list appear, such as &amp;, then the input will be rejected.
            This form of validation ensures only valid email strings are accepted, not whether the email is real.
          </p>
          <img
            src="regex.png"
            alt=""></img>
      </div>

    </div>
  );
}

export default InputValidation;