<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
		<h1>MIRAGE-VUE</h1>
    </v-app-bar>
		<v-content>
			{{myStr|doSomething}}
			<profile/>
		</v-content>
  </v-app>
</template>

<script>
import profile from '@/components/Profile.vue'
export default {
	name: 'App',
	components:{
		profile
	}
};
</script>
