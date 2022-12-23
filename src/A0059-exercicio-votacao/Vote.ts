import Candidate from './Candidate';

interface IVote {
  id: number;
  candidate: Candidate;
}

export default class Vote implements IVote {
  private _id: number;
  private _candidate: Candidate;

  constructor(id: number, candidate: Candidate) {
    this._id = id;
    this._candidate = candidate;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get candidate(): Candidate {
    return this._candidate;
  }

  set candidate(value: Candidate) {
    this._candidate = value;
  }
}
