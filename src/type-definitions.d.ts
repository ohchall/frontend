declare module "*.jpeg" {
  const content: string;
  export default content;
}

declare module "*.svg" {
  import React = require("react");
  export const ReactComponent: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & {
      title?: string | undefined;
    }
  >;
  const src: string;
  export default src;
}

declare module '*.png';
