'use strict';
module.exports = (sequelize, DataTypes) => {
  const Photo = sequelize.define('Photo', {
    photoURL: DataTypes.STRING,
    authorId: DataTypes.INTEGER
  }, {});
  Photo.associate = function(models) {
    Photo.belongsTo(models.User, {foreignKey: 'authorId'});
    Photo.belongsToMany(models.Tag, {foreignKey: 'tagId', through: 'photo_tags', otherKey: 'photoId'});
  };
  return Photo;
};