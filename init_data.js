const init_data = {
    colors: JSON.parse('[[13, 240, 48],[103, 85, 110],[66, 88, 161],[198, 107, 245],[175, 13, 237],[79, 2, 124],[76, 89, 72],[159, 102, 51],[125, 149, 184],[225, 89, 241],[168, 14, 179],[157, 224, 172],[45, 205, 106],[190, 43, 182],[207, 206, 9],[149, 151, 115],[199, 182, 146],[125, 46, 77],[253, 245, 174],[244, 225, 71],[124, 24, 7],[59, 75, 229],[66, 171, 77],[47, 167, 156],[26, 248, 137],[53, 1, 249],[241, 181, 126],[0, 132, 136],[50, 105, 43],[78, 223, 54],[166, 106, 124],[57, 133, 204],[253, 127, 27],[56, 194, 162],[88, 92, 135],[232, 171, 196],[112, 19, 82],[131, 251, 138],[11, 95, 160],[211, 10, 29],[96, 199, 185],[171, 4, 56],[78, 116, 84],[240, 252, 100],[224, 37, 45],[85, 124, 34],[9, 240, 157],[245, 11, 227],[139, 24, 56],[114, 6, 65],[56, 101, 182],[245, 183, 100],[78, 50, 142],[112, 213, 142],[255, 87, 186],[201, 209, 49],[61, 123, 32],[24, 76, 6],[185, 194, 85],[27, 61, 215],[81, 208, 41],[202, 44, 209],[225, 103, 77],[218, 230, 124],[110, 85, 242],[157, 197, 106],[241, 192, 7],[56, 225, 179],[239, 245, 20],[16, 147, 125],[242, 33, 71],[205, 158, 100],[159, 231, 226],[174, 206, 123],[81, 98, 250],[163, 192, 109],[41, 101, 172],[77, 116, 196],[176, 231, 90],[181, 70, 66],[62, 214, 25],[208, 221, 110],[242, 131, 130],[196, 135, 34],[160, 51, 78],[73, 233, 129],[171, 136, 218],[206, 136, 200],[113, 173, 247],[35, 47, 63],[121, 167, 116],[155, 27, 94],[5, 245, 129],[196, 45, 179],[255, 247, 128],[120, 62, 92],[68, 217, 198],[164, 176, 29],[228, 215, 63],[129, 112, 163]]'),
    robots: JSON.parse(
        '[{"x":344,"y":437},{"x":1274,"y":671},{"x":1159,"y":405},{"x":35,"y":141},{"x":828,"y":713},{"x":31,"y":412},{"x":1015,"y":185},{"x":203,"y":659},{"x":1102,"y":427},{"x":967,"y":490},{"x":1169,"y":259},{"x":12,"y":707},{"x":1119,"y":650},{"x":1090,"y":166},{"x":570,"y":542},{"x":1248,"y":147},{"x":350,"y":104},{"x":547,"y":123},{"x":1258,"y":117},{"x":872,"y":230},{"x":600,"y":391},{"x":676,"y":4},{"x":85,"y":257},{"x":613,"y":338},{"x":698,"y":709},{"x":311,"y":333},{"x":1026,"y":548},{"x":305,"y":568},{"x":725,"y":192},{"x":1214,"y":368},{"x":808,"y":392},{"x":1045,"y":516},{"x":582,"y":626},{"x":1266,"y":188},{"x":1095,"y":528},{"x":442,"y":26},{"x":580,"y":202},{"x":265,"y":278},{"x":374,"y":468},{"x":195,"y":438},{"x":457,"y":205},{"x":485,"y":579},{"x":441,"y":249},{"x":1033,"y":556},{"x":27,"y":496},{"x":243,"y":544},{"x":52,"y":390},{"x":412,"y":397},{"x":847,"y":71},{"x":520,"y":145},{"x":593,"y":74},{"x":538,"y":425},{"x":165,"y":163},{"x":1034,"y":211},{"x":926,"y":448},{"x":221,"y":589},{"x":1266,"y":294},{"x":782,"y":364},{"x":594,"y":312},{"x":621,"y":522},{"x":1127,"y":278},{"x":1203,"y":321},{"x":820,"y":214},{"x":1073,"y":229},{"x":11,"y":404},{"x":594,"y":488},{"x":1074,"y":651},{"x":840,"y":564},{"x":498,"y":717},{"x":216,"y":374},{"x":200,"y":720},{"x":87,"y":555},{"x":628,"y":103},{"x":1254,"y":111},{"x":867,"y":405},{"x":765,"y":711},{"x":78,"y":63},{"x":533,"y":462},{"x":402,"y":273},{"x":571,"y":638},{"x":660,"y":446},{"x":72,"y":157},{"x":313,"y":324},{"x":1275,"y":132},{"x":1009,"y":631},{"x":375,"y":73},{"x":655,"y":672},{"x":568,"y":39},{"x":191,"y":558},{"x":515,"y":327},{"x":646,"y":187},{"x":929,"y":183},{"x":84,"y":60},{"x":708,"y":277},{"x":1021,"y":219},{"x":183,"y":437},{"x":195,"y":38},{"x":465,"y":301},{"x":414,"y":714},{"x":681,"y":427},{"x":640,"y":360}]'
    ),
    M: 9,
    MMP_iters: 30000,
    MMPs: JSON.parse('[[[3746,33,0,48,1,0,0,0,0],[32,2854,53,0,82,2,0,0,0],[0,52,1256,0,1,20,0,0,0],[49,0,0,3275,27,0,64,2,0],[1,81,3,27,2957,32,0,79,2],[0,2,17,0,34,2748,0,0,71],[0,0,0,67,0,0,3665,71,0],[0,0,0,1,79,0,74,5479,12],[0,0,0,0,1,70,0,14,2815]],[[2196,29,0,34,0,0,0,0,0],[30,3888,56,1,97,1,0,0,0],[0,57,4531,0,3,94,0,0,0],[29,3,0,698,19,0,3,0,0],[3,96,2,17,2876,73,0,50,1],[0,0,96,0,71,5236,0,0,77],[0,0,0,2,0,0,8,3,0],[0,0,0,0,52,0,2,2667,79],[0,0,0,0,0,76,0,80,6663]],[[4264,45,0,163,1,0,0,0,0],[42,1746,19,2,57,0,0,0,0],[0,17,1159,0,2,73,0,0,0],[166,2,0,6566,50,0,147,0,0],[1,55,2,52,2219,28,1,37,0],[0,1,71,0,27,2830,0,1,68],[0,0,0,146,0,0,6079,74,0],[0,0,0,2,38,1,72,1832,9],[0,0,0,0,1,67,0,10,1754]],[[4288,61,0,85,4,0,0,0,0],[62,4234,18,3,123,1,0,0,0],[0,14,1711,0,6,19,0,0,0],[87,2,0,2906,55,0,148,1,0],[2,129,1,53,5265,42,3,112,0],[0,1,20,0,41,402,0,0,3],[0,0,0,151,3,0,3763,57,0],[0,0,0,1,109,0,60,4944,39],[0,0,0,0,0,3,0,39,928]],[[4619,34,0,31,0,0,0,0,0],[32,5768,53,0,99,1,0,0,0],[0,53,5055,0,2,94,0,0,0],[31,0,0,2257,41,0,55,0,0],[1,97,1,40,4427,17,0,92,0],[0,1,95,0,17,2723,0,0,9],[0,0,0,56,0,0,2206,16,0],[0,0,0,0,89,0,17,1775,5],[0,0,0,0,0,10,0,4,76]],[[1339,6,0,38,0,0,0,0,0],[6,2204,29,2,50,2,0,0,0],[0,28,4844,0,4,117,0,0,0],[38,0,0,2038,23,0,60,1,0],[0,54,2,23,2811,42,3,91,5],[0,1,118,0,45,3106,0,1,79],[0,0,0,59,0,0,4987,68,0],[0,0,0,1,95,3,63,4760,43],[0,0,0,0,3,80,0,44,2583]],[[1217,17,0,10,0,0,0,0,0],[17,2753,40,0,68,2,0,0,0],[0,40,3152,0,2,120,0,0,0],[10,0,0,1026,11,0,30,1,0],[0,67,3,13,1616,33,0,48,0],[0,2,120,0,33,5866,0,0,157],[0,0,0,29,0,0,2739,34,0],[0,0,0,0,49,0,33,3687,26],[0,0,0,0,1,157,0,25,6745]],[[4461,80,0,93,1,0,0,0,0],[82,4841,60,1,130,4,0,0,0],[0,59,1329,0,7,37,0,0,0],[92,1,0,3275,19,0,54,0,0],[0,134,5,21,3387,43,0,65,1],[0,3,38,0,43,1391,0,2,67],[0,0,0,51,1,0,4229,31,0],[0,0,0,0,63,0,30,3834,55],[0,0,0,0,4,69,0,50,1756]],[[3497,24,0,63,1,0,0,0,0],[23,3085,48,1,47,0,0,0,0],[0,46,2535,0,1,39,0,0,0],[64,0,0,3720,34,0,97,0,0],[1,49,0,34,2441,25,2,28,3],[0,0,38,0,25,2413,0,1,76],[0,0,0,97,0,0,5732,37,0],[0,0,0,0,34,0,34,1872,12],[0,0,0,0,0,77,0,14,3629]],[[325,10,0,19,0,0,0,0,0],[10,2446,25,0,82,0,0,0,0],[0,26,4027,0,1,59,0,0,0],[19,2,0,836,28,0,39,2,0],[0,78,0,30,3889,43,1,156,1],[0,1,61,0,43,3236,0,2,85],[0,0,0,41,0,0,3751,128,0],[0,0,0,0,154,2,129,7093,66],[0,0,0,0,1,87,0,63,2902]],[[2094,29,0,38,0,0,0,0,0],[28,1770,20,0,39,0,0,0,0],[0,20,4236,0,1,99,0,0,0],[39,1,0,2255,18,0,36,0,0],[0,37,3,20,2862,39,1,86,0],[0,0,97,0,41,4464,0,1,87],[0,0,0,36,0,0,3610,52,0],[0,0,0,0,87,1,51,4301,23],[0,0,0,0,0,87,0,23,3267]],[[4521,64,0,54,1,0,0,0,0],[62,3070,35,2,93,0,0,0,0],[0,34,1453,0,0,30,0,0,0],[55,2,0,2165,78,0,33,3,0],[2,91,0,82,3770,47,0,84,0],[0,1,29,0,47,2344,0,0,58],[0,0,0,33,0,0,2652,25,0],[0,0,0,0,87,0,26,5471,64],[0,0,0,0,0,58,0,64,3209]],[[7734,69,0,104,1,0,0,0,0],[67,4610,32,3,109,0,0,0,0],[0,33,427,0,2,15,0,0,0],[103,2,0,3255,32,0,22,2,0],[4,107,2,30,3064,51,1,78,1],[0,0,16,0,47,1470,0,2,71],[0,0,0,24,0,0,357,11,0],[0,0,0,0,81,3,12,2252,68],[0,0,0,0,2,67,0,71,5485]],[[4465,24,0,109,0,0,0,0,0],[26,3574,23,0,61,1,0,0,0],[0,24,2732,0,1,88,0,0,0],[106,1,0,4128,35,0,58,0,0],[1,62,1,32,1992,52,0,20,0],[0,0,90,0,50,3354,0,3,61],[0,0,0,59,0,0,5073,26,0],[0,0,0,0,20,3,27,1730,26],[0,0,0,0,1,60,0,27,1773]],[[470,56,0,6,0,0,0,0,0],[57,6014,67,0,82,1,0,0,0],[0,70,2819,0,2,74,0,0,0],[5,1,0,672,23,0,34,1,0],[0,78,4,22,4667,57,1,131,1],[0,2,75,0,54,2670,0,1,33],[0,0,0,36,0,0,2007,35,0],[0,0,0,0,130,1,36,5149,51],[0,0,0,0,3,32,0,50,4219]],[[1712,19,0,88,0,0,0,0,0],[16,2020,57,1,79,4,0,0,0],[0,57,3861,0,1,87,0,0,0],[91,0,0,2877,24,0,80,0,0],[0,80,0,28,2851,62,1,32,1],[0,1,89,0,65,5834,0,1,166],[0,0,0,76,1,0,2823,32,0],[0,0,0,1,33,0,28,1422,42],[0,0,0,0,1,169,0,39,5047]],[[6218,83,0,131,2,0,0,0,0],[82,4342,13,3,83,0,0,0,0],[0,12,1275,0,0,15,0,0,0],[132,2,0,5341,81,0,123,2,0],[2,84,0,81,2795,13,0,46,1],[0,0,14,0,15,533,0,0,14],[0,0,0,125,0,0,4192,33,0],[0,0,0,0,46,1,35,2355,21],[0,0,0,0,0,14,0,22,1617]],[[512,16,0,48,1,0,0,0,0],[14,3446,87,1,47,1,0,0,0],[0,84,6755,0,2,120,0,0,0],[49,1,0,2591,37,0,92,0,0],[2,47,0,40,1918,23,0,54,0],[0,3,119,0,21,4753,0,0,73],[0,0,0,90,2,0,3377,24,0],[0,0,0,0,56,0,23,2243,31],[0,0,0,0,0,72,0,32,3092]],[[4446,25,0,63,0,0,0,0,0],[21,1175,56,2,35,1,0,0,0],[0,54,3787,0,2,40,0,0,0],[66,0,0,5519,40,0,141,0,0],[1,34,2,37,2124,40,1,34,1],[0,2,39,0,39,2197,0,0,65],[0,0,0,145,1,0,4340,18,0],[0,0,0,0,33,0,22,1538,10],[0,0,0,0,0,64,0,12,3727]],[[4782,43,0,131,2,0,0,0,0],[41,2255,31,2,50,0,0,0,0],[0,32,1056,0,0,65,0,0,0],[135,0,0,4121,18,0,65,1,0],[0,48,0,22,1567,33,0,31,0],[0,1,67,0,35,3934,0,0,92],[0,0,0,63,3,0,2376,30,0],[0,0,0,1,25,1,31,3119,51],[0,0,0,0,1,96,0,47,5495]],[[60,6,0,12,0,0,0,0,0],[7,1228,32,0,25,1,0,0,0],[0,31,3741,0,1,101,0,0,0],[11,2,0,720,10,0,16,0,0],[0,24,6,13,2987,50,0,68,1],[0,2,94,0,56,6424,0,4,216],[0,0,0,14,1,0,1263,19,0],[0,0,0,0,70,3,18,4876,92],[0,0,0,0,0,217,0,92,7385]],[[3338,25,0,39,0,0,0,0,0],[24,1202,29,1,14,0,0,0,0],[0,29,5642,0,0,132,0,0,0],[40,0,0,3060,28,0,92,0,0],[0,15,0,26,1721,49,1,77,1],[0,0,132,0,52,4252,0,2,101],[0,0,0,92,0,0,2006,9,0],[0,0,0,2,74,1,8,2929,55],[0,0,0,0,1,105,0,52,4541]],[[3783,69,0,73,0,0,0,0,0],[68,4856,17,2,99,0,0,0,0],[0,17,1120,0,0,25,0,0,0],[74,1,0,5953,63,0,140,0,0],[0,98,1,65,2817,42,0,39,0],[0,1,24,0,42,1104,0,0,37],[0,0,0,138,1,0,5133,74,0],[0,0,0,1,40,0,73,2438,24],[0,0,0,0,0,36,0,25,1386]],[[4705,56,0,126,1,0,0,0,0],[58,2506,33,2,110,0,0,0,0],[0,34,2081,0,0,84,0,0,0],[124,1,0,3836,75,0,54,1,0],[1,112,0,72,4174,34,1,41,0],[0,0,85,0,34,2826,0,0,51],[0,0,0,54,0,0,2111,29,0],[0,0,0,1,42,0,28,3704,20],[0,0,0,0,0,52,0,20,2620]],[[3453,33,0,66,4,0,0,0,0],[32,965,3,0,34,1,0,0,0],[0,3,20,0,1,0,0,0,0],[68,1,0,4788,69,0,146,2,0],[3,32,1,72,2303,7,2,59,0],[0,1,0,0,8,233,0,0,6],[0,0,0,145,1,0,12402,123,0],[0,0,0,3,59,0,121,4209,19],[0,0,0,0,0,7,0,18,476]],[[2312,48,0,51,1,0,0,0,0],[47,1122,29,0,65,3,0,0,0],[0,30,3311,0,1,83,0,0,0],[51,2,0,1072,24,0,4,0,0],[2,64,0,26,3263,37,1,39,0],[0,0,84,0,42,6606,0,1,172],[0,0,0,4,1,0,739,18,0],[0,0,0,1,35,3,18,4095,71],[0,0,0,0,0,173,0,70,6178]],[[3879,24,0,101,1,0,0,0,0],[19,4579,52,0,104,0,0,0,0],[0,50,4243,0,1,97,0,0,0],[105,0,0,3117,23,0,42,0,0],[2,101,0,25,2605,42,0,65,3],[0,0,96,0,46,3655,0,1,61],[0,0,0,43,0,0,1567,7,0],[0,0,0,1,61,5,7,2453,42],[0,0,0,0,2,60,0,43,2569]],[[2311,14,0,79,2,0,0,0,0],[16,1506,5,1,58,0,0,0,0],[0,5,1152,0,0,14,0,0,0],[79,0,0,6356,57,0,272,3,0],[0,61,0,61,3219,3,1,113,0],[0,0,14,0,4,245,0,0,7],[0,0,0,270,2,0,10199,97,0],[0,0,0,0,115,0,97,3251,6],[0,0,0,0,0,8,0,5,291]],[[134,3,0,2,1,0,0,0,0],[5,3940,69,0,76,1,0,0,0],[0,67,5457,0,1,124,0,0,0],[1,0,0,850,26,0,13,0,0],[0,80,0,27,3330,89,0,30,2],[0,1,123,0,89,5921,0,0,180],[0,0,0,11,0,0,1530,5,0],[0,0,0,0,31,1,3,1433,53],[0,0,0,0,4,178,0,53,6055]],[[3468,31,0,51,1,0,0,0,0],[30,1721,40,0,46,1,0,0,0],[0,40,3587,0,0,60,0,0,0],[52,0,0,2998,36,0,35,3,0],[1,44,0,37,2171,16,1,67,0],[0,1,60,0,11,3738,0,3,125],[0,0,0,36,0,0,1748,43,0],[0,0,0,2,70,0,43,4559,54],[0,0,0,0,2,124,0,53,4790]],[[3062,36,0,63,0,0,0,0,0],[37,4535,104,2,88,0,0,0,0],[0,104,5659,0,0,67,0,0,0],[62,3,0,2657,38,0,70,0,0],[0,88,1,35,3074,29,1,43,0],[0,0,66,0,31,2033,0,0,32],[0,0,0,71,0,0,1576,40,0],[0,0,0,2,41,0,40,3044,42],[0,0,0,0,0,33,0,41,3049]],[[6419,94,0,202,3,0,0,0,0],[93,4070,4,0,49,0,0,0,0],[0,4,448,0,0,23,0,0,0],[203,1,0,5832,60,0,115,2,0],[3,47,1,59,2233,15,1,67,0],[0,0,22,0,17,1763,0,1,54],[0,0,0,119,0,0,2882,26,0],[0,0,0,1,63,1,28,2152,33],[0,0,0,0,1,55,0,30,2703]],[[5031,73,0,62,1,0,0,0,0],[68,5549,59,1,103,1,0,0,0],[0,62,1322,0,1,34,0,0,0],[68,3,0,3821,73,0,62,0,0],[0,93,0,80,4574,42,2,94,0],[0,1,38,0,39,1113,0,1,8],[0,0,0,63,1,0,3296,46,0],[0,0,0,0,92,0,46,3389,28],[0,0,0,0,1,9,0,26,523]],[[1486,28,0,35,0,0,0,0,0],[27,1924,57,0,27,2,0,0,0],[0,55,4522,0,2,142,0,0,0],[36,0,0,1038,7,0,46,1,0],[0,30,2,7,1924,62,1,46,1],[0,0,141,0,64,6362,0,1,155],[0,0,0,48,0,0,1954,33,0],[0,0,0,0,48,0,33,3636,84],[0,0,0,0,1,155,0,84,5692]],[[2454,22,0,60,0,0,0,0,0],[22,2263,11,1,151,1,0,0,0],[0,14,1060,0,0,25,0,0,0],[59,1,0,5869,77,0,128,1,0],[1,148,1,79,5796,25,2,115,2],[0,1,27,0,23,1135,0,1,27],[0,0,0,124,1,0,3982,54,0],[0,0,0,1,120,0,49,3528,18],[0,0,0,0,1,28,0,17,2474]],[[3638,29,0,130,0,0,0,0,0],[27,3425,33,0,101,0,0,0,0],[0,31,2489,0,0,61,0,0,0],[131,0,0,3952,45,0,93,1,0],[1,101,1,45,2673,29,2,37,0],[0,1,58,0,31,4501,0,2,94],[0,0,0,94,0,0,2489,23,0],[0,0,0,1,39,2,22,2536,13],[0,0,0,0,0,94,0,14,2910]],[[2840,30,0,73,3,0,0,0,0],[32,3314,23,1,102,1,0,0,0],[0,22,3511,0,5,67,0,0,0],[72,2,0,3302,39,0,66,0,0],[2,102,3,40,4882,47,0,109,1],[0,3,68,0,43,2815,0,3,89],[0,0,0,64,1,0,1362,12,0],[0,0,0,1,110,7,11,3044,85],[0,0,0,0,1,84,0,90,3415]],[[1184,24,0,38,0,0,0,0,0],[25,4833,88,3,124,1,0,0,0],[0,86,6390,0,3,179,0,0,0],[36,4,0,1237,52,0,26,1,0],[1,125,2,51,4687,51,1,144,2],[0,2,178,0,53,3925,0,0,38],[0,0,0,27,0,0,486,12,0],[0,0,0,1,144,1,12,3594,71],[0,0,0,0,0,39,0,72,1946]],[[6092,71,0,89,1,0,0,0,0],[73,5122,39,4,137,0,0,0,0],[0,39,3542,0,2,44,0,0,0],[87,4,0,1761,41,0,33,0,0],[1,137,2,40,3547,33,0,51,1],[0,2,44,0,28,1740,0,0,48],[0,0,0,32,1,0,1562,32,0],[0,0,0,1,53,0,32,3689,39],[0,0,0,0,1,45,0,42,1615]],[[3735,40,0,73,0,0,0,0,0],[41,3205,16,0,52,1,0,0,0],[0,18,2411,0,1,64,0,0,0],[72,1,0,2539,34,0,71,2,0],[0,50,0,35,2005,47,1,54,1],[0,0,67,0,45,4555,0,0,158],[0,0,0,72,3,0,2652,40,0],[0,0,0,1,53,0,43,1993,23],[0,0,0,0,0,158,0,24,5543]],[[2833,41,0,33,0,0,0,0,0],[39,3060,22,1,69,2,0,0,0],[0,23,1773,0,1,65,0,0,0],[34,2,0,2598,46,0,99,3,0],[1,68,0,49,3443,36,2,128,0],[0,0,67,0,36,2693,0,0,32],[0,0,0,98,4,0,5685,73,0],[0,0,0,3,127,0,74,4512,31],[0,0,0,0,0,32,0,31,2030]],[[5616,46,0,96,1,0,0,0,0],[45,1038,23,0,32,2,0,0,0],[0,24,566,0,3,35,0,0,0],[98,0,0,4888,27,0,85,2,0],[0,32,1,31,3120,40,0,108,0],[0,0,38,0,38,2584,0,1,106],[0,0,0,85,3,0,2730,43,0],[0,0,0,0,106,1,46,3867,35],[0,0,0,0,1,105,0,35,4216]],[[1156,17,0,44,0,0,0,0,0],[19,2166,15,0,69,2,0,0,0],[0,18,1241,0,1,14,0,0,0],[42,1,0,1369,11,0,47,1,0],[0,68,1,11,4483,51,0,138,1],[0,1,16,0,51,5894,0,2,183],[0,0,0,47,0,0,546,5,0],[0,0,0,0,138,0,5,5229,67],[0,0,0,0,1,186,0,64,6578]],[[3168,37,0,50,0,0,0,0,0],[36,1266,21,0,28,0,0,0,0],[0,21,1647,0,0,70,0,0,0],[51,0,0,3022,40,0,55,0,0],[0,26,0,39,3987,71,2,109,0],[0,1,70,0,70,4712,0,2,96],[0,0,0,57,1,0,2457,15,0],[0,0,0,0,106,3,16,2245,50],[0,0,0,0,2,95,0,48,6207]],[[2033,25,0,89,1,0,0,0,0],[28,2781,19,2,62,0,0,0,0],[0,21,1688,0,1,46,0,0,0],[87,3,0,3277,23,0,88,0,0],[0,62,0,22,2575,31,1,59,1],[0,0,49,0,32,3158,0,0,111],[0,0,0,87,0,0,6489,30,0],[0,0,0,1,55,1,29,2312,21],[0,0,0,0,1,114,0,18,4466]],[[3856,13,0,101,0,0,0,0,0],[13,1268,18,1,53,0,0,0,0],[0,19,3355,0,1,107,0,0,0],[101,0,0,4874,15,0,122,1,0],[0,53,0,15,4047,38,4,52,0],[0,0,109,0,36,2812,0,0,40],[0,0,0,121,1,0,4366,56,0],[0,0,0,1,56,0,53,2656,11],[0,0,0,0,0,40,0,12,1502]],[[2747,18,0,67,2,0,0,0,0],[19,1289,20,1,68,2,0,0,0],[0,22,3363,0,0,77,0,0,0],[67,1,0,4222,20,0,92,0,0],[1,67,1,19,2215,53,1,61,2],[0,1,78,0,51,2927,0,0,67],[0,0,0,93,0,0,3677,103,0],[0,0,0,1,61,1,103,4962,47],[0,0,0,0,3,64,0,49,3194]],[[6149,62,0,174,1,0,0,0,0],[62,3660,22,1,119,0,0,0,0],[0,21,906,0,0,4,0,0,0],[174,3,0,5486,70,0,61,4,0],[1,118,0,74,5270,13,2,97,0],[0,0,3,0,13,197,0,0,14],[0,0,0,62,0,0,3010,62,0],[0,0,0,2,101,0,60,3478,17],[0,0,0,0,1,13,0,17,395]],[[3828,48,0,65,0,0,0,0,0],[48,2522,18,0,45,0,0,0,0],[0,17,5465,0,2,124,0,0,0],[64,1,0,3320,13,0,67,1,0],[1,46,0,15,2111,20,0,55,0],[0,0,125,0,21,4232,0,0,63],[0,0,0,66,0,0,3073,40,0],[0,0,0,0,56,0,39,2211,11],[0,0,0,0,0,65,0,10,2091]],[[3714,30,0,79,1,0,0,0,0],[31,4782,48,0,100,0,0,0,0],[0,48,1257,0,1,27,0,0,0],[78,2,0,4476,33,0,170,3,0],[1,100,0,33,2123,15,0,66,0],[0,0,27,0,13,670,0,0,10],[0,0,0,170,1,0,6470,87,0],[0,0,0,4,65,0,88,3718,11],[0,0,0,0,1,8,0,12,1426]],[[6161,75,0,151,1,0,0,0,0],[75,1892,20,1,56,0,0,0,0],[0,20,686,0,0,16,0,0,0],[151,0,0,6735,62,0,161,0,0],[1,56,0,57,3437,22,1,101,1],[0,1,16,0,22,1096,0,0,21],[0,0,0,162,3,0,4133,61,0],[0,0,0,3,96,1,64,2603,32],[0,0,0,0,0,21,0,33,1692]]]')
};
