Ext.define('testcase.view.main.List', {
    extend: 'Ext.form.Panel',
    xtype: 'mainlist',
    // controller: 'form-grid',

    requires: [
        'Ext.grid.*',
        'Ext.form.*',
        'Ext.layout.container.Column',
        // 'KitchenSink.model.Company'
    ],

    // title: 'Company data',
    // width: 880,
    // frame: true,
    bodyPadding: 5,
    layout: 'column',
    signTpl: '<span style="' +
        'color:{value:sign(\'"#cf4c35"\',\'"#73b51e"\')}"' +
        '>{text}</span>',

    viewModel: {
        data: {
            theCompany: null
        }
    },

    fieldDefaults: {
        labelAlign: 'left',
        labelWidth: 90,
        anchor: '100%',
        msgTarget: 'side'
    },

    items: [{
            xtype: 'container',
            columnWidth: 1,
            items: [{
                xtype: 'button',
                iconCls: 'fa-plus',
                text: 'Add',
                scale: 'medium'
            }, ]
        },
        {
            xtype: 'gridpanel',

            height: 400,
            columnWidth: 0.65,

            bind: {
                selection: '{theCompany}'
            },
            store: {
                type: 'personnel'
            },
            flex: 2,
            columns: [{
                    text: 'Id',
                    dataIndex: 'id',
                    flex: 1
                },
                {
                    text: 'Name',
                    dataIndex: 'name',
                    flex: 2
                },
                {
                    text: 'Start Date',
                    dataIndex: 'startDate',
                    flex: 1
                },
                {
                    text: 'End Date',
                    dataIndex: 'endDate',
                    flex: 1
                },
                {
                    text: 'Status',
                    dataIndex: 'status',
                    flex: 1
                }
            ],
        }, {
            xtype: 'fieldset',
            title: 'Details',

            columnWidth: 0.35,
            margin: '0 0 0 10',
            layout: 'anchor',
            defaultType: 'textfield',
            flex: 1,

            items: [{
                    xtype: 'displayfield',
                    fieldLabel: 'id',
                    bind: '{theCompany.id}'

                },
                {
                    fieldLabel: 'Name',
                    bind: '{theCompany.name}'
                },
                {
                    fieldLabel: 'Start Date',
                    bind: '{theCompany.startDate}',
                }, {
                    fieldLabel: 'End Date',
                    bind: '{theCompany.endDate}'
                }
            ]
        }
    ]
});