import React from "react";
import { IBaseProps } from "../../common/interfaces";
import Navbar from "../navbar";
import NavItem from "../navbar/NavItem";

interface IProps extends IBaseProps {
  isOpen?: boolean;
  onClick?: () => any;
}

const HeaderLayout: React.FC<IProps> = (props: IProps) => {
  console.log(props.onClick)
  return <>
    <div className="md:container md:mx-auto">
      <Navbar style={{
        minHeight: 10
      }}
        className='grid grid-cols-9 gap-1 text-white bg-slate-800 p-2 shadow-lg shadow-gray-500'
      >
        <div className="flex md:hidden col-span-2 items-center justify-center">
          <div className="w-10 h-10 p-2 hover:bg-slate-900 rounded-full transition-all duration-300">
            <button onClick={() => (props.onClick ? props.onClick() : '')} type="button" className=" mx-auto"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            </button>
          </div>

        </div>

        <NavItem text={'Hello'} className='hidden md:block rounded-sm p-5 text-center hover:bg-red-200 transition-all ease-linear duration-100' />
        <NavItem text={'Hello'} className='hidden md:block rounded-sm p-5 text-center hover:bg-red-200 transition-all ease-linear duration-100' />
        <NavItem text={'Tài khoản'} className='rounded-sm p-5 text-center hover:bg-red-200 transition-all ease-linear duration-100 col-end-12' />
        <NavItem text={'Đăng nhập'} className='rounded-sm p-5 text-center hover:bg-red-200 transition-all ease-linear duration-100 col-end-13' />
      </Navbar>
    </div></>
} 

export default React.memo(HeaderLayout);