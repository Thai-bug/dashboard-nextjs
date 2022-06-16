import React from "react";
import { IBaseProps } from "../../../common/interfaces";

interface IProps extends IBaseProps { }

const LoginView: React.FC<IProps> = (props: IProps) => {
  return <>
    <div className="h-screen grid grid-flow-col place-items-center group">
helo
    </div>
  </>
}

export default React.memo(LoginView)