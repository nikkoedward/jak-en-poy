import React from "react";

type WrapperProps = {
  children: React.ReactNode;
};

function Wrapper(props: WrapperProps) {
  return <div className="root-container">{props.children}</div>;
}

export default Wrapper;
