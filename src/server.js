import { Server, Model } from "miragejs"

export function makeServer({ environment = "development" } = {}) {
  let server = new Server({
    environment,

    models: {
      user: Model,
    },

    seeds(server) {
      server.db.loadData({
          profiles: [
            {
              firstName: 'Ice',
              lastName: 'Cream',
            },
            {
              firstName: 'test',
              lastName: 'Yogurt',
            }
          ]
      })
    },

    routes() {
      this.get("/api/profiles", schema => {
        return schema.db.profiles;
      })
      this.post("/api/profiles", ( schema, request) => {
          let newProfile = JSON.parse(request.requestBody).data;
          return schema.db.profiles.insert(newProfile)
      })
    },
  })

  return server
}