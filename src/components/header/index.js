 import React from 'react'
 import {
   Feature,
   Container,
   Background,
   Group,
   Logo,
   Profile,
   Dropdown,
   Link,
   PlayButton,
   FeatureCallOut,
   Text,
   ButtonLink,
 } from "./styles/header";
 import { Link as ReachRouterLink } from "react-router-dom";

 export default function Header({ bg = true, children, ...restProps }) {
   return bg ? (
     <Background data-testid='header-bg' {...restProps}>
       {children}
     </Background>
   ) : (
     children
   );
 };
//  Header feature
Header.Feature = function HeaderFeature({children, ...restProps}) {
  return <Feature {...restProps}>{children}</Feature>;
}

Header.FeatureCallOut = function FeatureCallOut({ children, ...restProps }) {
  return <FeatureCallOut {...restProps}>{children}</FeatureCallOut>;
};

Header.Frame = function HeaderFrame({ children, ...restProps }) {
return <Container {...restProps}>{children}</Container>;
};

Header.Logo = function HeaderLogo({ to, ...restProps }) {
  return (
    <ReachRouterLink to={to}>
      <Logo {...restProps} />
    </ReachRouterLink>
  );
};

Header.Group = function HeaderGroup({ children, ...restProps }) {
  return <Group {...restProps}>{children}</Group>;
};
Header.Profile = function HeaderProfile({ children, ...restProps }) {
  return <Profile {...restProps}>{children}</Profile>;
};
Header.Dropdown = function HeaderDropdown({ children, ...restProps }) {
  return <Dropdown {...restProps}>{children}</Dropdown>;
};
Header.TextLink = function HeaderTextLink({ children, ...restProps }) {
  return <Link {...restProps}>{children}</Link>;
};
Header.PlayButton = function HeaderPlayButton({ children, ...restProps }) {
  return <PlayButton {...restProps}>{children}</PlayButton>;
};
Header.FeatureCallOut = function HeaderFeatureCallOut({
  children,
  ...restProps
}) {
  return <FeatureCallOut {...restProps}>{children}</FeatureCallOut>;
};

Header.Text = function HeaderText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

Header.ButtonLink = function HeaderButtonLink({ children, ...restProps }) {
  return <ButtonLink {...restProps}>{children}</ButtonLink>;
};