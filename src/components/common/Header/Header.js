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
import { collection, query, orderBy, onSnapshot } from "firebase/firestore"
import { firebaseDB } from '../../../lib/firebase';

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
  const [price, setPrice] = useState(0);

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
    console.log('changed', product.data.id);
    if (product.data.id != 186 && product.data.id != 185) {
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
      setPrice(value);
    }
    else {
      let priceDB = [];
      let material = configuration.pa_material.name;
      if (material == "18kt Rose Gold") material = "18ct Recycled Rose Gold";
      if (material == "18kt Yellow Gold") material = "18ct Recycled Yellow Gold";
      let q = null;
      if (product.data.id == 186) {
        q = query(collection(firebaseDB, 'amanti'))
      }
      if (product.data.id == 185) {
        q = query(collection(firebaseDB, 'mayfair'))
      }
      onSnapshot(q, async (querySnapshot) => {
        console.log('query', querySnapshot.docs);
        priceDB = querySnapshot.docs.filter(doc => (
          doc.id == material
        ))[0].data();
        let total = 0;
        configuration.message.split("").map((e) => {
          total += priceDB[e.toUpperCase()];
          console.log('total', total)
        });
        setPrice(total);
      })
    }
  }, [configuration])

  const buy = async () => {
    axios.post("https://codeby-backend.vercel.app/add-to-cart", { productId: productId }).then((res) => {
      let variants = res.data.product?.variants;
      let variant = "not_found";
      variants.map((v) => {
        if (parseInt(v.price) == parseInt(price)) {
          variant = v;
        }
      });
      console.log('variant', variant);
      if (variant == "not_found") {
        // create one
        axios
          .post("https://codeby-backend.vercel.app/create-cart", {
            productId: productId,
            price: price,
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
      <div className="md:flex basis-4/12 justify-center items-center hidden">
        <div className="">
          <a role="button" tabIndex="0" href="https://codebyedge.co.uk" className="a a-link flex">
            <img src={Logo} alt="logo" srcSet="" width="100" />
            {subLogo == "lister" && (
              <img src={LHLogo} className="ml-2 lh-logo" alt="lh-logo" srcSet='' />
            )}
            {subLogo == "anjapotze" && (
              <img src={APLogo} className="ml-3 ap-logo" alt="lh-logo" srcSet='' />
            )}

          </a>
        </div>
      </div>
      <div className="md:basis-4/12 basis-8/12 flex justify-center items-center setting-menu-tab" onClick={() => showContactModal()}>
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
      <div className="basis-4/12 flex pr-1 justify-end">
        <div className="md:basis-9/12 w-full flex justify-center">
          <button className={`${isDisabled ? "disabledBtn" : "bg-[#183e3f]"} hover:bg-teal-700 w-full py-8 px-4 rounded-lg justify-self-end text-2xl font-extrabold text-white`} disabled={isDisabled} onClick={() => buy()}>
            <div className="flex justify-between md:flex-col lg:flex-row items-center px-8 justify-between" >
              <p style={{ fontFamily: "Comorant" }}>£{price}</p>
              <p style={{ fontFamily: "Cormorant Garamond" }}>Buy Now</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Header;
