/* eslint-disable react/no-did-update-set-state */
/* eslint-disable no-param-reassign */
import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import _ from "underscore";
import { Redirect } from "react-router-dom";
import { JewerlyRingsRenderer } from "../common/JewerlyRenderer";
import SingleMenu from "../common/SingleMenu";
import MorseCode from "../../lib/morse_code";
import { setImageFuncAction } from "../../store/actions";
import { getProductAction } from "../../store/actions";
import { setProductConfigurationAction } from "../../store/actions";
import { changingProductAction } from "../../store/actions";
import GalleryModal from "../common/GalleryModal";
import icon360 from "../../assets/images/code-360-icon.gif";
import Pricing from "../../lib/pricing";
import Loading from './Infinity-1s-197px.gif';
import SettingMenu from "../common/SettingMenu";
import Menus from "../common/SingleMenu/menus";
import Header from "../common/Header";

class Single extends React.Component {
  state = {};

  constructor(props) {
    super(props);
    const { configuration, product } = props;
    console.log("hey", product)
    if (product.data.id !== 2096 && product.data.id !== 2124) {
      this.test1();
    } else {

    }
    this.chainElementSize = this.chainElementUnitsSize;
  }

  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions);
    const { product, configuration, dispatchSetImageFunc, productParts } = this.props;
    console.log('conf', configuration);
    if (
      product.data.id !== 186 &&
      product.data.id !== 185 &&
      product.data.id !== 2096 &&
      product.data.id !== 2124
    ) {
      this.create_chain(configuration.message);
    }
    dispatchSetImageFunc(this.getImage);

    window.dataLayer = window.dataLayer || [];
    const dataLayerArgs = {
      event: "view_item",
      ecommerce: {
        items: [
          {
            item_name: product.data.name,
            item_id: product.data.id,
            price: Pricing.priceCalc(
              product.data.id,
              productParts.data,
              configuration
            ).price,
            quantity: 1,
          },
        ],
      },
    };
    window.dataLayer.push(dataLayerArgs);
    /* setTimeout(() => {
      this.setState({ showInfos: false });
    }, 15000); */
  }

  test1() {
    const { product, configuration, productParts } = this.props;
    console.log('productparts data', productParts.data);
    console.log('product', product);
    if (product.data.id !== 2096 && product.data.id !== 2124) {
      const rings = [];
      const letters = configuration.message.split("");
      console.log('letters', letters);
      if (product.data.id === 186) {
        _.each(letters, (letter) =>
          rings.push(
            `../assets/jewerly/rings_amanti/ring_${letter.toUpperCase()}.glb`
          )
        );
      }
      if (product.data.id === 185) {
        _.each(letters, (letter) =>
          rings.push(
            `../assets/jewerly/rings_mayfair/ring_mayfair_${letter.toUpperCase()}.glb`
          )
        );
      }
      if (product.data.id !== 186 && product.data.id !== 185) {
        for (let i = 0; i < 26; i++) {
          // C5R
          rings.push(
            this.create_link(
              "../assets/jewerly/ringsAquafiore/Aquafiore_Chain_element.glb"
            )
          );
        }
      }
      let jewerly = "";
      switch (product.data.id) {
        case 83:
          jewerly = "NECKLACE";
          break;
        case 402:
          jewerly = "BRACELET";
          break;
        case 405:
          jewerly = "PENDANT";
          break;
        case 408:
          jewerly = "EARRINGS";
          break;
        default:
          jewerly = "";
          break;
      }

      this.jewerlyRingsRenderer = null;
      this.newPrice = Pricing.priceCalc(
        product.data.id,
        productParts.data,
        configuration
      ).price;

      this.state = {
        ringsUrls: rings,
        stoneColor: "#FFFFFF",
        ringColor: configuration.pa_material.color,
        createChainType: jewerly,
        chainElementsNames: ["Aquafiore_Chain_element.glb"],
        stoneColorMessage: [],
        chainLength:
          product.data.id === 408
            ? configuration.pa_hook_type_earrings.id
            : parseInt(configuration.pa_size.name, 10),
        height: window.innerHeight - 80,
        load: false,
        galleryModal: false,
        showInfos: true,
        price: this.newPrice,
        msg: "",
      };
      this.units_to_cm_coef = 2.02;
      this.chainElementCmSize = {
        Aquafiore_Chain_element: 0.1,
        Aquafiore_CL: 1.4,
        Aquafiore_HX: 1.1,
        Aquafiore_JR: 0.3,
        Aquafiore_OB: 0, // ?
        Aquafiore_OBHA: 0, // ?
        Aquafiore_OBHB: 0, // ?
        Aquafiore_OBJR: 0, // ?
        Aquafiore_RD: 1.1,
        Aquafiore_RDHA: 0, // ?
        Aquafiore_RDHB: 0, // ?
        Aquafiore_RDJR: 0.4, // ?
        Aquafiore_SP: 0.4,
      };

      this.chainElementUnitsSize = {
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
      };
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { configuration, product } = this.props;
    if (prevProps.configuration.message !== configuration.message) {
      if (product.data.id === 186 || product.data.id === 185) {
        const rings = [];
        const letters = configuration.message.split("");
        if (product.data.id === 186) {
          _.each(letters, (letter) =>
            rings.push(
              `../assets/jewerly/rings_amanti/ring_${letter.toUpperCase()}.glb`
            )
          );
        }
        if (product.data.id === 185) {
          _.each(letters, (letter) =>
            rings.push(
              `../assets/jewerly/rings_mayfair/ring_mayfair_${letter.toUpperCase()}.glb`
            )
          );
        }
        // this.setState({ ringsUrls: rings });
      } else if (product.data.id === 2096 || product.data.id === 2124) {
        this.createBangle(configuration.message, this.state.bangleSize);
      } else {
        this.create_chain(configuration.message);
      }
    }
    if (
      prevProps.configuration.pa_material.color !==
      configuration.pa_material.color
    ) {
      this.setState({ ringColor: configuration.pa_material.color });
    }
    if (prevProps.configuration.pa_size.id !== configuration.pa_size.id) {
      if (
        product.data.id !== 186 &&
        product.data.id !== 185 &&
        product.data.id !== 2096
      ) {
        this.setState(
          { chainLength: parseInt(configuration.pa_size.name, 10) },
          () => {
            this.create_chain(configuration.message);
          }
        );
      }
      if (product.data.id === 2096 || product.data.id === 2124) {
        this.setState({ bangleSize: configuration.pa_size.name }, () => {
          this.createBangle(configuration.message, configuration.pa_size.name);
        });
      }
    }
    if (
      product.data.id === 408 &&
      prevProps.configuration.pa_hook_type_earrings.id !==
      configuration.pa_hook_type_earrings.id
    ) {
      this.setState(
        { chainLength: configuration.pa_hook_type_earrings.id },
        () => {
          this.create_chain(configuration.message);
        }
      );
    }
    if (
      !_.isEqual(configuration.pa_stone, prevProps.configuration.pa_stone) &&
      product.data.id !== 186 &&
      product.data.id !== 185 &&
      product.data.id !== 2096 &&
      product.data.id !== 2124
    ) {
      if (configuration.pa_stone.id === "solid_color") {
        this.handleOverrideAllMorseCharColors(
          configuration.pa_stone.choice[0].value.color
        );
      }
    }
    if (
      prevProps.configuration.message === this.props.configuration.message &&
      product.data.id !== 186 &&
      product.data.id !== 185 &&
      product.data.id !== 2096 &&
      product.data.id !== 2124
    ) {
      if (
        configuration.pa_stone.id === "at_your_choice" ||
        configuration.pa_stone.id === "themes"
      ) {
        const items = [];
        _.each(this.state.stoneColorMessage, (stoneColorMessageItem) => {
          _.each(stoneColorMessageItem.lCodeArray, (lCode) => {
            items.push(lCode.item);
          });
        });
        if (configuration.pa_stone.id === "at_your_choice") {
          this.handleMorseCharColorChange(
            configuration.pa_stone.choice[configuration.pa_stone.slide].value
              .color,
            items[configuration.pa_stone.slide]
          );
        }
        if (configuration.pa_stone.id === "themes") {
          _.each(configuration.pa_stone.choice, (item, index) => {
            this.handleMorseCharColorChange(item.value.color, items[index]);
          });
        }
      }
    }
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }

  getChainElementSize(elementName) {
    return this.chainElementSize[elementName] || 0;
  }

  onChangeMsg = (e) => {
    const { product, configuration, productParts } = this.props;
    let text = e.target.value;

    if (product.data.id !== 2096 && product.data.id !== 2124) {
      const rings = [];
      const letters = e.target.value.split("");
      if (product.data.id === 186) {
        this.setState({ msg: e.target.value });
        console.log('state', this.state.msg);
        _.each(letters, (letter) =>
          rings.push(
            `../assets/jewerly/rings_amanti/ring_${letter.toUpperCase()}.glb`
          )
        );
      }
      if (product.data.id === 185) {
        this.setState({ msg: e.target.value });
        console.log('state', this.state.msg);
        _.each(letters, (letter) =>
          rings.push(
            `../assets/jewerly/rings_mayfair/ring_mayfair_${letter.toUpperCase()}.glb`
          )
        );
      }
      if (product.data.id !== 186 && product.data.id !== 185) {
        // if (e.target.value.length > 1) {
        //   text = e.target.value.substring(0, e.target.value.length - 1);
        //   this.setState({ msg: text });
          
        //   console.log('text', text);
        // }
        text = e.target.value[0] || "";
        this.setState({ msg: text });
        for (let i = 0; i < 26; i++) {
          // C5R
          rings.push(
            this.create_link(
              "../assets/jewerly/ringsAquafiore/Aquafiore_Chain_element.glb"
            )
          );
        }
      }
      let jewerly = "";
      switch (product.data.id) {
        case 83:
          jewerly = "NECKLACE";
          break;
        case 402:
          jewerly = "BRACELET";
          break;
        case 405:
          jewerly = "PENDANT";
          break;
        case 408:
          jewerly = "EARRINGS";
          break;
        default:
          jewerly = "";
          break;
      }
      // this.jewerlyRingsRenderer = null;

      this.createNew(text, product.data, configuration, Pricing, productParts);

      this.setState({
        ringsUrls: rings,
        stoneColor: "#FFFFFF",
        ringColor: configuration.pa_material.color,
        createChainType: jewerly,
        chainElementsNames: ["Aquafiore_Chain_element.glb"],
        stoneColorMessage: [],
        chainLength:
          product.data.id === 408
            ? configuration.pa_hook_type_earrings.id
            : parseInt(configuration.pa_size.name, 10),
        height: window.innerHeight - 80,
        load: false,
        galleryModal: false,
        showInfos: true,
        price: this.newPrice,
      });
      if (product.data.id == 402) this.create_BRACELET(text);
      // if(product.data.id == 186) 
    }
    this.chainElementSize = this.chainElementUnitsSize;
  }

  createNew = (message, product, configuration, Pricing, productParts) => {
    const paStone = _.find(Menus.getColorsSubMenu(), item => item.selected);
    const { themes, dispatchChangingProduct, dispatchSetConfiguration } = this.props;
    let newStone = { ...paStone, choice: Menus.lettersChoices(message, _.find(_.find(product.attributes, item => item.slug === 'pa_stone').options, option => option.selected)) };
    if (message !== configuration.message && configuration.pa_stone.id === 'solid_color') {
      newStone = {
        ...paStone,
        choice: Menus.lettersChoices(message, configuration.pa_stone.choice[0].value),
      };
    }
    if (message !== configuration.message && configuration.pa_stone.id === 'themes') {
      newStone = {
        ...configuration.pa_stone,
        id: 'themes',
        name: 'Themes',
        subtitle: '',
        choice: Menus.lettersChoices(message, _.find(themes.data, theme => configuration.pa_stone.selected_theme === theme.slug).stones, true),
      };
    }
    let newConf = {
      ...configuration,
      message: message.trim(),
      pa_stone: message !== configuration.message ? newStone : configuration.pa_stone,
    };
    let paSize = configuration.pa_size;
    if (product.id === 83) {
      const innerSize = Pricing.necklaceSize(productParts.data, newConf);
      if (
        !_.isEmpty(paSize)
        && parseInt(configuration.pa_size.name, 10) < innerSize
      ) {
        paSize = _.find(_.find(product.attributes, item => item.slug === 'pa_size').options, item => parseInt(item.name, 10) > innerSize);
      }
    }
    const tooBigSizes = [];
    if (product.id === 2096 || product.id === 2124) {
      paSize = _.find(_.find(product.attributes, item => item.slug === 'pa_size').options, item => item.name === configuration.pa_size.name);
      const innerSizes = Pricing.mayfairBangleSize(productParts.data, { ...configuration, pa_size: paSize, message });
      const ringSize = Pricing.mayfairBangleRingSize(productParts.data, { ...configuration, pa_size: paSize, message });
      _.each(innerSizes, (size, index) => {
        if (size > ringSize) {
          tooBigSizes.push(index + 1);
        }
      });
      if (!_.isEmpty(tooBigSizes)) {
        paSize = false;
      }
    }
    newConf = {
      ...configuration,
      message: message.trim(),
      pa_stone: message !== configuration.message ? newStone : configuration.pa_stone,
      pa_size: paSize,
    };
    if (paSize || product.id === 408) {
      dispatchSetConfiguration(newConf);
      dispatchChangingProduct(false);
    }
    this.newPrice = Pricing.priceCalc(
      product.id,
      productParts.data,
      configuration
    ).price;
  }

  getImage = () => {
    console.log('getImage');
    const { product } = this.props;
    /* if (!this.jewerlyRingsRenderer) {
      return null;
    }
    return this.jewerlyRingsRenderer.getImage(); */

    if (!this.jewerlyRingsRenderer) {
      return;
    }
    let chainType = this.state.createChainType;
    if (
      product.data.id === 186 ||
      product.data.id === 185 ||
      product.data.id === 2096 ||
      product.data.id === 2124
    ) {
      chainType = "SAVE_SETTINGS_ID";
    }

    // ---------

    const api = this.jewerlyRingsRenderer;

    api.saveCameraSnapshot(chainType);

    api.resetCamera(chainType);

    api.renderer.forceRedraw();

    const base64 = api.getImage();

    api.restoreSnapshot(chainType);

    api.renderer.forceRedraw();
    return base64;
  };

  handleOnRingOnLoad(jewerlyRingsRenderer, gltfs) {
    console.log('handleOnRingOnLoad');
    const renderer = jewerlyRingsRenderer.renderer;

    renderer.getStoneMaterialUniform(null, (object) => {
      if (object.name.toUpperCase().search("STONE2") > -1) {
        object.material.uniforms.colorCorrection.value.copy(
          renderer.getColorAsVector(0xffffff)
        );
        object.material.uniforms.boostFactors.value.copy(
          renderer.getColorAsVector(0xffffff)
        );
        object.material.uniforms.Absorbption.value.copy(
          renderer.getColorAsVector(0x0)
        );
        object.material.uniforms.geometryFactor.value = 0.15;
        object.material.uniforms.distanceOffset.value = 0;
        object.material.uniforms.squashFactor.value = 1;
        object.material.uniforms.normalOffset.value = 0.5;
        object.material.uniforms.n2.value = 2.4;
        object.material.uniforms.rIndexDelta.value = 0.02;
        object.material.uniforms.envMapIntensity.value = 1;
      }
    });

    renderer.getSparklesMaterialUniform(null, (sparkle) => {
      sparkle.material.uniforms.scale.value = 0.707;
      sparkle.material.uniforms.rotation.value = 0;
      sparkle.material.uniforms.intensity.value = 0.376;
    });

    renderer.setRingMaterialValue("metalness", 1);
    renderer.setRingMaterialValue("roughness", 0.2);
    renderer.setRingMaterialValue("refractionRatio", 1);
    renderer.setRingMaterialValue("envMapIntensity", 1);
  }

  genCharArray = (charA, charZ) => {
    console.log('gencharArray');
    var a = [],
      i = charA.charCodeAt(0),
      j = charZ.charCodeAt(0);
    for (; i <= j; ++i) {
      a.push(String.fromCharCode(i));
    }
    return a;
  };

  validate_msg(msg) {
    console.log('valadate_msg')
    const self = this;

    const chars = self.genCharArray("a", "z");
    const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

    return msg
      .split("")
      .filter((char) => {
        // validate message
        char = char.toLowerCase();
        if (chars.indexOf(char) > -1 || numbers.indexOf(char) > -1) {
          return true;
        }
        return false;
      })
      .join("");
  }

  create_chain(message) {
    console.log('create_chain')
    const self = this;
    const chainType = self.state.createChainType;
    if (self["create_" + chainType]) {
      self["create_" + chainType](message);
      return true;
    }
    return false;
  }

  create_link(url, settings) {
    return {
      url: url,
      settings: settings || null,
      gltf: null,
    };
  }

  createBangle(message, bangleSize, onError) {
    console.log('createBangle');
    const self = this;

    // for bagles ringsUrls is
    // [
    //    [ bangle url, [dash, dot, dash], [dot, ... ] <- bangle then word
    //    [ bangle url, [dash, dot, dash], [dot, ... ] <- bangle then word
    //    ...
    // ]

    const ringsUrls = [];

    const bangle = self.bangleSizes[bangleSize];

    const a = Math.max(bangle.size.width / 2, bangle.size.height / 2);
    const b = Math.min(bangle.size.width / 2, bangle.size.height / 2);

    const L = (4 * (Math.PI * a * b + (a - b) * (a - b))) / (a + b);

    let bFailed = false;

    message = message.replace(/\s/g, " ");
    message = message.replace(/&nbsp;/g, " ");
    message = message.replace(/\u00a0/g, " ");
    message.split(" ").forEach((word, i, words) => {
      word = self.validate_msg(word);

      if (!word.length) {
        return;
      }

      const bangleArray = [
        {
          url: bangle.url,
          type: "bangle",
        },
      ];

      ringsUrls.push(bangleArray);

      let total_length = 0;

      word
        .split("")
        .reverse()
        .forEach((letter, j, letters) => {
          const dashDotsArray = [];

          bangleArray.push(dashDotsArray);

          const l = new MorseCode(letter.toLowerCase());

          const lCodeArray = l.getLetterCode();

          lCodeArray.forEach((value) => {
            if (value === "dot") {
              dashDotsArray.push({
                url: self.dot.url,
                type: "dot",
              });

              total_length += self.dot.size;
            } else if (value === "dash") {
              dashDotsArray.push({
                url: self.dash.url,
                type: "dash",
              });

              total_length += self.dash.size;
            }
          });

          if (j !== letters.length - 1) {
            total_length += self.distance_between_letters;
          }

          if (1 - total_length / L < self.safetyMargin) {
            // onError("The word '" + word + "' takes too much space and cann't be placed on bangle");

            bFailed = false;
          }
        });
    });

    if (bFailed) {
      return false;
    }

    self.setState({ ringsUrls: ringsUrls });

    return true;
  }

  create_NECKLACE(message) {
    // AQUAFIORI - NECKLACE

    const self = this;

    const stoneColorMessageArray = [];
    const ringsUrlsArray = [];

    let totalLengthInCm = 0;

    // first - create main message and calculate total message length

    const chain_rotation_start_angle = 0; //-Math.PI / 2;
    let chain_rotation = chain_rotation_start_angle;

    function addChainElement(urlsArray, f) {
      if (!f) {
        f = "push";
      }
      urlsArray[f](
        self.create_link(
          "../assets/jewerly/ringsAquafiore/Aquafiore_Chain_element.glb",
          {
            rotationByPoints: chain_rotation,
          }
        )
      );
      chain_rotation += Math.PI / 2.0;
    }

    function resetChainRotation() {
      chain_rotation = chain_rotation_start_angle;
    }

    // done under CbE_Aquafiore_Elements+BuildRules_24092019.pptx

    message = message.replace(/&nbsp;/g, " ");
    message = message.replace(/\u00a0/g, " ");
    message.split(" ").forEach((msg) => {
      msg = self.validate_msg(msg);

      if (!msg.length) {
        return;
      }

      ringsUrlsArray.push(
        self.create_link("../assets/jewerly/ringsAquafiore/Aquafiore_HX.glb")
      ); // code logo

      totalLengthInCm += self.getChainElementSize("Aquafiore_HX");

      for (let i = 0; i < 7; i++) {
        // C7R

        addChainElement(ringsUrlsArray);

        totalLengthInCm += self.getChainElementSize("Aquafiore_Chain_element");
      }
      resetChainRotation();

      msg.split("").forEach((char, i) => {
        const stoneColorMessageItem = {
          char: char,
          lCodeArray: [],
        };

        stoneColorMessageArray.push(stoneColorMessageItem);

        const l = new MorseCode(char.toLowerCase());

        const lCodeArray = l.getLetterCode();

        lCodeArray.forEach((value) => {
          if (value === "dot") {
            const item = self.create_link(
              "../assets/jewerly/ringsAquafiore/Aquafiore_RD.glb"
            );

            ringsUrlsArray.push(item);

            stoneColorMessageItem.lCodeArray.push({ type: "dot", item: item });

            totalLengthInCm += self.getChainElementSize("Aquafiore_RD");
          } else if (value === "dash") {
            const item = self.create_link(
              "../assets/jewerly/ringsAquafiore/Aquafiore_OB.glb"
            );

            ringsUrlsArray.push(item);

            stoneColorMessageItem.lCodeArray.push({ type: "dash", item: item });

            totalLengthInCm += self.getChainElementSize("Aquafiore_OB");
          }

          for (let i = 0; i < 5; i++) {
            // C5R

            addChainElement(ringsUrlsArray);

            totalLengthInCm += self.getChainElementSize(
              "Aquafiore_Chain_element"
            );
          }
          resetChainRotation();
        });

        if (msg.length - 1 !== i) {
          ringsUrlsArray.push(
            self.create_link(
              "../assets/jewerly/ringsAquafiore/Aquafiore_SP.glb"
            )
          ); // SP

          totalLengthInCm += self.getChainElementSize("Aquafiore_SP");

          for (let i = 0; i < 5; i++) {
            // C5R

            addChainElement(ringsUrlsArray);

            totalLengthInCm += self.getChainElementSize(
              "Aquafiore_Chain_element"
            );
          }
          resetChainRotation();
        } else {
          chain_rotation = -Math.PI / 2.0;

          for (let i = 0; i < 2; i++) {
            // to update to C7R

            addChainElement(ringsUrlsArray);

            totalLengthInCm += self.getChainElementSize(
              "Aquafiore_Chain_element"
            );
          }
          resetChainRotation();
        }
      });
    });

    ringsUrlsArray.push(
      self.create_link("../assets/jewerly/ringsAquafiore/Aquafiore_HX.glb")
    ); // empty code logo - terminator

    totalLengthInCm += self.getChainElementSize("Aquafiore_HX");

    // then add chain elements to the beginning and to the end

    const selectedChainLength =
      this.units_to_cm_coef * parseFloat(self.state.chainLength) || 42;

    const lastChainLength = (selectedChainLength - totalLengthInCm) / 2;

    let chainElementsCount1 =
      (lastChainLength - self.getChainElementSize("Aquafiore_JR")) /
      self.getChainElementSize("Aquafiore_Chain_element");

    let chainElementsCount2 =
      (lastChainLength - self.getChainElementSize("Aquafiore_CL")) /
      self.getChainElementSize("Aquafiore_Chain_element");

    // --> add elements to the beginning

    chainElementsCount1 = Math.floor(chainElementsCount1);
    chainElementsCount1 = chainElementsCount1 > 5 ? chainElementsCount1 : 5;

    let l1 =
      self.getChainElementSize("Aquafiore_Chain_element") * chainElementsCount1;

    l1 += self.getChainElementSize("Aquafiore_JR");

    // while (lastChainLength > ( l1 + self.getChainElementSize('Aquafiore_Chain_element') / 3)) {
    //   chainElementsCount1++;
    //  l1 += self.getChainElementSize('Aquafiore_Chain_element');
    // }

    chainElementsCount1 =
      chainElementsCount1 % 2 === 0
        ? chainElementsCount1
        : chainElementsCount1 + 1;

    // console.log('l1 = ' + l1 + ' ; lastChainLength = ' + lastChainLength);

    resetChainRotation();

    for (let i = 0; i < chainElementsCount1; i++) {
      // C##R

      addChainElement(ringsUrlsArray, "unshift");
    }

    resetChainRotation();

    ringsUrlsArray.unshift(
      self.create_link("../assets/jewerly/ringsAquafiore/Aquafiore_JR.glb")
    );

    // --> add elements to the end

    chainElementsCount2 = Math.floor(chainElementsCount2);
    chainElementsCount2 = chainElementsCount2 > 5 ? chainElementsCount2 : 5;

    let l2 =
      self.getChainElementSize("Aquafiore_Chain_element") * chainElementsCount2;

    l2 += self.getChainElementSize("Aquafiore_CL");

    // while (2 * lastChainLength > (l2 + l1 - self.getChainElementSize('Aquafiore_Chain_element') / 3)) {
    //  chainElementsCount2++;
    //  l2 += self.getChainElementSize('Aquafiore_Chain_element');
    // }

    chainElementsCount2 =
      chainElementsCount2 % 2 === 0
        ? chainElementsCount2 + 1
        : chainElementsCount2;

    // console.log('l2 = ' + l2 + ' ; lastChainLength = ' + lastChainLength);

    resetChainRotation();

    for (let i = 0; i < chainElementsCount2; i++) {
      // C##R

      addChainElement(ringsUrlsArray);
    }

    resetChainRotation();

    ringsUrlsArray.push(
      self.create_link("../assets/jewerly/ringsAquafiore/Aquafiore_CL.glb")
    ); //

    self.setState({
      ringsUrls: ringsUrlsArray,
      stoneColorMessage: stoneColorMessageArray,
    });
  }

  create_BRACELET(message) {
    // AQUAFIORI - BRACELET

    const self = this;

    const stoneColorMessageArray = [];
    const ringsUrlsArray = [];

    let totalLengthInCm = 0;

    // first - create main message and calculate total message length

    const chain_rotation_start_angle = 0; //-Math.PI / 2;
    let chain_rotation = chain_rotation_start_angle;

    function addChainElement(urlsArray, f) {
      if (!f) {
        f = "push";
      }
      urlsArray[f](
        self.create_link(
          "../assets/jewerly/ringsAquafiore/Aquafiore_Chain_element.glb",
          {
            rotationByPoints: chain_rotation,
          }
        )
      );
      chain_rotation += Math.PI / 2.0;
    }

    function resetChainRotation() {
      chain_rotation = chain_rotation_start_angle;
    }

    const bracelet_letter = self
      .validate_msg(message)
      .split("")
      .slice(0, 1)
      .join(""); // 1 letters

    bracelet_letter.split(" ").forEach((msg) => {
      msg = self.validate_msg(msg);

      ringsUrlsArray.push(
        self.create_link("../assets/jewerly/ringsAquafiore/Aquafiore_HX.glb")
      ); // code logo

      totalLengthInCm += self.getChainElementSize("Aquafiore_HX");

      for (let i = 0; i < 7; i++) {
        // C7R

        addChainElement(ringsUrlsArray);

        totalLengthInCm += self.getChainElementSize(
          "../Aquafiore_Chain_element"
        );
      }
      resetChainRotation();

      msg.split("").forEach((char, i) => {
        const stoneColorMessageItem = {
          char: char,
          lCodeArray: [],
        };

        stoneColorMessageArray.push(stoneColorMessageItem);

        const l = new MorseCode(char.toLowerCase());

        const lCodeArray = l.getLetterCode();

        lCodeArray.forEach((value) => {
          if (value === "dot") {
            const item = self.create_link(
              "../assets/jewerly/ringsAquafiore/Aquafiore_RD.glb"
            );

            ringsUrlsArray.push(item);

            stoneColorMessageItem.lCodeArray.push({ type: "dot", item: item });

            totalLengthInCm += self.getChainElementSize("Aquafiore_RD");
          } else if (value === "dash") {
            const item = self.create_link(
              "../assets/jewerly/ringsAquafiore/Aquafiore_OB.glb"
            );

            ringsUrlsArray.push(item);

            stoneColorMessageItem.lCodeArray.push({ type: "dash", item: item });

            totalLengthInCm += self.getChainElementSize("Aquafiore_OB");
          }

          for (let i = 0; i < 5; i++) {
            // C5R

            addChainElement(ringsUrlsArray);

            totalLengthInCm += self.getChainElementSize(
              "Aquafiore_Chain_element"
            );
          }
          resetChainRotation();
        });

        if (msg.length - 1 !== i) {
          // if not a last letter

          const do_nothing = 0; // CbE_Aquafiore_Elements+BuildRules_24092019.pptx
          // ringsUrlsArray.push(
          //  self.create_link("assets/jewerly/ringsAquafiore/Aquafiore_SP.glb")); // SP
          // totalLengthInCm += self.getChainElementSize('Aquafiore_SP');
          // for (let i = 0; i < 3; i++) { // C3R
          //  addChainElement(ringsUrlsArray);
          //  totalLengthInCm += self.getChainElementSize('Aquafiore_Chain_element');
          // }
          // resetChainRotation();
        } else {
          // last letter

          chain_rotation = -Math.PI / 2.0;

          for (let i = 0; i < 2; i++) {
            // to apply to C7R ->  CbE_Aquafiore_Elements+BuildRules_24092019.pptx

            addChainElement(ringsUrlsArray);

            totalLengthInCm += self.getChainElementSize(
              "Aquafiore_Chain_element"
            );
          }
          resetChainRotation();
        }
      });
    });

    resetChainRotation();

    ringsUrlsArray.push(
      self.create_link("../assets/jewerly/ringsAquafiore/Aquafiore_HX.glb")
    ); // empty code logo - terminator

    totalLengthInCm += self.getChainElementSize("Aquafiore_HX");

    // then add chain elements to the beginning and to the end

    const selectedChainLength =
      this.units_to_cm_coef * parseFloat(self.state.chainLength) || 17;

    // --> add elements to the beginning

    const lastChainLength = (selectedChainLength - totalLengthInCm) / 2;

    let chainElementsCount =
      (lastChainLength -
        self.getChainElementSize("Aquafiore_JR") -
        self.getChainElementSize("Aquafiore_JR")) /
      self.getChainElementSize("Aquafiore_Chain_element");

    chainElementsCount = Math.floor(chainElementsCount);
    chainElementsCount = chainElementsCount > 5 ? chainElementsCount : 5;
    chainElementsCount =
      chainElementsCount % 2 === 0
        ? chainElementsCount
        : chainElementsCount + 1;

    resetChainRotation();

    for (let i = 0; i < chainElementsCount - 10; i++) {
      // C3R

      addChainElement(ringsUrlsArray, "unshift");
    }

    resetChainRotation();

    ringsUrlsArray.unshift(
      self.create_link(
        "../assets/jewerly/ringsAquafiore/Aquafiore_JR.glb",
        null
      )
    );

    chain_rotation = -Math.PI / 2.0;

    for (let i = 0; i < 9; i++) {
      // C##R, because 10 Aquafiore_Chain_element ~1cm - refer /docs->pdf AQUAFIORI - BRACELET

      addChainElement(ringsUrlsArray, "unshift");
    }

    resetChainRotation();

    ringsUrlsArray.unshift(
      self.create_link(
        "../assets/jewerly/ringsAquafiore/Aquafiore_JR.glb",
        null
      )
    );

    // --> add elements to the end

    chainElementsCount =
      (lastChainLength - self.getChainElementSize("Aquafiore_CL")) /
      self.getChainElementSize("Aquafiore_Chain_element");

    chainElementsCount = Math.floor(chainElementsCount);
    chainElementsCount = chainElementsCount > 5 ? chainElementsCount : 5;
    chainElementsCount =
      chainElementsCount % 2 === 0
        ? chainElementsCount + 1
        : chainElementsCount;

    for (let i = 0; i < chainElementsCount; i++) {
      // C##R

      addChainElement(ringsUrlsArray);
    }
    resetChainRotation();

    ringsUrlsArray.push(
      self.create_link("../assets/jewerly/ringsAquafiore/Aquafiore_CL.glb")
    ); //

    // ----------------

    self.setState({ ringsUrls: ringsUrlsArray });
    self.setState({ stoneColorMessage: stoneColorMessageArray });
  }

  create_PENDANT(message) {
    // AQUAFIORI - PENDANT

    const self = this;

    const stoneColorMessageArray = [];

    // first - create main message and calculate total message length

    const chain_rotation_start_angle = 0; //-Math.PI / 2;
    let chain_rotation = chain_rotation_start_angle;

    function addChainElement(urlsArray, f) {
      if (!f) {
        f = "push";
      }
      urlsArray[f](
        self.create_link(
          "../assets/jewerly/ringsAquafiore/Aquafiore_Chain_element.glb",
          {
            rotationByPoints: chain_rotation,
          }
        )
      );
      chain_rotation += Math.PI / 2.0;
    }

    function resetChainRotation() {
      chain_rotation = chain_rotation_start_angle;
    }

    // CbE_Aquafiore_Elements+BuildRules_24092019.pptx

    let totalLengthInCm = 0;

    const links_array_3 = [];

    links_array_3.push(
      self.create_link("../assets/jewerly/ringsAquafiore/Aquafiore_JR.glb")
    );

    totalLengthInCm += self.getChainElementSize("Aquafiore_JR");

    links_array_3.push(
      self.create_link("../assets/jewerly/ringsAquafiore/Aquafiore_JR.glb", {
        rotationByPoints: -Math.PI / 2,
      })
    );

    totalLengthInCm += self.getChainElementSize("Aquafiore_JR");

    let msg = self.validate_msg(message).split("").slice(0, 1).join(""); // 1 letter

    msg.split("").forEach((char, i) => {
      const stoneColorMessageItem = {
        char: char,
        lCodeArray: [],
      };

      stoneColorMessageArray.push(stoneColorMessageItem);

      const l = new MorseCode(char.toLowerCase());

      const lCodeArray = l.getLetterCode();

      lCodeArray.forEach((value, j) => {
        if (value === "dot") {
          const item =
            j === 0
              ? self.create_link(
                "../assets/jewerly/ringsAquafiore/Aquafiore_RDJR.glb"
              )
              : self.create_link(
                "../assets/jewerly/ringsAquafiore/Aquafiore_RD.glb"
              );

          links_array_3.push(item);

          stoneColorMessageItem.lCodeArray.push({ type: "dot", item: item });

          totalLengthInCm += self.getChainElementSize("Aquafiore_RD");
        } else if (value === "dash") {
          const item =
            j === 0
              ? self.create_link(
                "../assets/jewerly/ringsAquafiore/Aquafiore_OBJR.glb"
              )
              : self.create_link(
                "../assets/jewerly/ringsAquafiore/Aquafiore_OB.glb"
              );

          links_array_3.push(item);

          stoneColorMessageItem.lCodeArray.push({ type: "dash", item: item });

          totalLengthInCm += self.getChainElementSize("Aquafiore_OB");
        }

        if (lCodeArray.length - 1 !== j) {
          for (let i = 0; i < 5; i++) {
            // C5R

            addChainElement(links_array_3);

            totalLengthInCm += self.getChainElementSize(
              "Aquafiore_Chain_element"
            );
          }
          resetChainRotation();
        }
      });
    });

    // then add chain elements to the the left and right

    const selectedChainLength =
      this.units_to_cm_coef * parseFloat(self.state.chainLength) || 17;

    // --> add elements to the left

    const lastChainLength = (selectedChainLength - totalLengthInCm) / 2;

    const links_array_1 = [];

    let chainElementsCount =
      (lastChainLength -
        self.getChainElementSize("Aquafiore_JR") -
        self.getChainElementSize("Aquafiore_JR")) /
      self.getChainElementSize("Aquafiore_Chain_element");

    chainElementsCount = Math.floor(chainElementsCount);
    chainElementsCount = chainElementsCount > 5 ? chainElementsCount : 5;
    chainElementsCount =
      chainElementsCount % 2 === 0
        ? chainElementsCount + 1
        : chainElementsCount;

    links_array_1.push(
      self.create_link("../assets/jewerly/ringsAquafiore/Aquafiore_JR.glb")
    );

    chain_rotation = -Math.PI / 2.0;

    for (let i = 0; i < chainElementsCount; i++) {
      // C3R

      addChainElement(links_array_1);
    }
    resetChainRotation();

    links_array_1.push(
      self.create_link("../assets/jewerly/ringsAquafiore/Aquafiore_JR.glb")
    );

    // --> add elements to the right

    const links_array_2 = [];

    chainElementsCount =
      (lastChainLength -
        // self.getChainElementSize('Aquafiore_JR')
        self.getChainElementSize("Aquafiore_HX") -
        self.getChainElementSize("Aquafiore_CL")) /
      self.getChainElementSize("Aquafiore_Chain_element");

    const C5R = 5;

    chainElementsCount = Math.floor(chainElementsCount);
    chainElementsCount = chainElementsCount > 5 ? chainElementsCount : 5;
    chainElementsCount =
      chainElementsCount % 2 === 0
        ? chainElementsCount - C5R + 1
        : chainElementsCount - C5R;

    links_array_2.push(
      self.create_link("../assets/jewerly/ringsAquafiore/Aquafiore_JR.glb")
    );

    chain_rotation = -Math.PI / 2.0;

    for (let i = 0; i < chainElementsCount; i++) {
      // C3R

      addChainElement(links_array_2);
    }
    resetChainRotation();

    links_array_2.push(
      self.create_link("../assets/jewerly/ringsAquafiore/Aquafiore_HX.glb")
    ); // refer pdf

    totalLengthInCm += self.getChainElementSize("Aquafiore_HX");

    for (let i = 0; i < C5R; i++) {
      // C5R

      addChainElement(links_array_2);
    }

    resetChainRotation();

    links_array_2.push(
      self.create_link("../assets/jewerly/ringsAquafiore/Aquafiore_CL.glb")
    );

    // ---

    const links_array = [];
    links_array.push(links_array_1);
    links_array.push(links_array_2);
    links_array.push(links_array_3);

    self.setState({
      ringsUrls: links_array,
      stoneColorMessage: stoneColorMessageArray,
    });
  }

  create_EARRINGS(message) {
    // AQUAFIORI - EARRINGS

    const self = this;

    // Length should be calculated there, using cm length

    const chain_rotation_start_angle = 0; //-Math.PI / 2;
    let chain_rotation = chain_rotation_start_angle;

    function addChainElement(urlsArray, f) {
      if (!f) {
        f = "push";
      }
      urlsArray[f](
        self.create_link(
          "../assets/jewerly/ringsAquafiore/Aquafiore_Chain_element.glb",
          {
            rotationByPoints: chain_rotation,
          }
        )
      );
      chain_rotation += Math.PI / 2.0;
    }

    function resetChainRotation() {
      chain_rotation = chain_rotation_start_angle;
    }

    const stoneColorMessageArray = [];
    const links_array_1 = [];
    const links_array_2 = [];

    let msg = self.validate_msg(message).split("").slice(0, 2).join("");

    msg.split("").forEach((char, i) => {
      const stoneColorMessageItem = {
        char: char,
        lCodeArray: [],
      };

      stoneColorMessageArray.push(stoneColorMessageItem);

      const links_array = i === 0 ? links_array_1 : links_array_2;

      const l = new MorseCode(char.toLowerCase());

      const lCodeArray = l.getLetterCode();

      lCodeArray.forEach((value, j) => {
        if (value === "dot") {
          let url = "../assets/jewerly/ringsAquafiore/Aquafiore_RD.glb";

          if (j === 0) {
            if (this.state.chainLength === 126) {
              url = "../assets/jewerly/ringsAquafiore/Aquafiore_RDHA.glb";
            } else if (this.state.chainLength === 127) {
              url = "../assets/jewerly/ringsAquafiore/Aquafiore_RDHB.glb";
            }
          }

          const item = self.create_link(url);

          links_array.push(item);

          stoneColorMessageItem.lCodeArray.push({ type: "dot", item: item });
        } else if (value === "dash") {
          let url = "../assets/jewerly/ringsAquafiore/Aquafiore_OB.glb";

          if (j === 0) {
            if (this.state.chainLength === 126) {
              url = "../assets/jewerly/ringsAquafiore/Aquafiore_OBHA.glb";
            } else if (this.state.chainLength === 127) {
              url = "../assets/jewerly/ringsAquafiore/Aquafiore_OBHB.glb";
            }
          }

          const item = self.create_link(url);

          links_array.push(item);

          stoneColorMessageItem.lCodeArray.push({ type: "dash", item: item });
        }

        resetChainRotation();

        if (lCodeArray.length - 1 !== j) {
          for (let i = 0; i < 5; i++) {
            // C3R

            addChainElement(links_array);
          }
          resetChainRotation();
        }
      });
    });

    const links_array = [];
    links_array.push(links_array_1);
    links_array.push(links_array_2);

    self.setState({ ringsUrls: links_array });
    self.setState({ stoneColorMessage: stoneColorMessageArray });
  }

  handleMorseCharColorChange(color, item) {
    if (!this.jewerlyRingsRenderer) {
      return;
    }

    const jewerlyRingsRenderer = this.jewerlyRingsRenderer;

    const gltf = item.gltf;

    if (!gltf || !gltf.isDiamondGltf) {
      return;
    }

    this.applyStoneColor(gltf, color);
  }

  handleOverrideAllMorseCharColors(color) {
    if (!this.jewerlyRingsRenderer) {
      return;
    }

    const jewerlyRingsRenderer = this.jewerlyRingsRenderer;
    const renderer = jewerlyRingsRenderer.renderer;

    const rootNode = renderer.getRootNode();

    for (let i = 0; i < rootNode.children.length; i++) {
      const gltf = rootNode.children[i];

      if (gltf.isDiamondGltf) {
        this.applyStoneColor(gltf, color);
      }
    }
  }

  getStoneColor = (stone_name) => {
    const colors = {
      "#f36aff": {
        colorCorrection: 0xf36aff,
        boostFactors: 0xdfdfff,
        Absorbption: 0x0,
        geometryFactor: 1,
        distanceOffset: 0,
        squashFactor: 1,
        normalOffset: 0,
        n2: 2,
        rIndexDelta: 0,
        envMapIntensity: 1,
      },
      "#5b99ad": {
        colorCorrection: 0xa5ffff,
        boostFactors: 0xffffff,
        Absorbption: 0x0,
        geometryFactor: 1,
        distanceOffset: 0,
        squashFactor: 1,
        normalOffset: 0,
        n2: 2.4,
        rIndexDelta: 0,
        envMapIntensity: 1,
      },
      "#eeffae": {
        colorCorrection: 0xffeca9,
        boostFactors: 0xeeffae,
        Absorbption: 0x0,
        geometryFactor: 1.0,
        distanceOffset: 0,
        squashFactor: 1,
        normalOffset: 0,
        n2: 2.14,
        rIndexDelta: 0,
        envMapIntensity: 1,
      },
      "#ffbe83": {
        colorCorrection: 0xffbe83,
        boostFactors: 0xffe3ae,
        Absorbption: 0x0,
        geometryFactor: 1.0,
        distanceOffset: 0,
        squashFactor: 1,
        normalOffset: 0,
        n2: 2.4,
        rIndexDelta: 0,
        envMapIntensity: 1,
      },
      "#ffffff": {
        colorCorrection: 0xffffff,
        boostFactors: 0xffffff,
        Absorbption: 0x0,
        geometryFactor: 1,
        distanceOffset: 0,
        squashFactor: 1,
        normalOffset: 0,
        n2: 2.14,
        rIndexDelta: 0,
        envMapIntensity: 1,
      },
    };

    if (typeof colors[stone_name] !== "undefined") {
      return colors[stone_name];
    } else {
      return {
        colorCorrection: parseInt("0x" + stone_name.substring(1)), // remove the # from the colour string and convert it back to hex, which is an integer.
        boostFactors: 0xffffff,
        Absorbption: 0x0,
        geometryFactor: 1.0,
        distanceOffset: 0,
        squashFactor: 1,
        normalOffset: 0,
        n2: 2.4,
        rIndexDelta: 0,
        envMapIntensity: 1,
      };
    }
  };

  applyStoneColor(gltf, color) {
    if (!this.jewerlyRingsRenderer) {
      return;
    }
    if (!gltf || !gltf.isDiamondGltf) {
      return;
    }

    const jewerlyRingsRenderer = this.jewerlyRingsRenderer;
    const renderer = jewerlyRingsRenderer.renderer;

    const values = this.getStoneColor(color);

    if (!values) {
      throw "no settings for stone type";
    }

    gltf.diamondUniformOverrides.colorCorrection = renderer.getColorAsVector(
      values.colorCorrection
    );
    gltf.diamondUniformOverrides.boostFactors = renderer.getColorAsVector(
      values.boostFactors
    );
    gltf.diamondUniformOverrides.Absorbption = renderer.getColorAsVector(
      values.Absorbption
    );
    gltf.diamondUniformOverrides.geometryFactor = values.geometryFactor;
    gltf.diamondUniformOverrides.distanceOffset = values.distanceOffset;
    gltf.diamondUniformOverrides.squashFactor = values.squashFactor;
    gltf.diamondUniformOverrides.normalOffset = values.normalOffset;
    gltf.diamondUniformOverrides.n2 = values.n2;
    gltf.diamondUniformOverrides.rIndexDelta = values.rIndexDelta;
    gltf.diamondUniformOverrides.envMapIntensity = values.envMapIntensity;

    renderer.updateRenderer();
  }

  updateDimensions = () => {
    this.setState({ height: window.innerHeight - 80 });
  };

  handleOnReadyToUse = (jewerlyRingsRenderer) => {
    let { message } = this.props.configuration;
    const { product } = this.props;
    this.jewerlyRingsRenderer = jewerlyRingsRenderer;
    if (product.data.id === 2096 || product.data.id === 2124) {
      this.createBangle(message, this.state.bangleSize);
    }
  };

  handleOnRingOnBeforeLoad = () => {
    const { showLoading } = this.props;
    showLoading(true);
  };

  handleOnRingOnLoad = (jewerlyRingsRenderer, canvas) => {
    const { showLoading, product } = this.props;

    if (product.data.id !== 2096 && product.data.id !== 2124) {
      const { renderer } = jewerlyRingsRenderer;

      renderer.getStoneMaterialUniform(null, (object) => {
        if (object.name.toUpperCase().search("STONE2") > -1) {
          object.material.uniforms.colorCorrection.value.copy(
            renderer.getColorAsVector(0xffffff)
          );
          object.material.uniforms.boostFactors.value.copy(
            renderer.getColorAsVector(0xffffff)
          );
          object.material.uniforms.Absorbption.value.copy(
            renderer.getColorAsVector(0x0)
          );
          object.material.uniforms.geometryFactor.value = 0.15;
          object.material.uniforms.distanceOffset.value = 0;
          object.material.uniforms.squashFactor.value = 1;
          object.material.uniforms.normalOffset.value = 0.5;
          object.material.uniforms.n2.value = 2.4;
          object.material.uniforms.rIndexDelta.value = 0.02;
          object.material.uniforms.envMapIntensity.value = 1;
        }
      });

      renderer.getSparklesMaterialUniform(null, (sparkle) => {
        sparkle.material.uniforms.scale.value = 0.707;
        sparkle.material.uniforms.rotation.value = 0;
        sparkle.material.uniforms.intensity.value = 0.376;
      });

      renderer.getSparklesMaterialUniform(null, (sparkle) => {
        sparkle.material.uniforms.scale.value = 0.707;
        sparkle.material.uniforms.rotation.value = 0;
        sparkle.material.uniforms.intensity.value = 0.376;
      });

      renderer.setRingMaterialValue("metalness", 1);
      renderer.setRingMaterialValue("roughness", 0.2);
      renderer.setRingMaterialValue("refractionRatio", 1);
      renderer.setRingMaterialValue("envMapIntensity", 1);

      const { configuration } = this.props;
      if (product.data.id !== 186 && product.data.id !== 185) {
        if (configuration.pa_stone.id === "solid_color") {
          this.handleOverrideAllMorseCharColors(
            configuration.pa_stone.choice[0].value.color
          );
        }
        if (
          configuration.pa_stone.id === "at_your_choice" ||
          configuration.pa_stone.id === "themes"
        ) {
          const items = [];
          _.each(this.state.stoneColorMessage, (stoneColorMessageItem) => {
            _.each(stoneColorMessageItem.lCodeArray, (lCode) => {
              items.push(lCode.item);
            });
          });
          _.each(items, (item, index) => {
            this.handleMorseCharColorChange(
              configuration.pa_stone.choice[index].value.color,
              item
            );
          });
        }
      }
    } else {
      const renderer = jewerlyRingsRenderer.renderer;

      renderer.getStoneMaterialUniform(null, (object) => {
        if (object.name.toUpperCase().search("STONE2") > -1) {
          object.material.uniforms.colorCorrection.value.copy(
            renderer.getColorAsVector(0xffffff)
          );
          object.material.uniforms.boostFactors.value.copy(
            renderer.getColorAsVector(0xffffff)
          );
          object.material.uniforms.Absorbption.value.copy(
            renderer.getColorAsVector(0x0)
          );
          object.material.uniforms.geometryFactor.value = 0.15;
          object.material.uniforms.distanceOffset.value = 0;
          object.material.uniforms.squashFactor.value = 1;
          object.material.uniforms.normalOffset.value = 0.5;
          object.material.uniforms.n2.value = 2.4;
          object.material.uniforms.rIndexDelta.value = 0.02;
          object.material.uniforms.envMapIntensity.value = 1;
        }
      });

      renderer.getSparklesMaterialUniform(null, (sparkle) => {
        sparkle.material.uniforms.scale.value = 0.707;
        sparkle.material.uniforms.rotation.value = 0;
        sparkle.material.uniforms.intensity.value = 0.376;
      });

      renderer.setRingMaterialValue("metalness", 1);
      renderer.setRingMaterialValue("roughness", 0.2);
      renderer.setRingMaterialValue("refractionRatio", 1);
      renderer.setRingMaterialValue("envMapIntensity", 1);
    }
    showLoading(false);
  };

  handleOnInteraction = () => {
    const { showInfos } = this.state;
    if (showInfos) {
      this.setState({ showInfos: false });
    }
  };

  modals = () => {
    const { galleryModal } = this.state;
    const gallery = () => (
      <GalleryModal
        open={galleryModal}
        onClose={() => this.setState({ galleryModal: false })}
      />
    );

    return <>{gallery()}</>;
  };

  buildMorseCode = (string) => {
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

  wrapChars = (str) => str.replace(/\w|\s/g, "<div>$&</div>");

  render() {
    const {
      ringsUrls,
      stoneColor,
      ringColor,
      height,
      load,
      createChainType,
      chainLength,
      showInfos,
    } = this.state;
    const { chainElementsNames } = this.state || [];
    const { showLoading, product, configuration } = this.props;

    if (_.isEmpty(product.data)) {
      return <Redirect to="/" />;
    }
    if (product.data.id === 186 || product.data.id === 185) {
      return (
        <div>
          <Header price={this.state.price} />
          <div className="single" style={{ height }}>
            <div className="single__threejs">
              {/* {load && ( */}
              <JewerlyRingsRenderer
                ringsUrls={ringsUrls}
                stoneColor={stoneColor}
                ringColor={ringColor}
                onBeforeLoad={this.handleOnRingOnBeforeLoad}
                onLoad={this.handleOnRingOnLoad}
                onReadyToUse={this.handleOnReadyToUse}
                onInteraction={this.handleOnInteraction}
              />
            </div>
            <SettingMenu
              load={load}
              Loading={Loading}
              msg={this.state.msg}
              buildMorseCode={this.buildMorseCode}
              onChangeMsg={this.onChangeMsg}
              product={product.data}
            />
          </div>
        </div>
      );
    }
    if (product.data.id === 2096 || product.data.id === 2124) {
      return (
        <div>
          <Header price={this.state.price} />
          <div className="single" style={{ height }}>
            <div className="single__threejs">
              <div className={`info-message ${showInfos ? "show" : "hide"}`}>
                <div className="morse-code__single">
                  {this.buildMorseCode(configuration.message)}
                </div>
                <div
                  className="message-info__single"
                  dangerouslySetInnerHTML={{
                    __html: this.wrapChars(configuration.message),
                  }}
                />
              </div>
              {/* {load && ( */}
              <JewerlyRingsRenderer
                ringsUrls={ringsUrls}
                stoneColor={stoneColor}
                ringColor={ringColor}
                createChainType={false}
                createBangle={{
                  bangel_options_there: true,
                }}
                onReadyToUse={this.handleOnReadyToUse}
                onBeforeLoad={this.handleOnRingOnBeforeLoad}
                onLoad={this.handleOnRingOnLoad}
                onProgress={this.handleOnRingOnProgress}
                onInteraction={this.handleOnInteraction}
              />
            </div>
            {/* <SingleMenu
            finishAnime={() => this.setState({ load: true })}
            showLoading={showLoading}
            product={product.data}
          />
          {this.modals()} */}
            <SettingMenu
              load={load}
              Loading={Loading}
              msg={this.state.msg}
              buildMorseCode={this.buildMorseCode}
              onChangeMsg={this.onChangeMsg}
              product={product.data}
            />
            <div className="basis-5/12 flex pr-1 py-4 justify-content">
              <div className="basis-3/12"></div>
              <div className="basis-9/12 flex flex-col">
                <div className="flex flex-row justify-content">
                  <div className="basis-4/12 pr-1">
                    <button className="bg-[#d4e4e4] text-[#305253] cbe-btn-text-font py-6 w-full rounded-none" style={{ fontFamily: "Optima nova" }}>
                      <div className="flex flex-row content-center justify-center gap-x-2">
                        <div className="basis-3/4">
                          <p className="font-bold">Message</p>
                        </div>
                      </div>
                    </button>
                  </div>
                  <div className="basis-4/12 pr-1">
                    <button className="bg-[#d4e4e4] text-[#305253] cbe-btn-text-font py-[1rem] w-full rounded-none" style={{ fontFamily: "Optima nova" }}>
                      <div className="flex flex-row content-center justify-center gap-x-2">
                        <div className="basis-3/4 flex flex-col">
                          <p className="italic text-xs">Select</p>
                          <p className="font-bold">Metal</p>
                        </div>
                      </div>
                    </button>
                  </div>
                  <div className="basis-4/12">
                    <button className="bg-[#d4e4e4] text-[#305253] cbe-btn-text-font py-[1rem] w-full rounded-none" style={{ fontFamily: "Optima nova" }}>
                      <div className="flex flex-row content-center justify-center gap-x-2">
                        <div className="basis-3/4 flex flex-col">
                          <p className="italic text-xs">Select</p>
                          <p className="font-bold">Size</p>
                        </div>
                      </div>
                    </button>
                  </div>
                </div>
                <div className="flex flex-row mt-4 justify-content">
                  <div className="`basis-11/12`">
                    <div className="message__inputs">
                      <div className="message__input-container">
                        <div className="morse-code" id="morseContainer">
                          <div className={`info-message show`}>
                            <div className="morse-code__single">
                              {this.buildMorseCode(this.state.msg)}
                            </div>
                          </div>
                        </div>
                        <input className="message__input cbe-font-mono tracking-[30px]" value={this.state.msg} onChange={this.onChangeMsg} id="messageInput" />
                        <div className="message__placeholder message__placeholder--visible cbe-font cbe-message-placeholder-fix mt-1">Please enter your message</div>
                      </div>
                    </div>
                    {load && (
                      <div className="col-span-3 align-middle grid grid-cols-3 content-center">
                        <div className="flex justify-center"><img className="text-center align-middle" src={Loading} /></div>
                      </div>
                    )}
                    {!load && (
                      <div className="col-span-3 align-middle">
                        <p className="text-center text-stone-500 cbe-font-label mt-1 text-sm">Zoom: Mouse Wheel, Rotate: Left Mouse Button, Pan: Right Mouse Button</p>
                      </div>
                    )}

                  </div>
                </div >
              </div >
            </div >
          </div>
        </div>
      );
    }
    return (
      <div>
        <Header price={this.state.price} />
        <div className="single" style={{ height }}>
          <div className="single__threejs">
            <div className={`info-message show`}>
              <div className="morse-code__single">
                {this.buildMorseCode(configuration.message)}
              </div>
              <div
                className="message-info__single"
                dangerouslySetInnerHTML={{
                  __html: this.wrapChars(configuration.message),
                }}
              />
            </div>

            {/* {load && ( */}
            <JewerlyRingsRenderer
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
            />

            {/* )} */}
          </div>
          {/* <button onClick={() => console.log(ringsUrls, stoneColor, ringColor, createChainType, chainElementsNames, chainLength)}>asdf</button> */}
          <SettingMenu
            load={load}
            Loading={Loading}
            msg={this.state.msg}
            buildMorseCode={this.buildMorseCode}
            onChangeMsg={this.onChangeMsg}
            product={product.data}
          />
          {/* <SingleMenu
            finishAnime={() => this.setState({ load: true })}
            showLoading={showLoading}
            product={product.data}
          /> */}
        </div >
      </div>
    );
  }
}

Single.defaultProps = {};

Single.propTypes = {
  showLoading: PropTypes.func.isRequired,
  product: PropTypes.instanceOf(Object).isRequired,
  productParts: PropTypes.instanceOf(Object).isRequired,
  configuration: PropTypes.instanceOf(Object).isRequired,
  dispatchChangingProduct: PropTypes.func.isRequired,
  dispatchSetConfiguration: PropTypes.func.isRequired,
  dispatchSetImageFunc: PropTypes.func.isRequired,
  dispatchGetProduct: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  product: state.product,
  configuration: state.configuration,
  productParts: state.productParts,
  themes: state.themes,
});

const mapDispatchToProps = {
  dispatchSetImageFunc: setImageFuncAction,
  dispatchGetProduct: getProductAction,
  dispatchSetConfiguration: setProductConfigurationAction,
  dispatchChangingProduct: changingProductAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(Single);
