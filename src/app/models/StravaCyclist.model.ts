export class StravaCyclistModel {
  name: string;
  stravaLink: string;

  constructor(rit: Partial<StravaCyclistModel> = {}) {
    this.name = rit?.name || '';
    this.stravaLink = rit?.stravaLink || '';
  }
}
