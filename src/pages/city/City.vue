<template>
  <div class="city-wrap">
    <city-header></city-header>
    <city-search></city-search>
    <city-list></city-list>
    <letter></letter>
  </div>
</template>

<script>
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
};
</script>

<style lang="stylus">

</style>

