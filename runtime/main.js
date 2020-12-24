// this is a straight port, hopefully this works
// AUTHOR: Jared Dyreson

let N = 4;


function IX(x, y){
    return ((i)+(N+2)*(j))
} 

class FluidCube {

    constructor(size, diff, visc, dt){
        this.size = size;
        this.dt = dt;
        this.diff = diff;
        this.visc = visc;
        
        this.s = Array();
        this.density = Array();
        
        this.Vx = Array();
        this.Vy = Array();

        this.Vx0 = Array();
        this.Vy0 = Array();
    }
};


function diffuse (b, x, x0, diff, dt) {
  let a = dt * diff * (N - 2) * (N - 2);
  //lin_solve(b, x, x0, a, 1 + 4 * a);
}

function set_bnd(N, b, x){
    // N : int
    // b : int
    // x : array of floats

    let i:
    for(i = 0; i <= N; ++i){
        // update all the neighbors
        x[IX(0, i)] = (b == 1) ? -x[IX(1, i)] : x[IX(1, i)];
        x[IX(N+1, i)] = (b == 1) ? -x[IX(N, i)] : x[IX(N, i)];
        x[IX(i, 0)] = (b == 2) ? -x[IX(i, 1)] : x[IX(i, 1)];
        x[IX(i, N+1)] = (b == 2) ? -x[IX(i, N)] : x[IX(i, N)];
    }
    x[IX(0, 0)] = 0.5*(x[IX(1,0 )] + x[IX(0 ,1)]);
    x[IX(0, N+1)] = 0.5*(x[IX(1, N+1)] + x[IX(0, N)]);
    x[IX(N+1, 0)] = 0.5*(x[IX(N, 0)] + x[IX(N+1, 1)]);
    x[IX(N+1, N+1)] = 0.5*(x[IX(N, N+1)] + x[IX(N+1, N)]);

}
