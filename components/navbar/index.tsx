import React from "react";
import { IBaseProps } from "../../common/interfaces";

interface IProps extends IBaseProps {

}

const Navbar: React.FC<IProps> = (props) => {
  return (
    <div className={props.className} style={props.style}>
      {props.children}
    </div>
  )
}

export default Navbar;