import { createStore } from "vuex";

export default createStore({
  state: {
    postList: [
      {
        authorName: "Basti",
        content: "ghg",
        imageUrl:
          "https://github.com/yoshiwarrior/WAD-Homework1/blob/main/assets/img/basti.gif?raw=1",
        createdAt: "2025-10-24T16:00:00Z",
        likes: 69,
      },
      {
        authorName: "Basti",
        content: "O-O",
        imageUrl:
          "https://github.com/yoshiwarrior/WAD-Homework1/blob/main/assets/img/verghg.webp?raw=1",
        createdAt: "2025-10-24T15:30:00Z",
        likes: 420,
      },
      {
        authorName: "Basti",
        content: "Nett hier",
        imageUrl:
          "https://github.com/yoshiwarrior/WAD-Homework1/blob/main/assets/img/nett-hier.webp?raw=1",
        createdAt: "2025-10-24T15:00:00Z",
        likes: 314,
      },
      {
        authorName: "Christian Lindner",
        content: "",
        imageUrl:
          "https://github.com/yoshiwarrior/WAD-Homework1/blob/main/assets/img/lindner.jpeg?raw=1",
        createdAt: "2025-10-23T14:00:00Z",
        likes: 0,
      },
      {
        authorName: "Annalena Charlotte Alma Baerbock",
        content: "",
        imageUrl:
          "https://github.com/yoshiwarrior/WAD-Homework1/blob/main/assets/img/baerbock.gif?raw=1",
        createdAt: "2025-10-23T10:00:00Z",
        likes: 49,
      },
      {
        authorName: "tiksu",
        content:
          "PSA from Tiksu:\nlol is that C++? Wait are you binding that with Python?! Imagine using those over Rust. As a proud Rustacean and Ferris the Crab adorer, I regret to inform you that your taste in languages sucks. This is sad. You can do better. You know how easy package and dependancy management is with Cargo? Not to mention you don’t even need a Makefile. It’s great. Dynamically typed languages need to die. There’s no other option. They just do. If you like dynamic typing, you need some help. Seriously. By using a dynamically typed and interpreted language (which means its @#*!&!@ slow!!!), you are committing genocide and harming the environment more than gas cars.",
        imageUrl: null,
        createdAt: "2025-09-23T00:00:00Z",
        likes: 8080,
      },
      {
        authorName: "Obama",
        content: "What is Tiksu doing?",
        imageUrl:
          "https://github.com/yoshiwarrior/WAD-Homework1/blob/main/assets/img/tiksu.jpg?raw=1",
        createdAt: "2025-01-18T00:00:00Z",
        likes: 1,
      },
      {
        authorName: "Ralf Schuhmacher",
        content: "Willst du wissen wie viel dein Auto wert ist?",
        imageUrl:
          "https://github.com/yoshiwarrior/WAD-Homework1/blob/main/assets/img/wir-kaufen-dein-auto.jpg?raw=1",
        createdAt: "2025-06-12T00:00:00Z",
        likes: 10203,
      },
      {
        authorName: "Tartu Resident",
        content: "Tartu 2022",
        imageUrl:
          "https://github.com/yoshiwarrior/WAD-Homework1/blob/main/assets/img/tartu2024.jpg?raw=1",
        createdAt: "2025-10-22T00:00:00Z",
        likes: 0,
      },
      {
        authorName: "Late Student",
        content: "Anyone knows in which room is the lab today?",
        imageUrl: null,
        createdAt: "2025-10-02T00:00:00Z",
        likes: -1000,
      },
    ],
  },
  getters: {
    getProductList: (state) => {
      return state.postList;
    },
  },
  mutations: {
    RESET_LIKES: (state) => {
      state.postList.forEach((post) => (post.likes = 0));
    },
    ADD_LIKE: (state, index) => {
      state[index].likes++;
    },
  },
  actions: {
    resetLikes() {
      commit("RESET_LIKES");
    },
    addLike(index) {
      commit("ADD_LIKE", index);
    },
  },
});
