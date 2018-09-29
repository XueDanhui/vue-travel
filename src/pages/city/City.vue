<template>
  <div class="city-wrap">
    <city-header></city-header>
    <city-search :cities="cities"></city-search>
    <city-list :hotCities="hotCities" :cities="cities" :targetLetter="targetLetter" @changeLetter="changeLetter"></city-list>
    <letter :letter="letter" :toLetter="toLetter" @change="handleChange"></letter>
  </div>
</template>

<script>
import axios from 'axios';
import CityHeader from './components/CityHeader';
import CitySearch from './components/CitySearch';
import CityList from './components/CityList';
import Letter from './components/Letter';

export default {
  name: 'City',
  components: {
    CityHeader,
    CitySearch,
    CityList,
    Letter,
  },
  data() {
    return {
      hotCities: [],
      letter: [],
      cities: {},
      targetLetter: '',
      toLetter: '',
    };
  },
  mounted() {
    this.getCityInfoFn();
  },
  methods: {
    getCityInfoFn() {
      axios.get('/api/city.json')
        .then(this.getCityInfoSucc);
    },
    getCityInfoSucc(res) {
      const $res = res.data;
      if ($res.ret && $res.data) {
        const data = $res.data;
        this.hotCities = data.hotCities;
        this.cities = data.cities;
        this.letter = Object.keys(data.cities);
      }
    },
    handleChange(letter) {
      this.targetLetter = letter;
    },
    changeLetter(letter) {
      this.toLetter = letter;
    },
  },
};
</script>

<style lang="stylus">

</style>

