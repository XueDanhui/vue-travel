let defaultCity = '上海';
try {
  defaultCity = localStorage.city;
} catch (e) {
  console.log(e);
}

export default {
  city: defaultCity,
};
