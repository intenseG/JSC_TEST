// 3-1
var devLang = ['JavaScript', 'Ruby', 'PHP', 'Java', 'C'];

for (let i = 0; i < devLang.length; i++) {
    if (devLang[i] == 'JavaScript' || devLang[i] == 'Java') {
        console.log(devLang[i]);
    }
}

// 3-2
for (let i = 0; i < devLang.length; i++) {
    if (devLang[i].length >= 4) {
        console.log(devLang[i]);
    }
}

// 3-3
devLang.push('Go');
for (let i = 0; i < devLang.length; i++) {
    console.log(devLang[i]);
}