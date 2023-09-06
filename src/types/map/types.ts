export type ShapePointCoord = {
  x: number;
  y: number;
};

export type Room = {
  id: number;
  name: string;
  nameCoords: ShapePointCoord;
  coords: ShapePointCoord[];
  backgroundColor: string;
  lineColor: string;
};

export type Floor = {
  id: number;
  number?: string;
  silueteMapCoord: ShapePointCoord[];
  rooms: Room[];
};
