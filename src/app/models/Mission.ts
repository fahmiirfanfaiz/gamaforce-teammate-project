// models/Mission.ts
//keknya ini skema deh
import mongoose, { Schema, Document, model, models } from 'mongoose';

interface Coordinates {
  lat: number;
  lng: number;
}

interface MissionDocument extends Document {
  name: string;
  coordinates: Coordinates[];
}

const MissionSchema = new Schema({
  name: { type: String, required: true },
  geometry: {
    type: {
      type: String, // e.g., "Point", "LineString", "Polygon"
      enum: ["Point", "LineString", "Polygon"], // Hanya tipe GeoJSON valid
      required: true,
    },
    coordinates: {
      type: [Number], // Array untuk longitude, latitude
      required: true,
    },
  },
  properties: {
    type: Map,
    of: String, // Field tambahan (opsional)
  },
});


export default models.Mission || model<MissionDocument>('Mission', MissionSchema);


