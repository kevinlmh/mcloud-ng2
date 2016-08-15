"use strict";
var router_1 = require('@angular/router');
var files_component_1 = require('./files.component');
var login_component_1 = require('./login.component');
var appRoutes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'files', component: files_component_1.FilesComponent },
    { path: 'login', component: login_component_1.LoginComponent }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map