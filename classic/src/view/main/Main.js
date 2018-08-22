/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('testcase.view.main.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'basic-tabs',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',

        'testcase.view.main.MainController',
        'testcase.view.main.MainModel',
        'testcase.view.main.List',



    ],

    controller: 'main',
    viewModel: 'main',

    responsiveConfig: {
        tall: {
            headerPosition: 'top'
        },
        wide: {
            headerPosition: 'left'
        }
    },

    defaults: {
        bodyPadding: 20,

    },

    items: [{
        title: 'Dummy Tasks',
        items: [{
            flex:1,
            xtype: 'mainlist'
        }]
    }]
});
