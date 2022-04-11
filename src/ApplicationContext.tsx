import * as React from "react";
import { createContext } from "react";

export enum Environment {
  gms = "GMS",
  portal = "Portal"
}

interface Settings {
  environment: Environment;
  setEnvironment: React.Dispatch<React.SetStateAction<Environment>>;
  isPortal: boolean;
}

export const ApplicationContext = createContext<Settings>(undefined);

export const ApplicationContextProvider: React.FC = (props) => {
  const [environment, setEnvironment] = React.useState<Environment>(
    Environment.gms
  );
  const [isPortal, setIsportal] = React.useState<boolean>(false);

  const settings = React.useMemo(() => {
    setIsportal(environment === Environment.portal);

    return { environment, setEnvironment, isPortal };
  }, [environment, isPortal]);

  return (
    <ApplicationContext.Provider value={settings}>
      {props.children}
    </ApplicationContext.Provider>
  );
};
