export type ShapePointCoord = {
  x: number;
  y: number;
};

export type Room = {
  id: number;
  coords: ShapePointCoord[];
  backgroundColor: string;
  lineColor: string;
};

export type Floor = {
  silueteMapCoord: ShapePointCoord[];
  rooms: Room[];
};
