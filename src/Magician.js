class Magician {
    constructor(distance){
      this.distance = distance;
    }
   
    get attack(){
      return this._attack
    }
    
    set attack(value){
      this._attack = value * (1 - ((this.distance - 1) * 0.1))
    }

    get stoned(){
      return this._attack
    }
      
    set stoned(value){
      this._attack = value - Math.log2(x) * 5
    }
  
}

// При этом их сила атаки падает уже не только линейно, 
// а по формуле: attack - log2(x) * 5, где x - это расстояние в клетках. 
// attack рассчитывается с учётом п.1. Пример: атака 100 единиц, атакуем 2 клетку от себя, 
// получаем вместе с дурманом: 85 (вместо 90).

// Сила урона зависит от расстояния (для Magician, Daemon) - линейно падает, 
// а именно: на ближайшую клетку 100%, на 5 клетку от себя - 60% 
// (соответственно, на 2-ую клетку - 90%, на 3-ую - 80%, на 4-ую - 70%