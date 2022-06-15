import React from "react";

function BufferOverflow() {
  return (
    <div className="bufferoverflow" >

      <div className="container" style={{textAlign: "center", backgroundColor: "#FA4616"}}>
          <br /><br />
          <h1 className="font-weight-light">Buffer Overflow</h1>
          <br />   
      </div>

      <div className="container" style={{textAlign: "center", marginInline: "10%"}}>
          <p>
            To first understand buffer overflow, you need to understand what a buffer is.
            A buffer is a region in memory storage that stores data temporarily as it transfers locations. 
            As the name suggests, when there is more data being written to the buffer than the buffer's storage, there is an overflow.
            For example, a buffer that takes in 8 bytes of data, will have an overflow of 2 bytes if 10 bytes are written to it. 
            This can be visualized below. 
            <br />
            
          </p>
          <br />   
      </div>

      <div className="container" style={{paddingLeft: "480px"}}>
      <img
              className="img-fluid rounded mb-4 mb-lg-0"
              src="BufferOverflowExample1.png"
              alt=""
            /> 
      </div>

      <div className="container" style={{textAlign: "center", marginInline: "10%"}}>
          <p>
            Attackers can use buffer overflow exploits to infect software with malicious code. This is known as a buffer overflow attack. 
            If a cyber attacker knows how a programs memory is organized, they can knowingly send input that overflows the buffer 
            in ways that overwrite code with their own malicious executable code. Two languages susceptible to this are C and C++ due to
            their lack of safeguards against overwriting data in memory. Popular operating systems written in C and C++ include Windows,
            Linux, and MAC OSX. 
            <br />

            <div className="container" >
          <h1 className="font-weight-light">Defense Mechanisms</h1>
      </div>
            Common defences against buffer overflow are <b>Address space randomization</b> (ASLR), <b>Data Execution prevention</b>, 
            and <b>structured exception handler overwrite protection</b> (SEHOP). 
            <br />
            <b>ASLR:</b> Address space randomization changes the addresses of various data regions so an attacker does not have the knowledge
            needed to exploit your buffer. 
            <br />
            <b>Data Execution prevention:</b> This marks some areas as non executable so that code there cannot be run. An attacker placing 
            executable and malicious code cannot actually execute the code if it is placed in a region marked non executable.
            <br />
            <b>SEHOP:</b> Structured exception handler overwrite protection is not only a mouthful, but the most complex of the defense
            discussed so far. Structured exeption handling is a system that handles exceptions for both software and hardware. 
            SEHOP is a mechanism designed by Microsoft to prevent SEH overwrite techniques. 
          </p>
          <br />   
      </div>

    </div>
  );
}

export default BufferOverflow;