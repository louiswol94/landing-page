// Copied from https://www.radix-ui.com/primitives/docs/components/accordion
import * as React from "react";
import { Accordion } from "radix-ui";
import classNames from "classnames";
import { PlusIcon } from "@radix-ui/react-icons";
import usePermissions from "../../../../hooks/usePermissions";
import "./AccordionSection.scss";

const AccordionTrigger = React.forwardRef(({ children, className, ...props }, forwardedRef) => (
  <Accordion.Header className="AccordionHeader">
    <Accordion.Trigger
      className={classNames("AccordionTrigger", className)}
      {...props}
      ref={forwardedRef}
    >
      {children}
      <PlusIcon
        className="AccordionChevron"
        aria-hidden
        style={{ width: "40px", height: "40px" }}
      />
    </Accordion.Trigger>
  </Accordion.Header>
));

const AccordionContent = React.forwardRef(({ children, className, ...props }, forwardedRef) => (
  <Accordion.Content
    className={classNames("AccordionContent", className)}
    {...props}
    ref={forwardedRef}
  >
    <div className="AccordionContentText">{children}</div>
  </Accordion.Content>
));

const accordionItems = [
  {
    value: "item-1",
    title: "View License Essentials",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed imperdiet ultrices massa eu dapibus. Proin blandit lacinia tortor ac tristique. Donec nec vulputate massa. Aliquam erat volutpat.",
  },
  {
    value: "item-2",
    title: "View Plugin State",
    content:
      "This means sharing whether the plugin is active, deactivated, or uninstalled. Along with the homepage URL, sharing the state allows you to reuse the license when the plugin is inactive.",
  },
  {
    value: "item-3",
    title: "View Diagnostic Info",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed imperdiet ultrices massa eu dapibus. Proin blandit lacinia tortor ac tristique. Donec nec vulputate massa. Aliquam erat volutpat.",
    permissionKey: "viewDiagnosticInfo",
  },
  {
    value: "item-4",
    title: "View Plugins & Themes List",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed imperdiet ultrices massa eu dapibus. Proin blandit lacinia tortor ac tristique. Donec nec vulputate massa. Aliquam erat volutpat.",
    permissionKey: "viewPluginsAndThemesList",
  },
];

export default function AccordionSection() {
  const { permissions } = usePermissions();

  return (
    <Accordion.Root className="AccordionRoot" type="single" collapsible>
      {accordionItems.map((item) => {
        const isDisabled = item.permissionKey ? !permissions[item.permissionKey] : false;

        return (
          <Accordion.Item
            key={item.value}
            className={classNames("AccordionItem", { disabled: isDisabled })}
            value={item.value}
            disabled={isDisabled}
          >
            <AccordionTrigger>{item.title}</AccordionTrigger>
            <AccordionContent>{item.content}</AccordionContent>
          </Accordion.Item>
        );
      })}
    </Accordion.Root>
  );
}
