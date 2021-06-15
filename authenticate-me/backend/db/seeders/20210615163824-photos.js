'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert('Photos', [
      {
        photoURL: 'https://mcflicc-photos.s3.amazonaws.com/mcpiccs/taupo_newzealand/airplane_active1.jfif',
        authorId: 1
      },
      {
        photoURL: 'https://mcflicc-photos.s3.amazonaws.com/mcpiccs/st.+petersburg%2C+russia/active.JPEG',
        authorId: 1
      },
      {
        photoURL: 'https://mcflicc-photos.s3.amazonaws.com/mcpiccs/solarpowered_tag/active2.JPEG',
        authorId: 1
      },
      {
        photoURL: 'https://mcflicc-photos.s3.amazonaws.com/mcpiccs/solarpowered_tag/active1.JPEG',
        authorId: 1
      },
      {
        photoURL: 'https://mcflicc-photos.s3.amazonaws.com/mcpiccs/oct+harbour_shenzhen_china/deceased1.JPEG',
        authorId: 1
      },
      {
        photoURL: 'https://mcflicc-photos.s3.amazonaws.com/mcpiccs/nonactive.JPEG',
        authorId: 1
      },
      {
        photoURL: 'https://mcflicc-photos.s3.amazonaws.com/mcpiccs/monterey_ca/active.JPEG',
        authorId: 1
      },
      {
        photoURL: 'https://mcflicc-photos.s3.amazonaws.com/mcpiccs/mcthriller/mcthriller2.JPEG',
        authorId: 1
      },
      {
        photoURL: 'https://mcflicc-photos.s3.amazonaws.com/mcpiccs/lisbonzoo_lisbon_portugal/active.PNG',
        authorId: 1
      },
      {
        photoURL: 'https://mcflicc-photos.s3.amazonaws.com/mcpiccs/lisbonzoo_lisbon_portugal/active3.PNG',
        authorId: 1
      },
      {
        photoURL: 'https://mcflicc-photos.s3.amazonaws.com/mcpiccs/best_netherlands/partially_active1.png',
        authorId: 1
      },
      {
        photoURL: 'https://mcflicc-photos.s3.amazonaws.com/mcpiccs/best_netherlands/partially_active2.JPEG',
        authorId: 1
      },
      {
        photoURL: 'https://mcflicc-photos.s3.amazonaws.com/mcpiccs/best_netherlands/partially_active3.JPEG',
        authorId: 1
      },
      {
        photoURL: 'https://mcflicc-photos.s3.amazonaws.com/antigua.jfif',
        authorId: 1
      },
      {
        photoURL: 'https://mcflicc-photos.s3.amazonaws.com/harber-sydney.jfif',
        authorId: 1
      },
      {
        photoURL: 'https://mcflicc-photos.s3.amazonaws.com/lapres.jfif',
        authorId: 1
      },
      {
        photoURL: 'https://mcflicc-photos.s3.amazonaws.com/mcdiner.png',
        authorId: 1,
      },
      {
        photoURL: 'https://mcflicc-photos.s3.amazonaws.com/nonactive.JPEG',
        authorId: 1
      },
      {
        photoURL: 'https://mcflicc-photos.s3.amazonaws.com/singlearc.jfif',
        authorId: 1
      },
      {
        photoURL: 'https://mcflicc-photos.s3.amazonaws.com/sydney_australia2.jfif',
        authorId: 1
      },
      {
        photoURL: 'https://mcflicc-photos.s3.amazonaws.com/sydney_australia3.jfif',
        authorId: 1
      },
    ]);
    },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};

