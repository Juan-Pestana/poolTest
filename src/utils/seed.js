async function seedCodesCollection(codes) {
  console.log(codes[0]);
  // 2
  for (let i = 0; i < codes.length; i++) {
    // 3
    await strapi.api.code.services.code.create({
      data: {
        number: codes[i].code,
      },
    });
  }

  console.log(`Added ${codes.length} records`);
}

async function seedFlatCollection(flats) {
  // 2
  for (let i = 0; i < flats.length; i++) {
    // 3
    await strapi.api.flat.services.flat.create({
      data: {
        flatCode: flats[i].piso,
      },
    });
  }

  console.log(`Added ${flats.length} records`);
}

module.exports = { seedCodesCollection, seedFlatCollection };
