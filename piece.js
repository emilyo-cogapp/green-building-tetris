class Piece {
  constructor(ctx) {
    this.ctx = ctx;

    const typeId = this.randomizeTetrominoType(COLORS.length);  
    this.shape = SHAPES[typeId];  
    this.color = COLORS[typeId];

    // Starting coords
    this.x = 3;
    this.y = 0;
  }

  randomizeTetrominoType(noOfTypes) {  
    return Math.floor(Math.random() * noOfTypes);  
  }

  draw() {
    this.ctx.fillStyle = this.color;
    this.shape.forEach((row, y) => {  
      row.forEach((value, x) => {  
        if (value > 0) {  
          this.ctx.fillRect(this.x + x, this.y + y, 1, 1);  
        }  
      });  
    });  
  }

  move(piece) {  
    this.x = piece.x;  
    this.y = piece.y;
    this.shape = piece.shape;
  }
}