
import * as React from "react";

function Logo(props) {
  return (
    <svg
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      viewBox="0 0 24 24"
      height="3em"
      width="3em"
      {...props}
    >
      <path stroke="none" d="M0 0h24v24H0z" />
      <path d="M5 20l14-8L5 4z" />
      <path d="M19 20L5 12l14-8z" />
    </svg>
  );
}

export default Logo;