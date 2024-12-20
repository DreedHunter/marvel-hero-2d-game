const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  parent: 'game-container',
  physics: {
    default: 'arcade',
    arcade: {
      debug: false,
    },
  },
  scene: {
    preload: preload,
    create: create,
    update: update,
  },
};

const game = new Phaser.Game(config);

function preload() {
  // Carica il tileset e la mappa JSON
  this.load.image('tiles', 'assets/kenney_rpg-urban-pack/tiles/tilesheet.png'); // Tileset
  this.load.tilemapTiledJSON('map', 'assets/kenney_rpg-urban-pack/road.json'); // Mappa JSON
}

function create() {
  // Configura la mappa dal JSON
  const map = this.make.tilemap({ key: 'map' });
  const tileset = map.addTilesetImage('tilesheet', 'tiles');

  // Crea il layer della mappa
  const roadLayer = map.createLayer('Tile Layer 1', tileset, 0, 0);

  // Aggiungi logiche per la mappa
  this.physics.world.setBounds(0, 0, map.widthInPixels, map.heightInPixels);

  // Logiche future per supereroi e nemici verranno aggiunte qui
}

function update() {
  // Logiche di gioco aggiornabili
}
