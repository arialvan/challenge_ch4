class Game {
	constructor() {
		this.pilihan = ["batu", "kertas", "gunting"]
	}

	play(realPlayer) {
		const comPlayer = this.pilihan[Math.floor(Math.random() * 3)]
		let hasil
		if (realPlayer === comPlayer) {
			hasil = "Draw!"
		} else if (
			(realPlayer === "batu" && comPlayer === "gunting") ||
			(realPlayer === "kertas" && comPlayer === "batu") ||
			(realPlayer === "gunting" && comPlayer === "kertas")
		) {
			hasil = "PLAYER 1 WIN"
		} else {
			hasil = "COM WIN"
		}
		return hasil
	}
}

const game = new Game();

function hasilBatu(){    
    const hasil = game.play('batu')
    document.querySelector("#hasil").textContent = hasil
    if (document.getElementById('Div1')) {

        if (document.getElementById('Div1').style.display == 'none') {
            document.getElementById('Div1').style.display = 'block';
            document.getElementById('Div2').style.display = 'none';

        }
        else {
            document.getElementById('Div1').style.display = 'none';
            document.getElementById('Div2').style.display = 'block';
        }
    }
}

function hasilKertas() {
    const hasil = game.play('kertas')
    document.querySelector("#hasil").textContent = hasil

    if (document.getElementById('Div1')) {

        if (document.getElementById('Div1').style.display == 'none') {
            document.getElementById('Div1').style.display = 'block';
            document.getElementById('Div2').style.display = 'none';
        }
        else {
            document.getElementById('Div1').style.display = 'none';
            document.getElementById('Div2').style.display = 'block';
        }
    }
}

function hasilGunting() {
    const hasil = game.play('gunting')
    document.querySelector("#hasil").textContent = hasil

    if (document.getElementById('Div1')) {

        if (document.getElementById('Div1').style.display == 'none') {
            document.getElementById('Div1').style.display = 'block';
            document.getElementById('Div2').style.display = 'none';
        }
        else {
            document.getElementById('Div1').style.display = 'none';
            document.getElementById('Div2').style.display = 'block';
        }
    }
}


// const batuKlik = document.querySelector("#batu");
// batuKlik.addEventListener("click", () => {
// 	const hasil = game.play("rock");
// 	document.querySelector("#hasil").textContent = hasil;
// });

// const paperButton = document.querySelector("#paper");
// paperButton.addEventListener("click", () => {
// 	const result = game.play("paper");
// 	document.querySelector("#result").textContent = result;
// });

// const scissorsButton = document.querySelector("#scissors");
// scissorsButton.addEventListener("click", () => {
// 	const result = game.play("scissors");
// 	document.querySelector("#result").textContent = result;
// });
