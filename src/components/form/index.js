import React from 'react'
 import {
   Container, Error, Title, Text, Input, TextSmall, Link, Submit, Base
 } from "./styles/form";

const Form = ({children, ...restProps}) => {
  return <Container>{children}</Container>;
}

Form.Base = function FormBase({ children, ...restProps }) {
  return <Base {...restProps}>{children}</Base>;
};
Form.Error = function FromError({children, ...restProps}){ 
  return <Error {...restProps}>{children}</Error>;
}
Form.Title = function FormTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};
Form.Text = function FormText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};
Form.TextSmall = function FormTextSmall({ children, ...restProps }) {
  return <TextSmall {...restProps}>{children}</TextSmall>;
};
Form.Link = function FromLink({ children, ...restProps }) {
  return <Link {...restProps}>{children}</Link>;
};
Form.Input = function FormInput({ children, ...restProps }) {
  return <Input {...restProps}>{children}</Input>;
};
Form.Submit = function FormSubmit({ children, ...restProps }) {
  return <Submit {...restProps}>{children}</Submit>;
};

export default Form;