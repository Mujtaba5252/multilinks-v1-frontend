import React from "react";
const ForwardRefWrapper = React.forwardRef((props, ref) => {
  return <div ref={ref}>{props.children}</div>;
});
export default ForwardRefWrapper;
