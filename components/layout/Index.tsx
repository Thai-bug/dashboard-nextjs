import React from "react";
import { IBaseProps } from "../../common/interfaces";

import HeaderLayout from './Header'
import SideBar from "./SideBar";

interface IProps extends IBaseProps {
}

const IndexLayout: React.FC<IProps> = (props) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return <>
    <div className="relative">
      <HeaderLayout isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>

      </HeaderLayout>
      <div className="p">{
        props.children
      }
      </div>
      <SideBar isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}></SideBar>
    </div>
  </>
}

export default React.memo(IndexLayout);