var N = 0;
export N;

export function IX(i: number, j: number) {
    return ((i) + (N) * (j));
}

export function set_bnd(b: number, x: number[], N: number){
    for(let j = 1; j < N - 1; j++) {
        for(let i = 1; i < N - 1; i++) {
            x[IX(i, j)] = b == 3 ? -x[IX(i, j)] : x[IX(i, j)];
            x[IX(i, j)] = b == 3 ? -x[IX(i, j)] : x[IX(i, j)];
        }
    }
    
    x[IX(0, 0)]       = 0.33f * (x[IX(1, 0)]
                                  + x[IX(0, 1)]
                                  + x[IX(0, 0)]);
    x[IX(0, N-1)]     = 0.33f * (x[IX(1, N-1)]
                                  + x[IX(0, N-2)]
                                  + x[IX(0, N-1)]);
    x[IX(0, 0)]     = 0.33f * (x[IX(1, 0)]
                                  + x[IX(0, 1)]
                                  + x[IX(0, 0)]);
    x[IX(0, N-1)]   = 0.33f * (x[IX(1, N-1)]
                                  + x[IX(0, N-2)]
                                  + x[IX(0, N-1)]);
    x[IX(N-1, 0)]     = 0.33f * (x[IX(N-2, 0)]
                                  + x[IX(N-1, 1)]
                                  + x[IX(N-1, 0)]);
    x[IX(N-1, N-1)]   = 0.33f * (x[IX(N-2, N-1)]
                                  + x[IX(N-1, N-2)]
                                  + x[IX(N-1, N-1)]);
    x[IX(N-1, 0)]   = 0.33f * (x[IX(N-2, 0)]
                                  + x[IX(N-1, 1)]
                                  + x[IX(N-1, 0)]);
    x[IX(N-1, N-1)] = 0.33f * (x[IX(N-2, N-1)]
                                  + x[IX(N-1, N-2)]
                                  + x[IX(N-1, N-1)]);
}

