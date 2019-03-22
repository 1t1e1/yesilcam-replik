# Yesilcam Replik

Onceden yazdigin yesilcam repliklerini rastgele yazdiriyor.

## Amac

Deneysel, node package manageri ogrenmek. 

## Kullanimi

```console 
~$ npm i yesilcam -S
```

ornek.js dosyasinini icindeki kod;
```js
var yesil = require("yesilcam");

console.log(yesil.all);
console.log(yesil.random());
```

```shell 
~$ node ornek.js
[ 'senin annen bir melekti yavrum.',
  'nayır nolamaz.',
  'bu da mı gol değil?',
  'Güzel olduğunuz kadar küstahsınız da',
  'Biz ayrı dünyaların insanıyız',
  'Bedenime sahip olabilirsin ama ruhuma asla',
  'Hatırlar mısınız, bir zamanlar fakir ama gururlu bir genç vardı' ]

Güzel olduğunuz kadar küstahsınız da
```


