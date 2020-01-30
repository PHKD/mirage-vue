<template>
  <v-container>
    <div class="d-flex align-center">
				<v-layout wrap row>
					<v-flex xs6>
						<v-layout row wrap>
							<v-flex xs6>
								<v-text-field
									v-model="profile.firstName"
									label="First name"
									single-line
									solo
								></v-text-field>
							</v-flex>
							<v-flex xs6 pl-1>
								<v-text-field
									v-model="profile.lastName"
									label="Last name"
									single-line
									solo
								></v-text-field>
							</v-flex>
						</v-layout>
						<v-btn @click="createProfile">save</v-btn>
					</v-flex>
					<v-flex xs6 pl-5>
							<v-data-table
								:headers="headers"
								:items="items"
								class="elevation-1"
							>
								<template v-slot:items="props">
									<td>{{ props.item.firstName}}</td>
									<td class="text-xs-right">{{ props.item.lastName }}</td>
								</template>
							</v-data-table>
					</v-flex>
				</v-layout>
				</div>
  </v-container>
</template>

<script>
import axios from "axios"
import voca from "voca"

export default {
  name: 'HelloWorld',
   filters:{
		doSomething(val){
			return voca.camelCase(val)
		}
	},
	data () {
      return {
		myStr:'fuck you',
		profile:{
			firstName:'',
			lastName:''
		},
        headers: [
          {
            text: 'FirstName',
            value: 'firstName'
          },
          { text: 'LastName', value: 'lastName' }
        ],
        items: []
			}
		},
		created() {
			axios.get('/api/profiles').then( res => {
				this.items = res.data
			})
		},
		methods: {
			createProfile(){
				let newProfile = {...this.profile}
				this.items.push(newProfile)
				this.profile.fName = ''
				this.profile.lName = ''
				axios.post('/api/profiles', {data: newProfile}).then( () =>{
					// let newProfiles = res.data
				})
			}
		}
};
</script>
