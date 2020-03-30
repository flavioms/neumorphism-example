import "styled-components";
declare module "styled-components" {
  export interface DefaultTheme {
    title: string;

    colors: {
      primary: string;
      secundary: string;
      lightShadow: string;
      darkShadow: string;
      text: string;
    };
  }
}
