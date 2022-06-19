import React from "react"
import { IBaseProps } from "../../common/interfaces";

interface IProps extends IBaseProps {

}

const NavBar: React.FC<IProps> = (props: IProps) => {
  return (
    <>
      <div className={props.className} style={props.style}>
        {props.children}
      </div>
    </>
  );
}

export default React.memo(NavBar);