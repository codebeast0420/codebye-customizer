import React from 'react';

import { JewerlyRingsRenderer } from '../JewerlyRenderer';

import MorseCode from '../../../lib/morse_code';

class Single extends React.Component {

  constructor(props) {

    super(props);

    this.jewerlyRingsRenderer = null;

    this.state = {
      message: 'code',
      ringsUrls: [],
      stoneColor: '#ffffff',
      ringColor: '#ffffff', 
      bangleSize: 'Small',
    };

    this.gltfBasePath = "../assets/jewerly/banglesMaifair/";

    this.safetyMargin = 0.2; // % from full length 

    this.distance_between_letters = 5.3; // 4, because of models ...

    this.dash = {
      url: this.gltfBasePath + 'Bangle_Mayfair_Dash.glb',
      size: 5.3 // 4 , because of models ...
    };

    this.dot = {
      url: this.gltfBasePath + 'Bangle_Mayfair_Dot.glb',
      size: 2.8 // 2, because of models ...
    };

    this.bangleSizes = {
      'Large': {
        url: this.gltfBasePath + 'Bangle_Mayfair_large.glb',
        size: {
          width: 65,
          height: 50
        }
      },
      'Medium': {
        url: this.gltfBasePath + 'Bangle_Mayfair_medium.glb',
        size: {
          width: 60,
          height: 50
        }
      },
      'Small': {
        url: this.gltfBasePath + 'Bangle_Mayfair_small.glb',
        size: {
          width: 55,
          height: 50
        }
      },
      'M\/L': {
        url: this.gltfBasePath + 'Bangle_Mayfair_medium.glb',
        size: {
          width: 60,
          height: 50
        }
      },
      'S\/M': {
        url: this.gltfBasePath + 'Bangle_Mayfair_small.glb',
        size: {
          width: 55,
          height: 50
        }
      }
    }
  }

  handleOnReadyToUse = (jewerlyRingsRenderer) => {

    const { configuration } = this.props;
    this.jewerlyRingsRenderer = jewerlyRingsRenderer;

    this.createBangle(configuration.message, this.state.bangleSize);
  }

  handleOnRingOnBeforeLoad(jewerlyRingsRenderer) {
  }

  handleOnRingOnLoad(jewerlyRingsRenderer) {

    const renderer = jewerlyRingsRenderer.renderer;

    renderer.getStoneMaterialUniform(null, object => {

      if (object.name.toUpperCase().search('STONE2') > -1) {

        object.material.uniforms.colorCorrection.value.copy(renderer.getColorAsVector(0xffffff));
        object.material.uniforms.boostFactors.value.copy(renderer.getColorAsVector(0xffffff));
        object.material.uniforms.Absorbption.value.copy(renderer.getColorAsVector(0x0));
        object.material.uniforms.geometryFactor.value = 0.15;
        object.material.uniforms.distanceOffset.value = 0;
        object.material.uniforms.squashFactor.value = 1;
        object.material.uniforms.normalOffset.value = 0.5;
        object.material.uniforms.n2.value = 2.4;
        object.material.uniforms.rIndexDelta.value = 0.02;
        object.material.uniforms.envMapIntensity.value = 1;
      }
    });

    renderer.getSparklesMaterialUniform(null, sparkle => {

      sparkle.material.uniforms.scale.value = 0.707;
      sparkle.material.uniforms.rotation.value = 0;
      sparkle.material.uniforms.intensity.value = 0.376;
    });

    renderer.setRingMaterialValue('metalness', 1);
    renderer.setRingMaterialValue('roughness', 0.2);
    renderer.setRingMaterialValue('refractionRatio', 1);
    renderer.setRingMaterialValue('envMapIntensity', 1);
  }

  handleOnRingOnProgress(jewerlyRingsRenderer, e) {
  }

  getImage = () => {

    if (!this.jewerlyRingsRenderer) {
      return;
    }

    // ---------

    const api = this.jewerlyRingsRenderer;

    api.saveCameraSnapshot("SAVE_SETTINGS_ID");

    api.resetCamera();

    api.renderer.forceRedraw();

    const base64 = api.getImage();

    api.restoreSnapshot("SAVE_SETTINGS_ID");

    api.renderer.forceRedraw();

    return base64;
  }

  handleOnInteraction() {

    console.log('User is changing camera position');
  }

  handleModelUpload(event) { // Only for DEBUG purpose !

    const self = this;

    if (!self.jewerlyRingsRenderer) {
      event.currentTarget.value = "";
      return;
    }

    const loadFile = (file) => {
      const path = self.gltfBasePath + file.name;
      self.modelFileLoader(file, path);
    };

    for (let i = 0; i < event.currentTarget.files.length; i++) {
      const file = event.currentTarget.files[i];
      if (file) {
        loadFile(file);
      }
    }

    event.currentTarget.value = "";
  }

  componentDidUpdate(prevProps) {
    console.log(prevProps.configuration.message, this.props.configuration.message);
  }

  handleMessageChange = (event) => {

    const self = this;

    const message = event.target.value;

    if (this.createBangle(
      message,
      self.state.bangleSize,
      str => { self.handleError(str); })) //
    {
      self.setState({ message: message });
    }
  }

  handleBangleSizeChange = (event) => {

    const self = this;

    const bangleSize = event.target.value;

    if (this.createBangle(
      this.state.message,
      bangleSize,
      str => { self.handleError(str); })) //
    {
      self.setState({ bangleSize: bangleSize });
    }
  }

  handleError(str) {

    window.alert(str);
  }

  createBangle(message, bangleSize, onError) {

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

    const L = 4 * (Math.PI * a * b + (a - b) * (a - b)) / (a + b);

    let bFailed = false;

    message = message.replace(/&nbsp;/g, ' ');
    message = message.replace(/\u00a0/g, ' ');
    message.split(' ').forEach((word, i, words) => {

      word = self.validate_msg(word);

      if (!word.length) {
        return;
      }

      const bangleArray = [{
        url: bangle.url,
        type: 'bangle'
      }];

      ringsUrls.push(bangleArray);

      let total_length = 0;

      word.split('').forEach((letter, j, letters) => {

        const dashDotsArray = [];

        bangleArray.push(dashDotsArray);

        const l = new MorseCode(letter.toLowerCase());

        const lCodeArray = l.getLetterCode();

        lCodeArray.forEach(value => {

          if (value === 'dot') {

            dashDotsArray.push({
              url: self.dot.url,
              type: 'dot'
            });

            total_length += self.dot.size;
          }
          else if (value === 'dash') {

            dashDotsArray.push({
              url: self.dash.url,
              type: 'dash'
            });

            total_length += self.dash.size;
          }
        });

        if (j !== letters.length - 1) {

          total_length += self.distance_between_letters;
        }

        if ((1 - total_length / L) < self.safetyMargin) {

          onError("The word '" + word + "' takes too much space and cann't be placed on bangle");

          bFailed = true;
        }
      });
    });

    if (bFailed) {
      return false;
    }

    self.setState({ ringsUrls: ringsUrls });

    return true;
  }

  genCharArray = (charA, charZ) => {
    var a = [], i = charA.charCodeAt(0), j = charZ.charCodeAt(0);
    for (; i <= j; ++i) {
      a.push(String.fromCharCode(i));
    }
    return a;
  }

  validate_msg(msg) {

    const self = this;

    const chars = self.genCharArray('a', 'z');
    const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

    return msg.split('').filter(char => { // validate message
      char = char.toLowerCase();
      if (chars.indexOf(char) > -1 || numbers.indexOf(char) > -1) {
        return true;
      }
      return false;
    }).join('');
  }

  render() {

    const self = this;

    const ringsUrls = self.state.ringsUrls;
    const stoneColor = self.state.stoneColor;
    const ringColor = self.state.ringColor;

    const handleOnReadyToUse = self.handleOnReadyToUse.bind(self);
    const handleOnRingOnBeforeLoad = self.handleOnRingOnBeforeLoad.bind(self);
    const handleOnRingOnLoad = self.handleOnRingOnLoad.bind(self);
    const handleOnRingOnProgress = self.handleOnRingOnProgress.bind(self);

    const handleOnInteraction = self.handleOnInteraction.bind(self);

    console.log(ringsUrls);

    return (
      <JewerlyRingsRenderer
        ringsUrls={ringsUrls}
        stoneColor={stoneColor}
        ringColor={ringColor}
        createChainType={false}
        createBangle={{
          bangel_options_there: true
        }}
        onReadyToUse={handleOnReadyToUse}
        onBeforeLoad={handleOnRingOnBeforeLoad}
        onLoad={handleOnRingOnLoad}
        onProgress={handleOnRingOnProgress}
        onInteraction={handleOnInteraction}
      />
    );
  }
}


export default Single;

