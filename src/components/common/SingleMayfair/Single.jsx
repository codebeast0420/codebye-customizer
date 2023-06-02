import React, { Fragment } from 'react';
import Header from '../Header';
import { Container, Button } from 'react-bootstrap';

import { JewerlyRingsRenderer } from "./../JewerlyRenderer";

class Single extends React.Component {

  constructor(props) {
    super(props);
    this.jewerlyRingsRenderer = null;
    this.state = {
      message: 'code',
      ringsUrls : ['assets/jewerly/ringsMayfair/ring_mayfair_A.glb'],
      stoneColor :'#ffffff',
      ringColor : '#ffffff'
    }
  }

  handleOnReadyToUse = (jewerlyRingsRenderer) => {
    this.jewerlyRingsRenderer = jewerlyRingsRenderer;
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

  handleOnRingOnProgress(jewerlyRingsRenderer, e) {
  }

  handleModelUpload(event) {

    const self = this;

    const loadFile = (file) => {

        var reader = new FileReader();

        reader.onprogress = (ev) => {
        };

        reader.onload = () => {

            const blob = new Blob([reader.result], {type: 'application/octet-binary'}); 

            const url = URL.createObjectURL(blob);

            self.setState({ ringsUrls: [ url ] })
        };

        reader.readAsArrayBuffer(file);
    };

    for ( let i = 0; i < event.currentTarget.files.length; i++ ) {

        const file = event.currentTarget.files[i];

        if (file) {

            loadFile(file);
        }
    }
  }

  handleMessageChange = (event) => {

    const self = this;

    const msg = event.target.value;

    const chars = self.genCharArray('a', 'z');
    const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

    const validated_array_of_chars = msg.split('').filter( char => {
      char = char.toLowerCase();
      if (chars.indexOf(char) > -1 || numbers.indexOf(char) > -1) {
        return true;
      }
      return false;
    });

    const links_array = [];

    for (let i = 0; i < validated_array_of_chars.length; i++) {

      const char = validated_array_of_chars[i].toUpperCase();

      const link = 'assets/jewerly/ringsMayfair/ring_mayfair_' + char + '.glb';

      links_array.push(link);
    }

    self.setState({message : msg});
    self.setState({ringsUrls: links_array});
  }
  
  genCharArray = (charA, charZ) => {
    var a = [], i = charA.charCodeAt(0), j = charZ.charCodeAt(0);
    for (; i <= j; ++i) {
        a.push(String.fromCharCode(i));
    }
    return a;
  }

  render() {
  
    const self = this;

    const ringsUrls = self.state.ringsUrls;
    const stoneColor = self.state.stoneColor;
    const ringColor = self.state.ringColor;

    const chars = self.genCharArray('a', 'z');
    const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

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
              createChainType = { false }
              onReadyToUse = {handleOnReadyToUse}
              onBeforeLoad = {handleOnRingOnBeforeLoad}
              onLoad = {handleOnRingOnLoad}
              onProgress = {handleOnRingOnProgress}
            />
          </div>
        </Container>
        <Container>
          <div className="options">
            <div>Options Go here</div>

            <Button
              onClick={() => this.setState({ ringsUrls: ['assets/jewerly/ringsMayfair/ring_mayfair_ABC.glb'] })}>
              Ring ABC
            </Button>

            <select onChange={(evt) => this.setState({ ringsUrls: [evt.target.value] })}>

              {chars.map((char, i) => {
                return <option 
                  key={'ring_mayfair_char_' + i }
                  value={'assets/jewerly/ringsMayfair/ring_mayfair_' + char.toUpperCase() + '.glb'}> 
                  {'Ring ' + char.toUpperCase()} 
                </option>
              })}

              {numbers.map((number, i) => {
                return <option 
                  key={'ring_mayfair_number_' + i }
                  value={ 'assets/jewerly/ringsMayfair/ring_mayfair_' + number + '.glb' }> 
                  {'Ring ' + number} 
                </option>
              })}

            </select>

            <input 
              type="color" 
              name="stoneColorInput"
              value={this.state.stoneColor}
              onChange={(evt) => this.setState({ stoneColor: evt.target.value })}/>
            <label htmlFor="stoneColorInput">Stone</label>

            <input 
              type="color" 
              name="ringColorInput"
              value={this.state.ringColor}
              onChange={(evt) => this.setState({ ringColor: evt.target.value })}/>
            <label htmlFor="ringColorInput">Ring</label>

            <input
                type="file"
                accept=".glb"
                onChange={(evt) => this.handleModelUpload(evt)}
            /> 

          </div>

          <div className="message">
            <div>Simple input for change message</div>
            <input
              value={this.state.message}
              onChange={(evt) => this.handleMessageChange(evt)}
            />
          </div>
        </Container>
      </Fragment>
    );
  }
}


export default Single;

