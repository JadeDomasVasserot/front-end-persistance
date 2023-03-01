<template>
  <v-table>
    <thead>
    <tr>
      <th class="text-left">
        Numéro
      </th>
      <th class="text-left">
        Nom
      </th>
      <th class="text-left">
        Description
      </th>
      <th class="text-left">
        Prix
      </th>
    </tr>
    </thead>
    <tbody>
    <tr
        v-for="item in desserts"
        :key="item.name"
    >
      <td>{{ item.name }}</td>
      <td>{{ item.calories }}</td>
    </tr>
    </tbody>
  </v-table>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {}
  },
  methods: {},
}
</script>

<style>

</style>
