class Robot {
    constructor(x = 0, y = 0, clr) {
        this.x = x;
        this.y = y;
        this.radius = 15;
        this.clr = clr || color(255, 255, 255);
    }

    setSpace(width, height) {
        this.spaceWidth = width;
        this.spaceHeight = height;
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
        this.MMP = Matrix(M, M, 0);
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
