import { useContext } from "react";
import { ThemeContext } from "./ThemeState";

export const useTheme = () => useContext(ThemeContext);
