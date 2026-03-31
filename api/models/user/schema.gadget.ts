import type { GadgetModel } from "gadget-server";

// This file describes the schema for the "user" model, go to https://the-super-cool-blog-app.gadget.app/edit to view/edit your model in Gadget
// For more information on how to update this file http://docs.gadget.dev

export const schema: GadgetModel = {
  type: "gadget/model-schema/v2",
  storageKey: "DataModel-AppAuth-User",
  fields: {
    email: {
      type: "email",
      validations: { required: true, unique: true },
      storageKey: "hzzojINCk07m",
    },
    emailVerificationToken: {
      type: "string",
      storageKey: "KAYk8A1VXbhI",
    },
    emailVerificationTokenExpiration: {
      type: "dateTime",
      includeTime: true,
      storageKey: "uia95dSufIC4",
    },
    emailVerified: {
      type: "boolean",
      default: false,
      storageKey: "udbbA-hdJC9Q",
    },
    firstName: { type: "string", storageKey: "vgZRTRc-s56f" },
    googleImageUrl: { type: "url", storageKey: "731XIyd-5aGj" },
    googleProfileId: { type: "string", storageKey: "cak--97xx6wg" },
    lastName: { type: "string", storageKey: "-NPHD_qxeOiF" },
    lastSignedIn: {
      type: "dateTime",
      includeTime: true,
      storageKey: "aSlWwrkvcSLJ",
    },
    password: {
      type: "password",
      validations: { strongPassword: true },
      storageKey: "8ShTh3iWdGEq",
    },
    profilePicture: {
      type: "file",
      allowPublicAccess: true,
      storageKey: "8_wYLiZXElga",
    },
    resetPasswordToken: {
      type: "string",
      storageKey: "hHrIrCoJF4di",
    },
    resetPasswordTokenExpiration: {
      type: "dateTime",
      includeTime: true,
      storageKey: "wnriO2qGdfIa",
    },
    roles: {
      type: "roleList",
      default: ["unauthenticated"],
      storageKey: "dshuHMyGyZ18",
    },
  },
};
