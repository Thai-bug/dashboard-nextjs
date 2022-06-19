import { IBaseProps } from "common/interfaces"
import React from "react"

interface IProps extends IBaseProps {

}

const FourOhFourView: React.FC<IProps> = (props: IProps) => {
  return (
    <div className="h-screen grid grid-flow-col place-items-center group">
      {props.children}

    </div>
  )
}

export default React.memo(FourOhFourView)