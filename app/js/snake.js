function snake() {
  var rand = function (min, max) {
    k = Math.floor(Math.random() * (max - min) + min);
    return (Math.round(k / s) * s);
  }
  var newA = function () {
      a = [rand(0, innerWidth - s), rand(0, innerHeight - s)];
    },
    newB = function () {
      sBody = [{
        x: 0,
        y: 0
      }];
    }
  var gP = document.getElementById('canvas'), //Достаем canvas
    g = gP.getContext('2d'), //Получаем "контакс" (методы для рисования в canvas) //Сохраняем для удобства
    sBody = null, //Начально тело змейки - два элемента
    dir = 'right', //Направление змейки 1 - dправо, 2 - вниз 3 - влево, 4 - вверх
    a = null, //Яблоко, массив, 0 элемент - x, 1 элемнт - y
    s = 25;
  newB();
  newA(); //Создаем змейку
  gP.width = innerWidth ; //Сохранем четкость изображения, выставив полную ширину экрана
  gP.height = innerHeight; //То же самое, но только с высотой
  setInterval(function () {
//    if (a[0] + s >= gP.width || a[1] + s >= gP.height) newA();
    g.clearRect(0, 0, gP.width, gP.height); //Очищаем старое
    g.fillStyle = "red";
    g.fillRect(...a, s, s);
    g.fillStyle = "#D8983E";
    sBody.forEach(function (el, i) {
      if (el.x == sBody[sBody.length - 1].x && el.y == sBody[sBody.length - 1].y && i < sBody.length - 1) sBody.splice(0, sBody.length - 1), sBody = [{
        x: 0,
        y: 0
      }], dir = 'right'; //Проверка на столкновение
    });
    var m = sBody[0],
      f = {
        x: m.x,
        y: m.y
      },
      l = sBody[sBody.length - 1]; // сохраняем хвост и голову змейки
    if (dir == 'right') f.x = l.x + s, f.y = Math.round(l.y / s) * s; //Если направление вправо, то тогда сохраняем Y, но меняем X на + s
    if (dir == 'down') f.y = l.y + s, f.x = Math.round(l.x / s) * s; // Если направление вниз, то сохраняем X, но меняем Y на + s
    if (dir == 'left') f.x = l.x - s, f.y = Math.round(l.y / s) * s; //Если направление влево, то сохраняем Y, но меняем X на -s
    if (dir == 'up') f.y = l.y - s, f.x = Math.round(l.x / s) * s; //Если направление вверх, то сохраняем X, Но меняем Y на -ss
    sBody.push(f); //Добавляем хвост после головы с новыми координатами
    sBody.splice(0, 1); //Удаляем хвост
    //Отрисовываем каждый элемент змейки
    sBody.forEach(function (pob, i) {
      if (dir == 'right')
        if (pob.x > Math.round(gP.width / s) * s) pob.x = 0; //Если мы двигаемся вправо, то если позиция эемента по X больше, чем ширина экрана, то ее надо обнулить
      if (dir == 'down')
        if (pob.y > Math.round(gP.height / s) * s) pob.y = 0; //Если мы двигаемся внизу, то если позиция элемента по X больше, чем высота экрана, то ее надо обнулить
      if (dir == 'left')
        if (pob.x < 0) pob.x = Math.round(gP.width / s) * s; //Если мы двигаемся влево, и позиция по X меньше нуля, то мы ставим элемент в самый конец экрана (его ширина)
      if (dir == 'up')
        if (pob.y < 0) pob.y = Math.round(gP.height / s) * s; //Если мы двигаемся вверх, и позиция по Y меньше нуля, то мы ставим элемент в самый низ экрана (его высоту)
      if (pob.x == a[0] && pob.y == a[1]) newA(), sBody.unshift({
        x: f.x - s,
        y: l.y
      })
      g.fillRect(pob.x, pob.y, s, s);
      // s - это ширина и высота нашего "квадрата"
    });
  }, 100);
  onkeydown = function (e) {
    var k = e.keyCode;
    if ([38, 39, 40, 37].indexOf(k) >= 0)
      //Останавливаем событие, отменяем его действие по умолчанию. На пример, при ажатии на стрелочку вверх мог произойти скролл, но он не произойдет, так как мы его отменили
      e.preventDefault();
    if (k == 39 && dir != 'left') dir = 'right'; //Вправо
    if (k == 40 && dir != 'up') dir = 'down'; //Вниз
    if (k == 37 && dir != 'right') dir = 'left'; //Влево
    if (k == 38 && dir != 'down') dir = 'up'; //Вверх
  };

};
