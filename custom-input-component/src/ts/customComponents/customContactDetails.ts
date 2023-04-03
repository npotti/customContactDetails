import Composite = require("ojs/ojcomposite");
import * as view from "text!./contactdetails.html";
import viewModel from "./contactdetails";

const metadata = {
    "jetVersion": "^8.3.0",
    "name": "contact-details",
    "displayName": "Contact Details",
    "description": "Custom component for Contact details which takes Email, Phone and validates them",
    "version": "1.0.0",
    "properties": {
      "email": {
        "type": "string",
      },
      "phoneNumber": {
        "type": "string",
      },
    },
    "methods": {},
    "slots": {},
    "events": {},
  };
  

Composite.register("contact-details", {
  view: view,
  viewModel: viewModel,
  metadata: metadata
});