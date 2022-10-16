import { FC } from "react";

import { IProps } from "./types";

const PlusPlusIcon: FC<IProps> = ({ width, height, ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    {...props}
    width={width}
    height={height}
  >
    <g id="Circle_Plus"
      data-name="Circle Plus"
    >
      <g>
        <path fill="#7D8085"
          d="M15,12.5H12.5V15a.5.5,0,0,1-1,0V12.5H9a.5.5,0,0,1,0-1h2.5V9a.5.5,0,0,1,1,0v2.5H15A.5.5,0,0,1,15,12.5Z"
        />
        <path fill="#7D8085"
          d="M12,21.932A9.934,9.934,0,1,1,21.932,12,9.944,9.944,0,0,1,12,21.932ZM12,3.065A8.934,8.934,0,1,0,20.932,12,8.944,8.944,0,0,0,12,3.065Z"
        />
      </g>
    </g>
  </svg>
)

export { PlusPlusIcon };