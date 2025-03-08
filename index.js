let cats = ["Milo", "Otis", "Garfield"];

const beforeEach = () => {
  cats.length = 0;
  cats.push("Milo", "Otis", "Garfield");
};

beforeEach();

const destructivelyAppendCat = (name) => {
  cats.push(name);
};

const destructivelyPrependCat = (name) => {
  cats.unshift(name);
};
const destructivelyRemoveLastCat = (name) => {
  cats.pop(name);
};
const destructivelyRemoveFirstCat = (name) => {
  cats.shift(name);
};
const appendCat = (name) => {
  return [...cats, name];
};
const prependCat = (name) => {
  return [name, ...cats];
};
const removeLastCat = (name) => {
  return cats.slice(0, -1);
};
const removeFirstCat = (name) => {
  return cats.slice(1);
};
