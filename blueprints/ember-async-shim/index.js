/*jshint node:true*/
module.exports = {
  description: 'Add async helper functions to projects',
  normalizeEntityName: function () {},
  afterInstall: function () {
    return this.addBowerPackageToProject('async')
  }
};
