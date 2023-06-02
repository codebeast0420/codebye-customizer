import React, { Fragment } from 'react';
import Header from '../Header';
import { Container, Button } from 'react-bootstrap';
import _ from 'underscore';

import { JewerlyRingsRenderer } from "./../JewerlyRenderer";

import MorseCode from './../../lib/morsecode';

class Single extends React.Component {

  constructor(props) {

    super(props);
    
    const initialMessage = "LOVE";

    const ringsUrlsArray = [];

    for (let i = 0; i < 26; i++) { // C5R
      ringsUrlsArray.push(
        this.create_link("../assets/jewerly/ringsAquafiore/Aquafiore_Chain_element.glb"));
    }

    this.jewerlyRingsRenderer = null;
    

    this.state = {
      message: initialMessage,
      ringsUrls : ringsUrlsArray,
      stoneColor :'#ffffff',
      ringColor : '#ffffff',
      createChainType : 'NECKLACE',
      chainElementsNames : ['Aquafiore_Chain_element.glb'],
      stoneColorMessage: [],
      chainLength : 42,
    };

    this.createChainTypes = [
      'NECKLACE',
      'BRACELET',
      'PENDANT',
      'EARRINGS'
    ];

    this.sizes = {
      NECKLACE: [42, 45, 50, 60, 70, 75],
      BRACELET: [17, 19, 21],
      PENDANT : [42, 45, 50, 60],
      EARRINGS: ['Hook type A', 'Hook type B']
    };

    this.chainElementSize = {
      'Aquafiore_Chain_element' : 0.1,
      'Aquafiore_CL' : 1.4,
      'Aquafiore_HX' : 1.1,
      'Aquafiore_JR' : 0.3,
      'Aquafiore_OB' : 0, // ?
      'Aquafiore_OBHA' : 0, // ?
      'Aquafiore_OBHB' : 0, // ?
      'Aquafiore_OBJR' : 0, // ?
      'Aquafiore_RD' : 1.1,
      'Aquafiore_RDHA' : 0, // ?
      'Aquafiore_RDHB' : 0, // ?
      'Aquafiore_RDJR' : 0.4, // ?
      'Aquafiore_SP' : 0.4
    };
  }

  getChainElementSize(element_name){
    return this.chainElementSize[element_name] || 0;
  }

  getImage = () => {
    if (!this.jewerlyRingsRenderer) {
      return;
    }
    return this.jewerlyRingsRenderer.getImage();
  }

  getStoneColor = (stone_name) => {
    const colors = {
      amethyst: {
        color : '#9966cc' //e8d2ff
      },
      aquamarine: {
        color : '#7fffd4' //c0feff
      },
      green_quartz: {
        color : '#8AA37B'
      },
      light_citrine: {
        color : '#ffd16d'
      },
      rock_crystal: {
        color : '#ffffff'
      }
    }
    return colors[stone_name];
  }

  getStones = () => {
    return {
      amethyst: 'Amethyst',
      aquamarine: 'Aquamarine',
      green_quartz: 'Green Quartz',
      light_citrine: 'Light Citrine',
      rock_crystal: 'Rock Crystal',
    };
  }

  handleOnReadyToUse (jewerlyRingsRenderer) { 
    this.jewerlyRingsRenderer = jewerlyRingsRenderer;
  }

  handleOnRingOnProgress (jewerlyRingsRenderer, e) {
  }

  handleOnRingOnBeforeLoad(jewerlyRingsRenderer) { 
  }

  handleOnRingOnLoad(jewerlyRingsRenderer, gltfs) {

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

    renderer.getSparklesMaterialUniform( null, sparkle => {
      sparkle.material.uniforms.scale.value = 0.707;
      sparkle.material.uniforms.rotation.value = 0;
      sparkle.material.uniforms.intensity.value = 0.376;
    });

    renderer.setRingMaterialValue('metalness', 1);
    renderer.setRingMaterialValue('roughness', 0.2);
    renderer.setRingMaterialValue('refractionRatio', 1);
    renderer.setRingMaterialValue('envMapIntensity', 1);
  }

  handleMessageChange = (event) => {

    const self = this;

    const message = event.target.value;

    if (self.create_chain(message)) {

      self.setState({message : message});
    }
  }

  genCharArray = (charA, charZ) => {
    var a = [], i = charA.charCodeAt(0), j = charZ.charCodeAt(0);
    for (; i <= j; ++i) {
        a.push(String.fromCharCode(i));
    }
    return a;
  }

  validate_msg(msg){

    const self = this;

    const chars = self.genCharArray('a', 'z');
    const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

    return msg.split('').filter( char => { // validate message
      char = char.toLowerCase();
      if (chars.indexOf(char) > -1 || numbers.indexOf(char) > -1) {
        return true;
      }
      return false;
    }).join('');
  }

  create_chain(message){
    const self = this;
    const chainType = self.state.createChainType;
    if (self['create_' + chainType]) {
      self['create_' + chainType](message);
      return true;
    }
    return false;
  }

  create_link(url, settings) {
    return {
      url : url,
      settings : settings || null,
      gltf : null
    };
  }

  create_NECKLACE(message){ // AQUAFIORI - NECKLACE

    const self = this;

    const stoneColorMessageArray = [];
    const ringsUrlsArray = [];

    let totalLengthInCm = 0;

    // first - create main message and calculate total message length

    const chain_rotation_start_angle = 0;//-Math.PI / 2;
    let chain_rotation = chain_rotation_start_angle;

    function addChainElement(urlsArray, f){
      if (!f) {
        f = 'push';
      }
      urlsArray[f](
        self.create_link(
          "../assets/jewerly/ringsAquafiore/Aquafiore_Chain_element.glb", {
            rotationByPoints : chain_rotation
          }
      ));
      chain_rotation += Math.PI / 2.0
    }

    function resetChainRotation(){
      chain_rotation = chain_rotation_start_angle;
    }

    message = message.replace(/&nbsp;/g, ' ');
    message = message.replace(/\u00a0/g, ' ');
    message.split(' ').forEach( msg => {

      msg = self.validate_msg(msg);

      if (!msg.length) {
        return;
      }

      ringsUrlsArray.push(
        self.create_link("../assets/jewerly/ringsAquafiore/Aquafiore_HX.glb")); // code logo
      
      totalLengthInCm += self.getChainElementSize('Aquafiore_HX');

      for (let i = 0; i < 5; i++) { // C##R

        addChainElement(ringsUrlsArray);

        totalLengthInCm += self.getChainElementSize('Aquafiore_Chain_element');
      }
      resetChainRotation();

      msg.split('').forEach( (char, i) => {

        const stoneColorMessageItem = {
          char : char,
          lCodeArray : [] 
        };

        stoneColorMessageArray.push(stoneColorMessageItem);
              
        const l = new MorseCode(char.toLowerCase());
        
        const lCodeArray = l.getLetterCode();

        lCodeArray.forEach(value => {

          if (value === 'dot') {

            const item = self.create_link("../assets/jewerly/ringsAquafiore/Aquafiore_RD.glb");

            ringsUrlsArray.push(item);

            stoneColorMessageItem.lCodeArray.push({ type : "dot", item : item });

            totalLengthInCm += self.getChainElementSize('Aquafiore_RD');
          }
          else if (value === 'dash') { 

            const item = self.create_link("../assets/jewerly/ringsAquafiore/Aquafiore_OB.glb");

            ringsUrlsArray.push(item);

            stoneColorMessageItem.lCodeArray.push({ type : "dash", item : item });
          }

          for (let i = 0; i < 3; i++) { // C3R

            addChainElement(ringsUrlsArray);

            totalLengthInCm += self.getChainElementSize('Aquafiore_Chain_element');
          }
          resetChainRotation();
        });

        if (msg.length - 1 !== i) {

          ringsUrlsArray.push(
            self.create_link("../assets/jewerly/ringsAquafiore/Aquafiore_SP.glb")); // SP

          totalLengthInCm += self.getChainElementSize('Aquafiore_SP');

          for (let i = 0; i < 3; i++) { // C3R

            addChainElement(ringsUrlsArray);
  
            totalLengthInCm += self.getChainElementSize('Aquafiore_Chain_element');
          }
          resetChainRotation();

        }
        else {

          chain_rotation = -Math.PI / 2.0;

          for (let i = 0; i < 2; i++) { // C3R

            addChainElement(ringsUrlsArray);
  
            totalLengthInCm += self.getChainElementSize('Aquafiore_Chain_element');
          }
          resetChainRotation();
        }
      });
    });

    ringsUrlsArray.push(
      self.create_link("../assets/jewerly/ringsAquafiore/Aquafiore_HX.glb")); // empty code logo - terminator

    // then add chain elements to the beginning and to the end

    const selectedChainLength = parseFloat(self.state.chainLength) || 42;

    // --> add elements to the beginning

    const lastChainLength = (selectedChainLength - totalLengthInCm) / 2;

    let chainElementsCount = 
      (lastChainLength - self.getChainElementSize('Aquafiore_JR')) / self.getChainElementSize('Aquafiore_Chain_element');

    chainElementsCount = Math.floor(chainElementsCount);
    chainElementsCount = chainElementsCount > 5 ? chainElementsCount : 5;
    chainElementsCount = chainElementsCount % 2 === 0 ? chainElementsCount: chainElementsCount + 1;

    resetChainRotation();

    for (let i = 0; i < chainElementsCount; i++) { // C3R

      addChainElement(ringsUrlsArray, 'unshift');
    }

    resetChainRotation();

    ringsUrlsArray.unshift(
      self.create_link("../assets/jewerly/ringsAquafiore/Aquafiore_JR.glb"));

    // --> add elements to the end

    chainElementsCount = 
      (lastChainLength - self.getChainElementSize('Aquafiore_CL')) / self.getChainElementSize('Aquafiore_Chain_element');

    chainElementsCount = Math.floor(chainElementsCount);
    chainElementsCount = chainElementsCount > 5 ? chainElementsCount : 5;
    chainElementsCount = chainElementsCount % 2 === 0 ? chainElementsCount + 1: chainElementsCount;

    resetChainRotation();

    for (let i = 0; i < chainElementsCount; i++) { // C##R

      addChainElement(ringsUrlsArray);
    }

    resetChainRotation();

    ringsUrlsArray.push(
      self.create_link("../assets/jewerly/ringsAquafiore/Aquafiore_CL.glb")); //

    self.setState({ringsUrls: ringsUrlsArray});
    self.setState({stoneColorMessage: stoneColorMessageArray});
  }

  create_BRACELET(message){ // AQUAFIORI - BRACELET

    const self = this;
   
    const stoneColorMessageArray = [];
    const ringsUrlsArray = [];

    let totalLengthInCm = 0;

    // first - create main message and calculate total message length

    const chain_rotation_start_angle = 0;//-Math.PI / 2;
    let chain_rotation = chain_rotation_start_angle;

    function addChainElement(urlsArray, f){
      if (!f) {
        f = 'push';
      }
      urlsArray[f](
        self.create_link(
          "../assets/jewerly/ringsAquafiore/Aquafiore_Chain_element.glb", {
            rotationByPoints : chain_rotation
          }
      ));
      chain_rotation += Math.PI / 2.0
    }

    function resetChainRotation(){
      chain_rotation = chain_rotation_start_angle;
    }

    message = message.replace(/&nbsp;/g, ' ');
    message = message.replace(/\u00a0/g, ' ');
    message.split(' ').forEach( msg => {

      msg = self.validate_msg(msg)

      ringsUrlsArray.push(
        self.create_link("../assets/jewerly/ringsAquafiore/Aquafiore_HX.glb")); // code logo

      totalLengthInCm += self.getChainElementSize('Aquafiore_HX');

      for (let i = 0; i < 5; i++) { // C##R

        addChainElement(ringsUrlsArray);

        totalLengthInCm += self.getChainElementSize('Aquafiore_Chain_element');
      }
      resetChainRotation();

      msg.split('').forEach( (char, i) => {

        const stoneColorMessageItem = {
          char : char,
          lCodeArray : [] 
        };

        stoneColorMessageArray.push(stoneColorMessageItem);
              
        const l = new MorseCode(char.toLowerCase());
        
        const lCodeArray = l.getLetterCode();

        lCodeArray.forEach(value => {

          if (value === 'dot') {

            const item = self.create_link("../assets/jewerly/ringsAquafiore/Aquafiore_RD.glb");

            ringsUrlsArray.push(item);

            stoneColorMessageItem.lCodeArray.push({ type : "dot", item : item });

            totalLengthInCm += self.getChainElementSize('Aquafiore_RD');
          }
          else if (value === 'dash') { 

            const item = self.create_link("../assets/jewerly/ringsAquafiore/Aquafiore_OB.glb");

            ringsUrlsArray.push(item);

            stoneColorMessageItem.lCodeArray.push({ type : "dash", item : item });

            totalLengthInCm += self.getChainElementSize('Aquafiore_OB');
          }

          for (let i = 0; i < 3; i++) { // C3R

            addChainElement(ringsUrlsArray);

            totalLengthInCm += self.getChainElementSize('Aquafiore_Chain_element');
          }
          resetChainRotation();
        });

        if (msg.length - 1 !== i) {

          ringsUrlsArray.push(
            self.create_link("../assets/jewerly/ringsAquafiore/Aquafiore_SP.glb")); // SP

          totalLengthInCm += self.getChainElementSize('Aquafiore_SP');

          for (let i = 0; i < 3; i++) { // C3R

            addChainElement(ringsUrlsArray);
  
            totalLengthInCm += self.getChainElementSize('Aquafiore_Chain_element');
          }
          resetChainRotation();

        }
        else {

          chain_rotation = -Math.PI / 2.0;

          for (let i = 0; i < 2; i++) { // C3R

            addChainElement(ringsUrlsArray);
  
            totalLengthInCm += self.getChainElementSize('Aquafiore_Chain_element');
          }
          resetChainRotation();
        }
      });
    });

    resetChainRotation();

    ringsUrlsArray.push(
      self.create_link("../assets/jewerly/ringsAquafiore/Aquafiore_HX.glb")); // empty code logo - terminator

    totalLengthInCm += self.getChainElementSize('Aquafiore_HX');

    // then add chain elements to the beginning and to the end

    const selectedChainLength = parseFloat(self.state.chainLength) || 17;

    // --> add elements to the beginning

    const lastChainLength = (selectedChainLength - totalLengthInCm) / 2;

    let chainElementsCount = 
      (lastChainLength 
      - self.getChainElementSize('Aquafiore_JR') 
      - self.getChainElementSize('Aquafiore_JR')) / 
      self.getChainElementSize('Aquafiore_Chain_element');

    chainElementsCount = Math.floor(chainElementsCount);
    chainElementsCount = chainElementsCount > 5 ? chainElementsCount : 5;
    chainElementsCount = chainElementsCount % 2 === 0 ? chainElementsCount: chainElementsCount + 1;

    resetChainRotation();

    for (let i = 0; i < chainElementsCount - 10; i++) { // C3R

      addChainElement(ringsUrlsArray, 'unshift');
    }

    resetChainRotation();

    ringsUrlsArray.unshift(
      self.create_link("../assets/jewerly/ringsAquafiore/Aquafiore_JR.glb", null));

    chain_rotation = -Math.PI / 2.0;

    for (let i = 0; i < 9 ; i++) { // C##R, because 10 Aquafiore_Chain_element ~1cm - refer /docs->pdf AQUAFIORI - BRACELET

      addChainElement(ringsUrlsArray, 'unshift');
    }

    resetChainRotation();

    ringsUrlsArray.unshift(
      self.create_link("../assets/jewerly/ringsAquafiore/Aquafiore_JR.glb", null));

    // --> add elements to the end

    chainElementsCount = 
      (lastChainLength - self.getChainElementSize('Aquafiore_CL')) / self.getChainElementSize('Aquafiore_Chain_element');

    chainElementsCount = Math.floor(chainElementsCount);
    chainElementsCount = chainElementsCount > 5 ? chainElementsCount : 5;
    chainElementsCount = chainElementsCount % 2 === 0 ? chainElementsCount + 1: chainElementsCount;

    for (let i = 0; i < chainElementsCount; i++) { // C##R

      addChainElement(ringsUrlsArray);
    }
    resetChainRotation();

    ringsUrlsArray.push(
      self.create_link("../assets/jewerly/ringsAquafiore/Aquafiore_CL.glb")); //

    // ----------------

    self.setState({ringsUrls: ringsUrlsArray});
    self.setState({stoneColorMessage: stoneColorMessageArray});
  }

  create_PENDANT(message){ // AQUAFIORI - PENDANT

    const self = this;
   
    const stoneColorMessageArray = [];

    // first - create main message and calculate total message length

    const chain_rotation_start_angle = 0;//-Math.PI / 2;
    let chain_rotation = chain_rotation_start_angle;

    function addChainElement(urlsArray, f){
      if (!f) {
        f = 'push';
      }
      urlsArray[f](
        self.create_link(
          "../assets/jewerly/ringsAquafiore/Aquafiore_Chain_element.glb", {
            rotationByPoints : chain_rotation
          }
      ));
      chain_rotation += Math.PI / 2.0
    }

    function resetChainRotation(){
      chain_rotation = chain_rotation_start_angle;
    }

    let totalLengthInCm = 0;
    
    const links_array_3 = [];

    links_array_3.push(
      self.create_link("../assets/jewerly/ringsAquafiore/Aquafiore_JR.glb"));

    totalLengthInCm += self.getChainElementSize('Aquafiore_JR');

    links_array_3.push(
      self.create_link(
        "../assets/jewerly/ringsAquafiore/Aquafiore_JR.glb", {
          rotationByPoints : -Math.PI / 2
        })
    );

    totalLengthInCm += self.getChainElementSize('Aquafiore_JR');

    let msg = self.validate_msg(message).split('').slice(0, 1).join(''); // 1 letter

    msg.split('').forEach( (char, i) => {

      const stoneColorMessageItem = {
        char : char,
        lCodeArray : [] 
      };

      stoneColorMessageArray.push(stoneColorMessageItem);
            
      const l = new MorseCode(char.toLowerCase());
      
      const lCodeArray = l.getLetterCode();

      lCodeArray.forEach( (value, j) => {

        if (value === 'dot') {

          const item = j === 0 ? 
            self.create_link("../assets/jewerly/ringsAquafiore/Aquafiore_RDJR.glb") : 
            self.create_link("../assets/jewerly/ringsAquafiore/Aquafiore_RD.glb");

          links_array_3.push(item);

          stoneColorMessageItem.lCodeArray.push({ type : "dot", item : item });

          totalLengthInCm += self.getChainElementSize('Aquafiore_RDJR');
        }
        else if (value === 'dash') { 

          const item = self.create_link("../assets/jewerly/ringsAquafiore/Aquafiore_OB.glb");

          links_array_3.push(item);

          stoneColorMessageItem.lCodeArray.push({ type : "dash", item : item });

          totalLengthInCm += self.getChainElementSize('Aquafiore_OB');
        }

        if (lCodeArray.length - 1 !== j) {

            for (let i = 0; i < 3; i++) { // C3R

              addChainElement(links_array_3);

              totalLengthInCm += self.getChainElementSize('Aquafiore_Chain_element');
            }
            resetChainRotation();
        }
      });
    });

    // then add chain elements to the the left and right

    const selectedChainLength = parseFloat(self.state.chainLength) || 17;

    // --> add elements to the left

    const lastChainLength = (selectedChainLength - totalLengthInCm) / 2;

    const links_array_1 = [];
    
    let chainElementsCount = 
      (lastChainLength 
      - self.getChainElementSize('Aquafiore_JR') 
      - self.getChainElementSize('Aquafiore_JR')) / 
      self.getChainElementSize('Aquafiore_Chain_element');

    chainElementsCount = Math.floor(chainElementsCount);
    chainElementsCount = chainElementsCount > 5 ? chainElementsCount : 5;
    chainElementsCount = chainElementsCount % 2 === 0 ? chainElementsCount + 1 : chainElementsCount;

    links_array_1.push(
      self.create_link("../assets/jewerly/ringsAquafiore/Aquafiore_JR.glb"));

    chain_rotation = -Math.PI / 2.0;

    for (let i = 0; i < chainElementsCount; i++) { // C3R

      addChainElement(links_array_1);
    }
    resetChainRotation();

    links_array_1.push(
      self.create_link("../assets/jewerly/ringsAquafiore/Aquafiore_JR.glb"));

    // --> add elements to the right

    const links_array_2 = [];

    chainElementsCount = 
      (lastChainLength 
      // self.getChainElementSize('Aquafiore_JR')
      - self.getChainElementSize('Aquafiore_HX') 
      - self.getChainElementSize('Aquafiore_CL')) / 
      self.getChainElementSize('Aquafiore_Chain_element');

    chainElementsCount = Math.floor(chainElementsCount);
    chainElementsCount = chainElementsCount > 5 ? chainElementsCount : 5;
    chainElementsCount = chainElementsCount % 2 === 0 ? chainElementsCount - 4 : chainElementsCount - 3;

    links_array_2.push(
      self.create_link("../assets/jewerly/ringsAquafiore/Aquafiore_JR.glb"));

    chain_rotation = -Math.PI / 2.0;

    for (let i = 0; i < chainElementsCount; i++) { // C3R

      addChainElement(links_array_2);
    }
    resetChainRotation();

    links_array_2.push(
      self.create_link("../assets/jewerly/ringsAquafiore/Aquafiore_HX.glb")); // refer pdf

    totalLengthInCm += self.getChainElementSize('Aquafiore_HX');

    for (let i = 0; i < 3; i++) { // C3R

      addChainElement(links_array_2);
    }

    resetChainRotation();

    links_array_2.push(
      self.create_link("../assets/jewerly/ringsAquafiore/Aquafiore_CL.glb"));  

    // ---

    const links_array = [];
    links_array.push(links_array_1);
    links_array.push(links_array_2);
    links_array.push(links_array_3);

    self.setState({ringsUrls: links_array});
    self.setState({stoneColorMessage: stoneColorMessageArray});
  }

  create_EARRINGS(message){ // AQUAFIORI - EARRINGS

    const self = this;
   
    // Length should be calculated there, using cm length

    const chain_rotation_start_angle = 0;//-Math.PI / 2;
    let chain_rotation = chain_rotation_start_angle;

    function addChainElement(urlsArray, f){
      if (!f) {
        f = 'push';
      }
      urlsArray[f](
        self.create_link(
          "../assets/jewerly/ringsAquafiore/Aquafiore_Chain_element.glb", {
            rotationByPoints : chain_rotation
          }
      ));
      chain_rotation += Math.PI / 2.0
    }

    function resetChainRotation(){
      chain_rotation = chain_rotation_start_angle;
    }

    const stoneColorMessageArray = [];
    const links_array_1 = [];
    const links_array_2 = [];

    const selectedChain = isNumeric(self.state.chainLength) ? 'Hook type A' : self.state.chainLength;

    let msg = self.validate_msg(message).split('').slice(0, 2).join(''); // two letters

    msg.split('').forEach( (char, i) => {

      const stoneColorMessageItem = {
        char : char,
        lCodeArray : [] 
      };

      stoneColorMessageArray.push(stoneColorMessageItem);

      const links_array = i === 0 ? links_array_1 : links_array_2;
              
      const l = new MorseCode(char.toLowerCase());
      
      const lCodeArray = l.getLetterCode();

      lCodeArray.forEach( (value, j) => {

        if (value === 'dot') {

          let url = "../assets/jewerly/ringsAquafiore/Aquafiore_RD.glb";

          if (j === 0) {

            if (selectedChain === 'Hook type A') {

              url = "../assets/jewerly/ringsAquafiore/Aquafiore_RDHA.glb";
            } 
            else if (selectedChain === 'Hook type B') {
        
              url = "../assets/jewerly/ringsAquafiore/Aquafiore_RDHB.glb";
            }
          }

          const item = self.create_link(url);

          links_array.push(item);

          stoneColorMessageItem.lCodeArray.push({ type : "dot", item : item });
        }
        else if (value === 'dash') { 

          let url = "../assets/jewerly/ringsAquafiore/Aquafiore_OB.glb";

          if (j === 0) {

            if (selectedChain === 'Hook type A') {

              url = "../assets/jewerly/ringsAquafiore/Aquafiore_OBHA.glb";
            } 
            else if (selectedChain === 'Hook type B') {
        
              url = "../assets/jewerly/ringsAquafiore/Aquafiore_OBHB.glb";
            }
          }

          const item = self.create_link(url);

          links_array.push(item);

          stoneColorMessageItem.lCodeArray.push({ type : "dash", item : item });
        }

        resetChainRotation();

        if (lCodeArray.length - 1 !== j) {

          for (let i = 0; i < 3; i++) { // C3R

            addChainElement(links_array);
          }
          resetChainRotation();
        }
      });
    });

    const links_array = [];
    links_array.push(links_array_1);
    links_array.push(links_array_2);

    self.setState({ringsUrls: links_array});
    self.setState({stoneColorMessage: stoneColorMessageArray});
  }

  handleModelUpload(event) { // Only for DEBUG purpose !

      if (!this.jewerlyRingsRenderer) {
        event.currentTarget.value = "";
        return;
      }

      const jewerlyRingsRenderer = this.jewerlyRingsRenderer;
      const renderer = jewerlyRingsRenderer.renderer;
  
      const loadFile = (file) => {

          const name = '../assets/jewerly/ringsAquafiore/' + file.name;
  
          const reader = new FileReader();
  
          reader.onprogress = (ev) => { };
  
          reader.onload = () => {
  
              const blob = new Blob([reader.result], {type: 'application/octet-binary'}); 
  
              const url = URL.createObjectURL(blob);

              renderer.forceChangeFile(
                name,
                url,
                (gltf) => {
                  jewerlyRingsRenderer.update(null, null, true);
                }
              );
          };
  
          reader.readAsArrayBuffer(file);
      };
  
      for ( let i = 0; i < event.currentTarget.files.length; i++ ) {
  
          const file = event.currentTarget.files[i];
  
          if (file) {
  
              loadFile(file);
          }
      }

      event.currentTarget.value = "";
  }

  handleMorseCharColorChange(event, item) {

    if (!this.jewerlyRingsRenderer) {
      return;
    }

    const jewerlyRingsRenderer = this.jewerlyRingsRenderer;
    const renderer = jewerlyRingsRenderer.renderer;

    const gltf = item.gltf;

    if (!gltf || !gltf.isDiamondGltf){
      return;
    }

    const stoneColorValues = this.getStoneColor(event.target.value);

    const intColor = stoneColorValues.color;

    gltf.diamondUniformOverrides.colorCorrection = renderer.getColorAsVector(intColor);

    renderer.updateRenderer();
  }

  handleOverrideAllMorseCharColors(event){

    if (!this.jewerlyRingsRenderer) {
      return;
    }

    const stoneColorValues = this.getStoneColor(event.target.value);

    const intColor = stoneColorValues.color;

    const jewerlyRingsRenderer = this.jewerlyRingsRenderer;
    const renderer = jewerlyRingsRenderer.renderer;

    const rootNode = renderer.getRootNode();

    for (let i = 0; i < rootNode.children.length; i++){

      const gltf = rootNode.children[i];

      if (gltf.isDiamondGltf) {

        gltf.diamondUniformOverrides.colorCorrection = renderer.getColorAsVector(intColor);

        renderer.updateRenderer();
      }
    }
  }
  
  componentDidMount(){
    const { configuration } = this.props;
    this.create_chain(configuration.message);
  }

  componentDidUpdate (prevProps, prevState) {

    if ( prevState.createChainType !== this.state.createChainType || 
         prevState.chainLength !== this.state.chainLength) {

      this.create_chain(this.state.message);
    }
  }

  render() {
  
    const self = this;

    const ringsUrls = self.state.ringsUrls;
    const stoneColor = self.state.stoneColor;
    const ringColor = self.state.ringColor;
    const createChainType = self.state.createChainType;
    const chainElementsNames = self.state.chainElementsNames || [];
    const chainLength = self.state.chainLength;

    const chainTypes = self.createChainTypes;

    const handleOnReadyToUse = self.handleOnReadyToUse.bind(self);
    const handleOnRingOnBeforeLoad = self.handleOnRingOnBeforeLoad.bind(self);
    const handleOnRingOnLoad = self.handleOnRingOnLoad.bind(self);
    const handleOnRingOnProgress = self.handleOnRingOnProgress.bind(self);

    return (
      <Fragment>
        <Header
          onBack={() => alert('back')}
          onClose={() => alert('close')}
        />
        <Container>
          <div className="message-output">Message: <b>{self.state.message}</b></div>
          <div className="threeD">
            <JewerlyRingsRenderer
              ringsUrls = {ringsUrls}
              stoneColor = {stoneColor}
              ringColor = {ringColor}
              createChainType = {createChainType}
              chainElementsNames = {chainElementsNames}
              chainLength = {chainLength}
              onReadyToUse = {handleOnReadyToUse}
              onBeforeLoad = {handleOnRingOnBeforeLoad}
              onLoad = {handleOnRingOnLoad}
              onProgress = {handleOnRingOnProgress}
            />
          </div>
        </Container>
        <Container>

        <div className="message">
            <div>Get Image</div>
            <button type="button"
            onClick = {(evt) => {
              const img_url_base64 = self.getImage();
              if (img_url_base64) {
                var image = new Image();
                image.src = img_url_base64;
                const w = window.open("", '_blank');
                if (w){
                  w.document.write(image.outerHTML);
                  w.focus();
                }
              }
            }}
            >GET IMAGE</button>
          </div>

          <div className="message">
            <div>Change a chain element</div>
            <input
              type="file"
              accept=".glb"
              onChange={(evt) => self.handleModelUpload(evt)}
            /> 
          </div>

          <div className="message">
            <div>Simple input for change message</div>
            <input
              ref={this.messageField}
              value={this.state.message}
              onChange={(evt) => self.handleMessageChange(evt)}
            />
          </div>

          <select onChange={(evt) => self.setState({ createChainType: evt.target.value })}>
              {chainTypes.map((type, i) => {
                return <option 
                  key={'create_chain_type_' + i }
                  value={type}> {type} 
                </option>
              })}
            </select>

          <div className="size-modifier" style={{margin: "40px 0 100px"}}>
            <h1>Size / Modifier</h1>
            <select onChange={(evt) => self.setState({chainLength : evt.target.value})}>
              {this.sizes[this.state.createChainType].map((val, i) => {
                return (<option 
                  key={'change_chain_length_' + i }
                  value={val}> 
                  {val}{(['NECKLACE', 'PENDANT', 'BRACELET'].indexOf(this.state.createChainType) >= 0 ) ? ' cm' : ''} 
                </option>)
              })}
            </select>
          </div>

          <div className="stone-colours-users-choice" style={{margin: "40px 0 100px"}}>
            <h1>Colours at user's choice</h1>

            {this.state.stoneColorMessage.map((stoneColorMessageItem, i) => {

              const char = stoneColorMessageItem.char;
              const lCodeArray = stoneColorMessageItem.lCodeArray;
                   
              const letterOptionsJSX = lCodeArray.map((lCodeArrayItem, i) => {
                const morseChar = lCodeArrayItem.type
                const item = lCodeArrayItem.item;
                return (
                  <div key={Math.random() * 1000}>
                    <span>{morseChar}</span>
                    <select onChange={(evt) => self.handleMorseCharColorChange(evt, item)}>
                      {_.map(this.getStones(), (val, key) => {
                        return <option key={Math.random() * 1000} value={key}>{val}</option>
                      })}
                    </select>
                  </div>
                )
              });

              return (<div key={Math.random() * 1000}>
                <h2>{char.toUpperCase()}</h2>
                  {letterOptionsJSX}
              </div>);
              })}
          </div>

          <div className="stone-colours-solid" style={{margin: "40px 0 100px"}}>
            <h1>Solid colours</h1>
            <p>this applies to all stones and overwrites the settings above</p>
            <select onChange={(evt) => self.handleOverrideAllMorseCharColors(evt)}>
              {_.map(this.getStones(), (val, key) => {
                return <option key={Math.random() * 1000} value={key}>{val}</option>
              })}
              </select>
          </div>    

        </Container>
      </Fragment>
    );
  }
}

function isNumeric(value) {
  return !isNaN(value - parseFloat(value));
}


export default Single;

