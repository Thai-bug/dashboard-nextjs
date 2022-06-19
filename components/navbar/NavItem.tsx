import React from "react";
import { IBaseProps } from "../../common/interfaces";

interface IProps extends IBaseProps {
}

const NavItem: React.FC<IProps> = (props: IProps) => {
  return (<>
    <div className={props.className}>
      {props.children}
    </div>
  </>);
}

export default React.memo(NavItem);