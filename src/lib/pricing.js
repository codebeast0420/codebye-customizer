/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
import _ from 'underscore';
import MorseCode from './morse_code';

class Pricing {
  static priceCalc(id, parts, configuration) {
    const metalFilter = _.filter(parts, part => part.pa_material === configuration.pa_material.id);
    switch (id) {
      case 83:
        return Pricing.necklacePrice(metalFilter, configuration);
      case 402:
        return Pricing.braceletPrice(metalFilter, configuration);
      case 405:
        return Pricing.pendentPrice(metalFilter, configuration);
      case 408:
        return Pricing.earringsPrice(metalFilter, configuration);
      case 186:
        return Pricing.amantiRingPrice(metalFilter, configuration);
      case 185:
        return Pricing.mayfairRingPrice(metalFilter, configuration);
      case 2096:
        return Pricing.mayfairBanglePrice(metalFilter, configuration);
      case 2124:
        return Pricing.mayfairBanglePrice(metalFilter, configuration);
      default:
        return false;
    }
  }

  static necklaceSize(parts, configuration) {
    const metalFilter = _.filter(parts, part => part.pa_material === configuration.pa_material.id);
    let innerSize = 0;
    let { message } = configuration;
    message = message.trim();
    message = message.replace(/&nbsp;/g, ' ');
    message = message.replace(/\u00a0/g, ' ');
    const words = message.split(' ');
    const nOfWords = words.length;
    const nOfLettersByWord = _.map(words, word => word.length);
    const nOfStonesForEachLetter = [];
    _.each(words, (word) => {
      _.each(word.split(''), (letter) => {
        const morse = new MorseCode(letter);
        nOfStonesForEachLetter.push(morse.getLetterCode().length);
      });
    });
    const jr = _.find(metalFilter, item => item['pa_part-type'] === Pricing.partTypes('jr'));
    innerSize += parseFloat(jr.cm);

    const hx = _.find(metalFilter, item => item['pa_part-type'] === Pricing.partTypes('hx'));
    const nrOfHX = nOfWords + 1;
    innerSize += parseFloat(hx.cm) * nrOfHX;

    const c5r = _.find(metalFilter, item => item['pa_part-type'] === Pricing.partTypes('c5r'));
    const nrOfC5R = nOfWords * 2;
    innerSize += parseFloat(c5r.cm) * nrOfC5R;

    // SP = nr of letters by word - 1
    const sp = _.find(metalFilter, item => item['pa_part-type'] === Pricing.partTypes('sp'));
    const nrOfSP = _.reduce(nOfLettersByWord, (carry, item) => carry += item - 1, 0);
    innerSize += parseFloat(sp.cm) * nrOfSP;

    // C3R = nr of SP * 2 + nrOfStonesByLetter - 1;
    const c3r = _.find(metalFilter, item => item['pa_part-type'] === Pricing.partTypes('c3r'));
    const nrOfC3R = _.reduce(
      nOfStonesForEachLetter,
      (carry, item) => carry += item - 1, 0,
    ) + nrOfSP * 2;
    innerSize += parseFloat(c3r.cm) * nrOfC3R;

    // CL = 1;
    const cl = _.find(metalFilter, item => item['pa_part-type'] === Pricing.partTypes('cl'));
    innerSize += parseFloat(cl.cm);

    // Stones
    let stoneSize = 0;
    _.each(configuration.pa_stone.choice, (choice) => {
      let partType = 'rd';
      if (choice.symbol === 'dash') {
        partType = 'ob';
      }
      const stone = _.find(metalFilter, item => item.pa_stone === choice.value.id && item['pa_part-type'] === Pricing.partTypes(partType));
      stoneSize += parseFloat(stone.cm);
    });
    innerSize += stoneSize;

    return innerSize + 5;
  }

  static mayfairBangleSize(parts, configuration) {
    const metalFilter = _.filter(parts, part => part.pa_material === configuration.pa_material.id);
    let { message } = configuration;
    message = message.trim().replace(/\s/g, ' ');
    message = message.replace(/&nbsp;/g, ' ');
    message = message.replace(/\u00a0/g, ' ');
    const words = message.split(' ');

    const nOfLettersByWord = _.map(words, word => word.length);

    const ringsInnerSizes = [];

    _.each(words, (word, index) => {
      ringsInnerSizes[index] = 0;
      _.each(word.split(''), (letter) => {
        const morse = new MorseCode(letter);
        _.each(morse.getLetterCode(), (code) => {
          let partType = 'rd';
          if (code === 'dash') {
            partType = 'ob';
          }
          const stone = _.find(metalFilter, item => item['pa_part-type'] === Pricing.partTypes(partType));
          ringsInnerSizes[index] += parseFloat(stone.cm);
        });
      });
    });

    _.each(nOfLettersByWord, (number, index) => {
      ringsInnerSizes[index] += (number - 1) * 0.4;
    });

    _.each(ringsInnerSizes, (size, index) => {
      ringsInnerSizes[index] += 3;
    });
    return ringsInnerSizes;
  }

  static mayfairBangleRingSize(parts, configuration) {
    const metalFilter = _.filter(parts, part => part.pa_material === configuration.pa_material.id);
    const ringBody = _.find(metalFilter, item => item['pa_size'] === configuration.pa_size.id && item['pa_part-type'] === Pricing.partTypes('bangle-body'));
    return ringBody.cm;
  }

  static mayfairBanglePrice(metalFilter, configuration) {
    let price = 0;
    let { message } = configuration;
    const stonesParts = [];
    message = message.trim().replace(/\s/g, ' ');
    message = message.replace(/&nbsp;/g, ' ');
    message = message.replace(/\u00a0/g, ' ');
    const words = message.split(' ');

    _.each(words, (word) => {
      _.each(word.split(''), (letter) => {
        const morse = new MorseCode(letter);
        _.each(morse.getLetterCode(), (code) => {
          let partType = 'rd';
          if (code === 'dash') {
            partType = 'ob';
          }
          const stone = _.find(metalFilter, item => item['pa_part-type'] === Pricing.partTypes(partType));
          if (stonesParts[`bundle_quantity_${stone.bundled_item_id}`]) {
            stonesParts[`bundle_quantity_${stone.bundled_item_id}`] += 1;
          } else {
            stonesParts[`bundle_quantity_${stone.bundled_item_id}`] = 1;
          }
          price += parseFloat(stone.price);
        });
      });
    });

    const ringBody = _.find(metalFilter, item => item['pa_size'] === configuration.pa_size.id && item['pa_part-type'] === Pricing.partTypes('bangle-body'));
    price += ringBody.price * words.length;

    price = price.toFixed(2);
    price = parseFloat(price);
    price = (Math.ceil(price / 5) * 5).toFixed(2);
    return {
      price,
      parts: {
        ...stonesParts,
        [`bundle_quantity_${ringBody.bundled_item_id}`]: words.length,
      },
    };
  }

  static necklacePrice(metalFilter, configuration) {
    let price = 0;
    let innerSize = 0;
    let { message } = configuration;
    message = message.trim();
    message = message.replace(/&nbsp;/g, ' ');
    message = message.replace(/\u00a0/g, ' ');
    const words = message.split(' ');
    const nOfWords = words.length;
    const nOfLettersByWord = _.map(words, word => word.length);
    const nOfStonesForEachLetter = [];
    _.each(words, (word) => {
      _.each(word.split(''), (letter) => {
        const morse = new MorseCode(letter);
        nOfStonesForEachLetter.push(morse.getLetterCode().length);
      });
    });
    // JR = 1;
    const jr = _.find(metalFilter, item => item['pa_part-type'] === Pricing.partTypes('jr'));
    const jrPrice = jr.price;
    innerSize += parseFloat(jr.cm);

    // HEX = nr of words -1;
    const hx = _.find(metalFilter, item => item['pa_part-type'] === Pricing.partTypes('hx'));
    const hxPrice = hx.price;
    const nrOfHX = nOfWords + 1;
    const finalPriceHX = hxPrice * nrOfHX;
    innerSize += parseFloat(hx.cm) * nrOfHX;

    // C5R = nr of words * 2;
    const c5r = _.find(metalFilter, item => item['pa_part-type'] === Pricing.partTypes('c5r'));
    const c5rPrice = c5r.price;
    const nrOfC5R = nOfWords * 2;
    const finalPriceC5R = c5rPrice * nrOfC5R;
    innerSize += parseFloat(c5r.cm) * nrOfC5R;

    // SP = nr of letters by word - 1
    const sp = _.find(metalFilter, item => item['pa_part-type'] === Pricing.partTypes('sp'));
    const spPrice = sp.price;
    const nrOfSP = _.reduce(nOfLettersByWord, (carry, item) => carry += item - 1, 0);
    const finalPriceSP = spPrice * nrOfSP;
    innerSize += parseFloat(sp.cm) * nrOfSP;

    // C3R = nr of SP * 2 + nrOfStonesByLetter - 1;
    const c3r = _.find(metalFilter, item => item['pa_part-type'] === Pricing.partTypes('c3r'));
    const c3rPrice = c3r.price;
    const nrOfC3R = _.reduce(
      nOfStonesForEachLetter,
      (carry, item) => carry += item - 1, 0,
    ) + nrOfSP * 2;
    const finalPriceC3R = c3rPrice * nrOfC3R;
    innerSize += parseFloat(c3r.cm) * nrOfC3R;

    // CL = 1;
    const cl = _.find(metalFilter, item => item['pa_part-type'] === Pricing.partTypes('cl'));
    const clPrice = cl.price;
    innerSize += parseFloat(cl.cm);

    // Stones
    let stonePrice = 0;
    let stoneSize = 0;
    const stonesParts = [];
    _.each(configuration.pa_stone.choice, (choice) => {
      let partType = 'rd';
      if (choice.symbol === 'dash') {
        partType = 'ob';
      }
      const stone = _.find(metalFilter, item => item.pa_stone === choice.value.id && item['pa_part-type'] === Pricing.partTypes(partType));
      if (stonesParts[`bundle_quantity_${stone.bundled_item_id}`]) {
        stonesParts[`bundle_quantity_${stone.bundled_item_id}`] += 1;
      } else {
        stonesParts[`bundle_quantity_${stone.bundled_item_id}`] = 1;
      }
      stonePrice += stone.price;
      stoneSize += parseFloat(stone.cm);
    });
    innerSize += stoneSize;

    // Assembly cost
    const ac = _.find(metalFilter, item => item['pa_part-type'] === Pricing.partTypes('chain-50'));
    const acPrice = ac.price;

    // CVR = (Size choice - innerSIze) / 2. If Size choice - innerSIze < 10 apply 10;
    const cvr = _.find(metalFilter, item => item['pa_part-type'] === Pricing.partTypes('c1r'));
    const sizeChoice = parseInt(configuration.pa_size.name, 10);
    let diference = (sizeChoice - innerSize) * 10;
    if (diference < 5) {
      diference = 5;
    }
    const cvrPrice = cvr.price * parseInt(diference, 10);
    innerSize += diference;

    price += jrPrice;
    price += finalPriceHX;
    price += finalPriceC5R;
    price += finalPriceSP;
    price += finalPriceC3R;
    price += clPrice;
    price += stonePrice;
    price += cvrPrice;
    price += acPrice;

    price = price.toFixed(2);
    price = parseFloat(price);
    price = (Math.ceil(price / 5) * 5).toFixed(2);

    return {
      price,
      parts: {
        ...stonesParts,
        [`bundle_quantity_${jr.bundled_item_id}`]: 1,
        [`bundle_quantity_${hx.bundled_item_id}`]: nrOfHX,
        [`bundle_quantity_${c5r.bundled_item_id}`]: nrOfC5R,
        [`bundle_quantity_${c3r.bundled_item_id}`]: nrOfC3R,
        [`bundle_quantity_${sp.bundled_item_id}`]: nrOfSP,
        [`bundle_quantity_${cl.bundled_item_id}`]: 1,
        [`bundle_quantity_${cvr.bundled_item_id}`]: parseInt(diference, 10),
        [`bundle_quantity_${ac.bundled_item_id}`]: 1,
      },
    };
  }

  static braceletPrice(metalFilter, configuration) {
    let price = 0;
    let innerSize = 0;
    let { message } = configuration;
    message = message.replace(/&nbsp;/g, ' ');
    message = message.replace(/\u00a0/g, ' ');
    const words = message.split(' ');
    const nOfWords = words.length;
    const nOfLettersByWord = _.map(words, word => word.length);
    const nOfStonesForEachLetter = [];
    _.each(words, (word) => {
      _.each(word.split(''), (letter) => {
        const morse = new MorseCode(letter);
        nOfStonesForEachLetter.push(morse.getLetterCode().length);
      });
    });
    // JR = 2;
    const jr = _.find(metalFilter, item => item['pa_part-type'] === Pricing.partTypes('jr'));
    const jrPrice = jr.price;
    const nbOfJr = 2;
    const finalPriceJr = jrPrice * nbOfJr;
    innerSize += parseFloat(jr.cm) * nbOfJr;

    // HEX = nr of words -1;
    const hx = _.find(metalFilter, item => item['pa_part-type'] === Pricing.partTypes('hx'));
    const hxPrice = hx.price;
    const nrOfHX = nOfWords + 1;
    const finalPriceHX = hxPrice * nrOfHX;
    innerSize += parseFloat(hx.cm) * nrOfHX;

    // C5R = nr of words * 2;
    const c5r = _.find(metalFilter, item => item['pa_part-type'] === Pricing.partTypes('c5r'));
    const c5rPrice = c5r.price;
    const nrOfC5R = nOfWords * 2;
    const finalPriceC5R = c5rPrice * nrOfC5R;
    innerSize += parseFloat(c5r.cm) * nrOfC5R;

    // SP = nr of letters by word - 1
    const sp = _.find(metalFilter, item => item['pa_part-type'] === Pricing.partTypes('sp'));
    const spPrice = sp.price;
    const nrOfSP = _.reduce(nOfLettersByWord, (carry, item) => carry += item - 1, 0);
    const finalPriceSP = spPrice * nrOfSP;
    innerSize += parseFloat(sp.cm) * nrOfSP;

    // C3R = nr of SP * 2 + nrOfStonesByLetter - 1;
    const c3r = _.find(metalFilter, item => item['pa_part-type'] === Pricing.partTypes('c3r'));
    const c3rPrice = c3r.price;
    const nrOfC3R = _.reduce(
      nOfStonesForEachLetter,
      (carry, item) => carry += item - 1, 0,
    ) + nrOfSP * 2;
    const finalPriceC3R = c3rPrice * nrOfC3R;
    innerSize += parseFloat(c3r.cm) * nrOfC3R;

    // CL = 1;
    const cl = _.find(metalFilter, item => item['pa_part-type'] === Pricing.partTypes('cl'));
    const clPrice = cl.price;
    innerSize += parseFloat(cl.cm);

    // Stones
    let stonePrice = 0;
    let stoneSize = 0;
    const stonesParts = [];
    _.each(configuration.pa_stone.choice, (choice) => {
      let partType = 'rd';
      if (choice.symbol === 'dash') {
        partType = 'ob';
      }
      const stone = _.find(metalFilter, item => item.pa_stone === choice.value.id && item['pa_part-type'] === Pricing.partTypes(partType));
      if (stonesParts[`bundle_quantity_${stone.bundled_item_id}`]) {
        stonesParts[`bundle_quantity_${stone.bundled_item_id}`] += 1;
      } else {
        stonesParts[`bundle_quantity_${stone.bundled_item_id}`] = 1;
      }
      stonePrice += stone.price;
      stoneSize += parseFloat(stone.cm);
    });
    innerSize += stoneSize;

    // Assembly cost
    const ac = _.find(metalFilter, item => item['pa_part-type'] === Pricing.partTypes('chain-assembly'));
    const acPrice = ac.price;

    // CVR = (Size choice - innerSIze) / 2. If Size choice - innerSIze < 10 apply 10;
    const cvr = _.find(metalFilter, item => item['pa_part-type'] === Pricing.partTypes('c1r'));
    const sizeChoice = parseInt(configuration.pa_size.name, 10);
    const diference = (sizeChoice - innerSize) * 10;
    const cvrPrice = cvr.price * diference;
    innerSize += diference;

    price += finalPriceJr;
    price += finalPriceHX;
    price += finalPriceC5R;
    price += finalPriceSP;
    price += finalPriceC3R;
    price += clPrice;
    price += stonePrice;
    price += cvrPrice;
    price += acPrice;

    price = price.toFixed(2);
    price = parseFloat(price);
    price = (Math.ceil(price / 5) * 5).toFixed(2);

    return {
      price,
      size: innerSize,
      parts: {
        ...stonesParts,
        [`bundle_quantity_${jr.bundled_item_id}`]: nbOfJr,
        [`bundle_quantity_${hx.bundled_item_id}`]: nrOfHX,
        [`bundle_quantity_${c5r.bundled_item_id}`]: nrOfC5R,
        [`bundle_quantity_${c3r.bundled_item_id}`]: nrOfC3R,
        [`bundle_quantity_${sp.bundled_item_id}`]: nrOfSP,
        [`bundle_quantity_${cl.bundled_item_id}`]: 1,
        [`bundle_quantity_${cvr.bundled_item_id}`]: parseInt(diference, 10),
        [`bundle_quantity_${ac.bundled_item_id}`]: 1,
      },
    };
  }

  static pendentPrice(metalFilter, configuration) {
    let price = 0;
    let { message } = configuration;
    message = message.replace(/&nbsp;/g, ' ');
    message = message.replace(/\u00a0/g, ' ');
    const words = message.split(' ');
    const nOfStonesForEachLetter = [];
    _.each(words, (word) => {
      _.each(word.split(''), (letter) => {
        const morse = new MorseCode(letter);
        nOfStonesForEachLetter.push(morse.getLetterCode().length);
      });
    });
    // JR = 2;
    const jr = _.find(metalFilter, item => item['pa_part-type'] === Pricing.partTypes('jr'));
    const jrPrice = jr.price;
    const nbOfJr = 2;
    const finalPriceJr = jrPrice * nbOfJr;

    const hx = _.find(metalFilter, item => item['pa_part-type'] === Pricing.partTypes('hx'));
    const hxPrice = hx.price;
    const nrOfHX = 1;
    const finalPriceHX = hxPrice * nrOfHX;

    // C3R = nr of SP * 2 + nrOfStonesByLetter - 1;
    const c3r = _.find(metalFilter, item => item['pa_part-type'] === Pricing.partTypes('c3r'));
    const c3rPrice = c3r.price;
    const nrOfC3R = _.reduce(
      nOfStonesForEachLetter,
      (carry, item) => carry += item - 1, 0,
    );
    const finalPriceC3R = c3rPrice * nrOfC3R;

    // Stones
    let stonePrice = 0;
    const stonesParts = [];
    _.each(configuration.pa_stone.choice, (choice) => {
      let partType = 'rd';
      if (choice.symbol === 'dash') {
        partType = 'ob';
      }
      const stone = _.find(metalFilter, item => item.pa_stone === choice.value.id && item['pa_part-type'] === Pricing.partTypes(partType));
      if (stonesParts[`bundle_quantity_${stone.bundled_item_id}`]) {
        stonesParts[`bundle_quantity_${stone.bundled_item_id}`] += 1;
      } else {
        stonesParts[`bundle_quantity_${stone.bundled_item_id}`] = 1;
      }
      stonePrice += stone.price;
    });

    // CL = 1;
    const cl = _.find(metalFilter, item => item['pa_part-type'] === Pricing.partTypes('cl'));
    const clPrice = cl.price;

    const cvr = _.find(metalFilter, item => item['pa_part-type'] === Pricing.partTypes('c1r'));
    const sizeChoice = parseInt(configuration.pa_size.name, 10) * 10;
    const cvrPrice = cvr.price * sizeChoice;

    // Assembly cost
    const ac = _.find(metalFilter, item => item['pa_part-type'] === Pricing.partTypes('chain-50'));
    const acPrice = ac.price;

    price += finalPriceJr;
    price += finalPriceHX;
    price += finalPriceC3R;
    price += clPrice;
    price += stonePrice;
    price += cvrPrice;
    price += acPrice;

    price = price.toFixed(2);
    price = parseFloat(price);
    price = (Math.ceil(price / 5) * 5).toFixed(2);

    return {
      price,
      parts: {
        ...stonesParts,
        [`bundle_quantity_${jr.bundled_item_id}`]: nbOfJr,
        [`bundle_quantity_${hx.bundled_item_id}`]: nrOfHX,
        [`bundle_quantity_${c3r.bundled_item_id}`]: nrOfC3R,
        [`bundle_quantity_${cl.bundled_item_id}`]: 1,
        [`bundle_quantity_${cvr.bundled_item_id}`]: sizeChoice,
        [`bundle_quantity_${ac.bundled_item_id}`]: 1,
      },
    };
  }

  static earringsPrice(metalFilter, configuration) {
    let price = 0;
    let { message } = configuration;
    message = message.replace(/&nbsp;/g, ' ');
    message = message.replace(/\u00a0/g, ' ');
    const words = message.split(' ');
    const nOfStonesForEachLetter = [];
    _.each(words, (word) => {
      _.each(word.split(''), (letter) => {
        const morse = new MorseCode(letter);
        nOfStonesForEachLetter.push(morse.getLetterCode().length);
      });
    });

    // Hooks
    let hook = 'hook-type-a';
    const butterfly = _.find(metalFilter, item => item['pa_part-type'] === Pricing.partTypes('bj'));
    let nOfButterflies = 0;
    if (configuration.pa_hook_type_earrings.id === 127) {
      hook = 'hook-type-b';
      nOfButterflies = 2;
      const priceButterfly = butterfly.price * nOfButterflies;
      price += priceButterfly;
    }
    const hooks = _.find(metalFilter, item => item['pa_part-type'] === Pricing.partTypes(hook));
    const nOfHooks = 2;
    const priceOfHooks = hooks.price * nOfHooks;

    // C3R = nr of SP * 2 + nrOfStonesByLetter - 1;
    const c3r = _.find(metalFilter, item => item['pa_part-type'] === Pricing.partTypes('c3r'));
    const c3rPrice = c3r.price;
    const nrOfC3R = _.reduce(
      nOfStonesForEachLetter,
      (carry, item) => carry += item - 1, 0,
    );
    const finalPriceC3R = c3rPrice * nrOfC3R;

    let stonePrice = 0;
    const stonesParts = [];
    _.each(configuration.pa_stone.choice, (choice) => {
      let partType = 'rd';
      if (choice.symbol === 'dash') {
        partType = 'ob';
      }
      const stone = _.find(metalFilter, item => item.pa_stone === choice.value.id && item['pa_part-type'] === Pricing.partTypes(partType));
      stonePrice += stone.price;
      if (stonesParts[`bundle_quantity_${stone.bundled_item_id}`]) {
        stonesParts[`bundle_quantity_${stone.bundled_item_id}`] += 1;
      } else {
        stonesParts[`bundle_quantity_${stone.bundled_item_id}`] = 1;
      }
    });

    price += priceOfHooks;
    price += finalPriceC3R;
    price += stonePrice;

    price = price.toFixed(2);
    price = parseFloat(price);
    price = (Math.ceil(price / 5) * 5).toFixed(2);

    return {
      price,
      parts: {
        ...stonesParts,
        [`bundle_quantity_${hooks.bundled_item_id}`]: nOfHooks,
        [`bundle_quantity_${butterfly.bundled_item_id}`]: nOfButterflies,
        [`bundle_quantity_${c3r.bundled_item_id}`]: nrOfC3R,
      },
    };
  }

  static amantiRingPrice(metalFilter, configuration) {
    const stoneTypes = _.filter(metalFilter, item => item['pa_stone-type'] === configuration.pa_stone_type.id);
    let ringPrice = 0;
    const stonesParts = [];
    _.each(configuration.message.split(''), (letter) => {
      const letterPart = _.find(
        stoneTypes, item => item.pa_character === Pricing.lettersTypes(letter.toUpperCase()),
      );
      ringPrice += letterPart.price;
      if (stonesParts[`bundle_quantity_${letterPart.bundled_item_id}`]) {
        stonesParts[`bundle_quantity_${letterPart.bundled_item_id}`] += 1;
      } else {
        stonesParts[`bundle_quantity_${letterPart.bundled_item_id}`] = 1;
      }
    });


    let price = ringPrice.toFixed(2);
    price = parseFloat(price);
    price = (Math.ceil(price / 5) * 5).toFixed(2);

    return {
      price,
      parts: {
        ...stonesParts,
      },
    };
  }

  static mayfairRingPrice(metalFilter, configuration) {
    let price = 0;
    let ringPrice = 0;
    const stonesParts = [];
    const stoneTypes = _.filter(metalFilter, item => item['pa_stone-type'] === configuration.pa_stone_type.id);
    const ringBody = _.find(metalFilter, item => item['pa_part-type'] === 74);
    _.each(configuration.message.split(''), (letter) => {
      if (stonesParts[`bundle_quantity_${ringBody.bundled_item_id}`]) {
        stonesParts[`bundle_quantity_${ringBody.bundled_item_id}`] += 1;
      } else {
        stonesParts[`bundle_quantity_${ringBody.bundled_item_id}`] = 1;
      }
      ringPrice += ringBody.price;
      const morse = new MorseCode(letter);
      const codes = morse.getLetterCode();
      _.each(codes, (code) => {
        let partType = 'rd';
        if (code === 'dash') {
          partType = 'ob';
        }
        const stone = _.find(stoneTypes, item => item['pa_part-type'] === Pricing.partTypes(partType));
        price += stone.price;
        if (stonesParts[`bundle_quantity_${stone.bundled_item_id}`]) {
          stonesParts[`bundle_quantity_${stone.bundled_item_id}`] += 1;
        } else {
          stonesParts[`bundle_quantity_${stone.bundled_item_id}`] = 1;
        }
      });
    });

    price += ringPrice;

    price = price.toFixed(2);
    price = parseFloat(price);
    price = (Math.ceil(price / 5) * 5).toFixed(2);

    return {
      price,
      parts: {
        ...stonesParts,
      },
    };
  }

  static partTypes(slug) {
    const partsTypes = [
      {
        id: 146,
        name: '1 Chain elements',
        slug: 'c1r',
      },
      {
        id: 49,
        name: '3 Chain elements',
        slug: 'c3r',
      },
      {
        id: 145,
        name: 'Hook Type B',
        slug: 'hook-type-b',
      },
      {
        id: 50,
        name: '5 Chain Elements',
        slug: 'c5r',
      },
      {
        id: 58,
        name: 'Butterfly',
        slug: 'bj',
      },
      {
        id: 138,
        name: 'Chain',
        slug: 'chain',
      },
      {
        id: 33,
        name: 'Clasp',
        slug: 'cl',
      },
      {
        id: 29,
        name: 'Code Hexagon',
        slug: 'hx',
      },
      {
        id: 78,
        name: 'Full piece',
        slug: 'full-piece',
      },
      {
        id: 145,
        name: 'Hook Type A',
        slug: 'hook-type-a',
      },
      {
        id: 51,
        name: 'Jump Ring',
        slug: 'jr',
      },
      {
        id: 27,
        name: 'Oblong Stone',
        slug: 'ob',
      },
      {
        id: 56,
        name: 'Oblong Stone with Hook Type A',
        slug: 'obha',
      },
      {
        id: 57,
        name: 'Oblong Stone with Hook Type B',
        slug: 'obhb',
      },
      {
        id: 53,
        name: 'Oblong Stone with Jumper Ring',
        slug: 'objr',
      },
      {
        id: 74,
        name: 'Ring Body',
        slug: 'ring-body',
      },
      {
        id: 28,
        name: 'Round Stone',
        slug: 'rd',
      },
      {
        id: 54,
        name: 'Round Stone with Hook Type A',
        slug: 'rdha',
      },
      {
        id: 55,
        name: 'Round Stone with Hook Type B',
        slug: 'rdhb',
      },
      {
        id: 52,
        name: 'Round Stone with Jumper Ring',
        slug: 'rdjr',
      },
      {
        id: 34,
        name: 'Spacer',
        slug: 'sp',
      },
      {
        id: 35,
        name: 'Spacer with Diamond',
        slug: 'spd',
      },
      {
        id: 26,
        name: 'Standard Chain Element (1cm)',
        slug: 'cvr',
      },
      {
        id: 152,
        name: 'Chain assembly',
        slug: 'chain-assembly',
      },
      {
        id: 138,
        name: 'Chain 50',
        slug: 'chain-50',
      },
      {
        id: 164,
        name: 'Bangle Body',
        slug: 'bangle-body',
      },
    ];

    return _.find(partsTypes, partType => partType.slug === slug).id;
  }

  static lettersTypes(letter) {
    const letters = [
      {
        id: 105,
        name: '0',
      },
      {
        id: 106,
        name: '1',
      },
      {
        id: 107,
        name: '2',
      },
      {
        id: 108,
        name: '3',
      },
      {
        id: 109,
        name: '4',
      },
      {
        id: 110,
        name: '5',
      },
      {
        id: 111,
        name: '6',
      },
      {
        id: 112,
        name: '7',
      },
      {
        id: 113,
        name: '8',
      },
      {
        id: 114,
        name: '9',
      },
      {
        id: 79,
        name: 'A',
      },
      {
        id: 80,
        name: 'B',
      },
      {
        id: 81,
        name: 'C',
      },
      {
        id: 82,
        name: 'D',
      },
      {
        id: 83,
        name: 'E',
      },
      {
        id: 80,
        name: 'F',
      },
      {
        id: 85,
        name: 'G',
      },
      {
        id: 86,
        name: 'H',
      },
      {
        id: 87,
        name: 'I',
      },
      {
        id: 88,
        name: 'J',
      },
      {
        id: 85,
        name: 'K',
      },
      {
        id: 80,
        name: 'L',
      },
      {
        id: 91,
        name: 'M',
      },
      {
        id: 79,
        name: 'N',
      },
      {
        id: 93,
        name: 'O',
      },
      {
        id: 81,
        name: 'P',
      },
      {
        id: 88,
        name: 'Q',
      },
      {
        id: 82,
        name: 'R',
      },
      {
        id: 97,
        name: 'S',
      },
      {
        id: 98,
        name: 'T',
      },
      {
        id: 82,
        name: 'U',
      },
      {
        id: 80,
        name: 'V',
      },
      {
        id: 85,
        name: 'W',
      },
      {
        id: 81,
        name: 'X',
      },
      {
        id: 88,
        name: 'Y',
      },
      {
        id: 81,
        name: 'Z',
      },
    ];
    return _.find(letters, lt => lt.name === letter).id;
  }
}

export default Pricing;
