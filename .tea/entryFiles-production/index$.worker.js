
require('./config$');
require('./importScripts$');
function success() {
require('../..//app');
require('../../node_modules/mini-antui/es/grid/index');
require('../../pages/index/index');
require('../../pages/menu/menu');
require('../../pages/user/user');
require('../../pages/history/history');
}
self.bootstrapApp ? self.bootstrapApp({ success }) : success();
