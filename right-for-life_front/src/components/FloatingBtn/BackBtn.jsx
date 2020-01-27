import React from "react";
import { FloatingBtn } from "./FloatingBtn.jsx";

export const BackBtn = ({position}) => (
  <FloatingBtn
    icon="fa-arrow-left"
    position={position}
    onClick={window.history.length === 1 ? null : () => window.history.back()}
    url="/"/>
);
