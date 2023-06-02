import _ from 'underscore';

const tips = [
  {
    tip: 'LOVE',
    tipForTip: false,
  },
  {
    tip: 'ILY',
    tipForTip: 'I love You',
  },
  {
    tip: '1987',
    tipForTip: 'special year',
  },
  {
    tip: 'MUM',
    tipForTip: false,
  },
  {
    tip: 'MY ONE AND ONLY',
    tipForTip: 'This is big',
  },
];

class Tips {
  static randomTips(array = tips, num = 4) {
    return _.sample(array, num);
  }
}

export default Tips;
