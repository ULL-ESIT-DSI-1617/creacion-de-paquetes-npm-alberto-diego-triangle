"use strict";
var shape = require('ull-shape-alberto-diego');

/**
 * Clase Triangle que hereda de la clase Shape.
 */
class Triangle extends shape {
  /**
   * Constructor de la clase Triangle, en la que se guarda el objeto de dimensiones
   * @param {Object} input objeto de dimensiones
   */
  constructor(options){
    super(options);
    this.width = this.options.width;
    this.height = this.options.height;
  }
  /**
   * Funcion getArea, calcula el área de la figura
   * @returns {number} devuelve el cálculo del área de la figura
   */
  getArea() {
    return 0.5 * this.width * this.height;
  }
}

module.exports = Triangle;
shape.shapes.Triangle = Triangle;
