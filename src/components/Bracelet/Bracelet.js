/* eslint-disable react/no-did-update-set-state */
/* eslint-disable no-param-reassign */
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect, useDispatch } from "react-redux";
import _ from "underscore";
// import { JewerlyRingsRenderer } from "../common/JewerlyRenderer";
import SingleMenu from "../common/SingleMenu";
import MorseCode from "../../lib/morse_code";
import {
  setImageFuncAction,
  getProductAction,
  setProductConfigurationAction,
  getProductPartsAction,
  getThemesAction,
  changingProductAction
} from "../../store/actions";
import GalleryModal from "../common/GalleryModal";
import icon360 from "../../assets/images/code-360-icon.gif";
import Pricing from "../../lib/pricing";
import Loading from './Infinity-1s-197px.gif';
import SettingMenu from "../common/SettingMenu";
import Menus from "../common/SingleMenu/menus";
import Header from "../common/Header";

const Bracelet = (props) => {
  const [product, setProduct] = useState({});
  const [load, setLoad] = useState(false);
  const [msg, setMsg] = useState("");
  const [ringsUrls, setRingsUrls] = useState([]);
  const [stoneColor, setStoneColor] = useState("FFFFFF");
  const [ringColor, setRingColor] = useState("");
  const [createChainType, setCreateChainType] = useState("");
  const [chainElementNames, setChainElementNames] = useState([]);
  const [stoneColorMessage, setStoneColorMessage] = useState([]);
  const [chainLength, setChainLength] = useState(0);
  const [height, setHeight] = useState(window.innerHeight - 80);
  const [galleryModal, setGalleryModal] = useState(false);
  const [showInfos, setShowInfos] = useState(true);
  const [price, setPrice] = useState(0);
  const [chainElementSize, setChainElementSize] = useState({});

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductAction(402, { message: "a" })).then((res) => {
      console.log('res', res);
      setProduct(res.payload);
    });
  }, [])

  const onChangeMsg = (e) => {
    console.log('aaa', e.target.value);
    setMsg(e.target.value);

    const { configuration, productParts } = this.props;
    const rings = [];
    const letters = e.target.value.split("");
    for (let i = 0; i < 26; i++) {
      // C5R
      rings.push(
        this.create_link(
          "../assets/jewerly/ringsAquafiore/Aquafiore_Chain_element.glb"
        )
      );
    }
    let jewerly = "BRACELET";

    // this.createNew(e.target.value, product.data, configuration, Pricing, productParts);
    setRingsUrls(rings);
    setRingColor(configuration.pa_material.color);
    setCreateChainType(jewerly);
    setChainElementNames(["Aquafiore_Chain_element.glb"]);
    setChainLength(parseInt(configuration.pa_size.name, 10))
    setChainElementSize({
      Aquafiore_Chain_element: 0.18321, // lengths between connection points
      Aquafiore_CL: 1.4459,
      Aquafiore_HX: 1.7344,
      Aquafiore_JR: 0.3379,
      Aquafiore_OB: 2.0211,
      Aquafiore_OBHA: 0,
      Aquafiore_OBHB: 0,
      Aquafiore_OBJR: 0,
      Aquafiore_RD: 1.5603,
      Aquafiore_RDHA: 0,
      Aquafiore_RDHB: 0,
      Aquafiore_RDJR: 0.4,
      Aquafiore_SP: 0.9263,
    })
  }

  const buildMorseCode = (string) => {
    const splittedString = string.split("");
    return splittedString.map((letter) => {
      const l = new MorseCode(letter);
      return (
        <div className="morse-code__single__letter" key={Math.random() * 1000}>
          {l
            .getLetterCode()
            .reverse()
            .map((code) => (
              <div
                className={`morse-code__single--${code}`}
                key={Math.random() * 1000}
              />
            ))}
        </div>
      );
    });
  };

  return (
    <div>
      <Header price={0} />
      <div className="single">
        <div className="single__threejs">
          <div className={`info-message show`}>
            <div className="morse-code__single">
            </div>
          </div>
          {/* <JewerlyRingsRenderer
              ringsUrls={ringsUrls}
              stoneColor={stoneColor}
              ringColor={ringColor}
              createChainType={createChainType}
              chainElementsNames={chainElementsNames}
              chainLength={chainLength}
              onReadyToUse={this.handleOnReadyToUse}
              onBeforeLoad={this.handleOnRingOnBeforeLoad}
              onLoad={this.handleOnRingOnLoad}
              onInteraction={this.handleOnInteraction}
            /> */}
        </div>
        {!product.attribute && (
          <SettingMenu
            load={load}
            Loading={Loading}
            msg={""}
            buildMorseCode={buildMorseCode}
            onChangeMsg={onChangeMsg}
            product={product.data}
          />
        )}
      </div >
    </div>
  );
}


export default Bracelet;
