// COORDINATES ARE IN THE FORM (y,x) FOR SOME STRANGE REASON

var roads = {
    "type":"FeatureCollection",
    "name":"roads",
    //"color": "ff0000", doesn't work
    "features": [
        /*
        {"type":"Feature", "properties": { "name":"ROAD NAME HERE" }, "geometry": {"type":"LineString", "coordinates": [
            [Y, X], [Y,X]
        ] } },
        */
        {"type":"Feature", "properties": { "name":"FS 401 S/B" }, "geometry": {"type":"LineString", "coordinates": [
            [7.1875, -491.125], [152.5, -473.25], [163, -471.25], [167.5, -470], [171.5, -467.25], [174.5, -462.25], [178.5, -455.25], [201.5, -388.75], [205.25, -381.25], [210.5, -375.25], [219.75, -368.25], [230.25, -363.75], [238.25, -362], [254, -361.75], [260.375, -361.125], [266.875, -360.75], [273.625, -360.5], [278.25, -361.625], [284.875, -363.25], [289.75, -364.25], [294.625, -366], [299.75, -368.625], [304.75, -370.125], [310.125, -370.25], [316.125, -370.25], [321.375, -369.25], [326.625, -368.125], [331, -366.125], [334.875, -363.875], [338, -361.25], [378.875, -330.625], [381.875, -328.25], [384.5, -324.625], [386.75, -320.25], [389, -316], [391.125, -310.875], [392.625, -307], [409.75, -262.75], [411.375, -259.375], [413.75, -254], [416.375, -250.125], [418.625, -246.75], [420.875, -243.875], [423.875, -241.375], [427.25, -238.125], [431, -235.875], [434.375, -233.75], [439.5, -231.25], [593.75, -163.25], [597.25, -161.625], [600.75, -160.125], [604.25, -159.25], [608, -159.25], [614.625, -159.25], [957.5, -159.25], 
        ] } },

        {"type":"Feature", "properties": { "name":"FS 401 N/B" }, "geometry": {"type":"LineString", "coordinates": [
            [7.4375, -494.125], [132.75, -478.75], [135.75, -478.75], [139.25, -478.625], [142.1875, -478.625], [147.1875, -478.6875], [153.25, -478.375], [159.75, -478.625], [162.75, -476.875], [170.75, -474], [175.25, -470], [178.25, -467.5], [181.5, -464], [184.125, -459.25], [187.125, -450.25], [190.625, -439.75], [194.875, -425.75], [199, -415.25], [203.5, -402.625], [208.375, -389.75], [214.125, -381.375], [219.375, -377.5], [226.75, -374.25], [232.75, -372.25], [242.125, -369.875], [255, -368.5], [262.125, -367.5], [268.875, -366.375], [282.375, -366.375], [289, -368], [298.125, -371.25], [303.75, -373.25], [312.25, -374.25], [326.875, -371], [336.25, -366.625], [341.375, -363.75], [379.25, -334.625], [385, -329.25], [389.625, -323.625], [391.5, -318.875], [393, -315.25], [412.125, -265.25], [414.625, -261], [417.125, -255], [420.375, -250], [424.5, -246.125], [428.375, -242], [433.75, -239.125], [438.375, -236.5], [597.875, -164.875], [601.25, -163.75], [606.25, -162.75], [612.625, -162.875], [957.5625, -162.53125], 
        ] } },

        {"type":"Feature", "properties": { "name":"FS 98" }, "geometry": { "type":"LineString", "coordinates": [
            [670.5625, -322.9375], [677.0625, -314.5625], [682.5625, -305.5625], [687.6875, -294.875], [692.5625, -283.75], [696.6875, -271.625], [698.8125, -261.9375], [700.0625, -251.625], [698.8125, -240.8125], [695.9375, -228.5625], [690.75, -216], [684.25, -202.375], [673.375, -183.25], [661.125, -164.5], [649.25, -149.125], [638.125, -136.375], [621.375, -124.5], [601.625, -113.625], [570.375, -97.75], [553.875, -89.5], [545, -82.625], [530.75, -77.75], [505.5, -77.5], [414, -77.375], [407.25, -79.875], [388.125, -95.875], [371.25, -110.5], [350.75, -127.375], [324.5, -143.125], [295.625, -160.625], [270.625, -176.25], [246.625, -191.875], [238.75, -199.625], [217.5, -221.125], [197.375, -241.25], [177.375, -261.875], [158, -286.5], [127.375, -331.25], [119.5, -344.875], [103.875, -374], [90.25, -401.625], [78.375, -433.375], [73, -462.8125], [73.25, -478.75], [74.625, -493.25], [78.875, -506.625], [96.5, -552.25], [117, -598.625], [126.25, -613.875], [140.5, -627.75], [161, -638.625], [188, -642.875], [204.75, -642.625], [239.375, -642.125], [269.125, -642.25], [296.75, -640.125], [314.875, -632.625], [325.125, -626], [338.5, -612.125], [346.25, -599], [356.125, -578.5], [364.375, -558.5], [367.875, -536.625], [369, -519.5], [371.25, -511], [378.375, -494.25], [387.375, -473.25], [390.625, -461.625], [390.3125, -442.75], [395.5, -424], [414.25, -413.5], [437.125, -403], [446.125, -401.125], [460, -400.375], [485.125, -402.125], [500.25, -405.75], [517.125, -413.875], [526.125, -418.75], [539.5, -428.875], [550.625, -439.875], [562, -447.625], [575.125, -451.25], [581.875, -451.625], [588.125, -447.5], [591, -441.25], [592.75, -433.125], [594, -422.625],  [595.125, -417.25], [600, -409.625], [607.625, -399.5], [618.625, -389.125], [630.375, -378.875], [637.25, -371.375], [645.875, -356.625], [648.875, -349.625], [655.75, -340.25], [658.25, -337], [670.5, -323.25], 
        ] } },

        {"type":"Feature", "properties": { "name":"Corrections Rd" }, "geometry": {"type":"LineString", "coordinates": [
            [496.3125, -472.4375], [496.5625, -466.125], [496.5625, -460], [496.8125, -453.8125], [497.5625, -448.5], [498.4375, -443.25], [499.9375, -436], [502.125, -427.5], [504.5625, -420], [506.8125, -414.5625], [510.0625, -407.125], [514, -399.375], [519.25, -393.4375], [525.4375, -390.75], [532.625, -391.125], [542.125, -392.4375], [548.1875, -394.625], [563.9375, -403.25], [568.9375, -406.0625], [579.8125, -412.8125], [592.875, -421.0625], 
        ] } },

        {"type":"Feature", "properties": { "name":"Harrison St" }, "geometry": {"type":"LineString", "coordinates": [
            [569.1875, -407.5], [563.9375, -417.5625], [561.3125, -422], [556.875, -428.3125], [552.25, -433.9375], [549.9375, -436.9375],
        ] } },

        {"type":"Feature", "properties": { "name":"Arapahoe St" }, "geometry": {"type":"LineString", "coordinates": [
            [567.5625, -447.8125], [570.1875, -439.9375], [572.625, -432.375], [574.9375, -427.4375], [578.8125, -419.6875], [581.375, -415.375], 
        ] } },

        {"type":"Feature", "properties": { "name":"FS 95" }, "geometry": {"type":"LineString", "coordinates": [
            [533.6875, -389.875], [535.875, -375.5], [536.75, -367.125], [535.125, -362.625], [525.75, -341.5], [522.375, -337.375], [502.625, -320.125], [482.625, -302.25], [477.125, -295.375], [472.875, -286.75], [467.625, -275.75], [460.875, -267.125], [454.5, -261.375], [440.875, -250.75], [432.5, -246.25], [421.5, -243.375], [413.75, -242.875], [387.5, -242.375], [371.125, -242.75], [354.75, -243.375], [345.75, -244.625], [337.25, -243.875], [313.625, -238.375], [295.625, -233.75], [286, -229.25], [263.625, -216.375], [253.875, -209.25], [243.875, -199.875], [234.625, -191.375], [227.875, -187.5], [221, -184.75], [215.125, -183.375], [207.75, -182.5], [154.75, -177], [146.625, -177.5], [137.75, -179], [129.375, -183.125], [123.375, -187.75], [117.875, -193.125], [107.625, -205.25], [95.875, -223.625], [94.5, -226.25], [90.125, -235.625], [87.375, -244.5], [83.5, -255.75], [79.75, -266.5], [78.5, -271.125], [72, -285], [54.625, -323.5], [52.5, -330.125], [50.625, -335.25], [41.25, -368.625], [20.5, -439.875], [16.125, -450.875], [11.75, -458.75], [8.875, -465.75], [6, -475], [4.875, -483.25], [5.125, -492.875], [7.25, -503], [12.75, -513.25], [19.375, -519.625], [35.625, -531.125], [46.875, -539.625], [57.5, -546.875], [62.375, -550.375], [71.625, -554.25], [78.375, -555.375], [85.875, -555], [93.875, -553.25], [98.375, -551.5], [111.75, -546.75], [115.25, -546.75], [119.875, -548.875], [123.125, -552.375], [143.5, -581.75], [175.875, -609.0625], [181.375, -611.5], [188.875, -612.875], [195.125, -611.75], [200.5625, -610.0625], [211.875, -605.1875], [263.4375, -583.25], [295.5, -578.5], [296.75, -578], [299, -575.0625], [299.4375, -572.1875], [298.125, -569.75], [295.375, -568], [249.875, -566.4375], [217, -565.5], [211.4375, -564.625], [206.25, -562.875], [202.625, -560.75], [177.625, -540.0625], [175.75, -536.875], [174.6875, -533.25], [175.1875, -528.875], [178.25, -524.8125], [222.9375, -477.0625], [226.75, -474.625], [230.375, -473.875], [235.25, -474.6875], [238.5625, -476.9375], [264.625, -498.5625],   
        ] } },

        {"type":"Feature", "properties": { "name":"Hillview St" }, "geometry": {"type":"LineString", "coordinates": [
            [241.1875, -477.3125], [245.25, -472.1875], [247.125, -467.875], [248.125, -463.1875], [248.25, -458.3125], [247.5625, -454.25], [248.9375, -449.5], [252.6875, -445.75], [258.0625, -444.125], [262.6875, -444.9375], [266.3125, -447.9375], [272.75, -453.5], [277.375, -457.125], [279.8125, -461.5625], [279.75, -466.5625], [271.4375, -488.75], [269.375, -492.6875], [246.875, -518.9375], [243.6875, -522.25], [239.25, -523.625], [234.0625, -522.625], [229.9375, -519.625], [221.875, -512.5], [220.4375, -509.5], [220, -505.875], [221.0625, -501.9375], [223.5625, -498.3125], [241.125, -477], 
        ] } },

        {"type":"Feature", "properties": { "name":"Public Works Rd" }, "geometry": {"type":"LineString", "coordinates": [
            [168.3125, -418.375], [164.75, -422.125], [160.9375, -424.5625], [157.0625, -425.9375], [151.1875, -426.875], [145.6875, -426.9375], [140.3125, -425.1875], [135.875, -422.625], [132, -418.9375], [129.0625, -415.6875], [127.0625, -411.125], [125.1875, -406.9375], [124.4375, -401.9375], [121.9375, -373.0625], [120.75, -369], [118, -365.875], [113.75, -363.25], [106.625, -360.1875], [97.8125, -355.75], [90.1875, -352.125], [71.3125, -343.4375], [66.25, -341.0625], [51.5, -337],
        ] } },

        {"type":"Feature", "properties": { "name":"97th Ave" }, "geometry": {"type":"LineString", "coordinates": [
            [18.75, -447.875], [28.875, -453.125], [37.125, -454.125], [42.25, -452.875], [47.25, -448.375], [50.25, -443.5], [61.25, -408.125], [67.25, -388.75], [68.75, -384.375], [83.125, -350.5], [84.25, -347.53125], [89.65625, -335], [90.1875, -333.34375], [90.09375, -331.75], [89.96875, -328.125], [90.53125, -326], [91.78125, -323.71875], [94.875, -319.75], [100.03125, -312.78125], 
        ] } },

        {"type":"Feature", "properties": { "name":"Cruiser St" }, "geometry": {"type":"LineString", "coordinates": [
            [27, -423.375], [52.625, -431.375], [55.375, -432], [74.625, -438.125], 
        ] } },

        {"type":"Feature", "properties": { "name":"King St" }, "geometry": {"type":"LineString", "coordinates": [
            [82.375, -416.625], [61.125, -409.5], [32.75, -400.625], 
        ] } },

        {"type":"Feature", "properties": { "name":"Tiny Rd" }, "geometry": {"type":"LineString", "coordinates": [
            [42.25, -369.1875], [52.8125, -372.375], [69.625, -379.125], 
        ] } },

        {"type":"Feature", "properties": { "name":"Lone Pine St" }, "geometry": {"type":"LineString", "coordinates": [
            [60.4375, -314.1875], [64.5, -316.5625], [68.8125, -319], [72.4375, -321.0625], [74.4375, -323.0625], [76.5625, -326], [78.875, -328], [82.5, -329.25], [88.625, -329.6875], [93.9375, -329.5625], [98.8125, -329.6875], [105.625, -332.625], [110.5625, -331.5625], [113.4375, -329.75], [115.6875, -326.875], [117.1875, -324.8125], 
        ] } },

        {"type":"Feature", "properties": { "name":"Jackson Ct" }, "geometry": {"type":"LineString", "coordinates": [
            [78.1875, -307.25], [78.125, -310.6875], [77.5, -313.5625], [76.125, -316.125], [73.0625, -320.1875], [70.8125, -323.125], [68.9375, -325.9375], [67.875, -329.375], [68.125, -333.625], 
        ] } },

        {"type":"Feature", "properties": { "name":"Galapago Ct" }, "geometry": {"type":"LineString", "coordinates": [
            [105.9375, -346.9375], [104, -341.25], [103.71875, -338.65625], [104.375, -333.46875], 
        ] } },

        {"type":"Feature", "properties": { "name":"Sualsbury St" }, "geometry": {"type":"LineString", "coordinates": [
            [70.875, -290.3125], [126.9375, -329.8125], 
        ] } },

        {"type":"Feature", "properties": { "name":"Bay Beach" }, "geometry": {"type":"LineString", "coordinates": [
            [172.9375, -269.0625], [177.0625, -271.9375], [181.3125, -274.125], [185.4375, -274.75], [190.3125, -274.5], [194.5625, -272.6875], [198.1875, -269.9375], [201.5, -265.5], [204.625, -262.0625], [206.9375, -260.9375], [209.25, -261.25], [210.5, -262.25], [211, -263.875], [211, -265.3125], [210.5625, -266.875], [209.125, -267.9375], [207.1875, -269.75], [205.9375, -271.875], [204.3125, -275], [201.375, -277.875], [199.5, -279.3125], [197.125, -279.9375], [195.125, -279.75], [193.5625, -278.6875], [193.125, -277.3125], [193.0625, -275.9375], [193.6875, -274.8125], [194.75, -273.375], [194.9375, -272.5625], [194.0625, -274.375], [193.125, -275.8125], [192.875, -277.375], [193.5625, -278.5625], [194.375, -279.4375], [195.0625, -280.1875], [193.6875, -280.25], [192.1875, -280.0625], [190.3125, -279.5], [188.875, -278.875], [187.25, -277.8125], [185.625, -276.6875], [184.125, -275.875], [183.0625, -275.3125], [181.5625, -274], 
        ] } },

        {"type":"Feature", "properties": { "name":"Stapleton Blvd" }, "geometry": {"type":"LineString", "coordinates": [
            [542.375, -248.75], [547.78125, -245.34375], [548.65625, -243.625], [548.90625, -241.84375], [548.34375, -240.4375], [547.0625, -239.4375], [544.59375, -239.125], [492.84375, -247.5], [491.09375, -247.03125], [489.75, -246.28125], [489, -245.25], [488.8125, -243.90625], [489.09375, -242.78125], [489.71875, -241.875], [490.8125, -240.6875], [522.21875, -209.125], [523.34375, -207.46875], [523.5, -205.9375], [523.625, -189.0625], [523.59375, -156.28125], [523.75, -152.1875], [522.375, -145.65625], [521.59375, -143.9375], [519.9375, -141.5], [516.96875, -139.4375], [513.28125, -138.21875], [510.09375, -137.25], [506.34375, -136.90625], [500.5, -136.90625], [462.5625, -136.53125], [426.96875, -136.375], [393.875, -136.75], [382.5, -136.3125], [376.6875, -135], [372.3125, -133.375], [367.8125, -130.5625], [363.1875, -126.5625], [358.8125, -123.0625], [355.8125, -118.75], [351.53125, -113.5], 
        ] } },

        {"type":"Feature", "properties": { "name":"Airport Rd" }, "geometry": {"type":"LineString", "coordinates": [
            [469.5, -134], [469.5, -128.5], [468.125, -122.875], [465.875, -116.75], [462.625, -110.375], [444.875, -84.75], [443.375, -82.125], [443.125, -77.5], [499.375, -77.25], [499.25, -80], [498.75, -83], [477.75, -112.875], [475.25, -118.125], [473.875, -122.375], [473.125, -127.25], [472.875, -130.875], [472.75, -133.5],
        ] } },

        {"type":"Feature", "properties": { "name":"83rd Ave" }, "geometry": {"type":"LineString", "coordinates": [
            [379.875, -138.5], [377.875, -147.25], [377.5, -156.75], [377.375, -239.875], 
        ] } },

        {"type":"Feature", "properties": { "name":"Elm Cri" }, "geometry": {"type":"LineString", "coordinates": [
            [690.0625, -128.75], [646.6875, -94.6875], [644.4375, -92.25], [642.25, -89.6875], [639.875, -86.6875], [638.0625, -83.375], [636.5625, -79.75], [626.625, -55.75], [624.875, -53.6875], [623.5, -52.125], [621.9375, -50.8125], [620.25, -49.875], [618.8125, -49.0625], [617, -48.3125], [614.9375, -48.25], [613, -48.25], [610.1875, -48.6875], [608.125, -49], [606.1875, -49.6875], [604.3125, -50.75], [602.6875, -52.0625], [601.4375, -53.4375], [600.375, -54.875], [599.4375, -56.4375], [598.4375, -58.5625], [597.8125, -60.625], [597.375, -63.3125], [597.75, -66], [598, -68.4375], [598.875, -71], [604, -83.875], [605.4375, -86.125], [607.625, -89.25], [610.0625, -92.1875], [611.8125, -94.375], [613.8125, -96.125], [619.1875, -99.8125], [626.4375, -105.5], [633.0625, -110.6875], [648.5625, -122.6875], [663.625, -134.5], [666.1875, -135.9375], [668.3125, -137.3125], [670, -137.875], [672.0625, -138.375], [675.8125, -138.6875], [677.75, -138.6875], [679.5, -138.125], [680.6875, -137.8125], [682.25, -137.25], [683.5625, -136.375], [684.8125, -135.25], [685.625, -134], [687.625, -132.4375], [688.8125, -131.125], [689.375, -130.125], [690.125, -128.875], 
        ] } },

        {"type":"Feature", "properties": { "name":"Cherry St" }, "geometry": {"type":"LineString", "coordinates": [
            [604.0625, -80.3125], [631, -69.375],
        ] } },

        {"type":"Feature", "properties": { "name":"Palmer St" }, "geometry": {"type":"LineString", "coordinates": [
            [624, -101.5], [628.125, -95.90625], [630.34375, -93.84375], [632.46875, -92.0625], [634.53125, -90], [638.71875, -87.4375],
        ] } },

        {"type":"Feature", "properties": { "name":"Residential Rd" }, "geometry": {"type":"LineString", "coordinates": [
            [651.875, -99.9375], [629.9375, -129.125], 
        ] } },

        {"type":"Feature", "properties": { "name":"Gilpin St" }, "geometry": {"type":"LineString", "coordinates": [
            [669.75, -114.0625], [658.21875, -128.875],
        ] } },
        
        {"type":"Feature", "properties": { "name":"85th Ave" }, "geometry": {"type":"LineString", "coordinates": [
            [431.09375, -139.75], [430.8125, -201.75],
        ] } },

        {"type":"Feature", "properties": { "name":"Grant St" }, "geometry": {"type":"LineString", "coordinates": [
            [679, -245.25], [688.1875, -244.6875], [691.875, -243.6875], [696.6875, -242.875], [702.25, -241.375], [708.1875, -239.8125], [711.9375, -238.625], [714.0625, -237.0625], [715.5625, -234.875], [716.625, -231.75], [717.1875, -226.8125], [716.6875, -219.875], [716, -213.0625], [715.5, -207.4375], [715.1875, -205.25], [713.125, -195.875], [712, -191], [708, -171.8125], [703.0625, -148.8125], [701.3125, -142.9375], [699.9375, -139.875], [698.6875, -137.75], [696.4375, -134.5625], [694.375, -132.25], [693.5, -131], [691.4375, -129.5], 
        ] } },

        {"type":"Feature", "properties": { "name":"Redwood St" }, "geometry": {"type":"LineString", "coordinates": [
            [708.15625, -178.5625], [690, -182.28125], [688.84375, -182.71875], [687, -183.375], [685.5, -184.15625], [669.9375, -192.34375], [668.15625, -193.625], [666.59375, -194.84375], [665.25, -196.90625], [663.65625, -199.5], [662.96875, -201.6875], [662.40625, -203.96875], [662.28125, -206.0625], [662.625, -209.28125], [663.28125, -211.84375], [664.25, -214.25], [672, -231.65625], [684.3125, -227], [671.90625, -231.53125], [679.5, -249.5625], [680.3125, -251.3125], [681.375, -253.1875], [682.375, -254.59375], [683.625, -255.71875], [685, -257.03125], [686.78125, -257.9375], [688.9375, -259.0625], [691.84375, -260.0625], [694.09375, -260.78125], [696.15625, -261.3125], [697.5625, -261.5625], 
        ] } },

        {"type":"Feature", "properties": { "name":"Melony St" }, "geometry": {"type":"LineString", "coordinates": [
            [666, -214.5], [712.3125, -197.75], 
        ] } },

        {"type":"Feature", "properties": { "name":"Prominence Blvd" }, "geometry": {"type":"LineString", "coordinates": [
            [470.875, -140], [471.125, -183.875], [471, -189.375], [469.375, -195], [466.75, -198.75], [463.75, -202.25], [459.625, -204.75], [453.875, -206], [285.75, -205.625], 
        ] } },

        {"type":"Feature", "properties": { "name":"84th Ave" }, "geometry": {"type":"LineString", "coordinates": [
            [380.5625, -161.75], [386.5, -161.5625], [389.625, -162.1875], [391.75, -163], [393.375, -163.9375], [394.9375, -165.1875], [396.4375, -167.0625], [397.25, -169.75], [397.6875, -172.5], [397.5625, -202.3125],  
        ] } },

        {"type":"Feature", "properties": { "name":"82nd Ave" }, "geometry": {"type":"LineString", "coordinates": [
            [342.25, -135.375], [345.125, -140.625], [345.875, -142.5], [346.125, -145.5], [346.125, -241.75],  
        ] } },

        {"type":"Feature", "properties": { "name":"Chevyrocks Blvd" }, "geometry": {"type":"LineString", "coordinates": [
            [374, -161.75], [314.125, -162.125], [310.75, -162.125], [308.375, -161.625], [306.375, -160.875], [305.375, -159.875], [304.25, -158.625], 
        ] } },

        {"type":"Feature", "properties": { "name":"81st Ave" }, "geometry": {"type":"LineString", "coordinates": [
            [314.625, -236], [314.90625, -185.875], [300, -185.6875], [314.90625, -185.90625], [315, -165.03125], 
        ] } },

        {"type":"Feature", "properties": { "name":"80th Ave" }, "geometry": {"type":"LineString", "coordinates": [
            [283.125, -225.1875], [283.5, -223.625], [283.40625, -222.125], [283.6875, -202.0625], [283.6875, -202.09375], [283.6875, -185.96875], [299.0625, -185.78125], [283.6875, -185.96875], [283.78125, -183.75], [283.8125, -182.3125], [283.53125, -181.0625], [282.96875, -179.875], [282.3125, -178.8125], [279.1875, -173.78125], 
        ] } },
    ]
}
