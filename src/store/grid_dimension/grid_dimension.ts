type GridStatus = "Clean" | "Dirty";

export type GridCoordinates = {
    x: number,
    y: number
}

export type GridBlock = {
    status: GridStatus,
    coordinates: GridCoordinates
}

export interface GridDimension {
    x: number | undefined
    y: number | undefined
    gridlist: GridBlock[] | undefined
}