import ThemeRegistry from "./ThemeRegistry";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return <ThemeRegistry>{children}</ThemeRegistry>;
};

export default Providers;
