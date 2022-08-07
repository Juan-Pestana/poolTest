"use strict";

const data = require("../../src/lib/data");
console.log(data);

const codes = data.codes;

const seedCodes = (codes) => {
  codes.forEach((element) => {
    strapi.query("code").create({
      number: element.code,
    });
  });
};

module.exports = seedCodes(codes);
