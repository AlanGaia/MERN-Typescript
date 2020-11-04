export interface Video {
  //Required 
  title: string;
  url: string;
  description: string;
  //Optional -> (generated in database)
  _id?: string;
  createdAt?: string;
  updatedAt?: string;
}