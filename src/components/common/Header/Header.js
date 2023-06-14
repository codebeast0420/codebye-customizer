import React, { useEffect, useState } from 'react';
import Logo from './logo.svg'
import LHLogo from '../../../assets/images/lh-logo.svg';
import APLogo from '../../../assets/images/ap-logo.svg';
import ChatLogo from './chat.svg'
import Pricing from '../../../lib/pricing';
import { useSelector } from 'react-redux';
import { store } from '../../../lib/env';
import axios from 'axios';
import imageCompression from 'browser-image-compression';
import { URL, client } from '../../../lib/env'

const Header = ({ showContactModal, value }) => {
  const product = useSelector((store) => store.product);
  const productParts = useSelector((store) => store.productParts);
  const configuration = useSelector((store) => store.configuration);
  const [isDisabled, setIsDisabled] = useState(true);
  const [productId, setProductId] = useState(0);
  const imageFunc = useSelector((store) => store.imageFunc);
  const queryString = useSelector((store) => store.queryString);
  const preMadeProduct = useSelector((store) => store.preMadeProduct);
  const [response, setResponse] = useState();
  const [subLogo, setSubLogo] = useState("");

  useEffect(() => {
    console.log('project', product);
    switch (product.data.id) {
      case 186: setProductId(8218132152617); break;
      case 185: setProductId(8236553765161); break;
      case 402: setProductId(8236574441769); break;
      case 405: setProductId(8236577947945); break;
      case 408: setProductId(8236587319593); break;
      default: setProductId(8236619301161); break;
    }
  }, []);

  useEffect(() => {
    if (!value) {
      setIsDisabled(true);
    }
    else setIsDisabled(false);
    const currentUrl = window.location.href;
    console.log('Current URL:', currentUrl, typeof (currentUrl));
    const lister = "lister";
    const anjapotze = "anjapotze";
    if (currentUrl.includes(lister)) {
      setSubLogo("lister");
    }
    if (currentUrl.includes(anjapotze)) {
      setSubLogo("anjapotze");
    }

  }, [value])

  const buy = async () => {
    axios.post("https://codeby-backend.vercel.app/add-to-cart", { productId: productId }).then((res) => {
      let variants = res.data.product?.variants;
      let variant = "not_found";
      variants.map((v) => {
        if (parseInt(v.price) == parseInt(value)) {
          variant = v;
        }
      });
      console.log('variant', variant);
      if (variant == "not_found") {
        // create one
        axios
          .post("https://codeby-backend.vercel.app/create-cart", {
            productId: productId,
            price: value,
          })
          .then(function (response) {
            variant = response.data.variant;
            window.location.assign(`https://codebyedge.co.uk/cart/add?id=${variant.id}&quantity=1&properties[message]=${encodeURIComponent(configuration.message)}&properties[finish]=${encodeURIComponent(configuration.pa_material.name)}&properties[size]=${encodeURIComponent(configuration.pa_size.name)}`, "");

          })
          .catch(function (error) {
            console.log(error);
            console.log(error.response);
          });
      } else {
        // ready to redirect
        window.location.assign(`https://codebyedge.co.uk/cart/add?id=${variant.id}&quantity=1&properties[message]=${encodeURIComponent(configuration.message)}&properties[finish]=${encodeURIComponent(configuration.pa_material.name)}&properties[size]=${encodeURIComponent(configuration.pa_size.name)}`, "");
      }
      console.log(res);
    })
  }

  return (
    <div className="flex md:flex-row lg:flex-row header-height  flex-col-reverse content-center  gap-4 justify-center mt-6">
      <div className="md:flex basis-4/12 justify-center items-center mx-5 hidden">
        <div className="">
          <a role="button" tabIndex="0" href="https://codebyedge.co.uk" className="a a-link flex">
            <img src={Logo} alt="logo" srcSet="" width="100" />
            {subLogo == "lister" && (
              <img src={LHLogo} className="ml-2" alt="lh-logo" srcSet='' width="250" height='250' />
            )}
            {subLogo == "anjapotze" && (
              <img src={APLogo} className="ml-2" alt="lh-logo" srcSet='' width="180" />
            )}

          </a>
        </div>
      </div>
      <div className="md:basis-3/12 basis-8/12 flex justify-center items-center setting-menu-tab" onClick={() => showContactModal()}>
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
        <div className="md:basis-9/12 w-full flex justify-center">
          <button className={`${isDisabled ? "disabledBtn" : "bg-[#183e3f]"} hover:bg-teal-700 w-full py-8 px-4 rounded-lg justify-self-end text-2xl font-extrabold text-white`} disabled={isDisabled} onClick={() => buy()}>
            <div className="flex justify-between md:flex-col lg:flex-row items-center px-8 justify-between" >
              <p style={{ fontFamily: "Comorant" }}>£{value}</p>
              <p style={{ fontFamily: "Cormorant Garamond" }}>Buy Now</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Header;
