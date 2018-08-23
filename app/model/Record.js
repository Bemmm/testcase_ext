Ext.define('Record', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'id',  type: 'int'},
        {name: 'name',   type: 'string', },
        {name: 'startDate', type: 'date'},
        {name: 'endDate', type: 'date'},
        {name: 'status', type: 'string', defaultValue: 'STOPPED', }
    ],

    validations: [
        {type: 'length',    field: 'name', min: 1, max:250}
    ],
    changeName: function() {
        var oldName = this.get('name'),
            newName = oldName + " The Barbarian";
        this.set('name', newName);
    }
});