class Vector {
   container: number[];

   constructor(vec: number[]){
       this.container = vec;
   }

   addition(destination: Vector){
        if(destination.container.length != this.container.length){
            return;
        }
        let list: number[] = [];
        for(let i = 0; i < this.container.length; ++i){
            list[i] = this.container[i] + destination.container[i];
        }
        return new Vector(list);
   }
};

//class Cell {

//};

class Fluid {
    N: number; // dimensions of our fluid. must be a perfect square to work
    size: number;
    dt: number; // time step
    diffusion: number; // diffusion
    viscosity: number; // how thick is the fluid

    unit_vector: number[];
    velocity_vector: number[];

    unit_vector_previous: number[];
    velocity_vector_previous: number[];

    density: number[];
    density_previous: number[];

    sources: number[]; // seen as s[]
    

    constructor(N: number, diffusion: number, viscosity: number, rateOfChange: number){
        this.size = (N + 2) * (N + 2);
        this.dt = rateOfChange;
        this.diffusion = diffusion;
        this.viscosity = viscosity;
        
        this.unit_vector = Array<number>();
        this.velocity_vector = Array<number>();
        this.unit_vector_previous = Array<number>();
        this.velocity_vector_previous = Array<number>();

        this.density = Array<number>();
        this.density_previous = Array<number>();

        this.sources = Array<number>();
    }

    IX(i: number, j: number){
        return ((i) + (this.N+2) * (j));
    }
};

let F = new Fluid(4, 1, 1, 0.5);
