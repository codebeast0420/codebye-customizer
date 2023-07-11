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
import { Arrow } from "../../../assets";
import MorseCode from "../../../lib/morse_code";
import uuid from "uuid";

const SettingMenu = (props) => {
  const [tabId, setTabId] = useState("message");
  const [activeMetal, setActiveMetal] = useState("");
  const [activeSize, setActiveSize] = useState("");
  const [activeTheme, setActiveTheme] = useState("");
  const [metals, setMetals] = useState([]);
  const [msg, setMsg] = useState("");
  const [sizes, setSizes] = useState([]);
  const [styles, setStyles] = useState([]);
  const [activeStyle, setActiveStyle] = useState("");
  const [themeCols, setThemeCols] = useState([]);
  const [showMobile, setShowMobile] = useState(false);
  const [colorType, setColorType] = useState("");
  const [activeSolid, setActiveSolid] = useState("");
  const [activeChoise, setActiveChoise] = useState("");
  const [choises, setChoises] = useState([]);
  const [colIndex, setColIndex] = useState([]);
  const [solidColors, setSolidColors] = useState([]);
  const [newConf, setNewConf] = useState({});
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
    setMsg(configuration.message);
  }, []);

  useEffect(() => {
    setThemeCols(themes.data);
    setNewConf(configuration);

    if (props.product.attributes) {
      if (props.product.id !== 185 && props.product.id !== 186) {
        setSolidColors(
          props.product.attributes.filter((attr) => attr.slug == "pa_stone")[0]
            .options
        );
        console.log(
          "solid colors",
          props.product.attributes.filter((attr) => attr.slug == "pa_stone")[0]
            .options
        );
        let temp = [];
        configuration.pa_stone.choice.map((value) => temp.push(value.value.id));
        console.log("temp", temp);
        setColIndex(temp);
      }
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
    }
  }, [configuration]);

  const changeMetal = (metal, isMobile) => {
    setActiveMetal(metal.name);
    console.log("isMobile", isMobile);
    if (!isMobile) {
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
    } else {
      setNewConf({
        ...newConf,
        pa_material: {
          color: metal.color,
          id: metal.id,
          name: metal.name,
          selected: true,
        },
      });
    }
  };

  const changeStyle = (style, isMobile) => {
    setActiveStyle(style.name);
    if (!isMobile) {
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
    } else {
      setNewConf({
        ...newConf,
        pa_hook_type_earrings: {
          color: null,
          id: style.id,
          name: style.name,
          selected: true,
        },
      });
    }
  };

  const changeColType = (type) => {
    if (colorType == type) setColorType("");
    else setColorType(type);
  };

  const changeTheme = (theme, isMobile) => {
    setActiveTheme(theme.name);
    const colorSubMenu = Menus.getColorsSubMenu().filter(
      (menu) => menu.id === "themes"
    );
    const _newConf = {
      ...configuration,
      pa_stone: {
        ...colorSubMenu[0],
        choice: Menus.lettersChoices(configuration.message, theme.stones, true),
        selected_theme: theme.slug,
      },
    };
    if (!isMobile) {
      dispatch(setProductConfigurationAction(_newConf));
    } else {
      setNewConf({
        ...newConf,
        pa_stone: _newConf.pa_stone,
      });
    }
  };

  const changeSolid = (solid, isMobile) => {
    setActiveSolid(solid.name);
    const colorSubMenu = Menus.getColorsSubMenu().filter(
      (menu) => menu.id === "solid_color"
    );
    const _newConf = {
      ...configuration,
      pa_stone: {
        ...colorSubMenu[0],
        choice: Menus.lettersChoices(configuration.message, solid),
        selected_theme: false,
      },
    };
    if (!isMobile) {
      dispatch(setProductConfigurationAction(_newConf));
    } else {
      setNewConf({
        ...newConf,
        pa_stone: _newConf.pa_stone,
      });
    }
  };

  const getChoices = () => {
    return configuration.message.split("").map((letter) => {
      const morse = new MorseCode(letter);
      return {
        id: uuid(),
        letter: letter.toUpperCase(),
        code: morse
          .getLetterCode()
          .map((value) => ({ symbol: value, colors: solidColors })),
      };
    });
  };

  const nextCol = (index) => {
    console.log("index", index);
    const current = solidColors.filter((col) => col.id == colIndex[index])[0];
    const currentIndex = solidColors.indexOf(current);
    const next =
      currentIndex == solidColors.length - 1
        ? solidColors[0]
        : solidColors[currentIndex + 1];
    console.log("current index", currentIndex, "++", solidColors.length);
    const colorSubMenu = Menus.getColorsSubMenu().filter(
      (menu) => menu.id === "at_your_choice"
    );
    const prevChoice = configuration.pa_stone.choice;
    prevChoice[index].value = next;
    const newChoice = prevChoice;
    const _newConf = {
      ...configuration,
      pa_stone: {
        ...colorSubMenu[0],
        choice: newChoice,
        slide: index,
        selected_theme: false,
      },
    };
    dispatch(setProductConfigurationAction(_newConf));
  };

  const prevCol = (index) => {
    console.log("index", index);
    const current = solidColors.filter((col) => col.id == colIndex[index])[0];
    const currentIndex = solidColors.indexOf(current);
    const next =
      currentIndex == 0
        ? solidColors[solidColors.length - 1]
        : solidColors[currentIndex - 1];
    console.log("current index", currentIndex, "++", solidColors.length);
    const colorSubMenu = Menus.getColorsSubMenu().filter(
      (menu) => menu.id === "at_your_choice"
    );
    const prevChoice = configuration.pa_stone.choice;
    prevChoice[index].value = next;
    const newChoice = prevChoice;
    const _newConf = {
      ...configuration,
      pa_stone: {
        ...colorSubMenu[0],
        choice: newChoice,
        slide: index,
        selected_theme: false,
      },
    };
    dispatch(setProductConfigurationAction(_newConf));
  };

  const openChoice = () => {
    let index = 0;
    console.log("getchoice", getChoices());
    return getChoices().map((value, i) => (
      <div
        className="single__menu__middle__item__choice"
        key={value.id}
        onClick={value.onClick}
        role="button"
        onKeyUp={() => false}
        tabIndex={0}
      >
        <div className="single__menu__middle__item__choice__wrapper">
          <div className="single__menu__middle__item__choice__letter">
            {value.letter}
          </div>
          <div className="single__menu__middle__item__choice__symbols">
            {!value.letter.trim().length && (
              <div
                key={Math.random() * 1000}
                className="single__menu__middle__item__choice__symbols__space"
              >
                <span className="hexagon">&#x2B22;</span>
              </div>
            )}
            {!!value.letter.trim().length &&
              value.code.map((code, i) => {
                index += 1;
                return (
                  <div
                    key={i}
                    className="single__menu__middle__item__choice__symbols__symbol"
                    id={`s${index}`}
                  >
                    <div className="swiper-wrapper">
                      {code.colors.map((color) => (
                        <>
                          {colIndex[index - 1] == color.id && (
                            <div
                              className="flex w-full items-center justify-around"
                              key={Math.random() * 1000}
                            >
                              <div
                                value={index}
                                onClick={(e) =>
                                  nextCol(
                                    e.currentTarget.getAttribute("value") - 1
                                  )
                                }
                              >
                                <Arrow />
                              </div>
                              <div className="flex flex-col items-center">
                                <div
                                  className={`single__menu__middle__item__choice__stone-color menu_${code.symbol}`}
                                  style={{ backgroundColor: color.color }}
                                />
                                <div className="single__menu__middle__item__title">
                                  {color.name}
                                </div>
                              </div>
                              <div
                                className="rotate-180"
                                value={index}
                                onClick={(e) =>
                                  prevCol(
                                    e.currentTarget.getAttribute("value") - 1
                                  )
                                }
                              >
                                <Arrow />
                              </div>
                            </div>
                          )}
                        </>
                      ))}
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
        {menus.getAtYourChoiceColorsMenu()[i + 1] &&
          !!menus.getAtYourChoiceColorsMenu()[i + 1].letter.trim().length &&
          !!value.letter.trim().length && (
            <span
              key={Math.random() * 1000}
              className="single__menu__middle__item__choice__symbols__letter-divider"
            />
          )}
      </div>
    ));
  };

  const changeMsg = (e) => {
    if (props.product.id !== 186 && props.product.id !== 185) {
      if (props.product.id == 408) {
        setMsg(e.target.value.substring(0, 2) || "");
      }
      if (props.product.id == 402 || props.product.id == 405) {
        setMsg(e.target.value[0] || "");
      } else {
        setMsg(e.target.value);
      }
    } else {
      setMsg(e.target.value);
    }
  };

  const saveChanges = () => {
    if (msg == configuration.message) {
      props.mobileChangeMsg(msg);
      dispatch(
        setProductConfigurationAction({
          ...configuration,
          message: msg,
          pa_material: newConf.pa_material,
          pa_stone: newConf.pa_stone,
          pa_hook_type_earrings: newConf.pa_hook_type_earrings,
        })
      );
    } else {
      props.mobileChangeMsg(msg);
    }
    setShowMobile(false);
  };

  const cancelChanges = () => {
    setNewConf(configuration);
    setMsg(configuration.message);
    setShowMobile(false);
  };

  return (
    <div className="lg:basis-5/12 flex pr-1 py-4 justify-content ipad-setting-menu">
      <div className="basis-3/12 hidden lg:flex"></div>
      <div className="lg:basis-9/12 w-full flex flex-col-reverse lg:flex-col">
        <div className="flex flex-row justify-content z-50">
          <div className="basis-4/12 pr-1">
            <button
              className={`${
                tabId == "message"
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
              className={`${
                tabId == "metal"
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
                className={`${
                  tabId == "colors"
                    ? "bg-[#d4e4e4]"
                    : "bg-gray-100 hover:bg-gray-200"
                } text-[#305253] cbe-btn-text-font w-full rounded-none setting-menu-tab`}
                style={{ height: "100%" }}
                onClick={() => {
                  setTabId("colors");
                  setShowMobile(true);
                }}
              >
                <div className="flex flex-row content-center justify-center gap-x-2">
                  <div className="basis-3/4 flex flex-col">
                    <p className="italic text-xs">Select</p>
                    <p className="font-bold">Gemstones</p>
                  </div>
                </div>
              </button>
            </div>
          )}
          {props.product.id !== 408 && (
            <div className="basis-4/12">
              <button
                className={`${
                  tabId == "size"
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
                className={`${
                  tabId == "style"
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
                    className={`${
                      metal.name == activeMetal
                        ? "cbe-bg-green-lightest"
                        : "bg-gray-100 hover:bg-gray-200"
                    } py-6  rounded-none w-full py-8 px-10 rounded-lg justify-self-end setting-menu-tab mt-2`}
                    onClick={() => changeMetal(metal, false)}
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
          {tabId == "colors" && (
            <div className="flex flex-col basis-12/12 w-full justify-center">
              <div className="mb-1">
                <button
                  className={`${
                    colorType == "solid"
                      ? "cbe-bg-green-lightest"
                      : "bg-gray-100 hover:bg-gray-200"
                  } py-6  rounded-none w-full py-8 px-10 rounded-lg justify-self-end setting-menu-tab mt-2`}
                  onClick={() => changeColType("solid")}
                >
                  <div className="flex justify-between px-8 justify-between">
                    <p className="cbe-btn-text-font text-sm font-medium">
                      Solid Color
                    </p>
                    <p className="text-sm text-gray-500"></p>
                  </div>
                </button>
                {colorType == "solid" &&
                  solidColors.map((solid, index) => (
                    <button
                      key={index}
                      className={`${
                        solid.name == activeSolid
                          ? "cbe-bg-green-lightest"
                          : "bg-gray-100 hover:bg-gray-200"
                      } py-6  rounded-none w-full py-8 px-10 rounded-lg justify-self-end setting-menu-tab mt-2`}
                      onClick={() => changeSolid(solid, false)}
                    >
                      <div className="single__menu__middle__item--content">
                        <div
                          className="single__menu__middle__item__color"
                          style={{ backgroundColor: solid.color }}
                        />
                        <div className="single__menu__middle__item__title">
                          {solid.name}
                        </div>
                      </div>
                    </button>
                  ))}
                <button
                  className={`${
                    colorType == "theme"
                      ? "cbe-bg-green-lightest"
                      : "bg-gray-100 hover:bg-gray-200"
                  } py-6  rounded-none w-full py-8 px-10 rounded-lg justify-self-end setting-menu-tab mt-2`}
                  onClick={() => changeColType("theme")}
                >
                  <div className="flex justify-between px-8 justify-between">
                    <p className="cbe-btn-text-font text-sm font-medium">
                      Theme
                    </p>
                    <p className="text-sm text-gray-500"></p>
                  </div>
                </button>
                {colorType == "theme" &&
                  themeCols.map((theme, index) => (
                    <button
                      key={index}
                      className={`${
                        theme.name == activeTheme
                          ? "cbe-bg-green-lightest"
                          : "bg-gray-100 hover:bg-gray-200"
                      } py-6  rounded-none w-full py-8 px-10 rounded-lg justify-self-end setting-menu-tab mt-2`}
                      onClick={() => changeTheme(theme, false)}
                    >
                      <div className="flex justify-between px-8 justify-between">
                        <p className="cbe-btn-text-font text-sm font-medium">
                          {theme.name}
                        </p>
                        <p className="text-sm text-gray-500"></p>
                      </div>
                    </button>
                  ))}
                <button
                  className={`${
                    colorType == "choice"
                      ? "cbe-bg-green-lightest"
                      : "bg-gray-100 hover:bg-gray-200"
                  } py-6  rounded-none w-full py-8 px-10 rounded-lg justify-self-end setting-menu-tab mt-2`}
                  onClick={() => changeColType("choice")}
                >
                  <div className="flex justify-between px-8 justify-between">
                    <p className="cbe-btn-text-font text-sm font-medium">
                      Custome
                    </p>
                    <p className="text-sm text-gray-500"></p>
                  </div>
                </button>
                {colorType == "choice" && openChoice()}
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
                      className={`${
                        activeSize == size.name
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
                    className={`${
                      activeStyle == style.name
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
            <div className="flex uppercase w-full z-[1000]">
              <div
                className="bg-[#317f81] text-white p-3 w-[35%] text-center"
                onClick={() => cancelChanges()}
              >
                Cancel X
              </div>
              <div
                className="bg-[#183e3f] text-white p-3 w-[65%] text-center"
                onClick={() => saveChanges()}
              >
                Save changes & close X
              </div>
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
                            {props.buildMorseCode(msg)}
                          </div>
                        </div>
                      </div>
                      <input
                        className="message__input cbe-font-mono tracking-[20px]"
                        value={msg}
                        onChange={changeMsg}
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
                    className={`${
                      metal.name == activeMetal
                        ? "cbe-bg-green-lightest"
                        : "bg-gray-100 hover:bg-gray-200"
                    } py-6  rounded-none w-full py-8 px-10 rounded-lg justify-self-end setting-menu-tab mt-2`}
                    onClick={() => changeMetal(metal, true)}
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
            {tabId == "colors" && (
              <div className="flex flex-col basis-12/12 w-full justify-center">
                <div className="mb-1">
                  <button
                    className={`${
                      colorType == "solid"
                        ? "cbe-bg-green-lightest"
                        : "bg-gray-100 hover:bg-gray-200"
                    } py-6  rounded-none w-full py-8 px-10 rounded-lg justify-self-end setting-menu-tab mt-2`}
                    onClick={() => changeColType("solid")}
                  >
                    <div className="flex justify-between px-8 justify-between">
                      <p className="cbe-btn-text-font text-sm font-medium">
                        Solid Color
                      </p>
                      <p className="text-sm text-gray-500"></p>
                    </div>
                  </button>
                  {colorType == "solid" &&
                    solidColors.map((solid, index) => (
                      <button
                        key={index}
                        className={`${
                          solid.name == activeSolid
                            ? "cbe-bg-green-lightest"
                            : "bg-gray-100 hover:bg-gray-200"
                        } py-6  rounded-none w-full py-8 px-10 rounded-lg justify-self-end setting-menu-tab mt-2`}
                        onClick={() => changeSolid(solid, true)}
                      >
                        <div className="single__menu__middle__item--content">
                          <div
                            className="single__menu__middle__item__color"
                            style={{ backgroundColor: solid.color }}
                          />
                          <div className="single__menu__middle__item__title">
                            {solid.name}
                          </div>
                        </div>
                      </button>
                    ))}
                  <button
                    className={`${
                      colorType == "theme"
                        ? "cbe-bg-green-lightest"
                        : "bg-gray-100 hover:bg-gray-200"
                    } py-6  rounded-none w-full py-8 px-10 rounded-lg justify-self-end setting-menu-tab mt-2`}
                    onClick={() => changeColType("theme")}
                  >
                    <div className="flex justify-between px-8 justify-between">
                      <p className="cbe-btn-text-font text-sm font-medium">
                        Theme
                      </p>
                      <p className="text-sm text-gray-500"></p>
                    </div>
                  </button>
                  {colorType == "theme" &&
                    themeCols.map((theme, index) => (
                      <button
                        key={index}
                        className={`${
                          theme.name == activeTheme
                            ? "cbe-bg-green-lightest"
                            : "bg-gray-100 hover:bg-gray-200"
                        } py-6  rounded-none w-full py-8 px-10 rounded-lg justify-self-end setting-menu-tab mt-2`}
                        onClick={() => changeTheme(theme, true)}
                      >
                        <div className="flex justify-between px-8 justify-between">
                          <p className="cbe-btn-text-font text-sm font-medium">
                            {theme.name}
                          </p>
                          <p className="text-sm text-gray-500"></p>
                        </div>
                      </button>
                    ))}
                  <button
                    className={`${
                      colorType == "choice"
                        ? "cbe-bg-green-lightest"
                        : "bg-gray-100 hover:bg-gray-200"
                    } py-6  rounded-none w-full py-8 px-10 rounded-lg justify-self-end setting-menu-tab mt-2`}
                    onClick={() => changeColType("choice")}
                  >
                    <div className="flex justify-between px-8 justify-between">
                      <p className="cbe-btn-text-font text-sm font-medium">
                        Custome
                      </p>
                      <p className="text-sm text-gray-500"></p>
                    </div>
                  </button>
                  {colorType == "choice" && openChoice()}
                </div>
              </div>
            )}
            {tabId == "size" && (
              <div className="flex flex-col basis-12/12 w-full">
                <div className="flex flex-col mb-1 justify-start w-full">
                  {sizes.map((size, index) => (
                    <button
                      key={index}
                      className={`${
                        activeSize == size.name
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
                      className={`${
                        activeStyle == style.name
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
