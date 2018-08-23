Ext.define('testcase.view.main.ListController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.list',

    onAdd: function () {
        // var record = Ext.create('Record', {
        //     name: 'Conan',
        //     startDate: undefined,
        //     endDate: undefined
        // });
        console.log(this)
        var recordsStore = Ext.getStore('Records');
        recordsStore.add(new Record());
        console.log(recordsStore.count());
    }
});