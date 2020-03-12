import React from "react";
import {
  Drop,
  DropTitle,
  DropSpan,
  From,
  Input,
  FormInput,
  InputText,
  InputEmail,
  InputExp,
  TextArea,
  InputSubmit
} from "./style";
import Footer from "../Footer/index";
const Contact = () => {
  return (
    <React.Fragment>
      <Drop>
        <div className="container">
          <DropTitle>
            <DropSpan>Drop </DropSpan>Me A line
          </DropTitle>
          <From action="">
            <FormInput>
              <InputText type="text" placeholder="Your Name" />
              <InputEmail type="email" placeholder="Your Email" />
            </FormInput>
            <InputExp type="text" className="sub" placeholder="Your Subject" />
            <TextArea cols="30" rows="10" placeholder="Your Message"></TextArea>
            <InputSubmit type="submit" value="Send Message" />
          </From>
        </div>
      </Drop>
      <Footer/>
    </React.Fragment>
  );
};

export default Contact;
