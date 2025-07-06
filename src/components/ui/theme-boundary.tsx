import styled from "styled-components";

// This styled-component acts as a wrapper that enforces a specific theme.
// It works by overriding all the root CSS variables used by shadcn/ui.
export const LightModeBoundary = styled.div`
  /* 
   * ====================================================================
   *               LIGHT THEME VARIABLE OVERRIDES
   * ====================================================================
   * Any shadcn component placed inside this wrapper will use these
   * fixed "light mode" values, ignoring the global .dark theme.
   * These values are typically copied from the :root selector in your
   * global CSS file.
   */

  --background: 0 0% 100%; /* white */
  --foreground: 222.2 84% 4.9%; /* almost black */

  --card: 0 0% 100%;
  --card-foreground: 222.2 84% 4.9%;

  --popover: 0 0% 100%;
  --popover-foreground: 222.2 84% 4.9%;

  --primary: 222.2 47.4% 11.2%; /* dark blue for buttons in light mode */
  --primary-foreground: 210 40% 98%; /* light text on primary buttons */

  --secondary: 210 40% 96.1%;
  --secondary-foreground: 222.2 47.4% 11.2%;

  --muted: 210 40% 96.1%;
  --muted-foreground: 215.4 16.3% 46.9%; /* grey for placeholder text */

  --accent: 210 40% 96.1%;
  --accent-foreground: 222.2 47.4% 11.2%;

  --destructive: 0 84.2% 60.2%;
  --destructive-foreground: 210 40% 98%;

  --border: 214.3 31.8% 91.4%; /* light grey border */
  --input: 214.3 31.8% 91.4%; /* light grey input background */
  --ring: 222.2 84% 4.9%; /* focus ring color */
`;
