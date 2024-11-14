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

const MissionSchema = new Schema<MissionDocument>({
  name: { type: String, required: true },
  coordinates: [
    {
      lat: { type: Number, required: true },
      lng: { type: Number, required: true },
    },
  ],
});

export default models.Mission || model<MissionDocument>('Mission', MissionSchema);
