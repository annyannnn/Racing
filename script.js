// Объявление переменных
startBlock = document.querySelector("#start");
gameBlock = document.querySelector("#game");
endBlock = document.querySelector("#end");
opsBlock = document.querySelector("#ooops");
startButton = document.querySelector(".neon-button")
scoreText = document.querySelector("#score")
noButton = document.querySelector(".btn-7");
yesButton = document.querySelector(".btn-6");
restartButton = document.querySelector(".btn-8");
newLevelButton = document.querySelector(".btn-9");
levelBlock = document.querySelector("#level");
audioPlayer = document.querySelector("audio");
gamer = document.querySelector("#player");
testButton = document.querySelector("#test");
speedText = document.querySelector("#speed");
speed2Text = document.querySelector("#speed2");
exellentText = document.querySelector("#exellent");
startBlock.style.display = "block";
medal1 = document.querySelector("#medal1");
medal2 = document.querySelector("#medal2");
medal2 = document.querySelector("#medal3");
medal2 = document.querySelector("#medal4");
medal2 = document.querySelector("#medal5");
medal2 = document.querySelector("#medal6");
medal2 = document.querySelector("#medal7");
medal2 = document.querySelector("#medal8");
medal2 = document.querySelector("#medal9");
var score = 0;
countLifes = 0;
// сартовые кнопки
// -----------------------------------------------
startButton.onclick = function () {
	startGame();
	createEnemy();
	createGasoline();
	createBoss();
}
// кнопка No при проверке возраста
noButton.onclick = function () {
	audio6 = new Audio('audio/btnsound.mp3');
	audio6.play();
	check();
	createLifes();
	opsBlock.style.display = "none";
	gameBlock.style.display = "block";
	document.body.style.backgroundImage = "url(123.png)";

	audioPlayer = new Audio('audio/normal.mp3');
	audioPlayer.play();

}
// кнопка Yes при проверке возраста
yesButton.onclick = function () {
	audio7 = new Audio('audio/btnsound.mp3');
	audio7.play();
	check();
	createLifes();
	opsBlock.style.display = "none";
	gameBlock.style.display = "block";
	document.body.style.backgroundImage = "url(123.png)";
	audioPlayer = new Audio('audio/not.mp3');
	audioPlayer.play();
}
// Кнопка перезапуска игры
restartButton.onclick = function () {
	restart();
}
newLevelButton.onclick = function () {
	levelBlock.style.display = "none";
	opsBlock.style.display = "block";
	restart();

}
// -----------------------------------------------------
// функция старта игры
function startGame() {
	startBlock.style.display = "none";
	opsBlock.style.display = "block";
	scoreText.innerHTML = 'Points: ' + score;
	createLifes();


}

// функция включение и выключение звука по значку
sound = "on";
soundButton = document.querySelector("#sound img");
//Функция при нажатии на картинку звука:Если мелодия играет то меняем картинку, на ту что показывает звук sound_on и наоборот
soundButton.onclick = function () {
	if (sound == "on") {
		soundButton.src = "mute_sound.png";
		sound = "off";
		audioPlayer.pause();
	} else {
		soundButton.src = "sound_on.png";
		sound = "on";
		audioPlayer.play();
	}
}



//Создание жизней . 5 жизней
function createLifes() {
	let lifesBlock = document.querySelector("#lifes");
	lifesBlock.innerHTML = "";
	let count = 0
	while (count < countLifes) {
		let span = document.createElement("span");
		lifes.appendChild(span);
		count += 1;
	}
}
// Перемещения 
document.onkeydown = function (event) {
	if ((gamer.offsetLeft > 340 && event.keyCode == 37)) {
		gamer.style.left = gamer.offsetLeft - 80 + "px";
	} if ((gamer.offsetLeft < 1100 && event.keyCode == 39)) {
		gamer.style.left = gamer.offsetLeft + 80 + "px";
	}
}
// Создание врага
function createEnemy() {
	let enemy = document.createElement("div");
	enemy.className = "enemy " + typeEnemy();
	enemy.style.left = random(400, 1100) + "px";

	gameBlock.appendChild(enemy);
	moveEnemy(enemy);
}
// тип скина врага
function typeEnemy() {
	if (random(1, 3) == 1) {
		return "type-1"
	} else if (random(1, 3) == 2) {
		return "type-2"
	} else {
		return "type-3"
	}
}

// Создание канистры
function createGasoline() {

	let timerId = setInterval(function () {
		if (endBlock.style.display == "none" && levelBlock.style.display == "none") {
			let gasoline = document.createElement("div");
			gasoline.className = "gasoline type-1";
			gasoline.style.left = random(300, 1100) + "px";

			gameBlock.appendChild(gasoline);
			moveGasoline(gasoline);
			clearInterval(timerId);
		}
	}, 5000)


}
// перемещение канистры
function moveGasoline(gasoline) {
	let timerId = setInterval(function () {
		gasoline.style.top = gasoline.offsetTop + 10 + "px";
		if (gasoline.offsetTop > 580) {
			gasoline.remove();
			createGasoline();
			clearInterval(timerId);
		}
	}, 30);

}
// Перемещение врага
function moveEnemy(enemy) {
	let timerId = setInterval(function () {
		if (score >= 5) {
			enemy.style.top = enemy.offsetTop + 10 + "px";
			speed.style.display = "block";
			if (score > 6) {
				speed.style.display = "none"
			}
			if (score >= 10) {
				enemy.style.top = enemy.offsetTop + 15 + "px";
				speed2Text.style.display = "block";
			} if (score > 11) {
				speed2Text.style.display = "none";
			}

			if (score >= 20) {
				exellentText.style.display = "block";
			}
			if (score >= 22) {
				medal1.style.display = "block";
			} switch (score) {
		        case 42:
		          medal2.style.display = "block";
		          break;
		        case 62:
		          medal3.style.display = "block";
		          break;
		        case 82:
		          medal4.style.display = "block";
		          break;          
		        case 102:
		          medal5.style.display = "block";
		          break;
		        case 122:
		          medal6.style.display = "block";
		          break;
		        case 142:
		          medal7.style.display = "block";
		          break;
		        case 162:
		          medal8.style.display = "block";
		          break;
		        case 182:
		          medal9.style.display = "block";
		          break;                                              
		    }
		    if (score >= 200) {
		    	gameBlock.style.display = "none";
				levelBlock.style.display = "block";
			}
		} else {
			enemy.style.top = enemy.offsetTop + 5 + "px";
		}
		if (enemy.offsetTop > 580) {

			score += 1;

			scoreText.innerHTML = 'Points: ' + score;
			if (score >= 2) {
				enemy.style.top = enemy.offsetTop + 100 + "px";
			}

			enemy.remove();
			createEnemy();
			clearInterval(timerId);


		}
		isBoom(gamer);
		isBoom1(gamer);
		isBoom2(gamer);

	}, 30);
}

// функция смерти при столкновении с Боссом
function fullDie() {
	countLifes = countLifes - countLifes;
	if (countLifes <= 0) {
		endGame();
	}
	createLifes();
}

// Функция окончания игры
function die() {
	countLifes = countLifes - 1;
	if (countLifes <= 0) {
		endGame();
	}
	createLifes();
}
// Функция понижения 2 жизней от столкновения
function lifeDown() {
	countLifes = countLifes - 2;
	if (countLifes <= 0) {
		endGame();
	}
	createLifes();
}
// Функция добавления жихни
function heal() {
	countLifes = countLifes + 1;
	if (countLifes <= 0) {
		endGame();
	}
	createLifes();
}
// Функция рендом
function random(min, max) {
	// получить случайное число от (min-0.5) до (max+0.5)
	let rand = min - 0.5 + Math.random() * (max - min + 1);
	return Math.round(rand);
}
// Фукнция столкномения игрока и врага
function isBoom(gamer) {
	let enemy = document.querySelector(".enemy");

	var b1 = gamer.offsetTop - gamer.clientHeight;
	var r1 = gamer.offsetLeft - gamer.clientWidth;
	var b2 = enemy.offsetTop + enemy.clientHeight;
	var r2 = enemy.offsetLeft + enemy.clientWidth;
	var x1 = gamer.offsetLeft;
	var y1 = gamer.offsetTop;
	var x2 = enemy.offsetLeft;
	var y2 = enemy.offsetTop

	if (x2 < x1 && x2 > r1 && y2 > b1) {
		audio2 = new Audio('audio/7.mp3');
		audio2.play();
		createBoom(gamer.offsetTop, gamer.offsetLeft);
		if (score >= 10) {
			lifeDown();
			enemy.remove();
			createEnemy();
		} else {
			enemy.remove();
			die();
			createEnemy();
		}
	}

}
// функция столкновения врага с боссом
function isBoom3(gamer) {
	let boss = document.querySelector(".enemy.type-4");

	var b1 = gamer.offsetTop - gamer.clientHeight;
	var r1 = gamer.offsetLeft - gamer.clientWidth;
	var b2 = boss.offsetTop + boss.clientHeight;
	var r2 = boss.offsetLeft + boss.clientWidth;
	var x1 = gamer.offsetLeft;
	var y1 = gamer.offsetTop;
	var x2 = boss.offsetLeft;
	var y2 = boss.offsetTop

	if (x2 < x1 && x2 > r1 && y2 > b1) {
		audio2 = new Audio('audio/7.mp3');
		audio2.play();
		createBoom(gamer.offsetTop, gamer.offsetLeft);
		boss.remove();
		fullDie();
		createBoss();

	}

}
// Фукнция столкномения игрока и врага
function isBoom2(gamer) {
	let enemy = document.querySelector(".enemy");

	var b1 = gamer.offsetTop - gamer.clientHeight;
	var r1 = gamer.offsetLeft + gamer.clientWidth;
	var b2 = enemy.offsetTop + enemy.clientHeight;
	var r2 = enemy.offsetLeft + enemy.clientWidth;
	var x1 = gamer.offsetLeft;
	var y1 = gamer.offsetTop;
	var x2 = enemy.offsetLeft;
	var y2 = enemy.offsetTop

	if (x2 > x1 && x2 < r1 && y2 > b1) {
		audio1 = new Audio('audio/7.mp3');
		audio1.play();
		createBoom(gamer.offsetTop, gamer.offsetLeft);
		if (score >= 10) {
			lifeDown();
			enemy.remove();
			createEnemy();
		} else {
			enemy.remove();
			die();
			createEnemy();
		}

	}
}
// функция столкновения игрока и канистры
function isBoom1(gamer) {
	let gas = document.querySelector(".gasoline");

	var b1 = gamer.offsetTop - gamer.clientHeight;
	var r1 = gamer.offsetLeft + gamer.clientWidth;
	var b2 = gas.offsetTop + gas.clientHeight;
	var r2 = gas.offsetLeft + gas.clientWidth;
	var x1 = gamer.offsetLeft;
	var y1 = gamer.offsetTop;
	var x2 = gas.offsetLeft;
	var y2 = gas.offsetTop

	if (x2 > x1 && x2 < r1 && y2 > b1) {
		audio = new Audio('audio/13889.mp3');
		audio.play();
		createBoom1(gamer.offsetTop, gamer.offsetLeft);

		gas.remove();
		heal();
		createGasoline();

	}
}

// функция создания взрыва
function createBoom(top, left) {

	let boom = document.createElement("div");
	boom.className = "boom";
	boom.style.top = top + "px";
	boom.style.left = left + "px";
	gameBlock.appendChild(boom);
	setTimeout(function () {
		boom.remove();
	}, 500);
}
// функция создания сердцец от столкновения с канистрой
function createBoom1(top, left) {

	let boom = document.createElement("div");
	boom.className = "boom1";
	boom.style.top = top + "px";
	boom.style.left = left + "px";
	gameBlock.appendChild(boom);
	setTimeout(function () {
		boom.remove();
	}, 500);
}
// Блок конца игры с результатами
function endGame() {
	audioPlayer.pause();
	audio3 = new Audio('audio/58.mp3');
	audio3.play();
	let scoreBlock = document.querySelector("#c8 span");
	scoreBlock.innerText = score;
	gameBlock.innerHTML = "";
	let endBlock = document.querySelector("#end");
	endBlock.style.display = "block";
	let restartButton = document.querySelector("#end button");

}


// функция создания босса
function createBoss() {

	let timerId = setInterval(function () {
		if (endBlock.style.display == "none" && levelBlock.style.display == "none" && opsBlock.style.display == "none") {
			let boss = document.createElement("div");
			boss.className = "enemy type-4";
			boss.style.left = random(400, 1100) + "px";
			gameBlock.appendChild(boss);
			moveBoss(boss);
			audio5 = new Audio('audio/boss.mp3');
			audio5.play();
			clearInterval(timerId);
		}
	}, 20000)
}

// функция перемещения босса
function moveBoss(boss) {
	let timerId = setInterval(function () {
		boss.style.top = boss.offsetTop + 10 + "px";
		if (boss.offsetTop > 580) {
			score += 1;
			scoreText.innerHTML = 'Points: ' + score;
			boss.remove();
			createBoss();
			clearInterval(timerId);
		}
		isBoom3(gamer);
	}, 30);

}

// Функция перезапуска игры
function restart() {
	location.reload();
}

function check() {
	var rarr = document.getElementsByName("contact");
	if (rarr[0].checked) {
		countLifes += 5;
	}
	if (rarr[1].checked) {
		countLifes += 3;
	}
	if (rarr[2].checked) {
		countLifes += 1;
	}
} 	