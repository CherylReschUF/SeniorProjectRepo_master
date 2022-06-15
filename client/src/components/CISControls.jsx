import React from "react";

function CISControls() {
  return (
    <div className="ciscontrols" style={{textAlign: "center"}}>

<div className="container" style={{textAlign: "center", backgroundColor: "#FA4616"}}>
          <br /><br />
          <h1 className="font-weight-light">CIS Controls</h1>
          <br />   
      </div>

      <div className="container" style={{textAlign: "center", marginInline: "10%"}}>
          <p>
            One way to maintain software security is following the controls listed by the 
            Center for Internet Security (CIS). These controls are a list of actions meant to reduce vulnerability
            and defend from cyber attacks. Formerly 20, the current version of CIS controls has been streamlined to 18 controls.
            <br />
            
          </p>
          <br />   
      </div>

      <div className="container" style={{paddingLeft: "10px"}}>
      <img
              className="img-fluid rounded mb-4 mb-lg-0"
              src="CISControls.png"
              alt=""
            /> 
      </div>

      <div className="container" style={{textAlign: "center", marginInline: "10%"}}>
          <p>
            Controls 1 and 2: The first two controls are about keeping inventory of enterprise and software assets. This includes
            end-user devices, network devices, operating systems, applications, and all other assets within the network. This allows
            you to track what assets need to be monitored and makes it easier to identify unauhtorized assets in case of an attack.
            This can be summarized as simply as keep track of your digital belongings. 
            <br />
            <br />
            Control 3: Data Protection is about developing processes to classify, identify, and dispose of data in a safe way.
            This process should include a data inventory, data access control lists based on data sensitivity (which also needs to be
            categorized). Proper data disposal is necessary to keep sensitive data from the wrong hands. Sensitive data should be encrypted
            when possible. This very website for example encrypts user passwords on the backend. So adminstrator access can view accounts 
            but cannot actually see the passwords used in their raw form. 
            <br />
            <br />
            Control 4: After identify enterprise and software assets using controls 1 and 2, control 4 states to maintain secure configurations
            for those assets. Security misconfigurations are a common vulnerabilty cyber criminals exploit. 
            <br />
            <br />
            Controls 5 and 6: Account management and Access control management are crucial to ensuring your account system is not exploited.
            There needs to be credentials for different account such as standard user accounts or adminstrator accounts. In addition to
            account management, there must be access control management with the capability to assign, modify, and remove privileges from
            each account type. 
            <br />
            <br />
            Control 7: Continuous Vulnerability Management emphasizes the need to always asses vulnerabilities and threats. In addition
            to assessing internal vulnerabilities, public sources should be monitored to keep track of new threats. For example,
            the U.S. government will sometimes issue warnings to the private sector to stay on high alert in certain periods of time
            about cyber threats. Keeping track of which types of attacks are being used lately allows you to know which protective
            measures to prioritize. 
            <br />
            <br />
            Control 8: Audit log management retains and reviews audit logs of events. Not only is this helpful in case of attacks,
            but this is helpful for identify and remedying bugs. A marketplace website like Amazon for example, can review their
            website logs incase certain orders are experiencing glitches to determine the common variable in the logs for failed 
            orders and fix it. 
            <br />
            <br />
            Control 9: Email and web browser protections are extremely important for companies. A companies biggest vulnerability
            is it's people. Phishing scams using emails are very common and companies are always trying to educate their 
            employees to spot them. Many companies use algorithms meant to spot incoming phishing scams to ensure their employees
            never see them. In addition, employees often go through training meant to teach them safe practices when dealing
            with emails. At UF, 2 factor authentication was in large part added due to people giving away their passwords 
            in email scams. 2 factor authentication makes users verify their log in using a second device so that a password 
            alone is not sufficient to hack someones account.
            <br />
            <br />
            Control 10: Malware must be limited if not prevented from installing and spreading on enterprise assets. A network
            needs safeguards to detect and stop malware from executing or spreading to other parts of the network for obvious reasons. 
            <br />
            <br />
            Control 11: Data Recovery involves keeping data backups and processes to recover lost data in the event of 
            unplanned data loss incidents. Do not assume it won't happen to your data.
            <br />
            <br />
            Control 12: Network Infrastructure Management involves actively managing all network devices. Every device connected 
            to your network must be tracked and ready to be reported in the event of a vulnerability. Every network device 
            is a possible access point for an attacker and must be watched. 
            <br />
            <br />
            Control 13: Maintain network monitoring and defense against the entirety of both the infrastructure and userbase. 
            <br />
            <br />
            Control 14: Security Awareness and Skills Training is crucial to fortifying control 9 when it comes to email and 
            web browser usage. A company must ingrain safe habits into its employees and even its users. This means establishing 
            clear standards for when to give out private information such as passwords, and when not to. For example, a memo
            as simple as "we will never ask for X information outside of Y context" can counter act many phishing scams. 
            <br />
            <br />
            Control 15: Service Provider Management is about evaluating service providers used by your software to ensure
            they are safe to use. Any provider that holds sensitive data needs to be vetted and monitored. 
            <br />
            <br />
            Control 16: Application Software Security detects and corrects security weaknesses in enterprise applications
            ideally before they are exploited. Finding a security weakness before any cyber attackers do is crucial
            to avoiding attacks. 
            <br />
            <br /> 
            Control 17: Incident Response and Management states the need to have a comprehensive process for responding to 
            security incidents. This should include preemptive training, plans, procedures to follow, individual and team roles
            in the response, and communication guidelines. While the goal of many of these controls is to prevent an attack, you 
            must be ready to respond in the event an incident occurs.
            <br />
            <br />
            Control 18: Penetration Testing simulates attacks on your assets in an attempt to identify weaknesses before a real
            attacker does.
          </p>
          <br />   
      </div>

    </div>
  );
}

export default CISControls;