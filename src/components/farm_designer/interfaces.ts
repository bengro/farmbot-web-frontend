import { OpenFarm } from "./openfarm";

/** OFCrop bundled with corresponding profile image from OpenFarm API. */
export interface CropLiveSearchResult {
  crop: OpenFarm.OFCrop;
  image: string;
}

export interface Plant {
    _id: string;
    age: number;
    imgUrl: string;
    name: string;
    x: number;
    y: number;
    planting_area_id: string;
    icon: string; // ? Maybe this will change.
}

export interface Specimen {
  _id: string;
  name: string;
  imgUrl: string;
}

export interface DesignerState {
  x_size: number;
  y_size: number;
  plants: Plant[];
  cropSearchQuery: string;
  cropSearchResults: CropLiveSearchResult[];
}
