import React, { useEffect, useState } from 'react';
import Logo from './logo.svg'
import ChatLogo from './chat.svg'
import Pricing from '../../../lib/pricing';
import { useSelector } from 'react-redux';
import { store } from '../../../lib/env';
import axios from 'axios';

const Header = ({ showContactModal, value }) => {
  const product = useSelector((store) => store.product);
  const productParts = useSelector((store) => store.productParts);
  const configuration = useSelector((store) => store.configuration);

  const buy = () => {
    console.log('aa')
    axios
      .get(
        "https://codebyedgesite.myshopify.com/admin/api/2023-04/products/8218132152617.json",
        {
          headers: {
            'Content-Type': 'application/json',
            'X-Shopify-Access-Token': 'Bearer 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'
          },
        }
      )
      .then((response) => {
        console.log('res', response);
      })
      .catch(function (error) {
        console.log(error);
        console.log(error.response);
      });
  }

  return (
    <div className="flex flex-row content-center justify-center mt-6">
      <div className="flex basis-1/12 justify-center items-center">
        <div className="">
          <a role="button" tabIndex="0" href="https://codebyedge.co.uk" className="a a-link">
            <img src={Logo} alt="logo" srcSet="" width="100" />
          </a>
        </div>
      </div>
      <div className="basis-6/12 flex justify-center items-center setting-menu-tab" onClick={() => showContactModal()}>
        <button className="bg-gray-100 hover:bg-gray-200 cbe-btn-text-green cbe-btn-text-font py-2 px-12 rounded-none h-3/4">
          <div className="flex flex-row content-center justify-start gap-x-2">
            <div className="basis-1/4">
              <img className="cbe-btn-svg-fill" src={ChatLogo} alt="chat" srcSet="" width="24" />
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
          <button className="bg-[#183e3f] hover:bg-teal-700 w-full py-8 px-4 rounded-lg justify-self-end text-2xl font-extrabold text-white" onClick={() => buy()}>
            <div className="flex justify-between items-center px-8 justify-between" >
              <p style={{ fontFamily: "Comorant" }}>£{value}</p>
              <p style={{ fontFamily: "Cormorant Garamond" }}>Buy Now</p>
            </div>
          </button>
          {/* <button v-if="$parent.working == true" type="button" className="cbe-spinner mt-4 sm:mt-4 lg:mt-6" disabled></button> */}
        </div>
      </div>
    </div>
  )
}

export default Header;
