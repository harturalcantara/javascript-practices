// Javascript program to rotate a matrix   
let R = 4;
let C = 4;

function rotatematrix(m, n, mat) {
    let row = 0, col = 0;
    let prev, curr;
     
    while (row < m && col < n) {
        if (row + 1 == m || col + 1 == n)
            break;
        prev = mat[row + 1][col];
   
        for(let i = col; i < n; i++) {
            curr = mat[row][i];
            mat[row][i] = prev;
            prev = curr;
        }
        row++;
   
        for(let i = row; i < m; i++) {
            curr = mat[i][n - 1];
            mat[i][n - 1] = prev;
            prev = curr;
        }
        n--;
   
        if (row < m) {
            for(let i = n - 1; i >= col; i--) {
                curr = mat[m - 1][i];
                mat[m - 1][i] = prev;
                prev = curr;
            }
        }
        m--;
   
        if (col < n) {
            for(let i = m - 1; i >= row; i--) {
                curr = mat[i][col];
                mat[i][col] = prev;
                prev = curr;
            }
        }
        col++;
    }
 
    // Print rotated matrix
    for(let i = 0; i < R; i++) {
        for(let j = 0; j < C; j++)
            console.log( mat[i][j] + " ");
             
        console.log("<br>");
    }
}

let a = [ [ 1, 2, 3, 4 ],
          [ 5, 6, 7, 8 ],
          [ 9, 10, 11, 12 ],
          [ 13, 14, 15, 16 ] ];
           
rotatematrix(R, C, a);