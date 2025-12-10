import * as React from "react";
import { Box, Flex, Text } from "@radix-ui/themes";
import * as Switch from "@radix-ui/react-switch";
import usePermissions from "../../../../hooks/usePermissions";
import "./PermissionsCard.scss";

import LinkIcon from "../../../../assets/link.svg";
import PluginIcon from "../../../../assets/plugin.svg";
import WpIcon from "../../../../assets/wp.svg";
import ListIcon from "../../../../assets/list.svg";
import { QuestionMarkIcon } from "@radix-ui/react-icons";

const SettingRow = ({ icon, title, description, hasSwitch = false, checked, onCheckedChange }) => {
  const titleId = title.replace(/\s+/g, "-").toLowerCase();

  return (
    <Flex justify="between" align="start" className="permissions-card__setting-row">
      <Box className="permissions-card__icon" aria-hidden="true">
        <img src={icon} alt="" />
      </Box>
      <Box className="permissions-card__setting-content">
        <Text className="permissions-card__title" id={titleId}>
          {title} <QuestionMarkIcon className="question-mark-icon" />
        </Text>
        <Text size="2" color="gray" className="permissions-card__description">
          {description}
        </Text>
      </Box>

      {hasSwitch && (
        <Switch.Root
          className="SwitchRoot"
          checked={checked}
          onCheckedChange={onCheckedChange}
          aria-labelledby={titleId}
        >
          <Switch.Thumb className="SwitchThumb" />
        </Switch.Root>
      )}
    </Flex>
  );
};

const settingsItems = [
  {
    icon: LinkIcon,
    title: "View License Essentials",
    description: "Homepage URL, plugin version, and SDK version",
  },
  {
    icon: PluginIcon,
    title: "View Plugin Info",
    description: "Is active, deactivated, or uninstalled",
  },
  {
    icon: WpIcon,
    title: "View Diagnostic Info",
    description: "WordPress and PHP versions, site language, and title",
    permissionKey: "viewDiagnosticInfo",
  },
  {
    icon: ListIcon,
    title: "View Plugins and Themes List",
    description: "Names, slugs, versions, and if active or not",
    permissionKey: "viewPluginsAndThemesList",
  },
];

export default function PermissionsCard() {
  const { permissions, handlePermissionChange } = usePermissions();

  return (
    <Box className="permissions-card__settings-list">
      {settingsItems.map((item, index) => (
        <SettingRow
          key={index}
          icon={item.icon}
          title={item.title}
          description={item.description}
          hasSwitch={!!item.permissionKey}
          checked={item.permissionKey ? permissions[item.permissionKey] : undefined}
          onCheckedChange={
            item.permissionKey
              ? (checked) => handlePermissionChange(item.permissionKey, checked)
              : undefined
          }
        />
      ))}
    </Box>
  );
}
