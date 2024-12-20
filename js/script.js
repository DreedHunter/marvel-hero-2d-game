const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: 'game-container',
    physics: {
      default: 'arcade',
      arcade: {
        debug: false
      }
    },
    scene: {
      preload: preload,
      create: create,
      update: update
    }
  };
  
  const game = new Phaser.Game(config);
  
  function preload() {
    // Carica gli asset
    this.load.image('road', 'assets/road.png'); // Strada
    this.load.image('hero', 'assets/hero.png'); // Supereroe
    this.load.image('enemy', 'assets/enemy.png'); // Nemico
  }
  
  function create() {
    // Aggiungi la strada
    this.add.image(400, 300, 'road');
  
    // Aggiungi supereroi ed nemici
    const hero = this.physics.add.sprite(100, 300, 'hero');
    const enemy = this.physics.add.sprite(700, 300, 'enemy');
  }
  
  function update() {
    // Logiche di gioco
  }
  