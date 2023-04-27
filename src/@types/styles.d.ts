import "styled-components"
import { defaultTheme } from "../styles/themes/default";

type ThemeInterface = typeof defaultTheme

declare module "styled-components" {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultTheme extends ThemeInterface {}
}