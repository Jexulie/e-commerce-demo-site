import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    movieList: [
    {
      id: 1,
      title: "The Lord of the Rings: The Fellowship of the Ring",
      length: "3h 48m",
      genre: ["Fantasy", "Action"],
      releaseDate: "2001",
      rating: 8.8,
      price: 15.25,
      image: "https://www.femalefirst.co.uk/image-library/land/1000/t/the-lord-of-the-rings-fellowship-of-the-ring-quad-1.jpg",
      info: "The future of civilization rests in the fate of the One Ring, which has been lost for centuries. Powerful forces are unrelenting in their search for it. But fate has placed it in the hands of a young Hobbit named Frodo Baggins (Elijah Wood), who inherits the Ring and steps into legend. A daunting task lies ahead for Frodo when he becomes the Ringbearer - to destroy the One Ring in the fires of Mount Doom where it was forged."
    },
    {
      id: 2,
      title: "John Wick",
      length: "1h 41m",
      genre: ["Mystery", "Crime"],
      releaseDate: "2014",
      rating: 7.4,
      price: 21.25,
      image: "https://picfiles.alphacoders.com/172/172338.jpg",
      info: "Legendary assassin John Wick (Keanu Reeves) retired from his violent career after marrying the love of his life. Her sudden death leaves John in deep mourning. When sadistic mobster Iosef Tarasov (Alfie Allen) and his thugs steal John's prized car and kill the puppy that was a last gift from his wife, John unleashes the remorseless killing machine within and seeks vengeance. Meanwhile, Iosef's father (Michael Nyqvist) -- John's former colleague -- puts a huge bounty on John's head."
    },
    {
      id: 3,
      title: "Hellboy",
      length: "2h 1m",
      genre: ["Supernatural", "Fantasy"],
      releaseDate: "2019",
      rating: 5.3,
      price: 19,
      image: "https://img.reelgood.com/content/movie/757babeb-b70b-4994-8fe8-4519b0b0b3e6/poster-780.jpg",
      info: "Based on the graphic novels by Mike Mignola, Hellboy, caught between the worlds of the supernatural and human, battles an ancient sorceress bent on revenge."
    },
    {
      id: 4,
      title: "Captain Marvel",
      length: "2h 5m",
      genre: ["Fantasy", "Sci-fi"],
      releaseDate: "2019",
      rating: 7,
      price: 26.25,
      image: "https://d1w8cc2yygc27j.cloudfront.net/3171599313570644643/-1017825477228987617.jpg",
      info: "Captain Marvel is an extraterrestrial Kree warrior who finds herself caught in the middle of an intergalactic battle between her people and the Skrulls. Living on Earth in 1995, she keeps having recurring memories of another life as U.S. Air Force pilot Carol Danvers. With help from Nick Fury, Captain Marvel tries to uncover the secrets of her past while harnessing her special superpowers to end the war with the evil Skrulls."
    },
    {
      id: 5,
      title: "Dark Phoenix",
      length: "1h 54m",
      genre: ["Sci-fi", "Action"],
      releaseDate: "2019",
      rating: 6,
      price: 22.75,
      image: "https://wegotthiscovered.com/wp-content/uploads/2018/07/0bb56264682171.5ada0a7579e50.jpg",
      info: "This is the story of one of the X-Men’s most beloved characters, Jean Grey, as she evolves into the iconic DARK PHOENIX. During a life-threatening rescue mission in space, Jean is hit by a cosmic force that transforms her into one of the most powerful mutants of all. Wrestling with this increasingly unstable power as well as her own personal demons, Jean spirals out of control, tearing the X-Men family apart and threatening to destroy the very fabric of our planet. The film is the most intense and emotional X-Men movie ever made. It is the culmination of 20 years of X-Men movies, as the family of mutants that we’ve come to know and love must face their most devastating enemy yet -- one of their own."
    },
    {
      id: 6,
      title: "Shazam!",
      length: "2h 12m",
      genre: ["Fantasy", "Sci-fi"],
      releaseDate: "2019",
      rating: 7.2,
      price: 20.50,
      image: "https://m.media-amazon.com/images/M/MV5BYTE0Yjc1NzUtMjFjMC00Y2I3LTg3NGYtNGRlMGJhYThjMTJmXkEyXkFqcGdeQXVyNTI4MzE4MDU@._V1_.jpg",
      info: "We all have a superhero inside of us -- it just takes a bit of magic to bring it out. In 14-year-old Billy Batson's case, all he needs to do is shout out one word to transform into the adult superhero Shazam. Still a kid at heart, Shazam revels in the new version of himself by doing what any other teen would do -- have fun while testing out his newfound powers. But he'll need to master them quickly before the evil Dr. Thaddeus Sivana can get his hands on Shazam's magical abilities."
    },
  ],
  cart: [

  ]
  },
  mutations: {

  },
  actions: {

  }
})
