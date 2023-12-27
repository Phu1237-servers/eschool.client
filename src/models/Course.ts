import { type Category } from "./Category";
import type { Video } from "./Video";

export interface Course {
  id: number;
  name: string;
  description: string;
  thumbnail: string;
  views: number;
  cloud_id?: string;
  cloud_path?: string;
  category_id: number;
  category?: Category;
  videos?: Array<Video>;
  created_at: string;
  updated_at: string;
  current_watching_video: number,
}

export const defaultCourse: Course = {
  id: 0,
  name: "",
  description: "",
  thumbnail: "",
  views: 0,
  category_id: 0,
  created_at: "",
  updated_at: "",
  current_watching_video: 0,
};
