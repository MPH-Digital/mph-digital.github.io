/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  //techDocsSidebar: [{ type: "autogenerated", dirName: "technical-docs" }],
  busDocsSidebar: [{ type: "autogenerated", dirName: "business-docs" }],
  designDocsSidebar: [{ type: "autogenerated", dirName: "design-docs" }],
  teamSidebar: [{ type: "autogenerated", dirName: "team" }],
  // But you can create a sidebar manually
  techDocsSidebar: [
    {
      type: "doc",
      id: "technical-docs/intro",
      label: "Development Documentation",
    },
    {
      type: "doc",
      id: "technical-docs/environments",
      label: "Environments",
    },
    {
      type: "category",
      label: "Process",
      items: [
        {
          type: "doc",
          id: "technical-docs/process/bubble-process",
          label: "Bubble Process",
        },
        {
          type: "doc",
          id: "technical-docs/process/plugin-process",
          label: "Plugin Process",
        },
        {
          type: "doc",
          id: "technical-docs/process/qa-process",
          label: "QA Process",
        },
      ],
    },
    {
      type: "category",
      label: "Bubble.io",
      items: [
        {
          type: "doc",
          id: "technical-docs/bubble/workflows",
          label: "Workflows",
        },
        {
          type: "doc",
          id: "technical-docs/bubble/database",
          label: "Database",
        },
        {
          type: "category",
          label: "Plugins",
          items: [
            {
              type: "doc",
              id: "technical-docs/bubble/plugins/plugins",
              label: "3rd Party Plugins",
            },
            {
              type: "category",
              label: "Custom Plugins",
              items: [
                {
                  type: "doc",
                  id: "technical-docs/bubble/plugins/custom-plugins/spotlight",
                  label: "Spotlight Carousel",
                },
                {
                  type: "doc",
                  id: "technical-docs/bubble/plugins/custom-plugins/mailgun",
                  label: "Mailgun",
                },
                {
                  type: "doc",
                  id: "technical-docs/bubble/plugins/custom-plugins/map-king",
                  label: "Map King",
                },
              ],
            },
          ],
        },
        {
          type: "doc",
          id: "technical-docs/bubble/security",
          label: "Security / Privacy",
        },
      ],
    },
    {
      type: "category",
      label: "Mapbox",
      items: [
        {
          type: "doc",
          id: "technical-docs/mapbox/mapbox-intro",
          label: "Mapbox Docs",
        },
      ],
    },
    {
      type: "category",
      label: "Notifications",
      items: [
        {
          type: "doc",
          id: "technical-docs/notifications/sms",
          label: "SMS",
        },
        {
          type: "doc",
          id: "technical-docs/notifications/whatsapp",
          label: "WhatsApp",
        },
        {
          type: "doc",
          id: "technical-docs/notifications/system-email",
          label: "System Email",
        },
        {
          type: "doc",
          id: "technical-docs/notifications/marketing-email",
          label: "Marketing Email",
        },
      ],
    },
    {
      type: "doc",
      id: "technical-docs/reporting",
      label: "Data / Reporting",
    },
  ],
};

export default sidebars;
