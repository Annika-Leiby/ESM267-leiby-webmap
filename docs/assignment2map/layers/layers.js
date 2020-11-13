var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Maryland_1 = new ol.format.GeoJSON();
var features_Maryland_1 = format_Maryland_1.readFeatures(json_Maryland_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Maryland_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Maryland_1.addFeatures(features_Maryland_1);
var lyr_Maryland_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Maryland_1, 
                style: style_Maryland_1,
                interactive: true,
                title: '<img src="styles/legend/Maryland_1.png" /> Maryland'
            });
var format_PatuxentRiverWatershed_2 = new ol.format.GeoJSON();
var features_PatuxentRiverWatershed_2 = format_PatuxentRiverWatershed_2.readFeatures(json_PatuxentRiverWatershed_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PatuxentRiverWatershed_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PatuxentRiverWatershed_2.addFeatures(features_PatuxentRiverWatershed_2);
var lyr_PatuxentRiverWatershed_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PatuxentRiverWatershed_2, 
                style: style_PatuxentRiverWatershed_2,
                interactive: true,
                title: '<img src="styles/legend/PatuxentRiverWatershed_2.png" /> Patuxent River Watershed'
            });
var format_AssignedCRS_3 = new ol.format.GeoJSON();
var features_AssignedCRS_3 = format_AssignedCRS_3.readFeatures(json_AssignedCRS_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AssignedCRS_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AssignedCRS_3.addFeatures(features_AssignedCRS_3);
var lyr_AssignedCRS_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AssignedCRS_3, 
                style: style_AssignedCRS_3,
                interactive: true,
    title: 'Assigned CRS<br />\
    <img src="styles/legend/AssignedCRS_3_0.png" /> clay or mud<br />\
    <img src="styles/legend/AssignedCRS_3_1.png" /> gabbro<br />\
    <img src="styles/legend/AssignedCRS_3_2.png" /> gneiss<br />\
    <img src="styles/legend/AssignedCRS_3_3.png" /> granitic gneiss<br />\
    <img src="styles/legend/AssignedCRS_3_4.png" /> gravel<br />\
    <img src="styles/legend/AssignedCRS_3_5.png" /> marble<br />\
    <img src="styles/legend/AssignedCRS_3_6.png" /> mica schist<br />\
    <img src="styles/legend/AssignedCRS_3_7.png" /> pegmatite<br />\
    <img src="styles/legend/AssignedCRS_3_8.png" /> phyllite<br />\
    <img src="styles/legend/AssignedCRS_3_9.png" /> quartz diorite<br />\
    <img src="styles/legend/AssignedCRS_3_10.png" /> quartz monzonite<br />\
    <img src="styles/legend/AssignedCRS_3_11.png" /> quartz-feldspar schist<br />\
    <img src="styles/legend/AssignedCRS_3_12.png" /> sand<br />\
    <img src="styles/legend/AssignedCRS_3_13.png" /> schist<br />\
    <img src="styles/legend/AssignedCRS_3_14.png" /> serpentinite<br />\
    <img src="styles/legend/AssignedCRS_3_15.png" /> water<br />\
    <img src="styles/legend/AssignedCRS_3_16.png" /> <br />'
        });
var group_group1 = new ol.layer.Group({
                                layers: [lyr_OpenStreetMap_0,lyr_Maryland_1,lyr_PatuxentRiverWatershed_2,lyr_AssignedCRS_3,],
                                title: "group1"});

lyr_OpenStreetMap_0.setVisible(true);lyr_Maryland_1.setVisible(true);lyr_PatuxentRiverWatershed_2.setVisible(true);lyr_AssignedCRS_3.setVisible(true);
var layersList = [group_group1];
lyr_Maryland_1.set('fieldAliases', {'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'ST_': 'ST_', 'ST_ID': 'ST_ID', 'ST': 'ST', 'EPAREG': 'EPAREG', });
lyr_PatuxentRiverWatershed_2.set('fieldAliases', {'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'CAT_': 'CAT_', 'CAT_ID': 'CAT_ID', 'HUC': 'HUC', 'ACC': 'ACC', 'NAME': 'NAME', 'CU': 'CU', 'BEXT': 'BEXT', 'CRS1': 'CRS1', });
lyr_AssignedCRS_3.set('fieldAliases', {'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'MDGEOL_DD_': 'MDGEOL_DD_', 'MDGEOL_DD1': 'MDGEOL_DD1', 'ORIG_LABEL': 'ORIG_LABEL', 'SGMC_LABEL': 'SGMC_LABEL', 'UNIT_LINK': 'UNIT_LINK', 'SOURCE': 'SOURCE', 'UNIT_AGE': 'UNIT_AGE', 'ROCKTYPE1': 'ROCKTYPE1', 'ROCKTYPE2': 'ROCKTYPE2', });
lyr_Maryland_1.set('fieldImages', {'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'ST_': 'TextEdit', 'ST_ID': 'TextEdit', 'ST': 'TextEdit', 'EPAREG': 'Range', });
lyr_PatuxentRiverWatershed_2.set('fieldImages', {'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'CAT_': 'TextEdit', 'CAT_ID': 'TextEdit', 'HUC': 'Range', 'ACC': 'TextEdit', 'NAME': 'TextEdit', 'CU': 'TextEdit', 'BEXT': 'TextEdit', 'CRS1': 'TextEdit', });
lyr_AssignedCRS_3.set('fieldImages', {'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'MDGEOL_DD_': 'Range', 'MDGEOL_DD1': 'Range', 'ORIG_LABEL': 'TextEdit', 'SGMC_LABEL': 'TextEdit', 'UNIT_LINK': 'TextEdit', 'SOURCE': 'TextEdit', 'UNIT_AGE': 'TextEdit', 'ROCKTYPE1': 'TextEdit', 'ROCKTYPE2': 'TextEdit', });
lyr_Maryland_1.set('fieldLabels', {});
lyr_PatuxentRiverWatershed_2.set('fieldLabels', {});
lyr_AssignedCRS_3.set('fieldLabels', {});
lyr_AssignedCRS_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});