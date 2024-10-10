// script.js
window.onload = function() {
    var canvas = document.getElementById('smileyFaceCanvas');
    var ctx = canvas.getContext('2d');

    // 颜色
    ctx.fillStyle = 'green';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // 圆形脸庞
    ctx.beginPath();
    ctx.arc(250, 200, 150, 0, Math.PI * 2, true); // (x, y, radius, startAngle, endAngle, counterclockwise)
    ctx.fillStyle = 'yellow';
    ctx.fill();
    ctx.closePath();

    // 眼睛
    ctx.beginPath();
    ctx.arc(150, 150, 20, 0, Math.PI * 2, true); // 左眼
    ctx.arc(350, 150, 20, 0, Math.PI * 2, true); // 右眼
    ctx.fillStyle = 'black';
    ctx.fill();
    ctx.closePath();

    // 鼻子
    ctx.beginPath();
    ctx.moveTo(250, 200);
    ctx.lineTo(250, 220);
    ctx.strokeStyle = 'black';
    ctx.stroke();
    ctx.closePath();

    // 嘴巴
    ctx.beginPath();
    ctx.arc(250, 250, 80, 0, Math.PI, false); // 半圆
    ctx.strokeStyle = 'black';
    ctx.stroke();

    // 添加文字
    ctx.font = '40px serif';
    ctx.fillStyle = 'black';
    ctx.fillText('The Canvas brought me to life', 12, 400);
    ctx.font = '40px serif';
    ctx.fillStyle = 'black';
    ctx.fillText('hahahahahahahaha', 12, 500);
};
