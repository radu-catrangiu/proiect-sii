let pause = false;

document.addEventListener('keydown', ev => {
    if (ev.keyCode == 32) {
        pause = !pause;
        if (pause) {
            frameRate(0);
        } else {
            frameRate(30);
        }
    }
});

document.addEventListener('mousedown', ev => {
    show_robots = !show_robots;
});

/**
 *
 * @param {Robot} r
 */
function check_area(r) {
    let cw = width / 3;
    let ch = height / 3;

    let y = Math.ceil(r.y / ch) - 1;
    let x = Math.ceil(r.x / cw) - 1;

    return cells[y][x];
}

function draw_bg() {
    background(200);
    for (var x = 0; x < width; x += width / 3) {
        for (var y = 0; y < height; y += height / 3) {
            stroke(0);
            strokeWeight(1);
            line(x, 0, x, height);
            line(0, y, width, y);
        }
    }
    let i = 1;
    for (var y = 0; y < height; y += height / 3) {
        for (var x = 0; x < width; x += width / 3) {
            let s = 'Area ' + i++;
            fill(50);
            text(s, x + 25, y + 25);
        }
    }
}

/**
 *
 * @param {[Robot]} robots
 */
function get_initial_data(robots) {
    let arr = [];

    for (let r of robots) {
        arr.push({
            x: r.x,
            y: r.y
        });
    }

    return arr;
}

/**
 *
 * @param {[Robot]} robots
 */
function get_markov_matrix(robots) {
    let arr = [];

    for (let ri of robots) {
        arr.push(ri.MMP);
    }

    return arr;
}

function print_to_div(text) {
    document.getElementById('print').innerHTML = text;
}
