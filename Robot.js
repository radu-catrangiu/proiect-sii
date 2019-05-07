class Robot {
    constructor(id, x = 0, y = 0, clr) {
        this.id = id;
        this.x = x;
        this.y = y;
        this.radius = 15;
        this.clr = clr || color(255, 255, 255);
        this.estimated_cell = -1;
        this.G = null;
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

    initDistribution(distribution) {
        this.distribution = distribution;
    }

    initCollisionProbability(CP) {
        this.CP = CP;
    }

    initCellEstimateProbability(M) {
        this.CEP = Array(M).fill(0);
    }

    initAlpha(robots, M) {
        this.alpha = Array(M).fill(0);
        this.computeG(robots, M);
        for (let cell = 0; cell < M; cell++) {
            this.alpha[cell] = this.G[cell] * this.distribution[cell];
        }
    }

    initCellSizes(cellSizes) {
        this.cellSizes = cellSizes;
    }

    initMarkovMatrixP(M) {
        if (!this.MMP) this.MMP = Matrix(M, M, 0);
    }

    setMarkovMatrixP(MMP, M, MMP_iters) {
        this.MMP = Matrix(M, M, 0);
        for (let i = 0; i < M; i++) {
            for (let j = 0; j < M; j++) {
                this.MMP[i][j] = MMP[i][j] / MMP_iters;
            }
        }
    }

    computeAlpha(robots, M) {
        this.computeG(robots, M);
        let newAlpha = Array(M);
        for (let i = 0; i < M; i++) {
            let sum = 0;
            for (let j = 0; j < M; j++) {
                sum += this.alpha[j] * this.MMP[i][j];
            }
            newAlpha[i] = sum * this.G[i];
            if (newAlpha[i] < 0.01) newAlpha[i] *= 100;
            else if (newAlpha[i] >= 1) newAlpha[i] /= 100;
        }
        this.alpha = newAlpha;
    }

    computeG(robots, M) {
        //Check for colision
        let collision = false;
        for (let ri of robots) {
            if (ri.id === this.id) continue;
            if (this.collision(ri)) {
                collision = true;
                break;
            }
        }

        this.G = Array(M);
        for (let i = 0; i < M; i++) {
            if (collision) {
                this.G[i] = this.CP[i];
            } else {
                this.G[i] = 1 - this.CP[i];
            }
        }
    }

    computeCellEstimateProbability() {
        let alphaSum = this.alpha.reduce((acc, x) => x + acc, 0);
        this.CEP = this.alpha.map(e => e / alphaSum);
    }

    computeEstimatedCell() {
        this.estimated_cell = indexOfMax(this.CEP) + 1;
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
