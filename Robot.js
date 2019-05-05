class Robot {
    constructor(id, x = 0, y = 0, clr) {
        this.id = id;
        this.x = x;
        this.y = y;
        this.radius = 15;
        this.clr = clr || color(255, 255, 255);
        this.estimated_cell = -1;
    }

    setSpace(width, height) {
        this.spaceWidth = width;
        this.spaceHeight = height;
    }

    setPosition(x, y) {
        this.x = x;
        this.y = y;
    }

    move(dx, dy) {
        if (this.x + dx > 0 && this.x + dx < this.spaceWidth) this.x += dx;
        if (this.y + dy > 0 && this.y + dy < this.spaceHeight) this.y += dy;
    }

    print() {
        return `R(${this.x}, ${this.y})`;
    }

    draw() {
        if (this.clr) fill(this.clr);
        circle(this.x, this.y, 2 * this.radius);
        fill(255);
        text(this.id, this.x - 5, this.y + 5);
    }

    initP(M) {
        this.P = Matrix(M, M, 0);
        this.new_area = 0;
        this.old_area = 0;
    }

    initDistribution (distribution) {
        this.distribution = distribution;
    }

    initCellSizes (cellSizes) {
        this.cellSizes = cellSizes;
    }

    initMarkovMatrixP (M) {
        if (!this.MMP)
            this.MMP = Matrix(M, M, 0);
    }

    setMarkovMatrixP(MMP, M, MMP_iters) {
        this.MMP = Matrix(M, M, 0);
        for (let i = 0; i < M; i++) {
            for (let j = 0; j < M; j++) {
                this.MMP[i][j] = MMP[i][j] / MMP_iters;
            }
        }
    }

    /**
     *
     * @param {Robot} r
     */
    collision(r) {
        let a, x, y;

        a = this.radius + r.radius;
        x = this.x - r.x;
        y = this.y - r.y;

        if (a > Math.sqrt(x * x + y * y)) {
            return true;
        } else {
            return false;
        }
    }
}
