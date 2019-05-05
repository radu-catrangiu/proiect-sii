const random = new Random();

let robot_count = 50;
let r;
let robots = new Array(robot_count);
let steps = 20;
let collision = false;
let phase = 1;
let cells = Matrix(3, 3);

let canvas_width = 1280;
let canvas_height = 720;
function setup() {
    createCanvas(canvas_width, canvas_height);
    background(200, 200, 200);
    frameRate(500);

    r = new Robot(canvas_width / 2, canvas_height / 2);
    r.setSpace(canvas_width, canvas_height);

    for (let i = 0; i < robot_count; i++) {
        // let x = random.integer(0, canvas_width);
        // let y = random.integer(0, canvas_height);
        let x = init_data.robots[i].x;
        let y = init_data.robots[i].y;
        let clr = color(...init_data.colors[i]);
        robots[i] = new Robot(x, y, clr);
        robots[i].setSpace(canvas_width, canvas_height);
        // robots[i].draw();
    }

    robots.push(r);

    let k = 1;
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            cells[i][j] = k++;
        }
    }

    compute_distribution();
}

function draw() {
    switch (phase) {
        case 1:
            phase1();
            break;
        case 2:
            phase2();
            break;
    }
}

const M = 9;

function compute_distribution() {
    const distribution = Array(M).fill(0);
    const cell_sizes = Array(M).fill(1 / M);
    distribution[check_area(r) - 1] += 1 / (robot_count + 1);

    for (let i = 0; i < robot_count; i++) {
        distribution[check_area(robots[i]) - 1] += 1 / (robot_count + 1);
    }

    for (let r of robots) {
        r.initDistribution(distribution);
        r.initCellSizes(cell_sizes);
        r.initMarkovMatrixP(M);
    }
}

let iter_count = 0;
let max_iter = 30000;
let show_robots = false;
function phase1() {
    iter_count++;
    if (show_robots) draw_bg();
    for (let ri of robots) {
        ri.new_area = check_area(ri) - 1;
        ri.MMP[ri.new_area][ri.old_area]++;
        ri.old_area = ri.new_area;
        const dx = random.integer(-steps, steps);
        const dy = random.integer(-steps, steps);
        ri.move(dx, dy);
        if (show_robots) ri.draw();
    }

    if (iter_count === max_iter) {
        frameRate(0);
        for (let ri of robots) {
            ri.draw();
        }
        // phase = 2;
    }
}

function phase2() {
    // if (collision) return;
    draw_bg();

    const dx = random.integer(-steps, steps);
    const dy = random.integer(-steps, steps);
    r.move(dx, dy);
    r.draw();

    for (let i = 0; i < robot_count; i++) {
        const dx = random.integer(-steps, steps);
        const dy = random.integer(-steps, steps);
        robots[i].move(dx, dy);
        robots[i].draw();
    }

    for (let i = 0; i < robot_count; i++) {
        if (r.collision(robots[i])) {
            collision = true;
        }
    }
}
