const output = document.querySelector("#output");
const title = document.querySelector("#title");

new Vue({
  el: "#vue-app",
  data: {
    r: 0,
    g: 0,
    b: 0,
    rgb: `rgb(0,0,0)`,
    startingColor: {
      r: 100,
      g: 0,
      b: 100,
      rgb: "rgb(100, 0, 100)",
    },
  },

  methods: {
    change: function (color, reference) {
      if (this.$refs[reference].value <= 255) {
        this[color] = this.$refs[reference].value;
      } else {
        this[color] = "255";
        this.$refs[reference].value = "255";
      }

      this.rgb = `rgb(${this.r}, ${this.g}, ${this.b})`;
    },

    changeColor: function () {
      this.startingColor.r += 10;
      this.startingColor.g += 10;
      this.startingColor.b += 10;

      if (this.startingColor.r < 255) {
        this.startingColor.rgb = `rgb(${this.startingColor.r}, ${this.startingColor.g}, ${this.startingColor.b})`;
      } else {
        this.startingColor.r = Math.floor(Math.random() * 120);
        this.startingColor.g = Math.floor(Math.random() * 120);
        this.startingColor.b = Math.floor(Math.random() * 120);

        this.startingColor.rgb = `rgb(${this.startingColor.r}, ${this.startingColor.g}, ${this.startingColor.b})`;
      }
    },
  },

  created: function () {
    setInterval(this.changeColor, 120);
  },
});
