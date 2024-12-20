export const mockListData = Array.from({length: 50}, (v, i) => ({
  id: (i + 1).toString(),
  title: `Item ${i + 1}`,
  description: `Description for Item ${i + 1}`,
}));

export const sectionListData = [
  {
    title: 'Men',
    data: ['Men half T 1', 'Mens trawsers', 'Trakshoot for running for men'],
  },
  {
    title: 'Women',
    data: [
      'Womens 1 pice lahenga',
      'Silk saree with matching blouse',
      'Designer kurti',
      'Pink top collection',
    ],
  },
  {
    title: 'Kids',
    data: [
      'Kids matcing shirt pants',
      'kids jeans',
      'kids shirt',
      'Kids sweter for winter',
    ],
  },
  {
    title: 'Watches',
    data: [
      'Taitan watch collection',
      'Zoom Kids watch section',
      'Rolex Ultra luxary',
    ],
  },
];

export const mockPoolData = Array.from({length: 50}, (_, index) => ({
  id: index + 1,
  title: `Item number ${index + 1}`,
  subHeading: `This is our sub heading of the the ${index + 1}th element`,
  description: `Description of the new element containing ${
    index + 1
  } th element, read below`,
}));
