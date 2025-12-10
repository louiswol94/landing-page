import * as React from "react";

const PermissionsContext = React.createContext(null);

export function PermissionsProvider({ children }) {
  const [permissions, setPermissions] = React.useState({
    viewDiagnosticInfo: true,
    viewPluginsAndThemesList: true,
  });

  const handlePermissionChange = React.useCallback((permission, value) => {
    setPermissions((prev) => ({
      ...prev,
      [permission]: value,
    }));
  }, []);

  const value = React.useMemo(
    () => ({ permissions, handlePermissionChange }),
    [permissions, handlePermissionChange]
  );

  return (
    <PermissionsContext.Provider value={value}>
      {children}
    </PermissionsContext.Provider>
  );
}

export default function usePermissions() {
  const context = React.useContext(PermissionsContext);

  if (!context) {
    throw new Error("usePermissions must be used within a PermissionsProvider");
  }

  return context;
}
