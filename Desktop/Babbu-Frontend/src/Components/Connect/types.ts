import { FC } from "react";
// import  {SvgProps}  from "./types";
import { SVGAttributes } from "react";
import { DefaultTheme } from "styled-components";
import { SpaceProps } from "styled-system";
// import {getExternalLinkProps} from "./types";
// import Text from "./Text";
// import  {LinkProps}  from "./types";
// import styled from "styled-components";


export enum ConnectorNames {
  Injected = "injected",
  WalletConnect = "walletconnect",
  BSC = "bsc",
}

export type Login = (connectorId: ConnectorNames) => void;

export interface Config {
  title: string;
  icon: string;
  connectorId: ConnectorNames;
}
export interface ConfigYour {
  name: string;
  img: string;
  connectorId: ConnectorNames;
}
export interface ConfigMoney {
  title: string;
  icon: string;
  connectorId: ConnectorNames;
}
export const getExternalLinkProps = (): { target: string; rel: string } => ({
  target: "_blank",
  rel: "noreferrer noopener",
});

export interface SvgProps extends SVGAttributes<HTMLOrSVGElement>, SpaceProps {
  theme?: DefaultTheme;
  spin?: boolean;
}

// export interface LinkProps extends TextProps, AnchorHTMLAttributes<HTMLAnchorElement> {
//   external?: boolean;
// }

// const StyledLink = styled(Text)<LinkProps>`
//   display: flex;
//   align-items: center;
//   width: fit-content;
//   &:hover {
//     text-decoration: underline;
//   }
// `;

// export const Link: React.FC<LinkProps> = ({ external, ...props }) => {
//   const internalProps = external ? getExternalLinkProps() : {};
//   return <StyledLink as="a" bold {...internalProps} {...props} />;
// };

// Link.defaultProps = {
//   color: "primary",
// };

import get from "lodash/get";


const getThemeValue = (path: string, fallback?: string | number) => (theme: DefaultTheme): string =>
  get(theme, path, fallback);

export default getThemeValue;
