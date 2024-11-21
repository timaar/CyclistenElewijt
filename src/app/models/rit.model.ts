export class RitModel {
  name: string;
  gpxLink: string;
  afspraakDatum: Date;

  constructor(rit: Partial<RitModel> = {}) {
    this.name = rit?.name || '';
    this.gpxLink = rit?.gpxLink || '';
    this.afspraakDatum = rit?.afspraakDatum ? new Date(rit.afspraakDatum) : new Date();
  }
}
