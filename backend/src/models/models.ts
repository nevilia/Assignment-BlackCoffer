import mongoose, { Schema, Document } from 'mongoose';

export interface format extends Document {
    start_year: number | string;
    end_year: number | string;
    topic: string;
    sector: string;
    title: string;
    url: string;
    country: string;
    region: string;
    source: string;
    impact: number | string;
    intensity: number;
    insight: string;
    added: Date | string;
    published: Date | string;
    relevance: number;
    pestle: string;
    likelihood: number;
}

const ModelSchema = new Schema<format>({
    start_year: { type: Schema.Types.Mixed },
    end_year: { type: Schema.Types.Mixed },
    title: { type: String, required: true },
    intensity: { type: Number, required: true },
    sector: { type: String, required: true },
    country: { type: String, required: true },
    region: { type: String, required: true },
    url: { type: String, required: true },
    topic: { type: String, required: true },
    source: { type: String, required: true },
    insight: { type: String, required: true },
    impact: { type: Schema.Types.Mixed },
    added: { type: Date, required: true },
    published: { type: Date, required: true },
    relevance: { type: Number, required: true },
    pestle: { type: String, required: true },
    likelihood: { type: Number, required: true }
});

const Data = mongoose.model<format>('Data', ModelSchema, 'Data');
export default Data