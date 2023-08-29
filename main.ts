namespace SpriteKind {
    export const Back = SpriteKind.create()
    export const Win = SpriteKind.create()
    export const Bad = SpriteKind.create()
    export const PlayerHitbox = SpriteKind.create()
    export const Completed = SpriteKind.create()
    export const Not = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Menu == 1) {
        if (Difficulty == 1) {
            if (Beat == 1) {
                Difficulty += -1
                MenuWhichSelected += -1
            } else {
            	
            }
        } else {
            Difficulty += -1
            MenuWhichSelected += -1
        }
    } else {
    	
    }
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Beat == 1) {
        if (Menu == 1) {
            Difficulty = 6
            Start()
        } else {
        	
        }
    } else {
    	
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Menu == 1) {
        if (Difficulty == 0) {
            Difficulty = 7
            Start()
        } else {
            Start()
        }
    } else {
    	
    }
})
function Start () {
    Menu = 0
    Completed.destroy()
    CompletedEasy.destroy()
    CompletedMid.destroy()
    CompletedHard.destroy()
    CompleteImpossible.destroy()
    CompleteMystery.destroy()
    EasySprite.destroy()
    MediumSprite.destroy()
    HardSprite.destroy()
    ImpossibleSprite.destroy()
    RunSprite.destroy()
    if (BeatImpossible == 1) {
        Sprite2.destroy()
    } else {
    	
    }
    scene.setBackgroundColor(15)
    Speed = 20
    Runner = sprites.create(img`
        e e e e e e e e 
        e e e e e e e e 
        e e d d d d d d 
        e e d d d d d d 
        d d d d d d d d 
        d d d d d d d d 
        1 1 d d d d 1 1 
        1 1 d d d d 1 1 
        1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 
        8 8 8 8 8 8 8 8 
        8 8 8 8 8 8 8 8 
        8 8 . . . . 8 8 
        8 8 . . . . 8 8 
        . . . . . . . . 
        . . . . . . . . 
        `, SpriteKind.Player)
    scene.cameraFollowSprite(Runner)
    controller.moveSprite(Runner, 0, 50)
    Runner.setPosition(50, 60)
    Runner.y += 23
    Runner.x += 5
    animation.runImageAnimation(
    Runner,
    [img`
        e e e e e e e e 
        e e e e e e e e 
        e e d d d d d d 
        e e d d d d d d 
        d d d d d d d d 
        d d d d d d d d 
        1 1 d d d d 1 1 
        1 1 d d d d 1 1 
        1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 
        8 8 8 8 8 8 8 8 
        8 8 8 8 8 8 8 8 
        8 8 . . . . 8 8 
        8 8 . . . . 8 8 
        . . . . . . . . 
        . . . . . . . . 
        `,img`
        e e e e e e e e 
        e e e e e e e e 
        e e d d d d d d 
        e e d d d d d d 
        d d d d d d d d 
        d d d d d d d d 
        1 1 d d d d 1 1 
        1 1 d d d d 1 1 
        1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 
        8 8 8 8 8 8 8 8 
        8 8 8 8 8 8 8 8 
        8 8 . . . . 8 8 
        8 8 . . . . 8 8 
        . . . . . . 8 8 
        . . . . . . 8 8 
        `,img`
        e e e e e e e e 
        e e e e e e e e 
        e e d d d d d d 
        e e d d d d d d 
        d d d d d d d d 
        d d d d d d d d 
        1 1 d d d d 1 1 
        1 1 d d d d 1 1 
        1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 
        8 8 8 8 8 8 8 8 
        8 8 8 8 8 8 8 8 
        . . 8 8 8 8 . . 
        . . 8 8 8 8 . . 
        . . . . 8 8 . . 
        . . . . 8 8 . . 
        `,img`
        e e e e e e e e 
        e e e e e e e e 
        e e d d d d d d 
        e e d d d d d d 
        d d d d d d d d 
        d d d d d d d d 
        1 1 d d d d 1 1 
        1 1 d d d d 1 1 
        1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 
        8 8 8 8 8 8 8 8 
        8 8 8 8 8 8 8 8 
        . . 8 8 8 8 . . 
        . . 8 8 8 8 . . 
        . . 8 8 . . . . 
        . . 8 8 . . . . 
        `,img`
        e e e e e e e e 
        e e e e e e e e 
        e e d d d d d d 
        e e d d d d d d 
        d d d d d d d d 
        d d d d d d d d 
        1 1 d d d d 1 1 
        1 1 d d d d 1 1 
        1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 
        8 8 8 8 8 8 8 8 
        8 8 8 8 8 8 8 8 
        . . 8 8 8 8 . . 
        . . 8 8 8 8 . . 
        . . 8 8 . . . . 
        . . 8 8 . . . . 
        `,img`
        e e e e e e e e 
        e e e e e e e e 
        e e d d d d d d 
        e e d d d d d d 
        d d d d d d d d 
        d d d d d d d d 
        1 1 d d d d 1 1 
        1 1 d d d d 1 1 
        1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 
        8 8 8 8 8 8 8 8 
        8 8 8 8 8 8 8 8 
        8 8 . . . . 8 8 
        8 8 . . . . 8 8 
        8 8 . . . . . . 
        8 8 . . . . . . 
        `],
    100,
    true
    )
    Track1.setImage(img`
        ................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ...........................................................................................................................................................................................bbbbbbbbbbbb.........................................................................................................................................................................................................................................................................................................................
        ....................................................................................................................................................................................bbbbbbbbbbbbbbbbbbbbbbb.....................................................................................................................................................................................................................................................................................................................
        ...................................................................................bbbbbbbbbbbbbbb..............................................................................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb................................................................................................................................................................................................................................................................................................................
        .................................................................................bbbbbbbbbbbbbbbbbbb..........................................................................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb................................................................................................................bbbbbbbbbbbbbbbbbbb.........................................................................................................................................................................
        ..............................................................................bbbbbbbbbbbbbbbbbbbbbbbbb......................................................................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb....................................................................................................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb.........................................................................bbbbbbbbbbbbbbb.............................................................................
        ............................................................................bbbbbbbbbbbbbbbbbbbbbbbbbbbbb..................................................................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb......................................................................................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb...............................................................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb................................................................
        ......................................................................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb...............................................................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb..............................................................................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb...........................................................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb.................................................
        ..................................................................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb..........................................................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb........................................................................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb.......................................................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb............................................
        ...............................................................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb........................................................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb....................................................................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb..................................................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb1f1........................................
        ...........................................................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb.....................................................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb.................................................................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb...b..........................................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf1f1f......................................
        ........................................................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb...................................................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb..............................................................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb......................................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb1f1f1bbb...................................
        ......................................................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb................................................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb..........................................................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb................................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf1f1fbbbbb.................................
        ...................................................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb..............................................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb.......................................................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb...........bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb1f1f1bbbbbbbb..............................
        ..........bbbbbbbbbbb1f1.......................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb............................................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb.....................................................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf1f1fbbbbbbbbbbbbbbb.......................
        .......bbbbbbbbbbbbbbf1f1fbb.................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb..........................................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb...................................................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb1f1f1bbbbbbbbbbbbbbbbbb....................
        .....bbbbbbbbbbbbbbbb1f1f1bbbbbbb..........bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb.......................................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb.................................................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf1f1fbbbbbbbbbbbbbbbbbbbb..................
        ..bbbbbbbbbbbbbbbbbbbf1f1fbbbbbbbbbbbbb..bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb.....................................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb................................................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb1f1f1bbbbbbbbbbbbbbbbbbbbb.................
        bbbbbbbbbbbbbbbbbbbbb1f1f1bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb....................................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb..............................................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf1f1fbbbbbbbbbbbbbbbbbbbbbbbb..............
        bbbbbbbbbbbbbbbbbbbbbf1f1fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb..................................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb............................................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb1f1f1bbbbbbbbbbbbbbbbbbbbbbbbbbbbb....bbbbb
        bbbbbbbbbbbbbbbbbbbbb1f1f1bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb...............................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb...........................................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf1f1fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbf1f1fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb..............................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb...........bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb..........................................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb1f1f1bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbb1f1f1bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb..........................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbb..............bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb.......................................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb..........................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf1f1fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbf1f1fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb.........................bbbbbbbbbbbbbbbbbbbbbbbbbbbb..................bbbbbbbbbbbbbbbbbbbbbbbbbbbbb.....................................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb...........................................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb1f1f1bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbb1f1f1bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb.....................bbbbbbbbbbbbbbbbbbbbbbbbbbbb....................bbbbbbbbbbbbbbbbbbbbbbbbbbbb...................................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb..................................................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb..........bbbbbbbbbbbbbbbbbbbbbbbbbf1f1fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbf1f1fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb...................bbbbbbbbbbbbbbbbbbbbbbbbbb......................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbb...............................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb............................................................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb.............bbb.......................bbbbbbbbbbbbbbbb1f1f1bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbb1f1f1bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb...............bbbbbbbbbbbbbbbbbbbbbbbbbb........................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb..........................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb................................................................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb..................................................bbbbbbbf1f1fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbf1f1fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb......bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb..........................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb....................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb.....................................................................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb.......................................................bbbb1f1f1bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbb1f1f1bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb.......bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb.............................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb..............bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb.........................................................................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb............................................................bbf1f1fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbf1f1fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb...........................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb...............................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb............................................................................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb...............................................................b1f1f1bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbb1f1f1bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb....................................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb................................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb.................................................................................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbb...................................................................1f1fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbf1f1fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb..........................................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb...................................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb.b.....................................................................................bbbbbbbbbbbbbbbbbbbb.............................................................................1bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbb1f1f1bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb.................................................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb....................................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb.............................................................................................................................................................................................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbf1f1fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb......................................................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb.......................................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb...................................................................................................................................................................................................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbb1f1f1bbbbbbbbbbbbbbbbbbbbbbbbbbbbb.........................................................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb........................................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb........................................................................................................................................................................................................bbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbf1f1fbbbbbbbbbbbbbbbbbbbbbbbb................................................................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb..........................................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb.............................................................................................................................................................................................................bbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbb1f1f1bbbbbbbbbbbbbbbbbbbb......................................................................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb............................................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb...............................................................................................................................................................................................................................bbbbbbbb
        b.....bbbbbbbbbbbbbbbf....bbbbbbbbbbbbbbbb...........................................................................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb..............................................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb....................................................................................................................................................................................................................................bbbb
        ...............................bbbbbbb................................................................................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb.................................................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb...........................................................................................................................................................................................................................................
        .......................................................................................................................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb..................................................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb.............................................................................................................................................................................................................................................
        ..........................................................................................................................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb....................................................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb.................................................................................................................................................................................................................................................
        ............................................................................................................................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb.b.....................................................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb..............................................................................................................................................................................................................................................................
        .............................................................................................................................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb.........................................................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb................................................................................................................................................................................................................................................................
        ...............................................................................................................................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb.............................................................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbb...................................................................................................................................................................................................................................................................
        ..................................................................................................................................bbbbbbbbbbbbbbbbbbbbbbbbbbbbb.................................................................bbbbbbbbbbbbbbbbbbbbbbbbbb......................................................................................................................................................................................................................................................................
        .......................................................................................................................................bbbbbbbbbbbbbbbbbbbbbb......................................................................bbbbbbbbbbbbbbbbbbbbb........................................................................................................................................................................................................................................................................
        .........................................................................................................................................bbbbbbbbbbbbbbbbbb...........................................................................bbbbbbbbbbbbbbbbbb........................................................................................................................................................................................................................................................................
        ...............................................................................................................................................bbbbbbb...................................................................................bbbbbbbbbbb............................................................................................................................................................................................................................................................................
        ................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        `)
    scaling.scaleByPercent(Track1, 200, ScaleDirection.Uniformly, ScaleAnchor.Middle)
    Track1.setVelocity(-50, 0)
    Runner.z = 5
    Track1.x = 740
    Track2.setImage(img`
        77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777............7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777.......................777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        77777777777777777777777777777777777777777777777777777777777777777777777777777777777...............777777777777777777777777777777777777777777777777777777777777777777777777777777................................7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        777777777777777777777777777777777777777777777777777777777777777777777777777777777...................77777777777777777777777777777777777777777777777777777777777777777777777777......................................7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777...................7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        777777777777777777777777777777777777777777777777777777777777777777777777777777.........................7777777777777777777777777777777777777777777777777777777777777777777777..........................................7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777................................7777777777777777777777777777777777777777777777777777777777777777777777777...............77777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777.............................777777777777777777777777777777777777777777777777777777777777777777...............................................77777777777777777777777777777777777777777777777777777777777777777777777777777777777777.................................................777777777777777777777777777777777777777777777777777777777777777................................7777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777....................................777777777777777777777777777777777777777777777777777777777777777..................................................777777777777777777777777777777777777777777777777777777777777777777777777777777..........................................................77777777777777777777777777777777777777777777777777777777777.................................................7777777777777777777777777777777777777777777777777
        777777777777777777777777777777777777777777777777777777777777777777...........................................7777777777777777777777777777777777777777777777777777777777......................................................777777777777777777777777777777777777777777777777777777777777777777777777................................................................7777777777777777777777777777777777777777777777777777777........................................................77777777777777777777777777777777777777777777
        777777777777777777777777777777777777777777777777777777777777777...............................................77777777777777777777777777777777777777777777777777777777........................................................77777777777777777777777777777777777777777777777777777777777777777777......................................................................77777777777777777777777777777777777777777777777777..............................................................7777777777777777777777777777777777777777
        77777777777777777777777777777777777777777777777777777777777.....................................................77777777777777777777777777777777777777777777777777777..........................................................77777777777777777777777777777777777777777777777777777777777777777.........................................................................777.777777777777777777777777777777777777777777...................................................................77777777777777777777777777777777777777
        77777777777777777777777777777777777777777777777777777777.........................................................777777777777777777777777777777777777777777777777777...........................................................77777777777777777777777777777777777777777777777777777777777777..................................................................................77777777777777777777777777777777777777........................................................................77777777777777777777777777777777777
        777777777777777777777777777777777777777777777777777777.............................................................777777777777777777777777777777777777777777777777..............................................................7777777777777777777777777777777777777777777777777777777777......................................................................................77777777777777777777777777777777..............................................................................777777777777777777777777777777777
        777777777777777777777777777777777777777777777777777.................................................................7777777777777777777777777777777777777777777777.................................................................7777777777777777777777777777777777777777777777777777777....................................................................................................77777777777.........................................................................................777777777777777777777777777777
        7777777777..............77777777777777777777777......................................................................77777777777777777777777777777777777777777777...................................................................77777777777777777777777777777777777777777777777777777................................................................................................................................................................................................................77777777777777777777777
        7777777.....................77777777777777777.........................................................................777777777777777777777777777777777777777777....................................................................777777777777777777777777777777777777777777777777777.....................................................................................................................................................................................................................77777777777777777777
        77777............................7777777777.............................................................................777777777777777777777777777777777777777......................................................................7777777777777777777777777777777777777777777777777........................................................................................................................................................................................................................777777777777777777
        77.....................................77................................................................................7777777777777777777777777777777777777.......................................................................777777777777777777777777777777777777777777777777..........................................................................................................................................................................................................................77777777777777777
        ..........................................................................................................................777777777777777777777777777777777777.......................................................................7777777777777777777777777777777777777777777777...............................................................................................................................................................................................................................77777777777777
        ...........................................................................................................................7777777777777777777777777777777777........................................................................77777777777777777777777777777777777777777777......................................................................................................................................................................................................................................7777.....
        .............................................................................................................................7777777777777777777777777777777.........................................................................7777777777777777777777777777777777777777777................................................................................................................................................................................................................................................
        ..............................................................................................................................777777777777777777777777777777...............................77777777777...............................777777777777777777777777777777777777777777.................................................................................................................................................................................................................................................
        .................................................................................................................................77777777777777777777777777..............................77777777777777...............................777777777777777777777777777777777777777......................................................77777777777777777777777777...................................................................................................................................................................
        ..................................................................................................................................7777777777777777777777777............................777777777777777777.............................7777777777777777777777777777777777777................................................7777777777777777777777777777777777777777777..........................................................................................................................................................
        .....................................................................................................................................777777777777777777777............................77777777777777777777............................77777777777777777777777777777777777..............................................77777777777777777777777777777777777777777777777777.........................................................................7777777777....................................................................
        .......................................................................................................................................7777777777777777777..........................7777777777777777777777..............................7777777777777777777777777777777........................................777777777777777777777777777777777777777777777777777777777777...................................................7777777777777...77777777777777777777777...........................................................
        ..........................................................................................................................................777777777777777..........................777777777777777777777777...............................77777777777777777777777777.........................................7777777777777777777777777777777777777777777777777777777777777777...............................................77777777777777777777777777777777777777777777777777..................................................
        .............................................................................................................................................777777...............................77777777777777777777777777................................77777777777777777777.........................................777777777777777777777777777777777777777777777777777777777777777777777............................................7777777777777777777777777777777777777777777777777777777...............................................
        ................................................................................7777777.........................................................................................77777777777777777777777777777..................................77777777777777..........................................7777777777777777777777777777777777777777777777777777777777777777777777777.......................................777777777777777777777777777777777777777777777777777777777777.............................................
        .....................................................................777777777777777777777777777...............................................................................7777777777777777777777777777777........................................................................................7777777777777777777777777777777777777777777777777777777777777777777777777777...................................777777777777777777777777777777777777777777777777777777777777777............................................
        .................................................................777777777777777777777777777777777777..........................................................................77777777777777777777777777777777.....................................................................................777777777777777777777777777777777777777777777777777777777777777777777777777777777..............................777777777777777777777777777777777777777777777777777777777777777777...........................................
        ...............................................................777777777777777777777777777777777777777777....................................................................77777777777777777777777777777777777.................................................................................7.7777777777777777777777777777777777777777777777777777777777777777777777777777777777777....................77777777777777777777777777777777777777777777777777777777777777777777777777777.......................................
        ...........................................................7777777777777777777777777777777777777777777777777................................................................777777777777777777777777777777777777................................................................................777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777...................................
        ........................................................777777777777777777777777777777777777777777777777777777.............................................................777777777777777777777777777777777777777.............................................................................777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777..............................
        .......................................................777777777777777777777777777777777777777777777777777777777...........................................................7777777777777777777777777777777777777777...........................................................................77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777..........................
        ..................................................7777777777777777777777777777777777777777777777777777777777777777........................................................777777777777777777777777777777777777777777........................................................................7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777.......................
        ..............................................7777777777777777777777777777777777777777777777777777777777777777777777.....................................................77777777777777777777777777777777777777777777....................................................................7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777........
        .77777................7777................777777777777777777777777777777777777777777777777777777777777777777777777777...................................................7777777777777777777777777777777777777777777777..................................................................777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777....
        7777777777777777777777777777777.......77777777777777777777777777777777777777777777777777777777777777777777777777777777.................................................7777777777777777777777777777777777777777777777777.............................................................7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777................................................77777777777777777777777777777777777777777777777777..........................................................777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777............................................7777777777777777777777777777777777777777777777777777.....................................................7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777........................................7.77777777777777777777777777777777777777777777777777777.......................................77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777.......................................777777777777777777777777777777777777777777777777777777777...................................7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777...................................7777777777777777777777777777777777777777777777777777777777777..............................7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777.............................77777777777777777777777777777777777777777777777777777777777777777..........................7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777......................7777777777777777777777777777777777777777777777777777777777777777777777.....................777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777..................777777777777777777777777777777777777777777777777777777777777777777777777777..................777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777.......77777777777777777777777777777777777777777777777777777777777777777777777777777777777...........7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        `)
    Track2.setKind(SpriteKind.Bad)
    scaling.scaleByPercent(Track2, 200, ScaleDirection.Uniformly, ScaleAnchor.Middle)
    Track2.setPosition(Track1.x, Track1.y)
    Track2.setVelocity(-50, 0)
    RunnerPants = sprites.create(img`
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        8 8 8 8 8 8 8 8 
        8 8 8 8 8 8 8 8 
        8 8 . . . . 8 8 
        8 8 . . . . 8 8 
        . . . . . . . . 
        . . . . . . . . 
        `, SpriteKind.PlayerHitbox)
    animation.runImageAnimation(
    RunnerPants,
    [img`
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        8 8 8 8 8 8 8 8 
        8 8 8 8 8 8 8 8 
        8 8 . . . . 8 8 
        8 8 . . . . 8 8 
        . . . . . . . . 
        . . . . . . . . 
        `,img`
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        8 8 8 8 8 8 8 8 
        8 8 8 8 8 8 8 8 
        8 8 . . . . 8 8 
        8 8 . . . . 8 8 
        . . . . . . 8 8 
        . . . . . . 8 8 
        `,img`
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        8 8 8 8 8 8 8 8 
        8 8 8 8 8 8 8 8 
        . . 8 8 8 8 . . 
        . . 8 8 8 8 . . 
        . . . . 8 8 . . 
        . . . . 8 8 . . 
        `,img`
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        8 8 8 8 8 8 8 8 
        8 8 8 8 8 8 8 8 
        . . 8 8 8 8 . . 
        . . 8 8 8 8 . . 
        . . 8 8 . . . . 
        . . 8 8 . . . . 
        `,img`
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        8 8 8 8 8 8 8 8 
        8 8 8 8 8 8 8 8 
        . . 8 8 8 8 . . 
        . . 8 8 8 8 . . 
        . . 8 8 . . . . 
        . . 8 8 . . . . 
        `,img`
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        8 8 8 8 8 8 8 8 
        8 8 8 8 8 8 8 8 
        8 8 . . . . 8 8 
        8 8 . . . . 8 8 
        8 8 . . . . . . 
        8 8 . . . . . . 
        `],
    100,
    true
    )
    controller.moveSprite(RunnerPants, 0, 50)
    RunnerPants.setPosition(Runner.x, Runner.y)
    Track3.setImage(img`
        ................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        .....................................................................................................................................................................................................................................................................................................................................................................................................................................................................................1f1........................................
        .....................................................................................................................................................................................................................................................................................................................................................................................................................................................................................f1f1f......................................
        .....................................................................................................................................................................................................................................................................................................................................................................................................................................................................................1f1f1......................................
        .....................................................................................................................................................................................................................................................................................................................................................................................................................................................................................f1f1f......................................
        .....................................................................................................................................................................................................................................................................................................................................................................................................................................................................................1f1f1......................................
        .....................................................................................................................................................................................................................................................................................................................................................................................................................................................................................f1f1f......................................
        .....................................................................................................................................................................................................................................................................................................................................................................................................................................................................................1f1f1......................................
        .....................................................................................................................................................................................................................................................................................................................................................................................................................................................................................f1f1f......................................
        .....................................................................................................................................................................................................................................................................................................................................................................................................................................................................................1f1f1......................................
        .....................................................................................................................................................................................................................................................................................................................................................................................................................................................................................f1f1f......................................
        .....................................................................................................................................................................................................................................................................................................................................................................................................................................................................................1f1f1......................................
        .....................................................................................................................................................................................................................................................................................................................................................................................................................................................................................f1f1f......................................
        .....................................................................................................................................................................................................................................................................................................................................................................................................................................................................................1f1f1......................................
        .....................................................................................................................................................................................................................................................................................................................................................................................................................................................................................f1f1f......................................
        .....................................................................................................................................................................................................................................................................................................................................................................................................................................................................................1f1f1......................................
        .....................................................................................................................................................................................................................................................................................................................................................................................................................................................................................f1f1f......................................
        .....................................................................................................................................................................................................................................................................................................................................................................................................................................................................................1f1f1......................................
        .....................................................................................................................................................................................................................................................................................................................................................................................................................................................................................f1f1f......................................
        .....................................................................................................................................................................................................................................................................................................................................................................................................................................................................................1f1f1......................................
        .....................................................................................................................................................................................................................................................................................................................................................................................................................................................................................f1f1f......................................
        .....................................................................................................................................................................................................................................................................................................................................................................................................................................................................................1f1f1......................................
        ......................................................................................................................................................................................................................................................................................................................................................................................................................................................................................1f1f......................................
        .........................................................................................................................................................................................................................................................................................................................................................................................................................................................................................1......................................
        ................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        `)
    Track3.setKind(SpriteKind.Win)
    Track3.setPosition(Track1.x, Track1.y)
    scaling.scaleByPercent(Track3, 200, ScaleDirection.Uniformly, ScaleAnchor.Middle)
    Track3.setVelocity(-50, 0)
}
sprites.onOverlap(SpriteKind.PlayerHitbox, SpriteKind.Win, function (sprite, otherSprite) {
    if (Difficulty == 1) {
        BeatEasy = 1
        game.showLongText("You Win", DialogLayout.Bottom)
        game.showLongText("Beat EASY Level", DialogLayout.Bottom)
        MenuStart()
    } else if (Difficulty == 2) {
        BeatMid = 1
        game.showLongText("You Win", DialogLayout.Bottom)
        game.showLongText("Beat MEDIUM Level", DialogLayout.Bottom)
        MenuStart()
    } else if (Difficulty == 3) {
        BeatHard = 1
        game.showLongText("You Win", DialogLayout.Bottom)
        game.showLongText("Beat HARD Level", DialogLayout.Bottom)
        MenuStart()
    } else if (Difficulty == 4) {
        BeatImpossible = 1
        game.showLongText("You Win", DialogLayout.Bottom)
        game.showLongText("Beat IMPOSSIBLE Level", DialogLayout.Bottom)
        MenuStart()
    } else if (Difficulty == 5) {
        Beat = 1
        game.showLongText("You Win", DialogLayout.Bottom)
        game.showLongText("Beat ??? Level", DialogLayout.Bottom)
        MenuStart()
    } else if (Difficulty == 6) {
        BeatSecretLevel = 1
        game.showLongText("You Win", DialogLayout.Bottom)
        game.showLongText("Beat SECRET Level", DialogLayout.Bottom)
        MenuStart()
    } else if (Difficulty == 7) {
        BeatRunner = 1
        game.showLongText("You Win", DialogLayout.Bottom)
        game.showLongText("Beat RUNNER Level", DialogLayout.Bottom)
        MenuStart()
    }
})
function Restart () {
    Runner.destroy()
    RunnerPants.destroy()
    EasySprite.destroy()
    MediumSprite.destroy()
    HardSprite.destroy()
    ImpossibleSprite.destroy()
    RunSprite.destroy()
    Menu = 0
    scene.setBackgroundColor(1)
    Speed = 20
    Runner = sprites.create(img`
        e e e e e e e e 
        e e e e e e e e 
        e e d d d d d d 
        e e d d d d d d 
        d d d d d d d d 
        d d d d d d d d 
        1 1 d d d d 1 1 
        1 1 d d d d 1 1 
        1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 
        8 8 8 8 8 8 8 8 
        8 8 8 8 8 8 8 8 
        8 8 . . . . 8 8 
        8 8 . . . . 8 8 
        . . . . . . . . 
        . . . . . . . . 
        `, SpriteKind.Player)
    scene.cameraFollowSprite(Runner)
    controller.moveSprite(Runner, 0, 50)
    Runner.setPosition(50, 60)
    Runner.y += 23
    Runner.x += 5
    animation.runImageAnimation(
    Runner,
    [img`
        e e e e e e e e 
        e e e e e e e e 
        e e d d d d d d 
        e e d d d d d d 
        d d d d d d d d 
        d d d d d d d d 
        1 1 d d d d 1 1 
        1 1 d d d d 1 1 
        1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 
        8 8 8 8 8 8 8 8 
        8 8 8 8 8 8 8 8 
        8 8 . . . . 8 8 
        8 8 . . . . 8 8 
        . . . . . . . . 
        . . . . . . . . 
        `,img`
        e e e e e e e e 
        e e e e e e e e 
        e e d d d d d d 
        e e d d d d d d 
        d d d d d d d d 
        d d d d d d d d 
        1 1 d d d d 1 1 
        1 1 d d d d 1 1 
        1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 
        8 8 8 8 8 8 8 8 
        8 8 8 8 8 8 8 8 
        8 8 . . . . 8 8 
        8 8 . . . . 8 8 
        . . . . . . 8 8 
        . . . . . . 8 8 
        `,img`
        e e e e e e e e 
        e e e e e e e e 
        e e d d d d d d 
        e e d d d d d d 
        d d d d d d d d 
        d d d d d d d d 
        1 1 d d d d 1 1 
        1 1 d d d d 1 1 
        1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 
        8 8 8 8 8 8 8 8 
        8 8 8 8 8 8 8 8 
        . . 8 8 8 8 . . 
        . . 8 8 8 8 . . 
        . . . . 8 8 . . 
        . . . . 8 8 . . 
        `,img`
        e e e e e e e e 
        e e e e e e e e 
        e e d d d d d d 
        e e d d d d d d 
        d d d d d d d d 
        d d d d d d d d 
        1 1 d d d d 1 1 
        1 1 d d d d 1 1 
        1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 
        8 8 8 8 8 8 8 8 
        8 8 8 8 8 8 8 8 
        . . 8 8 8 8 . . 
        . . 8 8 8 8 . . 
        . . 8 8 . . . . 
        . . 8 8 . . . . 
        `,img`
        e e e e e e e e 
        e e e e e e e e 
        e e d d d d d d 
        e e d d d d d d 
        d d d d d d d d 
        d d d d d d d d 
        1 1 d d d d 1 1 
        1 1 d d d d 1 1 
        1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 
        8 8 8 8 8 8 8 8 
        8 8 8 8 8 8 8 8 
        . . 8 8 8 8 . . 
        . . 8 8 8 8 . . 
        . . 8 8 . . . . 
        . . 8 8 . . . . 
        `,img`
        e e e e e e e e 
        e e e e e e e e 
        e e d d d d d d 
        e e d d d d d d 
        d d d d d d d d 
        d d d d d d d d 
        1 1 d d d d 1 1 
        1 1 d d d d 1 1 
        1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 
        8 8 8 8 8 8 8 8 
        8 8 8 8 8 8 8 8 
        8 8 . . . . 8 8 
        8 8 . . . . 8 8 
        8 8 . . . . . . 
        8 8 . . . . . . 
        `],
    100,
    true
    )
    Track1.setImage(img`
        ................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ...........................................................................................................................................................................................bbbbbbbbbbbb.........................................................................................................................................................................................................................................................................................................................
        ....................................................................................................................................................................................bbbbbbbbbbbbbbbbbbbbbbb.....................................................................................................................................................................................................................................................................................................................
        ...................................................................................bbbbbbbbbbbbbbb..............................................................................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb................................................................................................................................................................................................................................................................................................................
        .................................................................................bbbbbbbbbbbbbbbbbbb..........................................................................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb................................................................................................................bbbbbbbbbbbbbbbbbbb.........................................................................................................................................................................
        ..............................................................................bbbbbbbbbbbbbbbbbbbbbbbbb......................................................................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb....................................................................................................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb.........................................................................bbbbbbbbbbbbbbb.............................................................................
        ............................................................................bbbbbbbbbbbbbbbbbbbbbbbbbbbbb..................................................................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb......................................................................................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb...............................................................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb................................................................
        ......................................................................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb...............................................................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb..............................................................................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb...........................................................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb.................................................
        ..................................................................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb..........................................................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb........................................................................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb.......................................................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb............................................
        ...............................................................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb........................................................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb....................................................................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb..................................................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb...........................................
        ...........................................................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb.....................................................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb.................................................................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb...b..........................................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb...........................................
        ........................................................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb...................................................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb..............................................................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb......................................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb.....bbb...................................
        ......................................................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb................................................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb..........................................................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb................................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb.....bbbbb.................................
        ...................................................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb..............................................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb.......................................................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb...........bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb.....bbbbbbbb..............................
        ..........bbbbbbbbbbb..........................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb............................................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb.....................................................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb.....bbbbbbbbbbbbbbb.......................
        .......bbbbbbbbbbbbbb.....bb.................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb..........................................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb...................................................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb.....bbbbbbbbbbbbbbbbbb....................
        .....bbbbbbbbbbbbbbbb.....bbbbbbb..........bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb.......................................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb.................................................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb.....bbbbbbbbbbbbbbbbbbbb..................
        ..bbbbbbbbbbbbbbbbbbb.....bbbbbbbbbbbbb..bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb.....................................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb................................................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb.....bbbbbbbbbbbbbbbbbbbbb.................
        bbbbbbbbbbbbbbbbbbbbb.....bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb....................................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb..............................................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb.....bbbbbbbbbbbbbbbbbbbbbbbb..............
        bbbbbbbbbbbbbbbbbbbbb.....bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb..................................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb............................................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb.....bbbbbbbbbbbbbbbbbbbbbbbbbbbbb....bbbbb
        bbbbbbbbbbbbbbbbbbbbb.....bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb...............................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb...........................................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb.....bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbb.....bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb..............................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb...........bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb..........................................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb.....bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbb.....bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb..........................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbb..............bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb.......................................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb..........................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb.....bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbb.....bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb.........................bbbbbbbbbbbbbbbbbbbbbbbbbbbb..................bbbbbbbbbbbbbbbbbbbbbbbbbbbbb.....................................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb...........................................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb.....bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbb.....bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb.....................bbbbbbbbbbbbbbbbbbbbbbbbbbbb....................bbbbbbbbbbbbbbbbbbbbbbbbbbbb...................................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb..................................................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb..........bbbbbbbbbbbbbbbbbbbbbbbbb.....bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbb.....bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb...................bbbbbbbbbbbbbbbbbbbbbbbbbb......................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbb...............................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb............................................................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb.............bbb.......................bbbbbbbbbbbbbbbb.....bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbb.....bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb...............bbbbbbbbbbbbbbbbbbbbbbbbbb........................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb..........................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb................................................................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb..................................................bbbbbbb.....bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbb.....bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb......bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb..........................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb....................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb.....................................................................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb.......................................................bbbb.....bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbb.....bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb.......bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb.............................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb..............bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb.........................................................................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb............................................................bb.....bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbb.....bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb...........................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb...............................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb............................................................................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb...............................................................b.....bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbb.....bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb....................................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb................................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb.................................................................................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbb.......................................................................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbb.....bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb..........................................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb...................................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb.b.....................................................................................bbbbbbbbbbbbbbbbbbbb..............................................................................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbb.....bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb.................................................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb....................................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb.............................................................................................................................................................................................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbb.....bbbbbbbbbbbbbbbbbbbbbbbbbbbbbb......................................................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb.......................................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb...................................................................................................................................................................................................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbb.....bbbbbbbbbbbbbbbbbbbbbbbbbbbbb.........................................................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb........................................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb........................................................................................................................................................................................................bbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbb.....bbbbbbbbbbbbbbbbbbbbbbbb................................................................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb..........................................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb.............................................................................................................................................................................................................bbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbb.....bbbbbbbbbbbbbbbbbbbb......................................................................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb............................................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb...............................................................................................................................................................................................................................bbbbbbbb
        b.....bbbbbbbbbbbbbbb.....bbbbbbbbbbbbbbbb...........................................................................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb..............................................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb....................................................................................................................................................................................................................................bbbb
        ...............................bbbbbbb................................................................................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb.................................................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb...........................................................................................................................................................................................................................................
        .......................................................................................................................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb..................................................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb.............................................................................................................................................................................................................................................
        ..........................................................................................................................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb....................................................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb.................................................................................................................................................................................................................................................
        ............................................................................................................................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb.b.....................................................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb..............................................................................................................................................................................................................................................................
        .............................................................................................................................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb.........................................................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb................................................................................................................................................................................................................................................................
        ...............................................................................................................................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb.............................................................bbbbbbbbbbbbbbbbbbbbbbbbbbbbbb...................................................................................................................................................................................................................................................................
        ..................................................................................................................................bbbbbbbbbbbbbbbbbbbbbbbbbbbbb.................................................................bbbbbbbbbbbbbbbbbbbbbbbbbb......................................................................................................................................................................................................................................................................
        .......................................................................................................................................bbbbbbbbbbbbbbbbbbbbbb......................................................................bbbbbbbbbbbbbbbbbbbbb........................................................................................................................................................................................................................................................................
        .........................................................................................................................................bbbbbbbbbbbbbbbbbb...........................................................................bbbbbbbbbbbbbbbbbb........................................................................................................................................................................................................................................................................
        ...............................................................................................................................................bbbbbbb...................................................................................bbbbbbbbbbb............................................................................................................................................................................................................................................................................
        ................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        `)
    scaling.scaleByPercent(Track1, 200, ScaleDirection.Uniformly, ScaleAnchor.Middle)
    Track1.setVelocity(-50, 0)
    Runner.z = 5
    Track1.x = 740
    Track2.setImage(img`
        77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777............7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777.......................777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        77777777777777777777777777777777777777777777777777777777777777777777777777777777777...............777777777777777777777777777777777777777777777777777777777777777777777777777777................................7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        777777777777777777777777777777777777777777777777777777777777777777777777777777777...................77777777777777777777777777777777777777777777777777777777777777777777777777......................................7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777...................7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        777777777777777777777777777777777777777777777777777777777777777777777777777777.........................7777777777777777777777777777777777777777777777777777777777777777777777..........................................7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777................................7777777777777777777777777777777777777777777777777777777777777777777777777...............77777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777.............................777777777777777777777777777777777777777777777777777777777777777777...............................................77777777777777777777777777777777777777777777777777777777777777777777777777777777777777.................................................777777777777777777777777777777777777777777777777777777777777777................................7777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777....................................777777777777777777777777777777777777777777777777777777777777777..................................................777777777777777777777777777777777777777777777777777777777777777777777777777777..........................................................77777777777777777777777777777777777777777777777777777777777.................................................7777777777777777777777777777777777777777777777777
        777777777777777777777777777777777777777777777777777777777777777777...........................................7777777777777777777777777777777777777777777777777777777777......................................................777777777777777777777777777777777777777777777777777777777777777777777777................................................................7777777777777777777777777777777777777777777777777777777........................................................77777777777777777777777777777777777777777777
        777777777777777777777777777777777777777777777777777777777777777...............................................77777777777777777777777777777777777777777777777777777777........................................................77777777777777777777777777777777777777777777777777777777777777777777......................................................................77777777777777777777777777777777777777777777777777..............................................................7777777777777777777777777777777777777777
        77777777777777777777777777777777777777777777777777777777777.....................................................77777777777777777777777777777777777777777777777777777..........................................................77777777777777777777777777777777777777777777777777777777777777777.........................................................................777.777777777777777777777777777777777777777777...................................................................77777777777777777777777777777777777777
        77777777777777777777777777777777777777777777777777777777.........................................................777777777777777777777777777777777777777777777777777...........................................................77777777777777777777777777777777777777777777777777777777777777..................................................................................77777777777777777777777777777777777777........................................................................77777777777777777777777777777777777
        777777777777777777777777777777777777777777777777777777.............................................................777777777777777777777777777777777777777777777777..............................................................7777777777777777777777777777777777777777777777777777777777......................................................................................77777777777777777777777777777777..............................................................................777777777777777777777777777777777
        777777777777777777777777777777777777777777777777777.................................................................7777777777777777777777777777777777777777777777.................................................................7777777777777777777777777777777777777777777777777777777....................................................................................................77777777777.........................................................................................777777777777777777777777777777
        7777777777..............77777777777777777777777......................................................................77777777777777777777777777777777777777777777...................................................................77777777777777777777777777777777777777777777777777777................................................................................................................................................................................................................77777777777777777777777
        7777777.....................77777777777777777.........................................................................777777777777777777777777777777777777777777....................................................................777777777777777777777777777777777777777777777777777.....................................................................................................................................................................................................................77777777777777777777
        77777............................7777777777.............................................................................777777777777777777777777777777777777777......................................................................7777777777777777777777777777777777777777777777777........................................................................................................................................................................................................................777777777777777777
        77.....................................77................................................................................7777777777777777777777777777777777777.......................................................................777777777777777777777777777777777777777777777777..........................................................................................................................................................................................................................77777777777777777
        ..........................................................................................................................777777777777777777777777777777777777.......................................................................7777777777777777777777777777777777777777777777...............................................................................................................................................................................................................................77777777777777
        ...........................................................................................................................7777777777777777777777777777777777........................................................................77777777777777777777777777777777777777777777......................................................................................................................................................................................................................................7777.....
        .............................................................................................................................7777777777777777777777777777777.........................................................................7777777777777777777777777777777777777777777................................................................................................................................................................................................................................................
        ..............................................................................................................................777777777777777777777777777777...............................77777777777...............................777777777777777777777777777777777777777777.................................................................................................................................................................................................................................................
        .................................................................................................................................77777777777777777777777777..............................77777777777777...............................777777777777777777777777777777777777777......................................................77777777777777777777777777...................................................................................................................................................................
        ..................................................................................................................................7777777777777777777777777............................777777777777777777.............................7777777777777777777777777777777777777................................................7777777777777777777777777777777777777777777..........................................................................................................................................................
        .....................................................................................................................................777777777777777777777............................77777777777777777777............................77777777777777777777777777777777777..............................................77777777777777777777777777777777777777777777777777.........................................................................7777777777....................................................................
        .......................................................................................................................................7777777777777777777..........................7777777777777777777777..............................7777777777777777777777777777777........................................777777777777777777777777777777777777777777777777777777777777...................................................7777777777777...77777777777777777777777...........................................................
        ..........................................................................................................................................777777777777777..........................777777777777777777777777...............................77777777777777777777777777.........................................7777777777777777777777777777777777777777777777777777777777777777...............................................77777777777777777777777777777777777777777777777777..................................................
        .............................................................................................................................................777777...............................77777777777777777777777777................................77777777777777777777.........................................777777777777777777777777777777777777777777777777777777777777777777777............................................7777777777777777777777777777777777777777777777777777777...............................................
        ................................................................................7777777.........................................................................................77777777777777777777777777777..................................77777777777777..........................................7777777777777777777777777777777777777777777777777777777777777777777777777.......................................777777777777777777777777777777777777777777777777777777777777.............................................
        .....................................................................777777777777777777777777777...............................................................................7777777777777777777777777777777........................................................................................7777777777777777777777777777777777777777777777777777777777777777777777777777...................................777777777777777777777777777777777777777777777777777777777777777............................................
        .................................................................777777777777777777777777777777777777..........................................................................77777777777777777777777777777777.....................................................................................777777777777777777777777777777777777777777777777777777777777777777777777777777777..............................777777777777777777777777777777777777777777777777777777777777777777...........................................
        ...............................................................777777777777777777777777777777777777777777....................................................................77777777777777777777777777777777777.................................................................................7.7777777777777777777777777777777777777777777777777777777777777777777777777777777777777....................77777777777777777777777777777777777777777777777777777777777777777777777777777.......................................
        ...........................................................7777777777777777777777777777777777777777777777777................................................................777777777777777777777777777777777777................................................................................777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777...................................
        ........................................................777777777777777777777777777777777777777777777777777777.............................................................777777777777777777777777777777777777777.............................................................................777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777..............................
        .......................................................777777777777777777777777777777777777777777777777777777777...........................................................7777777777777777777777777777777777777777...........................................................................77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777..........................
        ..................................................7777777777777777777777777777777777777777777777777777777777777777........................................................777777777777777777777777777777777777777777........................................................................7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777.......................
        ..............................................7777777777777777777777777777777777777777777777777777777777777777777777.....................................................77777777777777777777777777777777777777777777....................................................................7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777........
        .77777................7777................777777777777777777777777777777777777777777777777777777777777777777777777777...................................................7777777777777777777777777777777777777777777777..................................................................777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777....
        7777777777777777777777777777777.......77777777777777777777777777777777777777777777777777777777777777777777777777777777.................................................7777777777777777777777777777777777777777777777777.............................................................7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777................................................77777777777777777777777777777777777777777777777777..........................................................777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777............................................7777777777777777777777777777777777777777777777777777.....................................................7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777........................................7.77777777777777777777777777777777777777777777777777777.......................................77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777.......................................777777777777777777777777777777777777777777777777777777777...................................7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777...................................7777777777777777777777777777777777777777777777777777777777777..............................7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777.............................77777777777777777777777777777777777777777777777777777777777777777..........................7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777......................7777777777777777777777777777777777777777777777777777777777777777777777.....................777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777..................777777777777777777777777777777777777777777777777777777777777777777777777777..................777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777.......77777777777777777777777777777777777777777777777777777777777777777777777777777777777...........7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        `)
    Track2.setKind(SpriteKind.Bad)
    scaling.scaleByPercent(Track2, 200, ScaleDirection.Uniformly, ScaleAnchor.Middle)
    Track2.setPosition(Track1.x, Track1.y)
    Track2.setVelocity(-50, 0)
    RunnerPants = sprites.create(img`
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        8 8 8 8 8 8 8 8 
        8 8 8 8 8 8 8 8 
        8 8 . . . . 8 8 
        8 8 . . . . 8 8 
        . . . . . . . . 
        . . . . . . . . 
        `, SpriteKind.PlayerHitbox)
    animation.runImageAnimation(
    RunnerPants,
    [img`
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        8 8 8 8 8 8 8 8 
        8 8 8 8 8 8 8 8 
        8 8 . . . . 8 8 
        8 8 . . . . 8 8 
        . . . . . . . . 
        . . . . . . . . 
        `,img`
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        8 8 8 8 8 8 8 8 
        8 8 8 8 8 8 8 8 
        8 8 . . . . 8 8 
        8 8 . . . . 8 8 
        . . . . . . 8 8 
        . . . . . . 8 8 
        `,img`
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        8 8 8 8 8 8 8 8 
        8 8 8 8 8 8 8 8 
        . . 8 8 8 8 . . 
        . . 8 8 8 8 . . 
        . . . . 8 8 . . 
        . . . . 8 8 . . 
        `,img`
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        8 8 8 8 8 8 8 8 
        8 8 8 8 8 8 8 8 
        . . 8 8 8 8 . . 
        . . 8 8 8 8 . . 
        . . 8 8 . . . . 
        . . 8 8 . . . . 
        `,img`
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        8 8 8 8 8 8 8 8 
        8 8 8 8 8 8 8 8 
        . . 8 8 8 8 . . 
        . . 8 8 8 8 . . 
        . . 8 8 . . . . 
        . . 8 8 . . . . 
        `,img`
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        8 8 8 8 8 8 8 8 
        8 8 8 8 8 8 8 8 
        8 8 . . . . 8 8 
        8 8 . . . . 8 8 
        8 8 . . . . . . 
        8 8 . . . . . . 
        `],
    100,
    true
    )
    controller.moveSprite(RunnerPants, 0, 50)
    RunnerPants.setPosition(Runner.x, Runner.y)
    Track3.setImage(img`
        ................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        .....................................................................................................................................................................................................................................................................................................................................................................................................................................................................................1f1........................................
        .....................................................................................................................................................................................................................................................................................................................................................................................................................................................................................f1f1f......................................
        .....................................................................................................................................................................................................................................................................................................................................................................................................................................................................................1f1f1......................................
        .....................................................................................................................................................................................................................................................................................................................................................................................................................................................................................f1f1f......................................
        .....................................................................................................................................................................................................................................................................................................................................................................................................................................................................................1f1f1......................................
        .....................................................................................................................................................................................................................................................................................................................................................................................................................................................................................f1f1f......................................
        .....................................................................................................................................................................................................................................................................................................................................................................................................................................................................................1f1f1......................................
        .....................................................................................................................................................................................................................................................................................................................................................................................................................................................................................f1f1f......................................
        .....................................................................................................................................................................................................................................................................................................................................................................................................................................................................................1f1f1......................................
        .....................................................................................................................................................................................................................................................................................................................................................................................................................................................................................f1f1f......................................
        .....................................................................................................................................................................................................................................................................................................................................................................................................................................................................................1f1f1......................................
        .....................................................................................................................................................................................................................................................................................................................................................................................................................................................................................f1f1f......................................
        .....................................................................................................................................................................................................................................................................................................................................................................................................................................................................................1f1f1......................................
        .....................................................................................................................................................................................................................................................................................................................................................................................................................................................................................f1f1f......................................
        .....................................................................................................................................................................................................................................................................................................................................................................................................................................................................................1f1f1......................................
        .....................................................................................................................................................................................................................................................................................................................................................................................................................................................................................f1f1f......................................
        .....................................................................................................................................................................................................................................................................................................................................................................................................................................................................................1f1f1......................................
        .....................................................................................................................................................................................................................................................................................................................................................................................................................................................................................f1f1f......................................
        .....................................................................................................................................................................................................................................................................................................................................................................................................................................................................................1f1f1......................................
        .....................................................................................................................................................................................................................................................................................................................................................................................................................................................................................f1f1f......................................
        .....................................................................................................................................................................................................................................................................................................................................................................................................................................................................................1f1f1......................................
        ......................................................................................................................................................................................................................................................................................................................................................................................................................................................................................1f1f......................................
        .........................................................................................................................................................................................................................................................................................................................................................................................................................................................................................1......................................
        ................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        ................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................
        `)
    Track3.setKind(SpriteKind.Win)
    Track3.setPosition(Track1.x, Track1.y)
    scaling.scaleByPercent(Track3, 200, ScaleDirection.Uniformly, ScaleAnchor.Middle)
    Track3.setVelocity(-50, 0)
}
function MenuStart () {
    Runner.destroy()
    RunnerPants.destroy()
    Track1.destroy()
    Track2.destroy()
    Track3.destroy()
    scene.centerCameraAt(80, 60)
    Track1 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Back)
    Track2 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Bad)
    Track3 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Win)
    Speed = 0
    Difficulty = MenuWhichSelected
    Menu = 1
    RunSprite = sprites.create(img`
        111111.11..11.11..11.11..11.111111.111111
        111111.11..11.11..11.11..11.111111.111111
        11..11.11..11.111111.111111.11.....11..11
        11..11.11..11.111111.111111.11.....11..11
        111111.11..11.111111.111111.1111...111111
        111111.11..11.111111.111111.1111...111111
        1111...11..11.111111.111111.11.....1111..
        1111...11..11.111111.111111.11.....1111..
        11..11.111111.11..11.11..11.111111.11..11
        11..11.111111.11..11.11..11.111111.11..11
        `, SpriteKind.Player)
    RunSprite.y += -32
    scaling.scaleByPercent(RunSprite, 100, ScaleDirection.Uniformly, ScaleAnchor.Middle)
    EasySprite = sprites.create(img`
        7 7 7 . 7 7 7 . 7 7 7 . 7 . 7 
        7 . . . 7 . 7 . 7 . . . 7 . 7 
        7 7 . . 7 7 7 . 7 7 7 . . 7 . 
        7 . . . 7 . 7 . . . 7 . . 7 . 
        7 7 7 . 7 . 7 . 7 7 7 . . 7 . 
        `, SpriteKind.Back)
    EasySprite.setImage(img`
        1 1 1 . 1 1 1 . 1 1 1 . 1 . 1 
        1 . . . 1 . 1 . 1 . . . 1 . 1 
        1 1 . . 1 1 1 . 1 1 1 . . 1 . 
        1 . . . 1 . 1 . . . 1 . . 1 . 
        1 1 1 . 1 . 1 . 1 1 1 . . 1 . 
        `)
    scaling.scaleByPercent(EasySprite, 100, ScaleDirection.Uniformly, ScaleAnchor.Middle)
    EasySprite.y += -12
    MediumSprite = sprites.create(img`
        5 . 5 . 5 5 5 . 5 5 . . 5 5 5 . 5 . 5 . 5 . 5 
        5 5 5 . 5 . . . 5 . 5 . . 5 . . 5 . 5 . 5 5 5 
        5 5 5 . 5 5 . . 5 . 5 . . 5 . . 5 . 5 . 5 5 5 
        5 5 5 . 5 . . . 5 . 5 . . 5 . . 5 . 5 . 5 5 5 
        5 . 5 . 5 5 5 . 5 5 . . 5 5 5 . 5 5 5 . 5 . 5 
        `, SpriteKind.Back)
    scaling.scaleByPercent(MediumSprite, 100, ScaleDirection.Uniformly, ScaleAnchor.Middle)
    HardSprite = sprites.create(img`
        6 . 6 . 6 6 6 . 6 6 6 . 6 6 . 
        6 . 6 . 6 . 6 . 6 . 6 . 6 . 6 
        6 6 6 . 6 6 6 . 6 6 6 . 6 . 6 
        6 . 6 . 6 . 6 . 6 6 . . 6 . 6 
        6 . 6 . 6 . 6 . 6 . 6 . 6 6 . 
        `, SpriteKind.Back)
    scaling.scaleByPercent(HardSprite, 100, ScaleDirection.Uniformly, ScaleAnchor.Middle)
    HardSprite.y += 12
    ImpossibleSprite = sprites.create(img`
        a a a . a . a . a a a . a a a . a a a . a a a . a a a . a a . . a . . . a a a 
        . a . . a a a . a . a . a . a . a . . . a . . . . a . . a . a . a . . . a . . 
        . a . . a a a . a a a . a . a . a a a . a a a . . a . . a a . . a . . . a a . 
        . a . . a a a . a . . . a . a . . . a . . . a . . a . . a . a . a . . . a . . 
        a a a . a . a . a . . . a a a . a a a . a a a . a a a . a a . . a a a . a a a 
        `, SpriteKind.Back)
    scaling.scaleByPercent(ImpossibleSprite, 100, ScaleDirection.Uniformly, ScaleAnchor.Middle)
    ImpossibleSprite.y += 24
    Completed = sprites.create(img`
        1 1 1 . 1 1 1 . 1 . 1 . 1 1 1 . 1 . . . 1 1 1 . 1 1 1 . 1 1 1 . 1 1 . 
        1 . . . 1 . 1 . 1 1 1 . 1 . 1 . 1 . . . 1 . . . . 1 . . 1 . . . 1 . 1 
        1 . . . 1 . 1 . 1 1 1 . 1 1 1 . 1 . . . 1 1 . . . 1 . . 1 1 . . 1 . 1 
        1 . . . 1 . 1 . 1 1 1 . 1 . . . 1 . . . 1 . . . . 1 . . 1 . . . 1 . 1 
        1 1 1 . 1 1 1 . 1 . 1 . 1 . . . 1 1 1 . 1 1 1 . . 1 . . 1 1 1 . 1 1 . 
        `, SpriteKind.Back)
    Completed.x += -60
    Completed.y += -10
    CompletedEasy = sprites.create(img`
        2 2 2 . 2 2 2 . 2 2 2 . 2 . 2 
        2 . . . 2 . 2 . 2 . . . 2 . 2 
        2 2 . . 2 2 2 . 2 2 2 . . 2 . 
        2 . . . 2 . 2 . . . 2 . . 2 . 
        2 2 2 . 2 . 2 . 2 2 2 . . 2 . 
        `, SpriteKind.Not)
    CompletedEasy.x += -60
    CompletedEasy.y += -4
    CompletedMid = sprites.create(img`
        2 . 2 . 2 2 2 . 2 2 . . 2 2 2 . 2 . 2 . 2 . 2 
        2 2 2 . 2 . . . 2 . 2 . . 2 . . 2 . 2 . 2 2 2 
        2 2 2 . 2 2 . . 2 . 2 . . 2 . . 2 . 2 . 2 2 2 
        2 2 2 . 2 . . . 2 . 2 . . 2 . . 2 . 2 . 2 2 2 
        2 . 2 . 2 2 2 . 2 2 . . 2 2 2 . 2 2 2 . 2 . 2 
        `, SpriteKind.Not)
    CompletedMid.x += -60
    CompletedMid.y += 2
    CompletedHard = sprites.create(img`
        2 . 2 . 2 2 2 . 2 2 2 . 2 2 . 
        2 . 2 . 2 . 2 . 2 . 2 . 2 . 2 
        2 2 2 . 2 2 2 . 2 2 2 . 2 . 2 
        2 . 2 . 2 . 2 . 2 2 . . 2 . 2 
        2 . 2 . 2 . 2 . 2 . 2 . 2 2 . 
        `, SpriteKind.Not)
    CompletedHard.x += -60
    CompletedHard.y += 8
    CompleteImpossible = sprites.create(img`
        2 2 2 . 2 . 2 . 2 2 2 . 2 2 2 . 2 2 2 . 2 2 2 . 2 2 2 . 2 2 . . 2 . . . 2 2 2 
        . 2 . . 2 2 2 . 2 . 2 . 2 . 2 . 2 . . . 2 . . . . 2 . . 2 . 2 . 2 . . . 2 . . 
        . 2 . . 2 2 2 . 2 2 2 . 2 . 2 . 2 2 2 . 2 2 2 . . 2 . . 2 2 . . 2 . . . 2 2 . 
        . 2 . . 2 2 2 . 2 . . . 2 . 2 . . . 2 . . . 2 . . 2 . . 2 . 2 . 2 . . . 2 . . 
        2 2 2 . 2 . 2 . 2 . . . 2 2 2 . 2 2 2 . 2 2 2 . 2 2 2 . 2 2 . . 2 2 2 . 2 2 2 
        `, SpriteKind.Not)
    CompleteImpossible.x += -60
    CompleteImpossible.y += 14
    CompleteMystery = sprites.create(img`
        2 2 2 . 2 2 2 . 2 2 2 
        . . 2 . . . 2 . . . 2 
        . 2 2 . . 2 2 . . 2 2 
        . . . . . . . . . . . 
        . 2 . . . 2 . . . 2 . 
        `, SpriteKind.Not)
    CompleteMystery.x += -60
    CompleteMystery.y += 20
    if (BeatImpossible == 1) {
        Sprite2 = sprites.create(img`
            9 9 9 . 9 9 9 . 9 9 9 
            . . 9 . . . 9 . . . 9 
            . 9 9 . . 9 9 . . 9 9 
            . . . . . . . . . . . 
            . 9 . . . 9 . . . 9 . 
            `, SpriteKind.Back)
        scaling.scaleByPercent(Sprite2, 100, ScaleDirection.Uniformly, ScaleAnchor.Middle)
        Sprite2.y += 36
    } else {
    	
    }
}
sprites.onOverlap(SpriteKind.PlayerHitbox, SpriteKind.Bad, function (sprite, otherSprite) {
    game.showLongText("You Lose", DialogLayout.Bottom)
    MenuStart()
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Menu == 1) {
        if (Difficulty == 4) {
            if (BeatImpossible == 1) {
                Difficulty += 1
                MenuWhichSelected += 1
            } else {
            	
            }
        } else {
            Difficulty += 1
            MenuWhichSelected += 1
        }
    } else {
    	
    }
})
let RunnerPants: Sprite = null
let Runner: Sprite = null
let Sprite2: Sprite = null
let BeatRunner = 0
let BeatSecretLevel = 0
let Beat = 0
let BeatHard = 0
let BeatMid = 0
let BeatEasy = 0
let CompleteMystery: Sprite = null
let CompleteImpossible: Sprite = null
let CompletedHard: Sprite = null
let CompletedMid: Sprite = null
let CompletedEasy: Sprite = null
let Completed: Sprite = null
let ImpossibleSprite: Sprite = null
let HardSprite: Sprite = null
let MediumSprite: Sprite = null
let EasySprite: Sprite = null
let RunSprite: Sprite = null
let Menu = 0
let Difficulty = 0
let Speed = 0
let Track3: Sprite = null
let Track2: Sprite = null
let Track1: Sprite = null
let BeatImpossible = 0
let MenuWhichSelected = 0
MenuWhichSelected = 1
let BeatAll = 0
BeatImpossible = 0
game.setDialogTextColor(1)
game.setDialogCursor(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . 1 1 1 1 . . . . . . 
    . . . . 1 1 1 1 1 1 1 1 . . . . 
    . . . 1 1 1 f f f f 1 1 1 . . . 
    . . 1 1 1 f f f f f f 1 1 1 . . 
    . . 1 1 1 f f 1 1 f f 1 1 1 . . 
    . 1 1 1 1 f f 1 1 f f 1 1 1 1 . 
    . 1 1 1 1 f f f f f f 1 1 1 1 . 
    . 1 1 1 1 f f f f f f 1 1 1 1 . 
    . 1 1 1 1 f f 1 1 f f 1 1 1 1 . 
    . . 1 1 1 f f 1 1 f f 1 1 1 . . 
    . . 1 1 1 f f 1 1 f f 1 1 1 . . 
    . . . 1 1 f f 1 1 f f 1 1 . . . 
    . . . . 1 1 1 1 1 1 1 1 . . . . 
    . . . . . . 1 1 1 1 . . . . . . 
    . . . . . . . . . . . . . . . . 
    `)
game.setDialogFrame(img`
    f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f 
    `)
Track1 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Back)
Track2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Bad)
Track3 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Win)
Speed = 0
Difficulty = 1
Menu = 1
RunSprite = sprites.create(img`
    111111.11..11.11..11.11..11.111111.111111
    111111.11..11.11..11.11..11.111111.111111
    11..11.11..11.111111.111111.11.....11..11
    11..11.11..11.111111.111111.11.....11..11
    111111.11..11.111111.111111.1111...111111
    111111.11..11.111111.111111.1111...111111
    1111...11..11.111111.111111.11.....1111..
    1111...11..11.111111.111111.11.....1111..
    11..11.111111.11..11.11..11.111111.11..11
    11..11.111111.11..11.11..11.111111.11..11
    `, SpriteKind.Player)
RunSprite.y += -32
scaling.scaleByPercent(RunSprite, 100, ScaleDirection.Uniformly, ScaleAnchor.Middle)
EasySprite = sprites.create(img`
    7 7 7 . 7 7 7 . 7 7 7 . 7 . 7 
    7 . . . 7 . 7 . 7 . . . 7 . 7 
    7 7 . . 7 7 7 . 7 7 7 . . 7 . 
    7 . . . 7 . 7 . . . 7 . . 7 . 
    7 7 7 . 7 . 7 . 7 7 7 . . 7 . 
    `, SpriteKind.Back)
scaling.scaleByPercent(EasySprite, 100, ScaleDirection.Uniformly, ScaleAnchor.Middle)
EasySprite.y += -12
MediumSprite = sprites.create(img`
    5 . 5 . 5 5 5 . 5 5 . . 5 5 5 . 5 . 5 . 5 . 5 
    5 5 5 . 5 . . . 5 . 5 . . 5 . . 5 . 5 . 5 5 5 
    5 5 5 . 5 5 . . 5 . 5 . . 5 . . 5 . 5 . 5 5 5 
    5 5 5 . 5 . . . 5 . 5 . . 5 . . 5 . 5 . 5 5 5 
    5 . 5 . 5 5 5 . 5 5 . . 5 5 5 . 5 5 5 . 5 . 5 
    `, SpriteKind.Back)
scaling.scaleByPercent(MediumSprite, 100, ScaleDirection.Uniformly, ScaleAnchor.Middle)
HardSprite = sprites.create(img`
    6 . 6 . 6 6 6 . 6 6 6 . 6 6 . 
    6 . 6 . 6 . 6 . 6 . 6 . 6 . 6 
    6 6 6 . 6 6 6 . 6 6 6 . 6 . 6 
    6 . 6 . 6 . 6 . 6 6 . . 6 . 6 
    6 . 6 . 6 . 6 . 6 . 6 . 6 6 . 
    `, SpriteKind.Back)
scaling.scaleByPercent(HardSprite, 100, ScaleDirection.Uniformly, ScaleAnchor.Middle)
HardSprite.y += 12
ImpossibleSprite = sprites.create(img`
    a a a . a . a . a a a . a a a . a a a . a a a . a a a . a a . . a . . . a a a 
    . a . . a a a . a . a . a . a . a . . . a . . . . a . . a . a . a . . . a . . 
    . a . . a a a . a a a . a . a . a a a . a a a . . a . . a a . . a . . . a a . 
    . a . . a a a . a . . . a . a . . . a . . . a . . a . . a . a . a . . . a . . 
    a a a . a . a . a . . . a a a . a a a . a a a . a a a . a a . . a a a . a a a 
    `, SpriteKind.Back)
scaling.scaleByPercent(ImpossibleSprite, 100, ScaleDirection.Uniformly, ScaleAnchor.Middle)
ImpossibleSprite.y += 24
EasySprite.setImage(img`
    1 1 1 . 1 1 1 . 1 1 1 . 1 . 1 
    1 . . . 1 . 1 . 1 . . . 1 . 1 
    1 1 . . 1 1 1 . 1 1 1 . . 1 . 
    1 . . . 1 . 1 . . . 1 . . 1 . 
    1 1 1 . 1 . 1 . 1 1 1 . . 1 . 
    `)
Completed = sprites.create(img`
    1 1 1 . 1 1 1 . 1 . 1 . 1 1 1 . 1 . . . 1 1 1 . 1 1 1 . 1 1 1 . 1 1 . 
    1 . . . 1 . 1 . 1 1 1 . 1 . 1 . 1 . . . 1 . . . . 1 . . 1 . . . 1 . 1 
    1 . . . 1 . 1 . 1 1 1 . 1 1 1 . 1 . . . 1 1 . . . 1 . . 1 1 . . 1 . 1 
    1 . . . 1 . 1 . 1 1 1 . 1 . . . 1 . . . 1 . . . . 1 . . 1 . . . 1 . 1 
    1 1 1 . 1 1 1 . 1 . 1 . 1 . . . 1 1 1 . 1 1 1 . . 1 . . 1 1 1 . 1 1 . 
    `, SpriteKind.Back)
Completed.x += -60
Completed.y += -10
CompletedEasy = sprites.create(img`
    2 2 2 . 2 2 2 . 2 2 2 . 2 . 2 
    2 . . . 2 . 2 . 2 . . . 2 . 2 
    2 2 . . 2 2 2 . 2 2 2 . . 2 . 
    2 . . . 2 . 2 . . . 2 . . 2 . 
    2 2 2 . 2 . 2 . 2 2 2 . . 2 . 
    `, SpriteKind.Not)
CompletedEasy.x += -60
CompletedEasy.y += -4
CompletedMid = sprites.create(img`
    2 . 2 . 2 2 2 . 2 2 . . 2 2 2 . 2 . 2 . 2 . 2 
    2 2 2 . 2 . . . 2 . 2 . . 2 . . 2 . 2 . 2 2 2 
    2 2 2 . 2 2 . . 2 . 2 . . 2 . . 2 . 2 . 2 2 2 
    2 2 2 . 2 . . . 2 . 2 . . 2 . . 2 . 2 . 2 2 2 
    2 . 2 . 2 2 2 . 2 2 . . 2 2 2 . 2 2 2 . 2 . 2 
    `, SpriteKind.Not)
CompletedMid.x += -60
CompletedMid.y += 2
CompletedHard = sprites.create(img`
    2 . 2 . 2 2 2 . 2 2 2 . 2 2 . 
    2 . 2 . 2 . 2 . 2 . 2 . 2 . 2 
    2 2 2 . 2 2 2 . 2 2 2 . 2 . 2 
    2 . 2 . 2 . 2 . 2 2 . . 2 . 2 
    2 . 2 . 2 . 2 . 2 . 2 . 2 2 . 
    `, SpriteKind.Not)
CompletedHard.x += -60
CompletedHard.y += 8
CompleteImpossible = sprites.create(img`
    2 2 2 . 2 . 2 . 2 2 2 . 2 2 2 . 2 2 2 . 2 2 2 . 2 2 2 . 2 2 . . 2 . . . 2 2 2 
    . 2 . . 2 2 2 . 2 . 2 . 2 . 2 . 2 . . . 2 . . . . 2 . . 2 . 2 . 2 . . . 2 . . 
    . 2 . . 2 2 2 . 2 2 2 . 2 . 2 . 2 2 2 . 2 2 2 . . 2 . . 2 2 . . 2 . . . 2 2 . 
    . 2 . . 2 2 2 . 2 . . . 2 . 2 . . . 2 . . . 2 . . 2 . . 2 . 2 . 2 . . . 2 . . 
    2 2 2 . 2 . 2 . 2 . . . 2 2 2 . 2 2 2 . 2 2 2 . 2 2 2 . 2 2 . . 2 2 2 . 2 2 2 
    `, SpriteKind.Not)
CompleteImpossible.x += -60
CompleteImpossible.y += 14
CompleteMystery = sprites.create(img`
    2 2 2 . 2 2 2 . 2 2 2 
    . . 2 . . . 2 . . . 2 
    . 2 2 . . 2 2 . . 2 2 
    . . . . . . . . . . . 
    . 2 . . . 2 . . . 2 . 
    `, SpriteKind.Not)
CompleteMystery.x += -60
CompleteMystery.y += 20
BeatEasy = 0
BeatMid = 0
BeatHard = 0
BeatImpossible = 0
Beat = 0
BeatSecretLevel = 0
BeatRunner = 0
forever(function () {
    if (Menu == 1) {
        if (BeatEasy == 1) {
            CompletedEasy.setImage(img`
                7 7 7 . 7 7 7 . 7 7 7 . 7 . 7 
                7 . . . 7 . 7 . 7 . . . 7 . 7 
                7 7 . . 7 7 7 . 7 7 7 . . 7 . 
                7 . . . 7 . 7 . . . 7 . . 7 . 
                7 7 7 . 7 . 7 . 7 7 7 . . 7 . 
                `)
        } else {
        	
        }
        if (BeatMid == 1) {
            CompletedMid.setImage(img`
                7 . 7 . 7 7 7 . 7 7 . . 7 7 7 . 7 . 7 . 7 . 7 
                7 7 7 . 7 . . . 7 . 7 . . 7 . . 7 . 7 . 7 7 7 
                7 7 7 . 7 7 . . 7 . 7 . . 7 . . 7 . 7 . 7 7 7 
                7 7 7 . 7 . . . 7 . 7 . . 7 . . 7 . 7 . 7 7 7 
                7 . 7 . 7 7 7 . 7 7 . . 7 7 7 . 7 7 7 . 7 . 7 
                `)
        } else {
        	
        }
        if (BeatHard == 1) {
            CompletedHard.setImage(img`
                7 . 7 . 7 7 7 . 7 7 7 . 7 7 . 
                7 . 7 . 7 . 7 . 7 . 7 . 7 . 7 
                7 7 7 . 7 7 7 . 7 7 7 . 7 . 7 
                7 . 7 . 7 . 7 . 7 7 . . 7 . 7 
                7 . 7 . 7 . 7 . 7 . 7 . 7 7 . 
                `)
        } else {
        	
        }
        if (BeatImpossible == 1) {
            CompleteImpossible.setImage(img`
                7 7 7 . 7 . 7 . 7 7 7 . 7 7 7 . 7 7 7 . 7 7 7 . 7 7 7 . 7 7 . . 7 . . . 7 7 7 
                . 7 . . 7 7 7 . 7 . 7 . 7 . 7 . 7 . . . 7 . . . . 7 . . 7 . 7 . 7 . . . 7 . . 
                . 7 . . 7 7 7 . 7 7 7 . 7 . 7 . 7 7 7 . 7 7 7 . . 7 . . 7 7 . . 7 . . . 7 7 . 
                . 7 . . 7 7 7 . 7 . . . 7 . 7 . . . 7 . . . 7 . . 7 . . 7 . 7 . 7 . . . 7 . . 
                7 7 7 . 7 . 7 . 7 . . . 7 7 7 . 7 7 7 . 7 7 7 . 7 7 7 . 7 7 . . 7 7 7 . 7 7 7 
                `)
        } else {
        	
        }
        if (Beat == 1) {
            CompleteMystery.setImage(img`
                7 7 7 . 7 7 7 . 7 7 7 
                . . 7 . . . 7 . . . 7 
                . 7 7 . . 7 7 . . 7 7 
                . . . . . . . . . . . 
                . 7 . . . 7 . . . 7 . 
                `)
        } else {
        	
        }
    } else {
    	
    }
})
forever(function () {
    if (BeatEasy == 1) {
        if (BeatMid == 1) {
            if (BeatHard == 1) {
                if (BeatImpossible == 1) {
                    if (Beat == 1) {
                        if (BeatSecretLevel == 1) {
                            if (BeatRunner == 1) {
                                BeatAll = 1
                            } else {
                            	
                            }
                        } else {
                        	
                        }
                    } else {
                    	
                    }
                } else {
                	
                }
            } else {
            	
            }
        } else {
        	
        }
    } else {
    	
    }
})
forever(function () {
    if (Menu == 1) {
        if (BeatAll == 1) {
            scene.setBackgroundImage(img`
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................555555..555555..55..55..555555..................................................................
                ................................................................555555..555555..55..55..555555..................................................................
                ..................................................................55....55..55..55..55..55......................................................................
                ..................................................................55....55..55..55..55..55......................................................................
                ..................................................................55....555555..55..55..5555....................................................................
                ..................................................................55....555555..55..55..5555....................................................................
                ..................................................................55....5555....55..55..55......................................................................
                ..................................................................55....5555....55..55..55......................................................................
                ..................................................................55....55..55..555555..555555..................................................................
                ..................................................................55....55..55..555555..555555..................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                `)
        } else {
            scene.setBackgroundImage(img`
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                ................................................................................................................................................................
                `)
        }
    } else {
    	
    }
})
forever(function () {
    if (Menu == 1) {
        if (Difficulty == 1) {
            EasySprite.setImage(img`
                1 1 1 . 1 1 1 . 1 1 1 . 1 . 1 
                1 . . . 1 . 1 . 1 . . . 1 . 1 
                1 1 . . 1 1 1 . 1 1 1 . . 1 . 
                1 . . . 1 . 1 . . . 1 . . 1 . 
                1 1 1 . 1 . 1 . 1 1 1 . . 1 . 
                `)
            MediumSprite.setImage(img`
                5 . 5 . 5 5 5 . 5 5 . . 5 5 5 . 5 . 5 . 5 . 5 
                5 5 5 . 5 . . . 5 . 5 . . 5 . . 5 . 5 . 5 5 5 
                5 5 5 . 5 5 . . 5 . 5 . . 5 . . 5 . 5 . 5 5 5 
                5 5 5 . 5 . . . 5 . 5 . . 5 . . 5 . 5 . 5 5 5 
                5 . 5 . 5 5 5 . 5 5 . . 5 5 5 . 5 5 5 . 5 . 5 
                `)
            HardSprite.setImage(img`
                6 . 6 . 6 6 6 . 6 6 6 . 6 6 . 
                6 . 6 . 6 . 6 . 6 . 6 . 6 . 6 
                6 6 6 . 6 6 6 . 6 6 6 . 6 . 6 
                6 . 6 . 6 . 6 . 6 6 . . 6 . 6 
                6 . 6 . 6 . 6 . 6 . 6 . 6 6 . 
                `)
            ImpossibleSprite.setImage(img`
                a a a . a . a . a a a . a a a . a a a . a a a . a a a . a a . . a . . . a a a 
                . a . . a a a . a . a . a . a . a . . . a . . . . a . . a . a . a . . . a . . 
                . a . . a a a . a a a . a . a . a a a . a a a . . a . . a a . . a . . . a a . 
                . a . . a a a . a . . . a . a . . . a . . . a . . a . . a . a . a . . . a . . 
                a a a . a . a . a . . . a a a . a a a . a a a . a a a . a a . . a a a . a a a 
                `)
            if (BeatImpossible == 1) {
                Sprite2.setImage(img`
                    9 9 9 . 9 9 9 . 9 9 9 
                    . . 9 . . . 9 . . . 9 
                    . 9 9 . . 9 9 . . 9 9 
                    . . . . . . . . . . . 
                    . 9 . . . 9 . . . 9 . 
                    `)
            } else {
            	
            }
            if (Beat == 1) {
                RunSprite.setImage(img`
                    111111.11..11.11..11.11..11.111111.111111
                    111111.11..11.11..11.11..11.111111.111111
                    11..11.11..11.111111.111111.11.....11..11
                    11..11.11..11.111111.111111.11.....11..11
                    111111.11..11.111111.111111.1111...111111
                    111111.11..11.111111.111111.1111...111111
                    1111...11..11.111111.111111.11.....1111..
                    1111...11..11.111111.111111.11.....1111..
                    11..11.111111.11..11.11..11.111111.11..11
                    11..11.111111.11..11.11..11.111111.11..11
                    `)
            } else {
            	
            }
        } else if (Difficulty == 2) {
            EasySprite.setImage(img`
                7 7 7 . 7 7 7 . 7 7 7 . 7 . 7 
                7 . . . 7 . 7 . 7 . . . 7 . 7 
                7 7 . . 7 7 7 . 7 7 7 . . 7 . 
                7 . . . 7 . 7 . . . 7 . . 7 . 
                7 7 7 . 7 . 7 . 7 7 7 . . 7 . 
                `)
            MediumSprite.setImage(img`
                1 . 1 . 1 1 1 . 1 1 . . 1 1 1 . 1 . 1 . 1 . 1 
                1 1 1 . 1 . . . 1 . 1 . . 1 . . 1 . 1 . 1 1 1 
                1 1 1 . 1 1 . . 1 . 1 . . 1 . . 1 . 1 . 1 1 1 
                1 1 1 . 1 . . . 1 . 1 . . 1 . . 1 . 1 . 1 1 1 
                1 . 1 . 1 1 1 . 1 1 . . 1 1 1 . 1 1 1 . 1 . 1 
                `)
            HardSprite.setImage(img`
                6 . 6 . 6 6 6 . 6 6 6 . 6 6 . 
                6 . 6 . 6 . 6 . 6 . 6 . 6 . 6 
                6 6 6 . 6 6 6 . 6 6 6 . 6 . 6 
                6 . 6 . 6 . 6 . 6 6 . . 6 . 6 
                6 . 6 . 6 . 6 . 6 . 6 . 6 6 . 
                `)
            ImpossibleSprite.setImage(img`
                a a a . a . a . a a a . a a a . a a a . a a a . a a a . a a . . a . . . a a a 
                . a . . a a a . a . a . a . a . a . . . a . . . . a . . a . a . a . . . a . . 
                . a . . a a a . a a a . a . a . a a a . a a a . . a . . a a . . a . . . a a . 
                . a . . a a a . a . . . a . a . . . a . . . a . . a . . a . a . a . . . a . . 
                a a a . a . a . a . . . a a a . a a a . a a a . a a a . a a . . a a a . a a a 
                `)
            if (BeatImpossible == 1) {
                Sprite2.setImage(img`
                    9 9 9 . 9 9 9 . 9 9 9 
                    . . 9 . . . 9 . . . 9 
                    . 9 9 . . 9 9 . . 9 9 
                    . . . . . . . . . . . 
                    . 9 . . . 9 . . . 9 . 
                    `)
            } else {
            	
            }
            if (Beat == 1) {
                RunSprite.setImage(img`
                    111111.11..11.11..11.11..11.111111.111111
                    111111.11..11.11..11.11..11.111111.111111
                    11..11.11..11.111111.111111.11.....11..11
                    11..11.11..11.111111.111111.11.....11..11
                    111111.11..11.111111.111111.1111...111111
                    111111.11..11.111111.111111.1111...111111
                    1111...11..11.111111.111111.11.....1111..
                    1111...11..11.111111.111111.11.....1111..
                    11..11.111111.11..11.11..11.111111.11..11
                    11..11.111111.11..11.11..11.111111.11..11
                    `)
            } else {
            	
            }
        } else if (Difficulty == 3) {
            EasySprite.setImage(img`
                7 7 7 . 7 7 7 . 7 7 7 . 7 . 7 
                7 . . . 7 . 7 . 7 . . . 7 . 7 
                7 7 . . 7 7 7 . 7 7 7 . . 7 . 
                7 . . . 7 . 7 . . . 7 . . 7 . 
                7 7 7 . 7 . 7 . 7 7 7 . . 7 . 
                `)
            MediumSprite.setImage(img`
                5 . 5 . 5 5 5 . 5 5 . . 5 5 5 . 5 . 5 . 5 . 5 
                5 5 5 . 5 . . . 5 . 5 . . 5 . . 5 . 5 . 5 5 5 
                5 5 5 . 5 5 . . 5 . 5 . . 5 . . 5 . 5 . 5 5 5 
                5 5 5 . 5 . . . 5 . 5 . . 5 . . 5 . 5 . 5 5 5 
                5 . 5 . 5 5 5 . 5 5 . . 5 5 5 . 5 5 5 . 5 . 5 
                `)
            HardSprite.setImage(img`
                1 . 1 . 1 1 1 . 1 1 1 . 1 1 . 
                1 . 1 . 1 . 1 . 1 . 1 . 1 . 1 
                1 1 1 . 1 1 1 . 1 1 1 . 1 . 1 
                1 . 1 . 1 . 1 . 1 1 . . 1 . 1 
                1 . 1 . 1 . 1 . 1 . 1 . 1 1 . 
                `)
            ImpossibleSprite.setImage(img`
                a a a . a . a . a a a . a a a . a a a . a a a . a a a . a a . . a . . . a a a 
                . a . . a a a . a . a . a . a . a . . . a . . . . a . . a . a . a . . . a . . 
                . a . . a a a . a a a . a . a . a a a . a a a . . a . . a a . . a . . . a a . 
                . a . . a a a . a . . . a . a . . . a . . . a . . a . . a . a . a . . . a . . 
                a a a . a . a . a . . . a a a . a a a . a a a . a a a . a a . . a a a . a a a 
                `)
            if (BeatImpossible == 1) {
                Sprite2.setImage(img`
                    9 9 9 . 9 9 9 . 9 9 9 
                    . . 9 . . . 9 . . . 9 
                    . 9 9 . . 9 9 . . 9 9 
                    . . . . . . . . . . . 
                    . 9 . . . 9 . . . 9 . 
                    `)
            } else {
            	
            }
            if (Beat == 1) {
                RunSprite.setImage(img`
                    111111.11..11.11..11.11..11.111111.111111
                    111111.11..11.11..11.11..11.111111.111111
                    11..11.11..11.111111.111111.11.....11..11
                    11..11.11..11.111111.111111.11.....11..11
                    111111.11..11.111111.111111.1111...111111
                    111111.11..11.111111.111111.1111...111111
                    1111...11..11.111111.111111.11.....1111..
                    1111...11..11.111111.111111.11.....1111..
                    11..11.111111.11..11.11..11.111111.11..11
                    11..11.111111.11..11.11..11.111111.11..11
                    `)
            } else {
            	
            }
        } else if (Difficulty == 4) {
            EasySprite.setImage(img`
                7 7 7 . 7 7 7 . 7 7 7 . 7 . 7 
                7 . . . 7 . 7 . 7 . . . 7 . 7 
                7 7 . . 7 7 7 . 7 7 7 . . 7 . 
                7 . . . 7 . 7 . . . 7 . . 7 . 
                7 7 7 . 7 . 7 . 7 7 7 . . 7 . 
                `)
            MediumSprite.setImage(img`
                5 . 5 . 5 5 5 . 5 5 . . 5 5 5 . 5 . 5 . 5 . 5 
                5 5 5 . 5 . . . 5 . 5 . . 5 . . 5 . 5 . 5 5 5 
                5 5 5 . 5 5 . . 5 . 5 . . 5 . . 5 . 5 . 5 5 5 
                5 5 5 . 5 . . . 5 . 5 . . 5 . . 5 . 5 . 5 5 5 
                5 . 5 . 5 5 5 . 5 5 . . 5 5 5 . 5 5 5 . 5 . 5 
                `)
            HardSprite.setImage(img`
                6 . 6 . 6 6 6 . 6 6 6 . 6 6 . 
                6 . 6 . 6 . 6 . 6 . 6 . 6 . 6 
                6 6 6 . 6 6 6 . 6 6 6 . 6 . 6 
                6 . 6 . 6 . 6 . 6 6 . . 6 . 6 
                6 . 6 . 6 . 6 . 6 . 6 . 6 6 . 
                `)
            ImpossibleSprite.setImage(img`
                1 1 1 . 1 . 1 . 1 1 1 . 1 1 1 . 1 1 1 . 1 1 1 . 1 1 1 . 1 1 . . 1 . . . 1 1 1 
                . 1 . . 1 1 1 . 1 . 1 . 1 . 1 . 1 . . . 1 . . . . 1 . . 1 . 1 . 1 . . . 1 . . 
                . 1 . . 1 1 1 . 1 1 1 . 1 . 1 . 1 1 1 . 1 1 1 . . 1 . . 1 1 . . 1 . . . 1 1 . 
                . 1 . . 1 1 1 . 1 . . . 1 . 1 . . . 1 . . . 1 . . 1 . . 1 . 1 . 1 . . . 1 . . 
                1 1 1 . 1 . 1 . 1 . . . 1 1 1 . 1 1 1 . 1 1 1 . 1 1 1 . 1 1 . . 1 1 1 . 1 1 1 
                `)
            if (BeatImpossible == 1) {
                Sprite2.setImage(img`
                    9 9 9 . 9 9 9 . 9 9 9 
                    . . 9 . . . 9 . . . 9 
                    . 9 9 . . 9 9 . . 9 9 
                    . . . . . . . . . . . 
                    . 9 . . . 9 . . . 9 . 
                    `)
            } else {
            	
            }
            if (Beat == 1) {
                RunSprite.setImage(img`
                    111111.11..11.11..11.11..11.111111.111111
                    111111.11..11.11..11.11..11.111111.111111
                    11..11.11..11.111111.111111.11.....11..11
                    11..11.11..11.111111.111111.11.....11..11
                    111111.11..11.111111.111111.1111...111111
                    111111.11..11.111111.111111.1111...111111
                    1111...11..11.111111.111111.11.....1111..
                    1111...11..11.111111.111111.11.....1111..
                    11..11.111111.11..11.11..11.111111.11..11
                    11..11.111111.11..11.11..11.111111.11..11
                    `)
            } else {
            	
            }
        } else if (Difficulty == 5) {
            EasySprite.setImage(img`
                7 7 7 . 7 7 7 . 7 7 7 . 7 . 7 
                7 . . . 7 . 7 . 7 . . . 7 . 7 
                7 7 . . 7 7 7 . 7 7 7 . . 7 . 
                7 . . . 7 . 7 . . . 7 . . 7 . 
                7 7 7 . 7 . 7 . 7 7 7 . . 7 . 
                `)
            MediumSprite.setImage(img`
                5 . 5 . 5 5 5 . 5 5 . . 5 5 5 . 5 . 5 . 5 . 5 
                5 5 5 . 5 . . . 5 . 5 . . 5 . . 5 . 5 . 5 5 5 
                5 5 5 . 5 5 . . 5 . 5 . . 5 . . 5 . 5 . 5 5 5 
                5 5 5 . 5 . . . 5 . 5 . . 5 . . 5 . 5 . 5 5 5 
                5 . 5 . 5 5 5 . 5 5 . . 5 5 5 . 5 5 5 . 5 . 5 
                `)
            HardSprite.setImage(img`
                6 . 6 . 6 6 6 . 6 6 6 . 6 6 . 
                6 . 6 . 6 . 6 . 6 . 6 . 6 . 6 
                6 6 6 . 6 6 6 . 6 6 6 . 6 . 6 
                6 . 6 . 6 . 6 . 6 6 . . 6 . 6 
                6 . 6 . 6 . 6 . 6 . 6 . 6 6 . 
                `)
            ImpossibleSprite.setImage(img`
                a a a . a . a . a a a . a a a . a a a . a a a . a a a . a a . . a . . . a a a 
                . a . . a a a . a . a . a . a . a . . . a . . . . a . . a . a . a . . . a . . 
                . a . . a a a . a a a . a . a . a a a . a a a . . a . . a a . . a . . . a a . 
                . a . . a a a . a . . . a . a . . . a . . . a . . a . . a . a . a . . . a . . 
                a a a . a . a . a . . . a a a . a a a . a a a . a a a . a a . . a a a . a a a 
                `)
            if (BeatImpossible == 1) {
                Sprite2.setImage(img`
                    1 1 1 . 1 1 1 . 1 1 1 
                    . . 1 . . . 1 . . . 1 
                    . 1 1 . . 1 1 . . 1 1 
                    . . . . . . . . . . . 
                    . 1 . . . 1 . . . 1 . 
                    `)
            } else {
            	
            }
            if (Beat == 1) {
                RunSprite.setImage(img`
                    111111.11..11.11..11.11..11.111111.111111
                    111111.11..11.11..11.11..11.111111.111111
                    11..11.11..11.111111.111111.11.....11..11
                    11..11.11..11.111111.111111.11.....11..11
                    111111.11..11.111111.111111.1111...111111
                    111111.11..11.111111.111111.1111...111111
                    1111...11..11.111111.111111.11.....1111..
                    1111...11..11.111111.111111.11.....1111..
                    11..11.111111.11..11.11..11.111111.11..11
                    11..11.111111.11..11.11..11.111111.11..11
                    `)
            } else {
            	
            }
        } else if (Difficulty == 0) {
            EasySprite.setImage(img`
                7 7 7 . 7 7 7 . 7 7 7 . 7 . 7 
                7 . . . 7 . 7 . 7 . . . 7 . 7 
                7 7 . . 7 7 7 . 7 7 7 . . 7 . 
                7 . . . 7 . 7 . . . 7 . . 7 . 
                7 7 7 . 7 . 7 . 7 7 7 . . 7 . 
                `)
            MediumSprite.setImage(img`
                5 . 5 . 5 5 5 . 5 5 . . 5 5 5 . 5 . 5 . 5 . 5 
                5 5 5 . 5 . . . 5 . 5 . . 5 . . 5 . 5 . 5 5 5 
                5 5 5 . 5 5 . . 5 . 5 . . 5 . . 5 . 5 . 5 5 5 
                5 5 5 . 5 . . . 5 . 5 . . 5 . . 5 . 5 . 5 5 5 
                5 . 5 . 5 5 5 . 5 5 . . 5 5 5 . 5 5 5 . 5 . 5 
                `)
            HardSprite.setImage(img`
                6 . 6 . 6 6 6 . 6 6 6 . 6 6 . 
                6 . 6 . 6 . 6 . 6 . 6 . 6 . 6 
                6 6 6 . 6 6 6 . 6 6 6 . 6 . 6 
                6 . 6 . 6 . 6 . 6 6 . . 6 . 6 
                6 . 6 . 6 . 6 . 6 . 6 . 6 6 . 
                `)
            ImpossibleSprite.setImage(img`
                a a a . a . a . a a a . a a a . a a a . a a a . a a a . a a . . a . . . a a a 
                . a . . a a a . a . a . a . a . a . . . a . . . . a . . a . a . a . . . a . . 
                . a . . a a a . a a a . a . a . a a a . a a a . . a . . a a . . a . . . a a . 
                . a . . a a a . a . . . a . a . . . a . . . a . . a . . a . a . a . . . a . . 
                a a a . a . a . a . . . a a a . a a a . a a a . a a a . a a . . a a a . a a a 
                `)
            if (BeatImpossible == 1) {
                Sprite2.setImage(img`
                    9 9 9 . 9 9 9 . 9 9 9 
                    . . 9 . . . 9 . . . 9 
                    . 9 9 . . 9 9 . . 9 9 
                    . . . . . . . . . . . 
                    . 9 . . . 9 . . . 9 . 
                    `)
            } else {
            	
            }
            if (Beat == 1) {
                RunSprite.setImage(img`
                    444444.44..44.44..44.44..44.444444.444444
                    444444.44..44.44..44.44..44.444444.444444
                    44..44.44..44.444444.444444.44.....44..44
                    44..44.44..44.444444.444444.44.....44..44
                    444444.44..44.444444.444444.4444...444444
                    444444.44..44.444444.444444.4444...444444
                    4444...44..44.444444.444444.44.....4444..
                    4444...44..44.444444.444444.44.....4444..
                    44..44.444444.44..44.44..44.444444.44..44
                    44..44.444444.44..44.44..44.444444.44..44
                    `)
            } else {
            	
            }
        } else {
        	
        }
    } else {
    	
    }
})
forever(function () {
    Track1.vx = Speed * -1
    Track2.vx = Speed * -1
    Track3.vx = Speed * -1
})
game.onUpdateInterval(200, function () {
    if (Difficulty == 1) {
        Speed += 1
    } else if (Difficulty == 2) {
        Speed += 2
    } else if (Difficulty == 3) {
        Speed += 3
    } else if (Difficulty == 4) {
        Speed += 4
    } else if (Difficulty == 5) {
        Speed += 5
    } else if (Difficulty == 6) {
        Speed += 6
    } else if (Difficulty == 7) {
        Speed += 7
    }
})
