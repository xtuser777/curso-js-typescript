import Votation from './Votation';
import Vote from './Vote';

interface ICandidate {
  id: number;
  option: number;
  description: string;
  votation: Votation;
  votes: Vote[];

  addVote(value: Vote): void;
}

export default class Candidate implements ICandidate {
  private _id: number;
  private _option: number;
  private _description: string;
  private _votation: Votation;
  private _votes: Vote[];

  constructor(id: number, option: number, description: string, votation: Votation) {
    this._id = id;
    this._option = option;
    this._description = description;
    this._votation = votation;
    this._votes = [];
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get option(): number {
    return this._option;
  }

  set option(value: number) {
    this._option = this.option;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }

  get votation(): Votation {
    return this._votation;
  }

  set votation(value: Votation) {
    this._votation = value;
  }

  get votes(): Vote[] {
    return this._votes;
  }

  addVote(value: Vote): void {
    this._votes.push(value);
  }

  resetVotes(): void {
    this._votes = [];
  }
}
