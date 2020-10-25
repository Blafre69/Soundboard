export const boards: any[] = [
  { id: 1, label: 'Le Raït', img: '/../assets/arthur.jpg' },
  { id: 2, label: 'La vieille branche', img: '/../assets/arthur.jpg' },
  { id: 3, label: 'Le spooky', img: '/../assets/arthur.jpg' }
];

export const boardsDetails: any = {

  1: {
    label: 'Le Raït',
    sounds: [
      {
        id: 1,
        label: 'bruit du cerf',
        img: '../assets/arthur.jpg',
        path: '/data/bruitDUcerf.mp3'
      },

      {
        id: 2,
        label: 'glouglou',
        img: '../assets/arthur.jpg',
        path: '/data/gluglou.mp3'
      }
    ]
  },

  2: {
    label: 'La vieille branche',
    sounds: [
      {
        id: 1,
        label: 'bruit marmotte',
        img: '../assets/arthur.jpg',
        path: '/data/bruitMarmotte.mp3'
      },

      {
        id: 2, label: 'autruche',
        img: '../assets/arthur.jpg',
        path: '/data/BruitAutruche.mp3'
      }

    ]


  },

  3: {
    label: 'Spooky',
    sounds: [
       { id: 1,
        label: 'chui qu\'un iench',
        img: '../assets/arthur.jpg',
        path: '/data/chuiquunIench.mp3'
      },

      { id: 2,
        label: 'Waf',
        img: '../assets/arthur.jpg',
        path: '/data/waf.mp3'
      }
    ]
  }

};
