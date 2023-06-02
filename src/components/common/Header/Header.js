import React from 'react';
import Logo from './logo.svg'
import ChatLogo from './chat.svg'

const Header = () => {
  return (
    <div className="flex flex-row content-center justify-center mt-6">
      <div className="flex basis-1/12 justify-center items-center">
        <div className="">
          <a role="button" tabIndex="0" href="https://codebyedge.co.uk" className="a a-link">
            <img src={Logo} alt="logo" srcSet="" width="100" />
          </a>
        </div>
      </div>
      <div className="basis-6/12 flex justify-center items-center">
        <button className="bg-gray-100 hover:bg-gray-200 cbe-btn-text-green cbe-btn-text-font py-2 px-12 rounded-none h-3/4">
          <div className="flex flex-row content-center justify-start gap-x-2">
            <div className="basis-1/4">
              <img className="cbe-btn-svg-fill" src={ChatLogo} alt="chat" srcset="" width="24" />
            </div>
            <div className="basis-3/4">
              <p>Talk to Us</p>
            </div>
          </div>
        </button>
      </div>
      <div className="basis-5/12 flex pr-1 justify-end">
        <div className="basis-3/12"></div>
        <div className="basis-9/12 flex justify-center">
          <button className="bg-[#183e3f] hover:bg-teal-700 w-full py-8 px-4 rounded-lg justify-self-end text-2xl font-extrabold text-white">
            <div className="flex justify-between px-8 justify-between" >
              <p style={{fontFamily: "Comorant"}}>£</p>
              <p style={{fontFamily: "Cormorant Garamond"}}>Buy Now</p>
            </div>
          </button>
          {/* <button v-if="$parent.working == true" type="button" className="cbe-spinner mt-4 sm:mt-4 lg:mt-6" disabled></button> */}
        </div>
      </div>
    </div>
  )
}

export default Header;
