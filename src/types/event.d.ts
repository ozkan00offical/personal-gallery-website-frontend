export type Event = {
  id: string;
  title: string;
  description: string;
  image: string;
  start: string;
  participant?: {
    id: string;
    name?: string;
  } | null;
};