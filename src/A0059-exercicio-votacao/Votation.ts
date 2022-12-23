import Candidate from './Candidate';

interface IVotation {
  id: number;
  description: string;
  readonly candidates: Candidate[];

  addCandidate(candidate: Candidate): void;
}

export default class Votation implements IVotation {
  private _id: number;
  private _description: string;
  private readonly _candidates: Candidate[];

  constructor(id: number, description: string) {
    this._id = id;
    this._description = description;
    this._candidates = [];
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this.description = value;
  }

  get candidates(): Candidate[] {
    return this._candidates;
  }

  addCandidate(candidate: Candidate): void {
    this._candidates.push(candidate);
  }
}
