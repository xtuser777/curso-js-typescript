import Candidate from './Candidate';

interface IVote {
  id: number;
  name: string;
  candidate: Candidate;
}

export default class Vote implements IVote {
  private _id: number;
  private _name: string;
  private _candidate: Candidate;

  constructor(id: number, name: string, candidate: Candidate) {
    this._id = id;
    this._name = name;
    this._candidate = candidate;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get candidate(): Candidate {
    return this._candidate;
  }

  set candidate(value: Candidate) {
    this._candidate = value;
  }
}
