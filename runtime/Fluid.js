function constrain_(value, minimum, maximum){
    // TODO: might cause problems
    return ((value >= minimum) && (value <= maximum)) ? value : maximum;
}
function IX(x, y){
    x = constrain_(x, 0, N-1);
    y = constrain_(y, 0, N-1);
    return x + (y * N);
}

class Fluid {
    size;
    dt;
    diff;
    visc;

    s;
    density;

    Vx;
    Vy;

    Vx0;
    Vy0;

    N;
    iter;
    SCALE;
    t;

  constructor(dt, diffusion, viscosity) {

    this.size = N;
    this.dt = dt;
    this.diff = diffusion;
    this.visc = viscosity;

    this.s = new Array(N*N);
    this.density = new Array(N*N);

    this.Vx = new Array(N*N);
    this.Vy = new Array(N*N);

    this.Vx0 = new Array(N*N);
    this.Vy0 = new Array(N*N);
    this.N = 128;
    this.iter = 16;
    this.SCALE = 4;
    this.t = 0;
  }

  void step() {
    let N        = this.size;
    let visc     = this.visc;
    let diff     = this.diff;
    let dt       = this.dt;
    let Vx       = this.Vx;
    let Vy       = this.Vy;
    let Vx0      = this.Vx0;
    let Vy0      = this.Vy0;
    let s        = this.s;
    let density  = this.density;

    this.diffuse(1, Vx0, Vx, visc, dt);
    this.diffuse(2, Vy0, Vy, visc, dt);

    this.project(Vx0, Vy0, Vx, Vy);

    this.advect(1, Vx, Vx0, Vx0, Vy0, dt);
    this.advect(2, Vy, Vy0, Vx0, Vy0, dt);

    this.project(Vx, Vy, Vx0, Vy0);

    this.diffuse(0, s, density, diff, dt);
    this.advect(0, density, s, Vx, Vy, dt);
  }

  addDensity(x, y, amount) {
    let index = IX(x, y);
    this.density[index] += amount;
  }

  addVelocity(x, y, amountX, amountY) {
    let index = IX(x, y);
    this.Vx[index] += amountX;
    this.Vy[index] += amountY;
  }

  renderD() {
    colorMode(HSB, 255);

    for (let i = 0; i < this.N; i++) {
      for (let j = 0; j < this.N; j++) {
        let x = i * this.SCALE;
        let y = j * this.SCALE;
        let d = this.density[IX(i, j)];
        fill((d + 50) % 255,200,d);
        noStroke();
        square(x, y, SCALE);
      }
    }
  }

  renderV() {

    for (let i = 0; i < this.N; i++) {
      for (let j = 0; j < this.N; j++) {
        let x = i * this.SCALE;
        let y = j * this.SCALE;
        let vx = this.Vx[IX(i, j)];
        let vy = this.Vy[IX(i, j)];
        stroke(255);

        if (!(Math.abs(vx) < 0.1 && Math.abs(vy) <= 0.1)) {
          line(x, y, x+vx*SCALE, y+vy*SCALE );
        }
      }
    }
  }

  fadeD() {
    for (let i = 0; i < this.density.length; i++) {
      let d = density[i];
      density[i] = constrain(d-0.02, 0, 255);
    }
  }
}
