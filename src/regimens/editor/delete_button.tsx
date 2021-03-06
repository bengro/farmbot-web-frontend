import * as React from "react";
import { RegimenProps } from "../interfaces";
import { deleteRegimen } from "../actions";

function remove({regimen, dispatch}: RegimenProps) {
  if (regimen) {
    return event => regimen && dispatch(deleteRegimen(regimen));
  } else {
    throw new Error("Tried to delete non-existant regimen");
  }
}

export function DeleteButton({regimen, dispatch}: RegimenProps) {
  if (!regimen) { return <span />; };
  return <button className="red button-like widget-control"
                 onClick={ remove({dispatch, regimen}) }>
          Delete
        </button>;
}
