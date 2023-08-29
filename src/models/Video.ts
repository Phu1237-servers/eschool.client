import type { Course } from "./Course";

export interface Video {
  id: number;
  name: string;
  thumbnail: string;
  duration: number;
  download_url: string;
  subtitle_url: string;
  cloud_id?: string;
  cloud_path?: string;
  course_id?: number;
  course?: Course;
  created_at: string;
  updated_at: string;
}

export const defaultVideo: Video = {
  id: 0,
  name: "",
  thumbnail: "",
  duration: 0,
  download_url: "",
  subtitle_url: "",
  created_at: "",
  updated_at: "",
};
