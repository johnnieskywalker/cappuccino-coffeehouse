import { LitElement, html } from '@polymer/lit-element';
import { IphoneXrxsMax112Style } from './iphoneXrxsMax112.style';

export class IphoneXrxsMax112 extends LitElement {
  static get properties(){
    return {
      
      
    };
  }

  attributeChangedCallback(name, oldval, newval) {
    super.attributeChangedCallback(name, oldval, newval);
  }

  
  

  constructor(){
    super();

    
    
    
  }

  handleKeyPress(e) {
      if (e.key === 'Enter') {
        let name;
        let id;
        let index = -1;
        const value = e.target.value;
        if (e.target.name.search("::") > -1) {
            const varCount = e.target.name.split("::").length;
            if (varCount === 2) {
                name = e.target.name.split("::")[0];
                id = e.target.name.split("::")[1];
            } else if (varCount === 3) {
                name = e.target.name.split("::")[0];
                index = e.target.name.split("::")[1];
                id = e.target.name.split("::")[2];
            }
        } else {
            name = e.target.name;
        }
        this.dispatchEvent(new CustomEvent(`${name}:enter`, {
            bubbles: true,
            detail: {
                type: "textinput",
                name: name,
                value: value,
                index: index,
                id: id
          }
        }));
      }
      let name;
      let id;
      let index = -1;
      const value = e.key;
      if (e.target.name.search("::") > -1) {
          const varCount = e.target.name.split("::").length;
          if (varCount === 2) {
              name = e.target.name.split("::")[0];
              id = e.target.name.split("::")[1];
          } else if (varCount === 3) {
              name = e.target.name.split("::")[0];
              index = e.target.name.split("::")[1];
              id = e.target.name.split("::")[2];
          }
      } else {
          name = e.target.name;
      }
      this.dispatchEvent(new CustomEvent(`${name}:keypress`, {
          bubbles: true,
          detail: {
              type: "textinput",
              name: name,
              value: value,
              index: index,
              id: id
          }
      }));
  }

  handleChange(e) {
    let name;
    let id;
    let index = -1;
    const value = e.target.value;
    if (e.target.name.search("::") > -1) {
        const varCount = e.target.name.split("::").length;
        if (varCount === 2) {
            name = e.target.name.split("::")[0];
            id = e.target.name.split("::")[1];
        } else if (varCount === 3) {
            name = e.target.name.split("::")[0];
            index = e.target.name.split("::")[1];
            id = e.target.name.split("::")[2];
        }
    } else {
        name = e.target.name;
    }
    this.dispatchEvent(new CustomEvent(`${name}:change`, {
        bubbles: true,
        detail: {
            type: "textinput",
            name: name,
            value: value,
            index: index,
            id: id
        }
    }));
  }

  handleClick(target, owner, e) {
    let name;
    let id;
    let index = -1;
    if (target.search("::") > -1) {
        const varCount = target.split("::").length;
        if (varCount === 2) {
            name = target.split("::")[0];
            id = target.split("::")[1];
        } else if (varCount === 3) {
            name = target.split("::")[0];
            index = parseInt(target.split("::")[1]);
            id = target.split("::")[2];
            this[`${owner}SelectedIndex`] = index;
            this.requestUpdate();
        }
    } else {
        name = target;
    }
    this.dispatchEvent(new CustomEvent(`${name}:click`, {
        bubbles: true,
        detail: {
            type: "button",
            name: name,
            index: index,
            id: id
        }
    }));
  }

  handleMouseOver(target, owner, e) {
    let name;
    let id;
    let index = -1;
    if (target.search("::") > -1) {
        const varCount = target.split("::").length;
        if (varCount === 2) {
            name = target.split("::")[0];
            id = target.split("::")[1];
        } else if (varCount === 3) {
            name = target.split("::")[0];
            index = parseInt(target.split("::")[1]);
            id = target.split("::")[2];
        }
    } else {
        name = target;
    }
    this.dispatchEvent(new CustomEvent(`${name}:mouseover`, {
        bubbles: true,
        detail: {
            type: "button",
            name: name,
            index: index,
            id: id
        }
    }));
  }

  handleMouseOut(target, owner, e) {
    let name;
    let id;
    let index = -1;
    if (target.search("::") > -1) {
        const varCount = target.split("::").length;
        if (varCount === 2) {
            name = target.split("::")[0];
            id = target.split("::")[1];
        } else if (varCount === 3) {
            name = target.split("::")[0];
            index = parseInt(target.split("::")[1]);
            id = target.split("::")[2];
        }
    } else {
        name = target;
    }
    this.dispatchEvent(new CustomEvent(`${name}:mouseout`, {
        bubbles: true,
        detail: {
            type: "button",
            name: name,
            index: index,
            id: id
        }
    }));
  }

  handleChangeCheckbox(e) {
      let name;
      let id;
      let index = -1;
      const value = e.target.checked;
      if (e.target.name.search("::") > -1) {
          const varCount = e.target.name.split("::").length;
          if (varCount === 2) {
              name = e.target.name.split("::")[0];
              id = e.target.name.split("::")[1];
          } else if (varCount === 3) {
              name = e.target.name.split("::")[0];
              index = e.target.name.split("::")[1];
              id = e.target.name.split("::")[2];
          }
      } else {
          name = e.target.name;
      }
      this.dispatchEvent(new CustomEvent(`${name}:change`, {
          bubbles: true,
          detail: {
              type: "checkbox",
              name: name,
              value: value,
              index: index,
              id: id
          }
      }));
  }

  handleChangeRadio(e) {
      let name;
      let id;
      let index = -1;
      const value = e.target.checked;
      if (e.target.name.search("::") > -1) {
          const varCount = e.target.name.split("::").length;
          if (varCount === 2) {
              name = e.target.name.split("::")[0];
              id = e.target.name.split("::")[1];
          } else if (varCount === 3) {
              name = e.target.name.split("::")[0];
              index = e.target.name.split("::")[1];
              id = e.target.name.split("::")[2];
          }
      } else {
          name = e.target.name;
      }
      this.dispatchEvent(new CustomEvent(`${name}:change`, {
          bubbles: true,
          detail: {
              type: "radio",
              name: name,
              value: value,
              index: index,
              id: id
          }
      }));
  }

  handleChangeRadioGroup(e) {
      let name;
      let id;
      let index = -1;
      const value = e.target.value;
      if (e.target.name.search("::") > -1) {
          const varCount = e.target.name.split("::").length;
          if (varCount === 2) {
              name = e.target.name.split("::")[0];
              id = e.target.name.split("::")[1];
          } else if (varCount === 3) {
              name = e.target.name.split("::")[0];
              index = e.target.name.split("::")[1];
              id = e.target.name.split("::")[2];
          }
      } else {
          name = e.target.name;
      }
      // this.state[groupName] = value;
      this.dispatchEvent(new CustomEvent(`${name}:change`, {
          bubbles: true,
          detail: {
              type: "radiogroup",
              name: name,
              value: value,
              index: index,
              id: id
          }
      }));
  }

  handleChangeSelect(e) {
      let name;
      let id;
      const value = e.target.value;
      if (value !== "selectdefault") {
          if (e.target.id.search("::") > -1) {
              id = e.target.id.split("::")[1];
          }
          name = e.target.name;
          // this.state[groupName] = value;
          this.dispatchEvent(new CustomEvent(`${name}:change`, {
              bubbles: true,
              detail: {
                  type: "select",
                  name: name,
                  value: value,
                  id: id
              }
          }));
      }
  }

  render(){
    
    return html`
    <style>
      ${IphoneXrxsMax112Style}
    </style>
    <div data-layer="68ce6e5b-f0fb-4309-9d7d-9b0988f58054" class="iphoneXrxsMax112">        <div data-layer="29a897fc-c369-40b8-94d1-a6f7a83da884" class="group2">            <svg data-layer="b4b5b721-727d-4178-a370-24e8bb5e09d4" preserveAspectRatio="none" viewBox="910.0234375 1112.404296875 489.92578125 323.03515625" class="path17ed2c1e5"><path d="M 1399.19921875 1138.88671875 C 1399.19921875 1180.990234375 1391.935546875 1221.029296875 1378.841796875 1257.296875 C 1378.0546875 1256.841796875 1377.25390625 1256.416015625 1376.453125 1255.990234375 C 1366.689453125 1250.787109375 1355.859375 1246.732421875 1344.271484375 1244.078125 C 1341.8828125 1243.525390625 1339.4453125 1243.021484375 1336.978515625 1242.599609375 C 1331.6484375 1241.669921875 1326.177734375 1241.861328125 1320.91015625 1243.099609375 L 1320.78515625 1243.1328125 C 1315.61328125 1244.341796875 1310.943359375 1246.431640625 1306.841796875 1249.044921875 C 1306.1640625 1249.484375 1305.34765625 1249.986328125 1304.876953125 1250.396484375 C 1294.40625 1258.099609375 1288.794921875 1269.982421875 1291.513671875 1281.521484375 C 1292.392578125 1285.248046875 1294.060546875 1288.61328125 1296.337890625 1291.53515625 C 1297.896484375 1288.73828125 1299.939453125 1286.34765625 1302.470703125 1284.4453125 C 1312.814453125 1276.6484375 1328.9296875 1279.0546875 1345.072265625 1289.083984375 C 1346.28515625 1289.837890625 1347.494140625 1290.625 1348.703125 1291.47265625 C 1349.962890625 1292.337890625 1351.220703125 1293.248046875 1352.462890625 1294.224609375 C 1354.537109375 1295.794921875 1356.58203125 1297.509765625 1358.609375 1299.3515625 C 1358.65625 1299.380859375 1358.6875 1299.412109375 1358.734375 1299.4453125 C 1359.048828125 1299.728515625 1359.36328125 1300.025390625 1359.677734375 1300.30859375 C 1316.08203125 1381.208984375 1240.6875 1434.689453125 1154.978515625 1434.689453125 C 1020.111328125 1434.689453125 910.7734375 1302.2578125 910.7734375 1138.88671875 C 910.7734375 1130.2265625 911.072265625 1121.625 911.685546875 1113.154296875 C 922.46875 1178.9765625 1027.279296875 1230.634765625 1154.978515625 1230.634765625 C 1282.6953125 1230.634765625 1387.50390625 1178.9765625 1398.287109375 1113.154296875 C 1398.900390625 1121.625 1399.19921875 1130.2265625 1399.19921875 1138.88671875 Z"  /></svg>
            <svg data-layer="d8c7ca10-2ad2-4895-88b3-9fe72314097e" preserveAspectRatio="none" viewBox="1151.224609375 1199.701171875 16.41796875 49.05078125" class="path294502e0b"><path d="M 1153.533203125 1231.576171875 C 1154.412109375 1235.306640625 1156.078125 1238.66796875 1158.357421875 1241.59375 C 1157.54296875 1243.0390625 1157.662109375 1245.046875 1157.73046875 1248.001953125 C 1154.978515625 1243.00390625 1151.974609375 1235.3515625 1151.974609375 1229.015625 C 1151.974609375 1216.662109375 1158.009765625 1205.921875 1166.892578125 1200.451171875 C 1156.42578125 1208.15625 1150.8125 1220.0390625 1153.533203125 1231.576171875 Z"  /></svg>
            <svg data-layer="d0825534-129a-4bb2-a9d8-3b82168594f7" preserveAspectRatio="none" viewBox="1151.7799072265625 1194.3717041015625 142.0062255859375 171.6146240234375" class="path366ec4abc"><path d="M 1292.83984375 1297.591796875 C 1292.828125 1297.71484375 1292.828125 1297.84375 1292.8125 1297.966796875 C 1290.75 1327.037109375 1270.015625 1351.43359375 1239.783203125 1365.236328125 C 1241.701171875 1362.66015625 1243.37109375 1359.65625 1244.767578125 1356.30859375 C 1246.263671875 1352.78515625 1247.44140625 1348.873046875 1248.322265625 1344.66015625 C 1249.580078125 1338.60546875 1250.17578125 1331.908203125 1250.03515625 1324.833984375 C 1249.92578125 1316.9921875 1248.90625 1308.673828125 1246.90625 1300.185546875 C 1245.03515625 1292.259765625 1242.47265625 1284.857421875 1239.41015625 1278.14453125 L 1239.392578125 1278.14453125 C 1239.109375 1277.501953125 1238.759765625 1276.80859375 1238.3984375 1276.0859375 C 1234.064453125 1267.611328125 1228.341796875 1259.892578125 1221.376953125 1253.416015625 C 1221.064453125 1253.134765625 1220.748046875 1252.833984375 1220.431640625 1252.55078125 C 1220.3828125 1252.517578125 1220.353515625 1252.48828125 1220.306640625 1252.45703125 C 1218.28125 1250.6171875 1216.234375 1248.90234375 1214.16015625 1247.33203125 C 1212.91796875 1246.357421875 1211.66015625 1245.447265625 1210.40234375 1244.580078125 C 1209.193359375 1243.73046875 1207.984375 1242.947265625 1206.76953125 1242.189453125 C 1190.62890625 1232.16015625 1174.51171875 1229.75390625 1164.16796875 1237.552734375 C 1161.638671875 1239.45703125 1159.59765625 1241.84765625 1158.03515625 1244.64453125 C 1155.7578125 1241.71875 1154.09375 1238.357421875 1153.212890625 1234.630859375 C 1150.490234375 1223.08984375 1156.103515625 1211.205078125 1166.57421875 1203.501953125 C 1167.044921875 1203.095703125 1167.86328125 1202.58984375 1168.5390625 1202.150390625 C 1172.640625 1199.541015625 1177.3125 1197.451171875 1182.482421875 1196.23828125 L 1182.609375 1196.208984375 C 1187.876953125 1194.966796875 1193.34375 1194.775390625 1198.677734375 1195.705078125 C 1201.14453125 1196.12890625 1203.580078125 1196.630859375 1205.970703125 1197.181640625 C 1217.55859375 1199.837890625 1228.38671875 1203.896484375 1238.150390625 1209.099609375 C 1238.955078125 1209.521484375 1239.75390625 1209.947265625 1240.541015625 1210.40234375 C 1244.689453125 1212.669921875 1248.796875 1215.12109375 1252.75390625 1217.69921875 C 1279.48046875 1235.146484375 1294.98046875 1265.724609375 1292.83984375 1297.591796875 Z"  /></svg>
            <svg data-layer="18351b24-2a9d-4c21-a5b5-9fe26729d474" preserveAspectRatio="none" viewBox="1154.4423828125 1218.4207763671875 51.5673828125 33.0557861328125" class="path456fa7562"><path d="M 1205.25390625 1228.431640625 L 1205.259765625 1228.451171875 C 1203.857421875 1233.33984375 1201.45703125 1237.71875 1198.353515625 1241.26171875 C 1196.810546875 1243.037109375 1195.08203125 1244.59375 1193.2109375 1245.9140625 C 1188.90625 1248.96484375 1183.828125 1250.7265625 1178.40234375 1250.7265625 C 1176.388671875 1250.7265625 1174.423828125 1250.48828125 1172.5234375 1250.017578125 C 1169.16015625 1249.201171875 1166.015625 1247.70703125 1163.21484375 1245.6328125 C 1160.9375 1243.982421875 1158.87890625 1242.232421875 1157.30859375 1239.779296875 C 1154.294921875 1235.076171875 1154.951171875 1233.67578125 1156.49609375 1230.927734375 L 1156.517578125 1230.884765625 C 1158.076171875 1228.083984375 1160.123046875 1225.697265625 1162.650390625 1223.794921875 C 1172.99609375 1215.998046875 1189.107421875 1218.404296875 1205.25390625 1228.431640625 Z"  /></svg>
            <svg data-layer="c029b23f-b5f4-4b34-a255-876e8f19498b" preserveAspectRatio="none" viewBox="1127.85546875 1276.880859375 136.6417236328125 54.0703125" class="path53be50821"><path d="M 1263.7265625 1277.630859375 C 1263.869140625 1284.705078125 1263.271484375 1291.40234375 1262.01171875 1297.455078125 C 1261.1328125 1301.66796875 1259.951171875 1305.583984375 1258.462890625 1309.1015625 C 1257.060546875 1312.451171875 1255.39453125 1315.455078125 1253.4765625 1318.03125 L 1253.45703125 1318.03125 C 1244.876953125 1321.94921875 1235.5234375 1325.029296875 1225.603515625 1327.08984375 C 1212.572265625 1329.82421875 1198.580078125 1330.83203125 1184.099609375 1329.810546875 C 1172.60546875 1329.005859375 1161.5859375 1326.962890625 1151.26171875 1323.896484375 C 1143.2578125 1321.525390625 1135.6796875 1318.5234375 1128.60546875 1314.970703125 C 1146.13671875 1306.009765625 1162.53125 1294.484375 1177.484375 1280.744140625 C 1181.806640625 1282.802734375 1186.42578125 1284.61328125 1191.33203125 1286.119140625 L 1191.34765625 1286.119140625 C 1193.73828125 1286.873046875 1196.203125 1287.53515625 1198.72265625 1288.130859375 C 1202.7734375 1289.08984375 1206.783203125 1289.80078125 1210.732421875 1290.26953125 C 1233.291015625 1292.974609375 1253.396484375 1288.021484375 1263.7265625 1277.630859375 Z"  /></svg>
            <svg data-layer="c8db49f6-2fc3-4ac0-99b9-0a002f8a338c" preserveAspectRatio="none" viewBox="924.365234375 1042.97265625 444.83203125 218.220703125" class="path6669799cc"><path d="M 1368.447265625 1152.08203125 C 1368.447265625 1211.935546875 1269.201171875 1260.443359375 1146.791015625 1260.443359375 C 1024.359375 1260.443359375 925.115234375 1211.935546875 925.115234375 1152.08203125 C 925.115234375 1092.24609375 1024.359375 1043.72265625 1146.791015625 1043.72265625 C 1269.201171875 1043.72265625 1368.447265625 1092.24609375 1368.447265625 1152.08203125 Z"  /></svg>
            <svg data-layer="baef6a8b-847c-41f9-a8b7-abcca2ab5bf6" preserveAspectRatio="none" viewBox="1042.70166015625 1020.896484375 72.765625 144.5625" class="path75eaef931"><path d="M 1112.775390625 1126.740234375 C 1110.34765625 1135.625 1105.642578125 1144.0234375 1098.66015625 1151.0078125 C 1092.048828125 1157.6171875 1084.173828125 1162.181640625 1075.814453125 1164.708984375 C 1079.64453125 1148.603515625 1076.099609375 1131.099609375 1065.1796875 1117.580078125 C 1063.96484375 1116.0703125 1062.65234375 1114.609375 1061.251953125 1113.205078125 C 1060.576171875 1112.53125 1059.88671875 1111.875 1059.181640625 1111.240234375 C 1055.0078125 1107.474609375 1051.494140625 1103.021484375 1049.021484375 1097.97265625 C 1043.115234375 1085.91015625 1041.90625 1072.12890625 1045.39453125 1059.365234375 C 1047.8203125 1050.478515625 1052.525390625 1042.08203125 1059.505859375 1035.099609375 C 1065.900390625 1028.705078125 1073.484375 1024.22265625 1081.54296875 1021.646484375 C 1078.03515625 1038.46875 1082.494140625 1056.623046875 1094.919921875 1070.064453125 C 1095.416015625 1070.599609375 1095.921875 1071.125 1096.44140625 1071.64453125 C 1096.921875 1072.126953125 1097.41015625 1072.59765625 1097.908203125 1073.05859375 C 1100.8828125 1075.826171875 1103.591796875 1078.87890625 1105.818359375 1082.27734375 C 1114.521484375 1095.587890625 1116.841796875 1111.853515625 1112.775390625 1126.740234375 Z"  /></svg>
            <svg data-layer="937737e6-77f8-4754-8db4-2feb371b10ba" preserveAspectRatio="none" viewBox="1051.6580810546875 914.251953125 44.605224609375 88.03125" class="path88bef40d0"><path d="M 1094.337890625 978.568359375 C 1092.8671875 983.94140625 1090.0234375 989.0234375 1085.802734375 993.244140625 C 1081.802734375 997.244140625 1077.0390625 1000.005859375 1071.982421875 1001.533203125 C 1074.302734375 991.79296875 1072.154296875 981.205078125 1065.55078125 973.02734375 C 1064.8125 972.11328125 1064.0234375 971.232421875 1063.173828125 970.380859375 C 1062.765625 969.974609375 1062.34765625 969.576171875 1061.921875 969.193359375 C 1059.39453125 966.916015625 1057.271484375 964.220703125 1055.77734375 961.16796875 C 1052.205078125 953.873046875 1051.47265625 945.537109375 1053.583984375 937.81640625 C 1055.05078125 932.439453125 1057.89453125 927.361328125 1062.119140625 923.13671875 C 1065.98828125 919.26953125 1070.572265625 916.560546875 1075.4453125 915.001953125 C 1073.32421875 925.177734375 1076.021484375 936.154296875 1083.5390625 944.287109375 C 1083.837890625 944.609375 1084.14453125 944.927734375 1084.458984375 945.244140625 C 1084.751953125 945.53515625 1085.048828125 945.8203125 1085.345703125 946.09765625 C 1087.1484375 947.7734375 1088.78515625 949.6171875 1090.1328125 951.673828125 C 1095.39453125 959.7265625 1096.798828125 969.560546875 1094.337890625 978.568359375 Z"  /></svg>
            <svg data-layer="714bf394-a306-47ef-8cce-c514d6d55c5b" preserveAspectRatio="none" viewBox="1007.5849609375 969.296875 56.707763671875 112.330078125" class="path9c19299e6"><path d="M 1062.037109375 999.4609375 C 1060.15625 992.578125 1056.515625 986.072265625 1051.103515625 980.662109375 C 1045.984375 975.541015625 1039.8828125 972.00390625 1033.40625 970.046875 C 1036.373046875 982.5234375 1033.626953125 996.083984375 1025.169921875 1006.55859375 C 1024.2265625 1007.728515625 1023.2109375 1008.859375 1022.123046875 1009.9453125 C 1021.599609375 1010.470703125 1021.064453125 1010.978515625 1020.521484375 1011.46875 C 1017.287109375 1014.38671875 1014.564453125 1017.8359375 1012.650390625 1021.748046875 C 1008.07421875 1031.091796875 1007.13671875 1041.767578125 1009.841796875 1051.654296875 C 1011.720703125 1058.541015625 1015.365234375 1065.044921875 1020.775390625 1070.455078125 C 1025.7265625 1075.408203125 1031.599609375 1078.880859375 1037.84375 1080.876953125 C 1035.126953125 1067.84375 1038.580078125 1053.783203125 1048.20703125 1043.369140625 C 1048.58984375 1042.955078125 1048.982421875 1042.546875 1049.38671875 1042.14453125 C 1049.76171875 1041.771484375 1050.138671875 1041.40625 1050.521484375 1041.048828125 C 1052.830078125 1038.904296875 1054.92578125 1036.541015625 1056.650390625 1033.904296875 C 1063.390625 1023.59375 1065.189453125 1010.994140625 1062.037109375 999.4609375 Z"  /></svg>
</div>
        <div data-layer="5c610974-314c-4dce-8429-ef3791896916" class="depositSol">Deposit SOL</div>
        <div data-layer="b42f321e-6631-4dc9-bd34-d903bfee4a87" class="collateralRatio">Collateral Ratio</div>
        <div data-layer="e0611f8a-c986-4704-90ee-77cad345b19b" class="outputCappuccinoTokens">Output Cappuccino tokens:</div>
        <div data-layer="c48a6f28-0fcb-45c9-9fcd-eed08eb58d19" class="borrowCappuccino">Borrow Cappuccino</div>
        <div data-layer="06afbd18-13e2-4279-948d-e27931104771" class="createCappuccinoVault">Create Cappuccino Vault </div>
        <div data-layer="58336d2e-5f8e-464e-b4c4-0e684632d927" class="group1">            <svg data-layer="14753a93-48f2-4c3b-a1c8-1827b5bb9d53" preserveAspectRatio="none" viewBox="-0.75 -0.75 47.85028076171875 47.850250244140625" class="ellipse1"><path d="M 23.17512893676758 0 C 35.97439956665039 0 46.35025787353516 10.37585926055908 46.35025787353516 23.17512893676758 C 46.35025787353516 35.97439956665039 35.97439956665039 46.35025787353516 23.17512893676758 46.35025787353516 C 10.37585926055908 46.35025787353516 0 35.97439956665039 0 23.17512893676758 C 0 10.37585926055908 10.37585926055908 0 23.17512893676758 0 Z"  /></svg>
            <svg data-layer="240fc9e5-90f9-4c19-836a-358ce3c85cf1" preserveAspectRatio="none" viewBox="-3.75 -3.75 53.85028076171875 53.850250244140625" class="ellipse2"><path d="M 23.17512893676758 0 C 35.97439956665039 0 46.35025787353516 10.37585926055908 46.35025787353516 23.17512893676758 C 46.35025787353516 35.97439956665039 35.97439956665039 46.35025787353516 23.17512893676758 46.35025787353516 C 10.37585926055908 46.35025787353516 0 35.97439956665039 0 23.17512893676758 C 0 10.37585926055908 10.37585926055908 0 23.17512893676758 0 Z"  /></svg>
            <svg data-layer="7d261f70-b92e-4160-9eb7-30ce4f98d269" preserveAspectRatio="none" viewBox="910.02392578125 1112.4029541015625 21.12884521484375 14.421875" class="path1"><path d="M 930.4027709960938 1114.187133789063 C 930.4027709960938 1115.879150390625 930.1109008789063 1117.48828125 929.5846557617188 1118.94580078125 C 929.5530395507813 1118.927490234375 929.5208740234375 1118.910400390625 929.4886474609375 1118.893310546875 C 929.0962524414063 1118.684204101563 928.6610107421875 1118.521240234375 928.1953735351563 1118.41455078125 C 928.099365234375 1118.392333984375 928.0014038085938 1118.3720703125 927.9022216796875 1118.355102539063 C 927.6880493164063 1118.317749023438 927.4682006835938 1118.325439453125 927.2564697265625 1118.375244140625 L 927.25146484375 1118.376586914063 C 927.0436401367188 1118.425170898438 926.85595703125 1118.509155273438 926.6911010742188 1118.614135742188 C 926.6638793945313 1118.6318359375 926.631103515625 1118.651977539063 926.6121215820313 1118.66845703125 C 926.1913452148438 1118.97802734375 925.9658203125 1119.45556640625 926.0751342773438 1119.919311523438 C 926.1104736328125 1120.069091796875 926.1774291992188 1120.204345703125 926.2689819335938 1120.32177734375 C 926.3316650390625 1120.209350585938 926.4137573242188 1120.11328125 926.5154418945313 1120.036865234375 C 926.93115234375 1119.723510742188 927.5787963867188 1119.820190429688 928.2275390625 1120.223266601563 C 928.2762451171875 1120.253540039063 928.3248901367188 1120.28515625 928.3734130859375 1120.319213867188 C 928.424072265625 1120.35400390625 928.474609375 1120.390625 928.5245361328125 1120.429809570313 C 928.60791015625 1120.492919921875 928.6900634765625 1120.561889648438 928.7715454101563 1120.635864257813 C 928.7734375 1120.637084960938 928.7747192382813 1120.638305664063 928.7765502929688 1120.6396484375 C 928.7891845703125 1120.651000976563 928.8018798828125 1120.662963867188 928.8145141601563 1120.67431640625 C 927.0625 1123.925537109375 924.0325317382813 1126.074829101563 920.5880737304688 1126.074829101563 C 915.16796875 1126.074829101563 910.77392578125 1120.752685546875 910.77392578125 1114.187133789063 C 910.77392578125 1113.839111328125 910.7859497070313 1113.493408203125 910.8106079101563 1113.152954101563 C 911.2439575195313 1115.798217773438 915.4560546875 1117.874267578125 920.5880737304688 1117.874267578125 C 925.720703125 1117.874267578125 929.9328002929688 1115.798217773438 930.3661499023438 1113.152954101563 C 930.3908081054688 1113.493408203125 930.4027709960938 1113.839111328125 930.4027709960938 1114.187133789063 Z"  /></svg>
            <svg data-layer="e3577d1a-29d8-48d2-9446-7bd540321dc4" preserveAspectRatio="none" viewBox="1151.2259521484375 1199.7010498046875 2.0994873046875 3.4110107421875" class="path2"><path d="M 1152.03857421875 1201.701904296875 C 1152.073852539063 1201.851806640625 1152.140869140625 1201.986938476563 1152.232421875 1202.1044921875 C 1152.19970703125 1202.16259765625 1152.204467773438 1202.243286132813 1152.207275390625 1202.362060546875 C 1152.0966796875 1202.1611328125 1151.975952148438 1201.853637695313 1151.975952148438 1201.598999023438 C 1151.975952148438 1201.1025390625 1152.218505859375 1200.6708984375 1152.575439453125 1200.451049804688 C 1152.15478515625 1200.7607421875 1151.92919921875 1201.23828125 1152.03857421875 1201.701904296875 Z"  /></svg>
            <svg data-layer="bc559519-f031-4f19-84ba-747412a91812" preserveAspectRatio="none" viewBox="1151.7803955078125 1194.372314453125 7.146728515625 8.3365478515625" class="path3"><path d="M 1158.169189453125 1199.240356445313 C 1158.168701171875 1199.245361328125 1158.168701171875 1199.25048828125 1158.168090820313 1199.255493164063 C 1158.085205078125 1200.423706054688 1157.251953125 1201.404174804688 1156.036987304688 1201.958862304688 C 1156.114013671875 1201.855346679688 1156.18115234375 1201.734619140625 1156.2373046875 1201.60009765625 C 1156.29736328125 1201.45849609375 1156.3447265625 1201.30126953125 1156.380126953125 1201.131958007813 C 1156.4306640625 1200.888671875 1156.45458984375 1200.619506835938 1156.448974609375 1200.335205078125 C 1156.444580078125 1200.02001953125 1156.403564453125 1199.685791015625 1156.3232421875 1199.344604492188 C 1156.248046875 1199.026123046875 1156.14501953125 1198.728637695313 1156.02197265625 1198.458862304688 L 1156.021240234375 1198.458862304688 C 1156.009887695313 1198.432983398438 1155.995849609375 1198.405151367188 1155.981323242188 1198.376098632813 C 1155.80712890625 1198.035522460938 1155.5771484375 1197.725341796875 1155.297241210938 1197.465087890625 C 1155.28466796875 1197.453735351563 1155.27197265625 1197.441650390625 1155.25927734375 1197.430297851563 C 1155.25732421875 1197.428955078125 1155.256103515625 1197.427734375 1155.254272460938 1197.426513671875 C 1155.1728515625 1197.3525390625 1155.090576171875 1197.28369140625 1155.007202148438 1197.220581054688 C 1154.957275390625 1197.181396484375 1154.90673828125 1197.144775390625 1154.856201171875 1197.109985351563 C 1154.8076171875 1197.075805664063 1154.759033203125 1197.044311523438 1154.710205078125 1197.013916015625 C 1154.0615234375 1196.61083984375 1153.413818359375 1196.51416015625 1152.998168945313 1196.827514648438 C 1152.896484375 1196.904052734375 1152.814453125 1197.000122070313 1152.751708984375 1197.112548828125 C 1152.66015625 1196.994995117188 1152.59326171875 1196.85986328125 1152.557861328125 1196.710083007813 C 1152.448486328125 1196.246337890625 1152.674072265625 1195.768676757813 1153.094848632813 1195.459106445313 C 1153.11376953125 1195.442749023438 1153.146606445313 1195.422485351563 1153.173828125 1195.40478515625 C 1153.338623046875 1195.299926757813 1153.5263671875 1195.215942382813 1153.734130859375 1195.167236328125 L 1153.7392578125 1195.166015625 C 1153.950927734375 1195.116088867188 1154.170654296875 1195.1083984375 1154.385009765625 1195.145751953125 C 1154.484130859375 1195.162841796875 1154.58203125 1195.182983398438 1154.678100585938 1195.205078125 C 1155.143798828125 1195.311889648438 1155.578979492188 1195.474975585938 1155.971313476563 1195.68408203125 C 1156.003662109375 1195.701049804688 1156.035766601563 1195.718139648438 1156.0673828125 1195.736450195313 C 1156.234130859375 1195.827514648438 1156.399169921875 1195.926025390625 1156.558227539063 1196.029663085938 C 1157.63232421875 1196.730834960938 1158.255249023438 1197.959716796875 1158.169189453125 1199.240356445313 Z"  /></svg>
            <svg data-layer="b8a58253-bf22-40d6-80ff-ead323c1dc61" preserveAspectRatio="none" viewBox="1154.441650390625 1218.4190673828125 3.51220703125 2.7681884765625" class="path4"><path d="M 1157.20361328125 1219.541259765625 L 1157.203857421875 1219.542114257813 C 1157.1474609375 1219.738525390625 1157.051025390625 1219.91455078125 1156.92626953125 1220.056884765625 C 1156.8642578125 1220.128295898438 1156.794799804688 1220.190795898438 1156.719604492188 1220.243896484375 C 1156.546630859375 1220.366455078125 1156.342529296875 1220.437255859375 1156.12451171875 1220.437255859375 C 1156.043579101563 1220.437255859375 1155.964599609375 1220.427734375 1155.88818359375 1220.408813476563 C 1155.753051757813 1220.3759765625 1155.626708984375 1220.31591796875 1155.51416015625 1220.232543945313 C 1155.422607421875 1220.166259765625 1155.33984375 1220.095947265625 1155.276733398438 1219.997314453125 C 1155.155639648438 1219.808349609375 1155.182006835938 1219.752075195313 1155.244140625 1219.6416015625 L 1155.244995117188 1219.639892578125 C 1155.3076171875 1219.52734375 1155.389892578125 1219.431396484375 1155.491455078125 1219.35498046875 C 1155.9072265625 1219.041625976563 1156.5546875 1219.138305664063 1157.20361328125 1219.541259765625 Z"  /></svg>
            <svg data-layer="49bf20d2-1244-4777-8a14-f6a11995bc48" preserveAspectRatio="none" viewBox="1127.85595703125 1276.8809814453125 6.93115234375 3.6126708984375" class="path5"><path d="M 1134.036254882813 1277.630981445313 C 1134.0419921875 1277.915283203125 1134.017944335938 1278.184448242188 1133.96728515625 1278.427734375 C 1133.932006835938 1278.597045898438 1133.884521484375 1278.75439453125 1133.82470703125 1278.895751953125 C 1133.768310546875 1279.030395507813 1133.701416015625 1279.151123046875 1133.624267578125 1279.254638671875 L 1133.62353515625 1279.254638671875 C 1133.278686523438 1279.412109375 1132.90283203125 1279.535888671875 1132.504150390625 1279.61865234375 C 1131.98046875 1279.728515625 1131.418090820313 1279.76904296875 1130.836181640625 1279.72802734375 C 1130.374267578125 1279.695678710938 1129.931396484375 1279.613525390625 1129.516479492188 1279.490356445313 C 1129.19482421875 1279.39501953125 1128.890258789063 1279.2744140625 1128.60595703125 1279.131591796875 C 1129.310546875 1278.771484375 1129.969360351563 1278.308349609375 1130.5703125 1277.756103515625 C 1130.744018554688 1277.8388671875 1130.9296875 1277.91162109375 1131.126831054688 1277.97216796875 L 1131.12744140625 1277.97216796875 C 1131.223510742188 1278.00244140625 1131.322631835938 1278.029052734375 1131.423828125 1278.052978515625 C 1131.586669921875 1278.091552734375 1131.747802734375 1278.1201171875 1131.906494140625 1278.138916015625 C 1132.813110351563 1278.247680664063 1133.62109375 1278.048583984375 1134.036254882813 1277.630981445313 Z"  /></svg>
            <svg data-layer="15eab72a-9307-4d44-84ab-747baa562c63" preserveAspectRatio="none" viewBox="924.364990234375 1042.9730224609375 19.316650390625 10.2095947265625" class="path6"><path d="M 942.931640625 1048.077758789063 C 942.931640625 1050.483154296875 938.943115234375 1052.4326171875 934.023681640625 1052.4326171875 C 929.1033935546875 1052.4326171875 925.114990234375 1050.483154296875 925.114990234375 1048.077758789063 C 925.114990234375 1045.673095703125 929.1033935546875 1043.723022460938 934.023681640625 1043.723022460938 C 938.943115234375 1043.723022460938 942.931640625 1045.673095703125 942.931640625 1048.077758789063 Z"  /></svg>
            <svg data-layer="69734e61-09c6-46c6-9274-22f6f076d126" preserveAspectRatio="none" viewBox="1042.70263671875 1020.8980712890625 4.3638916015625 7.2493896484375" class="path7"><path d="M 1046.238525390625 1025.87158203125 C 1046.140991210938 1026.228637695313 1045.951904296875 1026.566162109375 1045.671264648438 1026.846801757813 C 1045.405639648438 1027.112426757813 1045.089111328125 1027.2958984375 1044.753173828125 1027.3974609375 C 1044.907104492188 1026.750244140625 1044.7646484375 1026.046752929688 1044.325805664063 1025.50341796875 C 1044.276977539063 1025.442749023438 1044.224243164063 1025.384033203125 1044.16796875 1025.32763671875 C 1044.140747070313 1025.300537109375 1044.113037109375 1025.274169921875 1044.084716796875 1025.248657226563 C 1043.9169921875 1025.097290039063 1043.775756835938 1024.918334960938 1043.676391601563 1024.715454101563 C 1043.439086914063 1024.230712890625 1043.390502929688 1023.676879882813 1043.530639648438 1023.163940429688 C 1043.628173828125 1022.806762695313 1043.817260742188 1022.469360351563 1044.097778320313 1022.188720703125 C 1044.354736328125 1021.931762695313 1044.659545898438 1021.751586914063 1044.9833984375 1021.648071289063 C 1044.842407226563 1022.324096679688 1045.021606445313 1023.0537109375 1045.52099609375 1023.593872070313 C 1045.540893554688 1023.615356445313 1045.561279296875 1023.636474609375 1045.582153320313 1023.657348632813 C 1045.601440429688 1023.6767578125 1045.62109375 1023.695678710938 1045.64111328125 1023.714233398438 C 1045.760620117188 1023.825439453125 1045.869506835938 1023.948120117188 1045.958984375 1024.084716796875 C 1046.308715820313 1024.61962890625 1046.401977539063 1025.273315429688 1046.238525390625 1025.87158203125 Z"  /></svg>
            <svg data-layer="48e91312-53f0-4364-bb4c-3ce82d10f9f5" preserveAspectRatio="none" viewBox="1051.658203125 914.2520751953125 3.2322998046875 4.9775390625" class="path8"><path d="M 1054.09326171875 917.556640625 C 1054.0341796875 917.7725830078125 1053.919921875 917.976806640625 1053.750244140625 918.146484375 C 1053.589477539063 918.3072509765625 1053.398071289063 918.418212890625 1053.19482421875 918.4796142578125 C 1053.2880859375 918.088134765625 1053.201782226563 917.66259765625 1052.936401367188 917.333984375 C 1052.90673828125 917.2972412109375 1052.875 917.2618408203125 1052.8408203125 917.2276611328125 C 1052.824462890625 917.2113037109375 1052.8076171875 917.1953125 1052.79052734375 917.179931640625 C 1052.68896484375 917.08837890625 1052.603637695313 916.9801025390625 1052.543579101563 916.857421875 C 1052.400024414063 916.564208984375 1052.37060546875 916.229248046875 1052.455444335938 915.9189453125 C 1052.514404296875 915.702880859375 1052.628662109375 915.498779296875 1052.798461914063 915.3289794921875 C 1052.953979492188 915.173583984375 1053.13818359375 915.064697265625 1053.333984375 915.0020751953125 C 1053.248779296875 915.4110107421875 1053.357177734375 915.8521728515625 1053.659301757813 916.178955078125 C 1053.671264648438 916.19189453125 1053.68359375 916.2047119140625 1053.6962890625 916.2174072265625 C 1053.7080078125 916.2291259765625 1053.719970703125 916.2406005859375 1053.73193359375 916.251708984375 C 1053.804321289063 916.319091796875 1053.8701171875 916.3931884765625 1053.92431640625 916.475830078125 C 1054.1357421875 916.7994384765625 1054.192138671875 917.1947021484375 1054.09326171875 917.556640625 Z"  /></svg>
            <svg data-layer="65853d48-7167-4d4d-9331-c83b0784cbe8" preserveAspectRatio="none" viewBox="1007.5841674804688 969.2970581054688 3.71868896484375 5.95404052734375" class="path9"><path d="M 1010.492370605469 971.2291870117188 C 1010.416809082031 970.9525146484375 1010.270446777344 970.6911010742188 1010.052978515625 970.4736938476563 C 1009.847229003906 970.2678833007813 1009.60205078125 970.125732421875 1009.341735839844 970.0470581054688 C 1009.460998535156 970.5484619140625 1009.350646972656 971.0934448242188 1009.0107421875 971.514404296875 C 1008.972839355469 971.5614013671875 1008.932006835938 971.6068725585938 1008.888305664063 971.6505126953125 C 1008.867248535156 971.671630859375 1008.845764160156 971.6920166015625 1008.823913574219 971.7117309570313 C 1008.693969726563 971.8289794921875 1008.584533691406 971.9675903320313 1008.507568359375 972.1248168945313 C 1008.32373046875 972.5003051757813 1008.286010742188 972.9293823242188 1008.394714355469 973.3267211914063 C 1008.470275878906 973.6034545898438 1008.61669921875 973.8648071289063 1008.834106445313 974.082275390625 C 1009.033142089844 974.2813110351563 1009.269165039063 974.4208984375 1009.520080566406 974.5010986328125 C 1009.410888671875 973.9773559570313 1009.549682617188 973.4122314453125 1009.936584472656 972.9937744140625 C 1009.951965332031 972.9771118164063 1009.967712402344 972.960693359375 1009.983947753906 972.9445190429688 C 1009.9990234375 972.9295043945313 1010.01416015625 972.9148559570313 1010.029602050781 972.9005126953125 C 1010.122314453125 972.8143310546875 1010.206604003906 972.7193603515625 1010.27587890625 972.6134033203125 C 1010.546752929688 972.1990356445313 1010.619079589844 971.6926879882813 1010.492370605469 971.2291870117188 Z"  /></svg>
</div>
        <div data-layer="a01747b3-5191-4ab5-a868-68f2777d33fd" class="rectangle1"></div>
        <div data-layer="2fa0be6b-63c0-4c34-8351-ffac01a29461" class="rectangle7"></div>
        <div data-layer="ba7c17f8-cf7f-4289-b0be-e6f2c565af3e" class="rectangle5"></div>
        <div data-layer="a3d11ea0-0fef-484d-bfbc-17f4fbba5f23" class="rectangle6"></div>
        <div data-layer="25795c74-0abd-41e0-ae70-243832290734" class="component11">            <div data-layer="f7e0b74f-598f-4e0c-9278-52c982a64897" class="rectangle2"></div>
            <div data-layer="177f6c38-c20d-4dfb-ad93-a6c8c55922f6" class="group3">                <div data-layer="691f0704-5863-49b0-9664-e0648070afe5" class="rectangle3"></div>
                <div data-layer="79d2bdd8-0715-4c70-96b5-135e0fa986cc" class="rectangle4"></div>
</div>
</div>
        <div data-layer="c9515804-6286-43cc-8a1c-3e0382b58d1e" class="x45">45</div>
        <div data-layer="a03a896c-591c-447b-8972-cb99b5938ebe" class="x150">150%</div>
        <div data-layer="b64299af-f5a7-46b1-85d4-68bd0bf5b7dd" class="x38">38</div>
</div>

    `;
  }
}
customElements.define('iphoneXrxsMax112-element', IphoneXrxsMax112);
