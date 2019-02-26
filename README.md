# yesilcam-replik

Onceden yazdigin yesilcam repliklerini rastgele yazdiriyor.

## Amaci

Node paket sistemenin, githubi ogrenmek.

## Kullanimi


```console 
~$ npm i yesilcam -S
```

deneme.js dosyasinini icindeki kod soyle;
```js
var yesil = require("yesilcam");

console.log(yesil.all);
console.log('\n');  
console.log(yesil.random());
```

```shell 
~$ node new.js
[ 'senin annen bir melekti yavrum.',
  'nayır nolamaz.',
  'bu da mı gol değil?',
  'Güzel olduğunuz kadar küstahsınız da',
  'Biz ayrı dünyaların insanıyız',
  'Bedenime sahip olabilirsin ama ruhuma asla',
  'Hatırlar mısınız, bir zamanlar fakir ama gururlu bir genç vardı' ]


Güzel olduğunuz kadar küstahsınız da
```


