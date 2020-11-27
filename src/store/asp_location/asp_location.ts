export type Orientation = "N" | "E" | "W" | "S";

export interface Location {
    x: number
    y: number
    orientation: Orientation
}