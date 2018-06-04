import {sighting} from "./sighting"
export class Detalle {

  id: number;
  bird_image: string;
  bird_name: string;
  bird_description: string;
  bird_sightings: number;
  sightings_list: Array<sighting>;

  constructor(id: number, bird_image: string, bird_name: string, bird_description: string, bird_sightings: number, sightings_list: Array<sighting>)
  {
    this.id = id;
    this.bird_image = bird_image;
    this.bird_description=bird_description;
    this.bird_name= bird_name;
    this.bird_sightings = bird_sightings;
    this.sightings_list = sightings_list;
  }

}
