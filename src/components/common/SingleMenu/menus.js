import _ from 'underscore';
import uuid from 'uuid';
import Swiper from 'swiper';
import MorseCode from '../../../lib/morse_code';

class Menus {
  constructor(list, element, configuration, preMadeProduct) {
    this.list = list;
    this.element = element;
    this.configuration = configuration;
    this.preMadeProduct = preMadeProduct;
  }

  getList = () => {
    let objects = _.reject(this.list, item => _.size(item.options) <= 1 && item.slug !== 'pa_material');
    console.log('objects', objects);
    const order = ['message', 'pa_material', 'pa_stone-type', 'pa_stone', 'pa_size', 'pa_hook-type-earrings'];
    objects = objects.sort((a, b) => order.indexOf(a.slug) - order.indexOf(b.slug));
    const newList = [];
    _.each(objects, (object, i) => {
      newList[0] = {
        name: 'Message',
        slug: 'message',
        // onClick: () => this.element.setState({ open: !this.preMadeProduct.isPremade }),
        subtitle: `“${this.configuration.message}“`,
      };
      if (object.slug === 'pa_material') {
        let optionsMenu = [...object.options, ...[{ id: 'talk_to_us', name: 'Looking for another metal?', subtitle: 'Talk to us' }]];
        if (this.element.props.product.id === 186) {
          optionsMenu = object.options;
        }
        const newObj = {
          ...object,
          name: 'Type of Material',
          subtitle: this.configuration.pa_material.name,
          onClick: () => {
            // this.element.setState({ title: 'Type of Material' });
            // this.element.menuAnimation(i + 1, true, 'bottom', 'pa_material');
          },
          options: optionsMenu,
        };
        if (object.options.length > 1) {
          newList.push(newObj);
        }
      }
      if (object.slug === 'pa_stone-type') {
        const newObj = {
          ...object,
          name: 'Type of Stone',
          subtitle: this.configuration.pa_stone_type.name,
          onClick: () => {
            // this.element.setState({ title: 'Type of Stone' });
            // this.element.menuAnimation(i + 1, true, 'bottom', 'pa_stone-type');
          },
        };
        if (object.options.length > 1) {
          newList.push(newObj);
        }
      }
      if (object.slug === 'pa_stone') {
        const newObj = {
          ...object,
          name: 'Type of Stone',
          subtitle: this.configuration.pa_stone.name,
          onClick: () => {
            // this.element.setState({ title: 'Type of Stone' });
            // this.element.menuAnimation(i + 1, true, 'bottom', 'pa_stone');
          },
          optionsColors: Menus.getColorsSubMenu(),
        };
        if (object.options.length > 1) {
          newList.push(newObj);
        }
      }
      if (object.slug === 'pa_size') {
        const newObj = {
          ...object,
          name: 'Size',
          subtitle: this.configuration.pa_size.name,
          onClick: () => {
            // this.element.setState({ title: 'Size' });
            // this.element.menuAnimation(i + 1, true, 'bottom', 'pa_size');
          },
        };
        if (object.options.length > 1) {
          newList.push(newObj);
        }
      }
      if (object.slug === 'pa_hook-type-earrings') {
        const newObj = {
          ...object,
          name: 'Style',
          subtitle: this.configuration.pa_hook_type_earrings.name,
          onClick: () => {
            // this.element.setState({ title: 'Style' });
            // this.element.menuAnimation(i + 1, true, 'bottom', 'pa_hook-type-earrings');
          },
        };
        if (object.options.length > 1) {
          newList.push(newObj);
        }
      }
    });
    console.log('newList', newList);
    return newList;
  };

  getSubMenu = (type) => {
    const subMenu = _.find(this.getList(), find => find.slug === type);

    let slug = '';
    switch (type) {
      case 'pa_material':
        slug = 'pa_material';
        break;
      case 'pa_stone':
        slug = 'pa_stone';
        break;
      case 'pa_stone-type':
        slug = 'pa_stone_type';
        break;
      case 'pa_size':
        slug = 'pa_size';
        break;
      case 'pa_hook-type-earrings':
        slug = 'pa_hook_type_earrings';
        break;
      default:
        slug = '';
    }

    const result = [];
    let { options } = subMenu;
    if (subMenu.slug === 'pa_stone') {
      options = subMenu.optionsColors;
    }
    _.each(options, (each, i) => {
      const newObj = {
        ...each,
        id: each.id,
        slug: each.id,
        name: each.name,
        subtitle: each.subtitle,
        onClick: (e) => {
          e.preventDefault();
          if (each.id === 'talk_to_us' && type === 'pa_material') {
            // this.element.setState({ infoModal: true });
          }
          if (each.id !== 'talk_to_us' && type !== 'pa_stone') {
            this.element.props.dispatchSetConfiguration({
              ...this.configuration,
              [slug]: {
                ...each,
                choice: this.configuration[slug].choice,
              },
            });
            if (this.configuration[slug].id !== each.id) {
              this.element.props.dispatchSetSaved(false);
            }
          }
          if (type === 'pa_stone') {
            // this.element.menuAnimation(i, false, 'bottom', each.id);
            // this.element.setState({ standardMenu: false, title: each.name });
            setTimeout(() => {
              const slides = document.getElementsByClassName('single__menu__middle__item__choice__symbols__symbol');
              if (!_.isEmpty(slides)) {
                this.element.colorSliders = [];
                for (let j = 0; j < slides.length; j++) {
                  const colors = _.find(this.getList(), list => list.slug === 'pa_stone');
                  const colorIndex = _.findIndex(
                    colors.options,
                    color => color.id === this.configuration.pa_stone.choice[j].value.id,
                  );
                  const el = document.getElementsByClassName('single__menu__top');
                  const colorsSlider = new Swiper(`#s${j + 1}`, {
                    init: false,
                    width: null,
                    spaceBetween: 0,
                    freeMode: true,
                    freeModeSticky: true,
                    mousewheel: false,
                    preventClicksPropagation: true,
                    preventClicks: true,
                    simulateTouch: true,
                    direction: window.innerWidth >= 1024 ? 'horizontal' : 'vertical',
                    initialSlide: colorIndex,
                    breakpoints: {
                      1024: {
                        width: el[0].offsetWidth - 30,
                        navigation: {
                          nextEl: `.swiper-button-next.s${j + 1}`,
                          prevEl: `.swiper-button-prev.s${j + 1}`,
                        },
                      },
                    },
                  });
                  if (window.innerWidth >= 1024) {
                    document.getElementsByClassName(`swiper-button-next s${j + 1}`)[0].style.left = `calc(${el[0].offsetWidth}px - 80px)`;
                  }
                  colorsSlider.init();
                  this.element.colorSliders.push(colorsSlider);
                  colorsSlider.on('slideChange', () => {
                    const conf = this.configuration.pa_stone.choice;
                    conf[j].value = colors.options[colorsSlider.realIndex];
                    const newConf = {
                      ...this.configuration,
                      pa_stone: {
                        ..._.find(Menus.getColorsSubMenu(), menu => menu.id === 'at_your_choice'),
                        choice: conf,
                        slide: j,
                      },
                    };
                    this.element.props.dispatchSetConfiguration(newConf);
                    this.element.props.dispatchSetSaved(false);
                  });
                  if (window.innerWidth < 1024) {
                    colorsSlider.on('click', () => {
                      colorsSlider.slideNext();
                    });
                    colorsSlider.on('doubleTap', () => {
                      colorsSlider.slidePrev();
                    });
                  }
                }
              }
            }, 1000);
          }
        },
        selected: _.isEqual(this.configuration[slug].id, each.id),
      };
      result.push(newObj);
    });

    return result;
  }

  static getColorsSubMenu() {
    return [
      {
        id: 'solid_color',
        name: 'Solid Color',
        subtitle: '',
        selected: false,
      },
      {
        id: 'themes',
        name: 'Themes',
        subtitle: '',
        selected: true,
      },
      {
        id: 'at_your_choice',
        name: 'At your choice',
        subtitle: '',
        selected: false,
      },
    ];
  }

  static lettersChoices(message, value, multiple = false) {
    const choices = [];
    _.each(message.split(''), (letter) => {
      const code = new MorseCode(letter);
      let index = 0;
      _.each(code.getLetterCode(), (symbol) => {
        choices.push({
          symbol,
          // value,
          value: !multiple ? value : _.find(value, (item, i) => i === letter.toLowerCase())[index],
        });
        index += 1;
      });
    });
    return choices;
  }

  getSolidColorsSubMenu() {
    const subMenu = _.find(this.getList(), find => find.slug === 'pa_stone');

    const newOptions = _.map(subMenu.options, value => ({
      ...value,
      selected: _.isEqual(this.configuration.pa_stone.choice[0].value.id, value.id) && this.configuration.pa_stone.id === 'solid_color',
      onClick: () => {
        const newConf = {
          ...this.configuration,
          pa_stone: {
            ..._.find(Menus.getColorsSubMenu(), menu => menu.id === 'solid_color'),
            choice: Menus.lettersChoices(this.configuration.message, value),
            selected_theme: false,
          },
        };
        this.element.props.dispatchSetConfiguration(newConf);
        if (!_.isEqual(this.configuration.pa_stone.choice, newConf.pa_stone.choice)) {
          this.element.props.dispatchSetSaved(false);
        }
      },
    }));
    return newOptions;
  }

  getThemesColorsSubMenu() {
    const subMenu = this.element.props.themes.data;
    const newOptions = _.map(subMenu, value => ({
      id: value.slug,
      name: value.name,
      selected: _.isEqual(this.configuration.pa_stone.selected_theme, value.slug) && this.configuration.pa_stone.id === 'themes',
      colors: value.gradient,
      onClick: () => {
        const newConf = {
          ...this.configuration,
          pa_stone: {
            ..._.find(Menus.getColorsSubMenu(), menu => menu.id === 'themes'),
            choice: Menus.lettersChoices(this.configuration.message, value.stones, true),
            selected_theme: value.slug,
          },
        };
        this.element.props.dispatchSetConfiguration(newConf);
        if (!_.isEqual(this.configuration.pa_stone.choice, newConf.pa_stone.choice)) {
          this.element.props.dispatchSetSaved(false);
        }
      },
    }));
    return newOptions;
  }

  getAtYourChoiceColorsMenu() {
    const subMenu = _.find(this.getList(), find => find.slug === 'pa_stone');
    return this.configuration.message.split('').map((letter) => {
      const morse = new MorseCode(letter);
      return {
        id: uuid(),
        letter: letter.toUpperCase(),
        code: morse.getLetterCode().map(value => ({ symbol: value, colors: subMenu.options })),
      };
    });
  }
}

export default Menus;
