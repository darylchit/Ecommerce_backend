const get = require('./get');
const create = require('./create');
const removeById = require('./removeById');
const getById = require('./getById');
const updateById = require('./updateById');
const resetPassword = require('./resetPassword');
const forgotPassword = require('./forgotPassword');
const checkVerificationCode = require('./checkVerificationCode');
const resetPasswordVerify = require('./resetPasswordVerify');
const getNotificationSetting = require('./getNotificationSetting');
const updateNotification = require('./updateNotification');
const getNearbyCustomers = require('./getNearbyCustomers');
const saveFcmToken = require('./saveFcmToken');
const reportActive = require('./reportActive');
const reportStick = require('./reportStick');
const disconnect = require('./disconnect');

module.exports.get = get;
module.exports.create = create;
module.exports.removeById = removeById;
module.exports.getById = getById;
module.exports.updateById = updateById;
module.exports.resetPassword = resetPassword;
module.exports.forgotPassword = forgotPassword;
module.exports.checkVerificationCode = checkVerificationCode;
module.exports.resetPasswordVerify = resetPasswordVerify;
module.exports.getNotificationSetting = getNotificationSetting;
module.exports.updateNotification = updateNotification;
module.exports.getNearbyCustomers = getNearbyCustomers;
module.exports.saveFcmToken = saveFcmToken;
module.exports.reportActive = reportActive;
module.exports.reportStick = reportStick;
module.exports.disconnect = disconnect;