/**
 * Journi core domain types.
 * The Claude API returns this shape; React Flow consumes it; Prisma persists it.
 */

export type NodeType =
  | "intent"
  | "place"
  | "activity"
  | "timing"
  | "warning"
  | "tip";

export type Confidence = "ai" | "verified" | "live";

export type PriceRange = "free" | "£" | "££" | "£££";

export interface OpeningHours {
  mon?: string;
  tue?: string;
  wed?: string;
  thu?: string;
  fri?: string;
  sat?: string;
  sun?: string;
}

export interface TripNodeData {
  id: string;
  type: NodeType;
  label: string;
  description?: string;

  // Location
  placeName?: string | null;
  placeId?: string | null;
  latitude?: number | null;
  longitude?: number | null;

  // Seasonal intelligence
  bestMonths?: number[];
  avoidMonths?: number[];
  seasonNote?: string | null;

  // Practical
  openingHours?: OpeningHours | null;
  bookingRequired?: boolean;
  bookingLeadDays?: number | null;
  priceRange?: PriceRange | null;
  duration?: string | null;

  // Trust & extras
  confidence: Confidence;
  warnings?: string[];
  tips?: string[];

  // Layout
  positionX: number;
  positionY: number;
  expanded?: boolean;
}

export interface TripEdgeData {
  id: string;
  sourceId: string;
  targetId: string;
  label?: string;
}

export interface TripTree {
  title: string;
  destination?: string;
  summary?: string;
  nodes: TripNodeData[];
  edges: TripEdgeData[];
  gaps?: string[];
  suggestedDuration?: string;
}
