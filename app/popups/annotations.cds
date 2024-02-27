using MyService as service from '../../srv/service';

annotate service.stud with @(
    UI.LineItem : [
        {
            $Type : 'UI.DataField',
            Label : 'id',
            Value : id,
        },
        {
            $Type : 'UI.DataField',
            Label : 'sname',
            Value : sname,
        },
        {
            $Type : 'UI.DataField',
            Label : 'snum',
            Value : snum,
        },
    ]
);
annotate service.stud with @(
    UI.FieldGroup #GeneratedGroup1 : {
        $Type : 'UI.FieldGroupType',
        Data : [
            {
                $Type : 'UI.DataField',
                Label : 'id',
                Value : id,
            },
            {
                $Type : 'UI.DataField',
                Label : 'sname',
                Value : sname,
            },
            {
                $Type : 'UI.DataField',
                Label : 'snum',
                Value : snum,
            },
        ],
    },
    UI.Facets : [
        {
            $Type : 'UI.ReferenceFacet',
            ID : 'GeneratedFacet1',
            Label : 'General Information',
            Target : '@UI.FieldGroup#GeneratedGroup1',
        },
    ]
);
