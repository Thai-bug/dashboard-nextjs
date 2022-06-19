import React from "react";

import NavItem from "../navbar/NavItem";
import { IBaseProps } from "../../common/interfaces";

interface IProps extends IBaseProps {
  onClick?: () => any;
  isOpen: boolean;
}

const SideBar: React.FC<IProps> = (props: IProps) => {
  return <>
    <main onClick={() => props.onClick()} className={`md:hidden absolute top-0  ${props.isOpen ? 'w-screen opacity-60' : '-z-10'} transition-all duration-1000 h-screen bg-slate-200`}>

    </main>
    <section className={`p-4 border absolute top-0  h-screen w-48 bg-gray-200 transition-all shadow-2xl  duration-500  ${props.isOpen ? 'left-0' : '-left-52'}`}>
      <div className="flex justify-end">
        <div className="w-10 h-10 p-2 hover:bg-slate-200 rounded-full transition-all duration-300">
          <button type="button" onClick={() => props.onClick()}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
      <NavItem className=' block rounded-sm p-2 hover:bg-red-200 transition-all ease-linear duration-100'>
        <div>hello</div>
      </NavItem>
      <NavItem className=' block rounded-sm p-2 hover:bg-red-200 transition-all ease-linear duration-100'>
        <div>hello</div>
      </NavItem>

    </section></>
}

export default React.memo(SideBar);