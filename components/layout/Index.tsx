import React from "react";
import { IBaseProps } from "../../common/interfaces";

import HeaderLayout from './Header'
import SideBar from "./SideBar";

interface IProps extends IBaseProps {
}

const IndexLayout: React.FC<IProps> = (props) => {
  const [isOpenSideBar, setIsOpenSideBar] = React.useState(false);

  return <>
    <div className="relative">
      <HeaderLayout isOpen={isOpenSideBar} onClick={() => setIsOpenSideBar(!isOpenSideBar)}>

      </HeaderLayout>
      <div className="p">{
        props.children
      }
      </div>
      <SideBar isOpen={isOpenSideBar} onClick={() => setIsOpenSideBar(!isOpenSideBar)}></SideBar>
    </div>
  </>
}

export default React.memo(IndexLayout);