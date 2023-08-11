import robot3 from "../components/pictures/pexels-lj-2085831.jpg";
import robot2 from "../components/pictures/pexels-alex-knight-2599244 (1).jpg";
import robot1 from "../components/pictures/robot1.jpg";
export const generate = require("boring-name-generator");
const generateRandomSentence = require("generate-random-sentence");

let minWords = 5,
  maxWords = 10;
const generateName = () => {
  return generate().spaced;
};
const generateDescription = () => {
  return generateRandomSentence(minWords, maxWords);
};

const generatePrice = () => {
  return Math.floor(Math.random() * 1001);
};

const generateNewPrice = (price) => {
  return Math.floor(Math.random() * price);
};

export const generateNewItems = (array) => {
  const newArray = [...array];
  const photos = [robot1, robot3, robot2];
  for (let i = 0; i < 3; i++) {
    const price = generatePrice();
    const newPrice = generateNewPrice(price);
    const age = i + 5;
    const newObject = {
      color: i,
      id: array.length + i + 1,
      name: generateName(),
      photo: photos[i],
      description: generateDescription(),
      price: price,
      newPrice: newPrice,
    };
    newArray.push(newObject);
  }
  return newArray;
};
