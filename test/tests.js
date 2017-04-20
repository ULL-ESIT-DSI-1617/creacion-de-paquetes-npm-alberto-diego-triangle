var triangle = require("../index.js");
require('should');

describe("Triangle", function() {
  it("Se crea correctamente la clase Triangle", function() {
    var figura = new triangle({ width: 100, height: 100 });

    figura.options.width.should.equal(100);
  })
});
