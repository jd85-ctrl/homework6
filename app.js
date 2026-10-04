let hp = 100;

const attackButton = document.getElementById("attack")
const hpDisplay = document.getElementById("hp")
const result = document.getElementById("result")

attackButton.addEventListener("click", function() {
    let damage = Math.floor(Math.random() * 16) + 5;
    let hit = Math.random();

    if (hit > 0.9) {
        result.textContent = "The attack missed!";
    } else {
        hp = hp - damage;
        if (hp <= 0) {
            hp = 0;
            result.textContent = "It fainted!";
        } else {
            result.textContent = "The attack did " + damage + " damage";
        }
    }

    hpDisplay.textContent = hp;
});

