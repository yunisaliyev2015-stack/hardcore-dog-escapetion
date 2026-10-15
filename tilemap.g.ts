// Автоматически генерируемый код. Не редактируйте.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile5 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "уровень1":
            case "уровень1":return tiles.createTilemap(hex`4b000800000000000000000000000000000000000000000000000000000000000000000000000000000001000101000101010100000000000000000000010401000000000000000000000001010101000000000000000000000000000000000000000000000000000000000000000001010101000000000000000000000000000000000001010000000100000000000000010000000001010101000001000000000000000000000001000000000000000000010100010000000000000000000100010000010000000100000100000000000101000000000000000000010000000001010101000001000000000000000000000001000000000000000001010100010000000001010101000000000000000000000000000001010000000000010100000000000000010000000003030304000001000000000000000000000001000000000000010000010100010100000101010101000101010101010101010100000000010000000000000000000000000000010000000003030305000001000000000000000000000001000000000100000000010100000000010100000000000000000000000000000000000000000101010100000000000000000001010101010101010101010101010101000001000001010101010101000000000000010101010101010100000000000100010001000100010001010001010101010101000100010001000100000000000001010101020202020202020202020202020101010202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202`, img`
..2...........2............2222.......2222222222..................2....2222
..2...........2............2222.2222................222...........2....2222
..2...........2..........2.222.......2.2..2..22222.....22.........2....2222
..............2........2.2.222..2222..............2......22.......2........
..2...........2......2...2.....22222....2...2......2.......................
..2...........2....2.....2....22.....................2.2........222222.2..2
2222.2..2..22.2.22.......2222..2.....2.2...2.2..2.2222.22...2.2.2...22.2..2
..........2.2...2..........................................................
`, [myTiles.transparency16,myTiles.tile1,sprites.dungeon.hazardLava0,myTiles.tile3,myTiles.tile4,myTiles.tile5], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
            case "myTile0":
            case "tile2":return tile2;
            case "myTile1":
            case "tile3":return tile3;
            case "myTile2":
            case "tile4":return tile4;
            case "myTile3":
            case "tile5":return tile5;
        }
        return null;
    })

}
// Автоматически генерируемый код. Не редактируйте.
