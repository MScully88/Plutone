const shuffle = array => {
  // initial shuffle of quotes //
  let i = array.length;
  let j = 0;
  let temp;

  while (i--) {
    j = Math.floor(Math.random() * (i + 1));

    temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
};

export default { shuffle };

// code to adjust the height and width of the container

// const [containerScale, setContainerScale] = useState(null);
// const fitStageIntoParentContainer = () => {
//   const CANVAS_VIRTUAL_WIDTH = 780;
//   const CANVAS_VIRTUAL_HEIGHT = 820;
//   // now you may want to make it visible even on small screens
//   // we can just scale it
//   const scale = Math.min(
//     window.innerWidth / CANVAS_VIRTUAL_WIDTH,
//     window.innerHeight / CANVAS_VIRTUAL_HEIGHT,
//   );
//   setContainerScale(scale);
// };

// const toggle = () => {
//   if (window.innerWidth < 780) {
//     fitStageIntoParentContainer();
//   }
// };

// useEffect(() => {
//   window.addEventListener('resize', () => {
//     toggle();
//   });
// });
