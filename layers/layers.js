var format_selvaverdewgs0 = new ol.format.GeoJSON();
var features_selvaverdewgs0 = format_selvaverdewgs0.readFeatures(json_selvaverdewgs0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_selvaverdewgs0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_selvaverdewgs0.addFeatures(features_selvaverdewgs0);var lyr_selvaverdewgs0 = new ol.layer.Vector({
                source:jsonSource_selvaverdewgs0, 
                style: style_selvaverdewgs0,
                title: "selva verdewgs"
            });var format_ptos_potenciales1 = new ol.format.GeoJSON();
var features_ptos_potenciales1 = format_ptos_potenciales1.readFeatures(json_ptos_potenciales1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ptos_potenciales1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_ptos_potenciales1.addFeatures(features_ptos_potenciales1);var lyr_ptos_potenciales1 = new ol.layer.Vector({
                source:jsonSource_ptos_potenciales1, 
                style: style_ptos_potenciales1,
                title: "ptos_potenciales"
            });var format_ptospotselvawaypoints2 = new ol.format.GeoJSON();
var features_ptospotselvawaypoints2 = format_ptospotselvawaypoints2.readFeatures(json_ptospotselvawaypoints2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ptospotselvawaypoints2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_ptospotselvawaypoints2.addFeatures(features_ptospotselvawaypoints2);var lyr_ptospotselvawaypoints2 = new ol.layer.Vector({
                source:jsonSource_ptospotselvawaypoints2, 
                style: style_ptospotselvawaypoints2,
                title: "ptospotselva waypoints"
            });

lyr_selvaverdewgs0.setVisible(true);lyr_ptos_potenciales1.setVisible(true);lyr_ptospotselvawaypoints2.setVisible(true);
var layersList = [lyr_selvaverdewgs0,lyr_ptos_potenciales1,lyr_ptospotselvawaypoints2];
lyr_selvaverdewgs0.set('fieldAliases', {'gid': 'gid', 'convenio': 'convenio', 'finca': 'finca', 'lccs': 'lccs', 'uso_obs': 'uso_obs', 'condicion': 'condicion', 'uso': 'uso', 'uso_gral': 'uso_gral', 'tipo': 'tipo', 'ano_psa': 'ano_psa', 'historial': 'historial', 'especies': 'especies', 'carbono': 'carbono', 'siembra': 'siembra', 'contrato_1': 'contrato_1', 'contrato_2': 'contrato_2', 'contrato_3': 'contrato_3', 'ultimo_con': 'ultimo_con', 'estado': 'estado', 'ano_psar': 'ano_psar', 'folio': 'folio', 'jefe': 'jefe', 'a_o_manejo': 'a_o_manejo', 'manejo': 'manejo', 'activo': 'activo', 'notas': 'notas', 'nume_ident': 'nume_ident', 'mapa': 'mapa', 'psa_1': 'psa_1', 'psa_2': 'psa_2', 'psa_3': 'psa_3', 'ult_psa': 'ult_psa', 'saf': 'saf', 'sello_verd': 'sello_verd', 'km2': 'km2', 'hect': 'hect', });
lyr_ptos_potenciales1.set('fieldAliases', {'id': 'id', });
lyr_ptospotselvawaypoints2.set('fieldAliases', {'ele': 'ele', 'time': 'time', 'magvar': 'magvar', 'geoidheight': 'geoidheight', 'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'sym': 'sym', 'type': 'type', 'fix': 'fix', 'sat': 'sat', 'hdop': 'hdop', 'vdop': 'vdop', 'pdop': 'pdop', 'ageofdgpsdata': 'ageofdgpsdata', 'dgpsid': 'dgpsid', 'ogr_id': 'ogr_id', });
lyr_selvaverdewgs0.set('fieldImages', {'gid': 'TextEdit', 'convenio': 'TextEdit', 'finca': 'TextEdit', 'lccs': 'TextEdit', 'uso_obs': 'TextEdit', 'condicion': 'TextEdit', 'uso': 'TextEdit', 'uso_gral': 'TextEdit', 'tipo': 'TextEdit', 'ano_psa': 'TextEdit', 'historial': 'TextEdit', 'especies': 'TextEdit', 'carbono': 'TextEdit', 'siembra': 'TextEdit', 'contrato_1': 'TextEdit', 'contrato_2': 'TextEdit', 'contrato_3': 'TextEdit', 'ultimo_con': 'TextEdit', 'estado': 'TextEdit', 'ano_psar': 'TextEdit', 'folio': 'TextEdit', 'jefe': 'TextEdit', 'a_o_manejo': 'TextEdit', 'manejo': 'TextEdit', 'activo': 'TextEdit', 'notas': 'TextEdit', 'nume_ident': 'TextEdit', 'mapa': 'TextEdit', 'psa_1': 'TextEdit', 'psa_2': 'TextEdit', 'psa_3': 'TextEdit', 'ult_psa': 'TextEdit', 'saf': 'TextEdit', 'sello_verd': 'TextEdit', 'km2': 'TextEdit', 'hect': 'TextEdit', });
lyr_ptos_potenciales1.set('fieldImages', {'id': 'TextEdit', });
lyr_ptospotselvawaypoints2.set('fieldImages', {'ele': 'TextEdit', 'time': 'TextEdit', 'magvar': 'TextEdit', 'geoidheight': 'TextEdit', 'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'sym': 'TextEdit', 'type': 'TextEdit', 'fix': 'TextEdit', 'sat': 'TextEdit', 'hdop': 'TextEdit', 'vdop': 'TextEdit', 'pdop': 'TextEdit', 'ageofdgpsdata': 'TextEdit', 'dgpsid': 'TextEdit', 'ogr_id': 'TextEdit', });
lyr_selvaverdewgs0.set('fieldLabels', {'gid': 'no label', 'convenio': 'no label', 'finca': 'no label', 'lccs': 'no label', 'uso_obs': 'no label', 'condicion': 'no label', 'uso': 'no label', 'uso_gral': 'no label', 'tipo': 'no label', 'ano_psa': 'no label', 'historial': 'no label', 'especies': 'no label', 'carbono': 'no label', 'siembra': 'no label', 'contrato_1': 'no label', 'contrato_2': 'no label', 'contrato_3': 'no label', 'ultimo_con': 'no label', 'estado': 'no label', 'ano_psar': 'no label', 'folio': 'no label', 'jefe': 'no label', 'a_o_manejo': 'no label', 'manejo': 'no label', 'activo': 'no label', 'notas': 'no label', 'nume_ident': 'no label', 'mapa': 'no label', 'psa_1': 'no label', 'psa_2': 'no label', 'psa_3': 'no label', 'ult_psa': 'no label', 'saf': 'no label', 'sello_verd': 'no label', 'km2': 'no label', 'hect': 'no label', });
lyr_ptos_potenciales1.set('fieldLabels', {'id': 'no label', });
lyr_ptospotselvawaypoints2.set('fieldLabels', {'ele': 'no label', 'time': 'no label', 'magvar': 'no label', 'geoidheight': 'no label', 'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'sym': 'no label', 'type': 'no label', 'fix': 'no label', 'sat': 'no label', 'hdop': 'no label', 'vdop': 'no label', 'pdop': 'no label', 'ageofdgpsdata': 'no label', 'dgpsid': 'no label', 'ogr_id': 'no label', });
lyr_ptospotselvawaypoints2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});