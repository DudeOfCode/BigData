import Collapsible from "react-collapsible";
import second from "./tools/blockchain.png";
import first from "./tools/zipbc.png";
// import third from "./tools/blockc.png";
// import fourth from "./tools/blochainimg.png";
// import fifth from "./tools/bc.png";
// import sixth from "./tools/Block.png";
import { AnimationOnScroll } from "react-animation-on-scroll";
const FAQ = () => {
  return (
    <div>
      <div id="Faq">
        <Collapsible trigger="What types of files can I save?">
          <p>Currently the app can only store images,video and text.</p>
        </Collapsible>
      </div>

      <div id="Faq" button>
        <Collapsible trigger="Is the number of data I can save limited?">
          <p>
            The storage app is totally unlimited,it is like directly storing a
            file in a never ending cloud
          </p>
        </Collapsible>
      </div>
      <div id="Faq">
        <Collapsible trigger="Do I need to connect my wallet in order to upload?">
          <p>
            Yes,your wallet address is basically going to be mapped to your
            uploaded files.{" "}
          </p>
        </Collapsible>
      </div>
      <div id="Faq">
        <Collapsible trigger="What is the minimum and maximum size of the files I can upload at once?">
          <p>
            This has no limit,it will only depend on your network connection.
          </p>
        </Collapsible>
      </div>
      <div id="Faq">
        <Collapsible trigger="Does the admin have access to my stored files?">
          <p>
            No!! The admin has no access to anyone's data except his (if he/she
            wishes to store data).
          </p>
        </Collapsible>
      </div>
    </div>
  );
};
const AboutUs = () => {
  return (
 <>
   <div className="bd">
  <div>
 
          {" "}
       <h1>What is BigData? </h1>
    
      <p>
              We are an IPFs enabled dApp(decentralized app).That simply connects your
              Web2 data to WEb3 storage to ensure that your data is safe via
              decentralization.{" "}
            </p>
  </div>
   </div>
 <div className="abtcontain">
  
    <div className="BD">
    
            <AnimationOnScroll animateIn="animate__flipInX">
          {" "}
          <h2>The Problem</h2>
        </AnimationOnScroll>
         
         <p>
          Centralized network can be censored or mutated. As hopes are on the
          storage provider to secure data, but we can't always be sure that the
          operator would live up to this; as anything can happen. Hacking, data
          policy changes, corrupted sotware and many more. <br />
          That's why we've brought a solution that keeps you in control to help
          you secure your future by storing your data
      
         </p>
         <AnimationOnScroll animateIn="animate__flipInX">
          {" "}
          <h2>Why web 3?</h2>
        </AnimationOnScroll>
        <p className="fact">
            
          According to an article by Akash Takyar{" "}
          <q>
            Web 3 gives users full control over thier data througth
            decentralization but they retain full acces to storage and
            communication
          </q>

        </p>
        <AnimationOnScroll animateIn="animate__flipInX">
          {" "}
          <h2>Our Solution</h2>
        </AnimationOnScroll>
        <p>Our team has come up with a brilliant way of how to store your data on the blockchain in the simplest way.  </p>


       <AnimationOnScroll animateIn="animate__flipInX">
          {" "}
          <h2>Privacy has come to stay</h2>
        </AnimationOnScroll>
        <p>Our team has ensured that we set in measures to ensure your privacy is priortized. That's why with the help of decentralization we've ensure that security measures are in place. so who ever you are and from where ever you are we have ensured that we keep your data as safe as possible </p>
       

  </div>
  <div className="bd-img">
  <img src={first} alt="first" />
  </div>
 </div>

 </>


  );
  <FAQ />;
};

export default AboutUs;
