export class sighting {

  id: number;
  place: string;
  long: string;
  lat: string;

  constructor(id: number, place: string, long: string, lat: string)
  {
    this.id = id;
    this.place = place;
    this.long=long;
    this.lat= lat;
  }

}
