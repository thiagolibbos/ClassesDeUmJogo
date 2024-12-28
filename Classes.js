class heroesGame {
    constructor(nameHero,ageHero,classHero){
        this.nameHero = nameHero;
        this.ageHero = ageHero;
        this.classHero = classHero;
}
    attack(){
        let attackType;

        switch(this.classHero){
            case "mago":
                attackType = "magia";
            break;

            case "guerreiro":
                attackType = "espada";
            break;

            case "monge":
                attackType = "artes marciais";
            break;

            case "ninja":
                attackType = "shuriken";
            break;

            default:
                attackType = "ataque desconhecido"
            break
        }

        console.log(`o ${this.classHero} ${this.nameHero} usou ${attackType}`);

    }

}

let hero1 = new heroesGame("Zelda", 35, "guerreiro"); 
let hero2 = new heroesGame("Merlim", 2019, "mago"); 
let hero3 = new heroesGame("Shaolin", 32, "monge"); 
let hero4 = new heroesGame("Shurato", 16, "ninja");

hero1.attack();
hero2.attack();
hero3.attack();
hero4.attack();