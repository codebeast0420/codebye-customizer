import React, { useEffect, useState } from "react";
import "./settingMenu.scss";
import { useDispatch, useSelector } from "react-redux";
import { getProductAction } from "../../../store/actions";
import { setProductConfigurationAction } from "../../../store/actions";
import { setSavedAction } from "../../../store/actions";
import Footer from "../Footer";
import Menus from "../SingleMenu/menus";
import { Close } from "../../../assets";
import { db } from "./db";

const SettingMenu = (props) => {
  const [tabId, setTabId] = useState("message");
  const [activeMetal, setActiveMetal] = useState("");
  const [activeSize, setActiveSize] = useState("");
  const [activeTheme, setActiveTheme] = useState("");
  const [metals, setMetals] = useState([]);
  const [sizes, setSizes] = useState([]);
  const [styles, setStyles] = useState([]);
  const [activeStyle, setActiveStyle] = useState("");
  const [themeCols, setThemeCols] = useState([]);
  const [showMobile, setShowMobile] = useState(false);
  const themes = useSelector((store) => store.themes);
  const configuration = useSelector((store) => store.configuration);
  const preMadeProduct = useSelector((store) => store.preMadeProduct);
  const dispatch = useDispatch();
  const MetalMenuProps = {
    props: {
      dispatchSetConfiguration: (conf) =>
        dispatch(setProductConfigurationAction(conf)),
      dispatchSetSaved: (state) => dispatch(setSavedAction(state)),
      themes: themes,
      product: props.product,
    },
    colorSliders: [],
  };

  const [menus, setMenus] = useState(
    new Menus(
      props.product.attributes,
      MetalMenuProps,
      configuration,
      preMadeProduct
    )
  );
  useEffect(() => {
    console.log("product ", props.product);
    console.log("dba", db);
    console.log("themes", themes);
    setThemeCols(themes.data);
    let tempMetals = props.product.attributes.filter(
      (attr) => attr.name == "Material"
    )[0].options;
    console.log("temp", tempMetals);

    tempMetals.map((tempMetal) => {
      if (tempMetal.id == 20) {
        tempMetal.name = "950 Platinum";
      }
    });

    setMetals(tempMetals);
    if (props.product.id !== 408) {
      setSizes(
        props.product.attributes.filter((attr) => attr.name == "Size")[0]
          .options
      );
    }
    if (props.product.id == 408) {
      setStyles(
        props.product.attributes.filter(
          (attr) => attr.name == "Hook Type (earrings)"
        )[0].options
      );
    }
  }, []);

  const changeMetal = (metal) => {
    setActiveMetal(metal.name);
    dispatch(
      setProductConfigurationAction({
        ...configuration,
        pa_material: {
          color: metal.color,
          id: metal.id,
          name: metal.name,
          selected: true,
        },
      })
    );
  };

  const changeStyle = (style) => {
    setActiveStyle(style.name);
    dispatch(
      setProductConfigurationAction({
        ...configuration,
        pa_hook_type_earrings: {
          color: null,
          id: style.id,
          name: style.name,
          selected: true,
        },
      })
    );
  };
  const changeTheme = (theme) => {
    setActiveTheme(theme.name);
    const colorSubMenu = Menus.getColorsSubMenu().filter(
      (menu) => menu.id === "themes"
    );
    const newConf = {
      ...configuration,
      pa_stone: {
        ...colorSubMenu[0],
        choice: Menus.lettersChoices(configuration.message, theme.stones, true),
        selected_theme: theme.slug,
      },
    };
    dispatch(setProductConfigurationAction(newConf));
  };

  return (
    <div className="lg:basis-5/12 flex pr-1 py-4 justify-content ipad-setting-menu">
      <div className="basis-3/12 hidden lg:flex"></div>
      <div className="lg:basis-9/12 w-full flex flex-col-reverse lg:flex-col">
        <div className="flex flex-row justify-content z-50">
          <div className="basis-4/12 pr-1">
            <button
              className={`${tabId == "message"
                ? "bg-[#d4e4e4]"
                : "bg-gray-100 hover:bg-gray-200"
                } text-[#305253] cbe-btn-text-font py-6 w-full rounded-none setting-menu-tab`}
              onClick={() => {
                setTabId("message");
                setShowMobile(true);
              }}
            >
              <div className="flex flex-row content-center justify-center gap-x-2">
                <div className="basis-3/4">
                  <p className="font-bold">Message</p>
                </div>
              </div>
            </button>
          </div>
          <div className="basis-4/12 pr-1">
            <button
              className={`${tabId == "metal"
                ? "bg-[#d4e4e4]"
                : "bg-gray-100 hover:bg-gray-200"
                } text-[#305253] cbe-btn-text-font py-[1rem] w-full rounded-none setting-menu-tab`}
              onClick={() => {
                setTabId("metal");
                setShowMobile(true);
              }}
            >
              <div className="flex flex-row content-center justify-center gap-x-2">
                <div className="basis-3/4 flex flex-col">
                  <p className="italic text-xs">Select</p>
                  <p className="font-bold">Metal</p>
                </div>
              </div>
            </button>
          </div>
          {props.product.id !== 185 && props.product.id !== 186 && (
            <div className="basis-4/12 pr-1">
              <button
                className={`${tabId == "theme"
                  ? "bg-[#d4e4e4]"
                  : "bg-gray-100 hover:bg-gray-200"
                  } text-[#305253] cbe-btn-text-font py-6 w-full rounded-none setting-menu-tab`}
                onClick={() => {
                  setTabId("theme");
                  setShowMobile(true);
                }}
              >
                <div className="flex flex-row content-center justify-center gap-x-2">
                  <div className="basis-3/4">
                    <p className="font-bold">Colors</p>
                  </div>
                </div>
              </button>
            </div>
          )}
          {props.product.id !== 408 && (
            <div className="basis-4/12">
              <button
                className={`${tabId == "size"
                  ? "bg-[#d4e4e4]"
                  : "bg-gray-100 hover:bg-gray-200"
                  } text-[#305253] cbe-btn-text-font py-[1rem] w-full rounded-none setting-menu-tab`}
                onClick={() => {
                  setTabId("size");
                  setShowMobile(true);
                }}
              >
                <div className="flex flex-row content-center justify-center gap-x-2">
                  <div className="basis-3/4 flex flex-col">
                    <p className="italic text-xs">Select</p>
                    <p className="font-bold">Size</p>
                  </div>
                </div>
              </button>
            </div>
          )}
          {props.product.id == 408 && (
            <div className="basis-4/12">
              <button
                className={`${tabId == "style"
                  ? "bg-[#d4e4e4]"
                  : "bg-gray-100 hover:bg-gray-200"
                  } text-[#305253] cbe-btn-text-font py-[1rem] w-full rounded-none setting-menu-tab`}
                onClick={() => {
                  setTabId("style");
                  setShowMobile(true);
                }}
              >
                <div className="flex flex-row content-center justify-center gap-x-2">
                  <div className="basis-3/4 flex flex-col">
                    <p className="italic text-xs">Select</p>
                    <p className="font-bold">Style</p>
                  </div>
                </div>
              </button>
            </div>
          )}
        </div>
        <div className="hidden lg:flex">
          {tabId == "message" && (
            <div className="flex flex-row mt-4 justify-content">
              <div className="lg:basis-11/12 w-full">
                <div className="message__inputs">
                  <div className="message__input-container">
                    <div className="morse-code" id="morseContainer">
                      <div className={`info-message show`}>
                        <div
                          className="morse-code__single"
                          style={{ marginLeft: "-20px" }}
                        >
                          {props.buildMorseCode(props.msg)}
                        </div>
                      </div>
                    </div>
                    <input
                      className="message__input cbe-font-mono tracking-[20px]"
                      value={props.msg}
                      onChange={props.onChangeMsg}
                      id="messageInput"
                    />
                    <div className="message__placeholder message__placeholder--visible cbe-font cbe-message-placeholder-fix mt-1">
                      Please enter your message
                    </div>
                  </div>
                </div>
                {props.load && (
                  <div className="col-span-3 align-middle grid grid-cols-3 content-center">
                    <div className="flex justify-center">
                      <img
                        className="text-center align-middle"
                        src={props.Loading}
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
          {tabId == "metal" && (
            <div className="flex flex-col basis-12/12 w-full justify-center">
              <div className="mb-1">
                {metals.map((metal, index) => (
                  <button
                    key={index}
                    className={`${metal.name == activeMetal
                      ? "cbe-bg-green-lightest"
                      : "bg-gray-100 hover:bg-gray-200"
                      } py-6  rounded-none w-full py-8 px-10 rounded-lg justify-self-end setting-menu-tab mt-2`}
                    onClick={() => changeMetal(metal)}
                  >
                    <div className="flex justify-between px-8 justify-between">
                      <p className="cbe-btn-text-font text-sm font-medium">
                        {metal.name}
                      </p>
                      <p className="text-sm text-gray-500"></p>
                    </div>
                  </button>
                ))}
              </div>
              <div className="cbe-font cbe-btn-text-green italic mt-4 mb-12">
                <p className="mb-4 font-semibold">Looking for another metal?</p>
                <p className="mb-4 font-semibold">Contact Us</p>
                <p className="mb-1 font-semibold">
                  Contact us on WhatsApp +44 73 8880 8226
                </p>
                <p className="mb-1 font-semibold">
                  Monday to Friday - 10 AM - 5:30 PM
                </p>
                <p className="mb-1 font-semibold">Email</p>
                <a
                  className="mb-1 font-semibold"
                  href="mailto:hello@codebyedge.com"
                >
                  hello@codebyedge.com
                </a>
              </div>
              <div className="cbe-font italic cbe-btn-text-green py-2">
                <p className="leading-6 font-semibold">
                  Our precious metals and gemstones are all sourced in
                  accordance with the Responsible Jewellery Council Code of
                  Conduct
                </p>
              </div>
            </div>
          )}
          {tabId == "theme" && (
            <div className="flex flex-col basis-12/12 w-full justify-center">
              <div className="mb-1">
                {themeCols.map((theme, index) => (
                  <button
                    key={index}
                    className={`${theme.name == activeTheme
                      ? "cbe-bg-green-lightest"
                      : "bg-gray-100 hover:bg-gray-200"
                      } py-6  rounded-none w-full py-8 px-10 rounded-lg justify-self-end setting-menu-tab mt-2`}
                    onClick={() => changeTheme(theme)}
                  >
                    <div className="flex justify-between px-8 justify-between">
                      <p className="cbe-btn-text-font text-sm font-medium">
                        {theme.name}
                      </p>
                      <p className="text-sm text-gray-500"></p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}
          {tabId == "size" && (
            <div className="flex flex-col basis-12/12 w-full justify-center">
              <div className="flex flex-row mb-1 justify-start">
                <div className="pr-1">
                  {sizes.map((size, index) => (
                    <button
                      key={index}
                      className={`${activeSize == size.name
                        ? "cbe-bg-green-lightest"
                        : "bg-gray-100 hover:bg-gray-200"
                        } bg-gray-100 cbe-btn-text-green cbe-bnt-text-font py-6 w-full rounded-none setting-menu-tab mt-2`}
                      onClick={() => setActiveSize(size.name)}
                    >
                      {size.name}
                    </button>
                  ))}
                </div>
              </div>
              <div className="cbe-font cbe-btn-text-green italic mt-4 mb-12">
                <p className="mb-4 font-semibold">
                  Do you need help with sizing?
                </p>
                <p className="mb-4 font-semibold">Contact Us</p>
                <p className="mb-1 font-semibold">
                  Contact us on WhatsApp +44 73 8880 8226
                </p>
                <p className="mb-1 font-semibold">
                  Monday to Friday - 10 AM - 5:30 PM
                </p>
                <p className="mb-1 font-semibold">Email</p>
                <a
                  className="mb-1 font-semibold"
                  href="mailto:hello@codebyedge.com"
                >
                  hello@codebyedge.com
                </a>
              </div>
            </div>
          )}
          {tabId == "style" && (
            <div className="flex flex-col basis-12/12 w-full justify-center">
              <div className="flex flex-row mb-1 justify-start">
                {styles.map((style, index) => (
                  <button
                    key={index}
                    className={`${activeStyle == style.name
                      ? "cbe-bg-green-lightest"
                      : "bg-gray-100 hover:bg-gray-200"
                      } bg-gray-100 cbe-btn-text-green cbe-bnt-text-font py-6 w-full rounded-none setting-menu-tab mt-2`}
                    onClick={() => changeStyle(style)}
                  >
                    {style.name}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
        {showMobile && (
          <div className="mobile-setting-menu mobile-setting-menu--after-open flex flex-col items-end lg:hidden w-full">
            <div
              className="mr-3"
              onClick={() => setShowMobile(false)}
              style={{ zIndex: 1000 }}
            >
              <Close />
            </div>
            {tabId == "message" && (
              <div className="flex flex-row mt-4 justify-content w-full">
                <div className="lg:basis-11/12 w-full">
                  <div className="message__inputs">
                    <div className="message__input-container">
                      <div className="morse-code" id="morseContainer">
                        <div className={`info-message show`}>
                          <div
                            className="morse-code__single"
                            style={{ marginLeft: "-20px" }}
                          >
                            {props.buildMorseCode(props.msg)}
                          </div>
                        </div>
                      </div>
                      <input
                        className="message__input cbe-font-mono tracking-[20px]"
                        value={props.msg}
                        onChange={props.onChangeMsg}
                        id="messageInput"
                      />
                      <div className="message__placeholder message__placeholder--visible cbe-font cbe-message-placeholder-fix mt-1">
                        Please enter your message
                      </div>
                    </div>
                  </div>
                  {props.load && (
                    <div className="col-span-3 align-middle grid grid-cols-3 content-center">
                      <div className="flex justify-center">
                        <img
                          className="text-center align-middle"
                          src={props.Loading}
                        />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
            {tabId == "metal" && (
              <div className="flex flex-col basis-12/12 w-full">
                {metals.map((metal, index) => (
                  <button
                    key={index}
                    className={`${metal.name == activeMetal
                      ? "cbe-bg-green-lightest"
                      : "bg-gray-100 hover:bg-gray-200"
                      } py-6  rounded-none w-full py-8 px-10 rounded-lg justify-self-end setting-menu-tab mt-2`}
                    onClick={() => changeMetal(metal)}
                  >
                    <div className="flex justify-between px-8 justify-between">
                      <p className="cbe-btn-text-font text-sm font-medium">
                        {metal.name}
                      </p>
                      <p className="text-sm text-gray-500"></p>
                    </div>
                  </button>
                ))}
                <div className="cbe-font cbe-btn-text-green italic mt-4 mb-12 mx-5">
                  <p className="mb-4 font-semibold">
                    Looking for another metal?
                  </p>
                  <p className="mb-4 font-semibold">Contact Us</p>
                  <p className="mb-1 font-semibold">
                    Contact us on WhatsApp +44 73 8880 8226
                  </p>
                  <p className="mb-1 font-semibold">
                    Monday to Friday - 10 AM - 5:30 PM
                  </p>
                  <p className="mb-1 font-semibold">Email</p>
                  <a
                    className="mb-1 font-semibold"
                    href="mailto:hello@codebyedge.com"
                  >
                    hello@codebyedge.com
                  </a>
                </div>
                <div className="cbe-font italic cbe-btn-text-green py-2 mx-5">
                  <p className="leading-6 font-semibold">
                    Our precious metals and gemstones are all sourced in
                    accordance with the Responsible Jewellery Council Code of
                    Conduct
                  </p>
                </div>
              </div>
            )}
            {tabId == "theme" && (
              <div className="flex flex-col basis-12/12 w-full">
                {themeCols.map((theme, index) => (
                  <button
                    key={index}
                    className={`${theme.name == activeTheme
                      ? "cbe-bg-green-lightest"
                      : "bg-gray-100 hover:bg-gray-200"
                      } py-6  rounded-none w-full py-8 px-10 rounded-lg justify-self-end setting-menu-tab mt-2`}
                    onClick={() => changeTheme(theme)}
                  >
                    <div className="flex justify-between px-8 justify-between">
                      <p className="cbe-btn-text-font text-sm font-medium">
                        {theme.name}
                      </p>
                      <p className="text-sm text-gray-500"></p>
                    </div>
                  </button>
                ))}
              </div>
            )}
            {tabId == "size" && (
              <div className="flex flex-col basis-12/12 w-full">
                <div className="flex flex-col mb-1 justify-start w-full">
                  {sizes.map((size, index) => (
                    <button
                      key={index}
                      className={`${activeSize == size.name
                        ? "cbe-bg-green-lightest"
                        : "bg-gray-100 hover:bg-gray-200"
                        } bg-gray-100 cbe-btn-text-green cbe-bnt-text-font py-6 w-full rounded-none setting-menu-tab mt-2`}
                      onClick={() => setActiveSize(size.name)}
                    >
                      {size.name}
                    </button>
                  ))}
                </div>
                <div className="cbe-font cbe-btn-text-green italic mt-4 mb-12 mx-5">
                  <p className="mb-4 font-semibold">
                    Do you need help with sizing?
                  </p>
                  <p className="mb-4 font-semibold">Contact Us</p>
                  <p className="mb-1 font-semibold">
                    Contact us on WhatsApp +44 73 8880 8226
                  </p>
                  <p className="mb-1 font-semibold">
                    Monday to Friday - 10 AM - 5:30 PM
                  </p>
                  <p className="mb-1 font-semibold">Email</p>
                  <a
                    className="mb-1 font-semibold"
                    href="mailto:hello@codebyedge.com"
                  >
                    hello@codebyedge.com
                  </a>
                </div>
              </div>
            )}
            {tabId == "style" && (
              <div className="flex flex-col basis-12/12 w-full justify-center">
                <div className="flex flex-row mb-1 justify-start">
                  {styles.map((style, index) => (
                    <button
                      key={index}
                      className={`${activeStyle == style.name
                        ? "cbe-bg-green-lightest"
                        : "bg-gray-100 hover:bg-gray-200"
                        } bg-gray-100 cbe-btn-text-green cbe-bnt-text-font py-6 w-full rounded-none setting-menu-tab mt-2`}
                      onClick={() => changeStyle(style)}
                    >
                      {style.name}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default SettingMenu;
