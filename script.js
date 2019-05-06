const random = new Random();
let phase = 2;

let robot_count = 50;
let r;
let robots = new Array(robot_count);
let steps = 20;
let collision = false;
let cells = Matrix(3, 3);

let canvas_width = 1280;
let canvas_height = 720;
function setup() {
    let canvas = createCanvas(canvas_width, canvas_height);
    canvas.parent('sim-holder');
    background(200, 200, 200);
    frameRate(500);

    for (let i = 0; i < robot_count; i++) {
        let x = init_data.robots[i].x;
        let y = init_data.robots[i].y;
        let clr = color(...init_data.colors[i]);
        robots[i] = new Robot(i, x, y, clr);
        robots[i].setSpace(canvas_width, canvas_height);
        robots[i].setMarkovMatrixP(
            init_data.MMPs[i],
            init_data.M,
            init_data.MMP_iters
        );
        robots[i].initCollisionProbability(init_data.collision_probability);
    }

    r = new Robot(robot_count, canvas_width / 2, canvas_height / 2);
    r.setSpace(canvas_width, canvas_height);
    r.setMarkovMatrixP(
        init_data.MMPs[robot_count],
        init_data.M,
        init_data.MMP_iters
    );
    r.initCollisionProbability(init_data.collision_probability);
    robots.push(r);

    let k = 1;
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            cells[i][j] = k++;
        }
    }

    compute_distribution();
    init_algorithm();
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
let collision_probability = Array(M).fill(0);

function compute_distribution() {
    const distribution = Array(M).fill(0);
    const cell_sizes = Array(M).fill(1 / M);
    distribution[check_area(r) - 1] += 1 / (robot_count + 1);

    for (let i = 0; i < robot_count; i++) {
        distribution[check_area(robots[i]) - 1] += 1 / (robot_count + 1);
    }

    for (let ri of robots) {
        ri.initDistribution(distribution);
        ri.initCellSizes(cell_sizes);
        ri.initMarkovMatrixP(M);
    }
}

function init_algorithm() {
    for (let ri of robots) {
        ri.initAlpha(robots, M);
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
        for (let rj of robots) {
            if (ri.id === rj.id) continue;

            if (ri.collision(rj)) {
                collision_probability[check_area(ri) - 1]++;
            }
        }
    }

    if (iter_count === max_iter) {
        frameRate(0);
        for (let ri of robots) {
            ri.draw();
        }
        phase = 2;
    }
}

function phase2() {
    if (frameCount % 10 === 0) {
        print_to_div(get_estimated_cells());
    }

    draw_bg();

    for (let ri of robots) {
        ri.computeCellEstimateProbability();
        ri.computeEstimatedCell();
    }

    for (let ri of robots) {
        const dx = random.integer(-steps, steps);
        const dy = random.integer(-steps, steps);
        ri.move(dx, dy);
        ri.draw();
    }

    for (let ri of robots) {
        ri.computeAlpha(robots, M);
    }
}

function get_estimated_cells() {
    let arr = [];
    let res = [];
    for (let ri of robots) {
        let real_area = check_area(ri);
        let tag1 = ri.estimated_cell === real_area ? '<u>' : '';
        let tag2 = ri.estimated_cell === real_area ? '</u>' : '';
        let str = `<b>${ri.id}</b> : ${ri.estimated_cell} vs ${real_area}`;
        arr.push(tag1 + str + tag2);
    }

    for (let i = 0; i < robots.length / 10; i++) {
        res.push(
            arr
                .slice(i * 10, (i + 1) * 10)
                .join(
                    '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
                )
        );
    }

    return res.join('<br>');
}
