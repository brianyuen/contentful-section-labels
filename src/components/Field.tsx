import React from "react";
import { PlainClientAPI } from "contentful-management";
import { DisplayText } from "@contentful/f36-components";
import { FieldExtensionSDK } from "@contentful/app-sdk";

interface FieldProps {
  sdk: FieldExtensionSDK;
  cma: PlainClientAPI;
}

const Field = (props: FieldProps) => {
  props.sdk.window.startAutoResizer();
  // If you only want to extend Contentful's default editing experience
  // reuse Contentful's editor components
  // -> https://www.contentful.com/developers/docs/extensibility/field-editors/
  return <DisplayText>{props.sdk.field.getValue()}</DisplayText>;
};

export default Field;
