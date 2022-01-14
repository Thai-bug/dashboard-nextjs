import React, { useState, ReactNode } from 'react';

import {
  AiOutlineClose,
} from 'react-icons/ai';

import {
  GiHamburgerMenu,
} from 'react-icons/gi';

import {
  MdArrowBackIos,
} from 'react-icons/md';

interface IProps {
  children?: ReactNode;
}

const Sidebar: React.FC<IProps> = (props) => {
  const [toggle, setToggle] = useState<boolean>(false);
  const [hidden, setHidden] = useState<boolean>(false);

  return (
    <div className="bg-primary h-4 relative">
      <div className="flex lg:hidden text-3xl h-full items-center ml-5" onClick={() => {
        setHidden(prev => !prev);
      }}>
        <GiHamburgerMenu />
      </div>
      <div className={`absolute top-0 left-0 bg-primary h-screen transition-all ease-linear-out duration-300 hidden lg:block w-18
      ${!toggle
          ? 'w-18'
          : 'w-5.5'
        }
        `}>
        <div className="text-center flex justify-center">
          <img src="/img/logo.png" alt="logo" className="w-40" />
        </div>

        <div onClick={() => {
          setToggle(prev => !prev);
        }} className="absolute bottom-0 mb-6 right-10">
          <MdArrowBackIos className={`transition-all ease-linear-out duration-150 transform rotate-${toggle ? 180 : 0}`} />
        </div>

        <div className={`${!hidden ? 'hidden' : 'block'} flex justify-center`}>
          {props.children}
        </div>
      </div>

      <div className={`absolute text-3xl top-0 left-0 bg-primary h-screen transition-all ease-linear-out duration-300 lg:hidden block w-18
      ${!hidden
          ? 'w-0'
          : 'w-18'
        }
        `}>
        <div className="w-full">
          <div className="inline-block relative w-full">
            <div className={`${hidden ? 'visible' : 'invisible'} absolute top-3 right-0`}
              onClick={() => {
                setHidden(prev => !prev);
              }}>
              <AiOutlineClose />
            </div>

            <div className="">
              <img src="/img/logo.png" alt="logo" className="w-40 block mx-auto my-auto" />
            </div>
          </div>

          <div className={`${!hidden ? 'hidden' : 'block'} flex justify-center`}>
            {props.children}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Sidebar;
