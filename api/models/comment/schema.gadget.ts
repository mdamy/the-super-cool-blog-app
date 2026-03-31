import type { GadgetModel } from "gadget-server";

// This file describes the schema for the "comment" model, go to https://the-super-cool-blog-app.gadget.app/edit to view/edit your model in Gadget
// For more information on how to update this file http://docs.gadget.dev

export const schema: GadgetModel = {
  type: "gadget/model-schema/v2",
  storageKey: "N8y3_epODwa-",
  fields: {
    body: { type: "string", storageKey: "JDq6NaVWU1gY" },
    postedAt: {
      type: "dateTime",
      includeTime: true,
      storageKey: "OOdOWZt4ReXQ",
    },
    title: { type: "string", storageKey: "qy0ShhE_HkgU" },
  },
};
