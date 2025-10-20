const coolGreeting = (person) => {
  if (person.isCool) {
    return `What is UP ${person.name.toUpperCase()}? How you been doin'?`
  } 
  return `Greetings ${person.name}, how have you been lately?`;
};

const haveBirthday = (person) => {
  person.age += 1;
  return;
};

const becomeSecretAgent = (person, spyHandle) => {
  person.spyHandle = spyHandle;
  delete person.name;
};

const carMaker = (name, maker, year) => {
  const car = {
    name: name,
    maker: maker,
    year: year,
    needsOilChange: false
  }
  return car;
};

const weAreNotFriends = (person) => {
  let lastName = person.friends.pop();
  return lastName;
};

const listHobbies = (person) => {
  for (let i = 0; i < person.hobbies.length; i++) {
    console.log(`${person.name} likes ${person.hobbies[i]}.`);
  }
};

const getNextOpponent = (team) => {
  if (team.matches.length > 0){
    return team.matches[0].teamName;
  }
  return null;
};

const listAllKeys = (obj) => {
  return Object.keys(obj);
};

const listAllValues = (obj) => {
  return Object.values(obj);
};

const convertToMatrix = (arr) => {
  if (arr.length > 0) {
    let newArr = [Object.keys(arr[0])];
    for (let i = 0; i < arr.length; i++) {
      newArr.push(Object.values(arr[i]));
    }
    return newArr;
  }
  return arr;
};

module.exports = {
  coolGreeting,
  haveBirthday,
  becomeSecretAgent,
  carMaker,
  weAreNotFriends,
  listHobbies,
  getNextOpponent,
  listAllKeys,
  listAllValues,
  convertToMatrix,
};
