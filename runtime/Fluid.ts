import { N } from './HelperFunctions';

class Fluid {
    NUM: number; // dimensions of our fluid. must be a perfect square to work
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
    

    constructor(NUM: number, diffusion: number, viscosity: number, rateOfChange: number){
        this.size = (NUM + 2) * (NUM + 2);
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
        N = NUM;
    }
};

let F = new Fluid(4, 1, 1, 0.5);

console.log(N);
