/* eslint-disable react/no-did-update-set-state */
/* eslint-disable no-param-reassign */
import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import _ from "underscore";
import { JewerlyRingsRenderer } from "../common/JewerlyRenderer";
import MorseCode from "../../lib/morse_code";
import { getProductPartsAction, getThemesAction, setImageFuncAction } from "../../store/actions";
import { getProductAction } from "../../store/actions";
import { setProductConfigurationAction } from "../../store/actions";
import { changingProductAction } from "../../store/actions";
import GalleryModal from "../common/GalleryModal";
import Pricing from "../../lib/pricing";
import Loading from './Infinity-1s-197px.gif';
import SettingMenu from "../common/SettingMenu";
import Menus from "../common/SingleMenu/menus";
import { getProductsAction } from '../../store';
import Header from "../common/Header";
import ContactModal from "./ContactModal";
import MessageModal from "../common/MessageModal";

class Amanti extends React.Component {
	state = {};

	constructor(props) {
		super(props);
		const { configuration, product, showLoading, dispatchGetProduct, dispatchSetConfiguration, dispatchGetProductParts, dispatchGetThemes } = props
		if (props.category) {
			console.log('category', props.category);
		}
		console.log("hey", product.data);
		if (product.data.id) {
			this.test1();
		}
		else {
			console.log('there is no product');
			Promise.all([
				dispatchGetProduct(186, { message: "a" }),
				dispatchGetProductParts(186),
				dispatchGetThemes(),
			]).then((result) => {
				const { payload: { data } } = result[0];
				if (data.error) {
					dispatchSetConfiguration({
						...configuration,
						message: '',
					});
				} else {
					const paMaterial = _.find(data.attributes, item => item.slug === 'pa_material');
					const paStoneType = _.find(data.attributes, item => item.slug === 'pa_stone-type');
					const paSize = _.find(data.attributes, item => item.slug === 'pa_size');
					const paHookTypeEarrings = _.find(data.attributes, item => item.slug === 'pa_hook-type-earrings');
					const paStone = _.find(Menus.getColorsSubMenu(), item => item.selected);
					const newStone = { ...paStone, choice: Menus.lettersChoices("a", _.find(result[2].payload.data, theme => 'code-standard' === theme.slug).stones, true), selected_theme: 'code-standard' };
					dispatchSetConfiguration({
						...configuration,
						message: "a",
						pa_material:
							!_.isEmpty(paMaterial)
								? _.find(paMaterial.options, item => item.selected) : false,
						pa_stone_type:
							!_.isEmpty(paStoneType)
								? _.find(paStoneType.options, item => item.selected) : false,
						pa_size:
							!_.isEmpty(paSize)
								? _.find(paSize.options, item => item.selected) : false,
						pa_hook_type_earrings:
							!_.isEmpty(paHookTypeEarrings)
								? _.find(paHookTypeEarrings.options, item => item.selected) : false,
						pa_stone: newStone,
					});
				}
			});
			this.test1();
		}
	}

	componentDidMount() {
		window.addEventListener("resize", this.updateDimensions);
		const { product, configuration, dispatchSetImageFunc, productParts, showLoading, match, dispatchGetProducts } = this.props;
		console.log('conf', configuration);

		window.dataLayer = window.dataLayer || [];
		const dataLayerArgs = product ? {
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
		} : {};
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
			_.each(letters, (letter) =>
				rings.push(
					`../assets/jewerly/rings_amanti/ring_${letter.toUpperCase()}.glb`
				)
			);

			this.jewerlyRingsRenderer = null;

			this.state = {
				ringsUrls: rings,
				stoneColor: "#FFFFFF",
				ringColor: configuration.pa_material.color,
				chainElementsNames: ["Aquafiore_Chain_element.glb"],
				stoneColorMessage: [],
				chainLength: parseInt(configuration.pa_size.name, 10),
				height: window.innerHeight - 80,
				load: false,
				galleryModal: false,
				showInfos: true,
				msg: configuration.message != "" ? configuration.message : "",
				showContact: false,
			};
			this.units_to_cm_coef = 2.02;
		}
	}

	showContactModal = () => {
		this.setState({ showContact: true });
	}

	closeContactModal = () => {
		this.setState({ showContact: false });
	}

	componentDidUpdate(prevProps, prevState) {
		const { configuration, product, productParts } = this.props;
		if (prevProps.configuration.message !== configuration.message) {
			const rings = [];
			const letters = configuration.message.split("");
			_.each(letters, (letter) =>
				rings.push(
					`../assets/jewerly/rings_amanti/ring_${letter.toUpperCase()}.glb`
				)
			);
		}
		if (
			prevProps.configuration.pa_material.color !==
			configuration.pa_material.color
		) {
			this.setState({ ringColor: configuration.pa_material.color });
		}
	}

	componentWillUnmount() {
		window.removeEventListener("resize", this.updateDimensions);
	}

	onChangeMsg = (e) => {
		const { product, configuration, productParts } = this.props;
		let text = e.target.value;

		if (product.data.id !== 2096 && product.data.id !== 2124) {
			const rings = [];
			const letters = e.target.value.split("");
			this.setState({ msg: e.target.value });
			console.log('state', this.state.msg);
			_.each(letters, (letter) =>
				rings.push(
					`../assets/jewerly/rings_amanti/ring_${letter.toUpperCase()}.glb`
				)
			);
			// this.jewerlyRingsRenderer = null;

			this.createNew(text, product.data, configuration);

			this.setState({
				ringsUrls: rings,
				stoneColor: "#FFFFFF",
				ringColor: configuration.pa_material.color,
				chainElementsNames: ["Aquafiore_Chain_element.glb"],
				stoneColorMessage: [],
				chainLength: parseInt(configuration.pa_size.name, 10),
				height: window.innerHeight - 80,
				load: false,
				galleryModal: false,
				showInfos: true,
			});
		}
	}

	createNew = (message, product, configuration) => {
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
		const tooBigSizes = [];
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
			load,
			showInfos,
		} = this.state;
		const { product, configuration } = this.props;
		console.log('rendered product', product);

		const price = 0;

		return (
			<div>
				<div>
					<Header showContactModal={this.showContactModal} message={this.state.msg} />
					<div className="single" style={{ height: "70vh" }}>
						<div className="single__threejs">
							{this.state.msg != "" && (
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
							)}
							{this.state.msg != "" && (
								<JewerlyRingsRenderer
									ringsUrls={ringsUrls}
									stoneColor={stoneColor}
									ringColor={ringColor}
									onBeforeLoad={this.handleOnRingOnBeforeLoad}
									onLoad={this.handleOnRingOnLoad}
									onReadyToUse={this.handleOnReadyToUse}
									onInteraction={this.handleOnInteraction}
								/>
							)}

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
					{this.state.showContact && (
						<ContactModal hide={this.closeContactModal} />
					)}
				</div>
			</div>
		);
	}
}

Amanti.defaultProps = {};

Amanti.propTypes = {
	showLoading: PropTypes.func.isRequired,
	product: PropTypes.instanceOf(Object).isRequired,
	productParts: PropTypes.instanceOf(Object).isRequired,
	configuration: PropTypes.instanceOf(Object).isRequired,
	dispatchChangingProduct: PropTypes.func.isRequired,
	dispatchSetConfiguration: PropTypes.func.isRequired,
	dispatchSetImageFunc: PropTypes.func.isRequired,
	dispatchGetProduct: PropTypes.func.isRequired,
	dispatchGetProducts: PropTypes.func.isRequired,
	products: PropTypes.instanceOf(Object).isRequired,
	match: PropTypes.instanceOf(Object).isRequired,
	dispatchGetProductParts: PropTypes.func.isRequired,
	dispatchGetThemes: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
	product: state.product,
	products: state.products,
	configuration: state.configuration,
	productParts: state.productParts,
	themes: state.themes,
});

const mapDispatchToProps = {
	dispatchGetProducts: getProductsAction,
	dispatchSetImageFunc: setImageFuncAction,
	dispatchGetProduct: getProductAction,
	dispatchSetConfiguration: setProductConfigurationAction,
	dispatchChangingProduct: changingProductAction,
	dispatchGetProductParts: getProductPartsAction,
	dispatchGetThemes: getThemesAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(Amanti);
