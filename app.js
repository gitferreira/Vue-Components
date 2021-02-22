const app = Vue.createApp({
  data() {
    return {
      friends: [
        {
          id: "manuel",
          name: "Manuel Ruiz",
          phone: "664069412",
          email: "manuel@manuel.com",
        },
        {
          id: "leire",
          name: "Leire Uno",
          phone: "9446090892",
          email: "leire@yahoo.com",
        },
      ],
    };
  },
});

//Always use dashes to name components, so not to clash with official name tags.
app.component("friend-contact", {
    template: `
    <li>
    <h2>{{ friend.name }}</h2>
    <button @click = "toggleDetails"> {{ visible === true ? 'Hide' : 'Show' }} Details</button>
    <ul v-if = "visible === true">
      <li><strong>Phone:</strong> {{friend.phone}} </li>
      <li><strong>Email:</strong> {{friend.email}} </li>
    </ul>
  </li>
    </ul>
  </li>
    `,
  data() {
    return {
      visible: false,
      friend: {
        id: "leire",
        name: "Leire Uno",
        phone: "9446090892",
        email: "leire@yahoo.com",
      }
    };
  },
  methods: {
    toggleDetails() {
      this.visible = !this.visible;
    },
  },
});

app.mount("#app");
