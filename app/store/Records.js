Ext.define('testcase.store.Records', {
    extend: 'Ext.data.Store',
    model: 'Record',
    alias: 'store.records',

    fields: [
        'id', 'name', 'startDate', 'endDate', 'status'
    ],

    data: { items: [
        { id: '12fdglkqn12l1k2h4n1', name: 'Jean Luc', startDate: "28.06.95", endDate: "29.05.97", status: 'RUNNING' },
        { id: '12fdglkqn12l1k2h4n2', name: 'T-Rex Mike', startDate: "28.06.95", endDate: "29.05.97", status: 'STOPPED' },
        { id: '12fdglkqn12l1k2h4n5', name: 'John Smith', startDate: "28.06.95", endDate: "29.05.97", status: 'RUNNING' },
    ]},

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});
