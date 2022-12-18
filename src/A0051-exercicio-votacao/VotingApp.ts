import Candidate from './Candidate';
import Votation from './Votation';
import readline from 'readline';

export default class VotingApp {
  private _votations: Votation[];
  private _voteAnswer: string;

  constructor() {
    this._votations = [];
    this._voteAnswer = '';
    this.addVotation('Qual sua linguagem de programação favorita?', [
      'Python',
      'Typescript',
      'Javascript',
    ]);
    this.addVotation('Qual a sua cor favorita?', ['Vermelho', 'Verde', 'Azul']);
  }

  addVotation(desc: string, candidates: string[]): void {
    const v = new Votation(this._votations.length + 1, desc);

    const c: Candidate[] = [];
    let id =
      this._votations.length > 0
        ? this._votations[this._votations.length - 1].candidates[
            this._votations[this._votations.length - 1].candidates.length - 1
          ].id + 1
        : 1;
    let option = 10;

    candidates.forEach((can) => c.push(new Candidate(id++, option++, can, v)));

    c.forEach((can) => v.addCandidate(can));

    this._votations.push(v);
  }

  start(): void {
    const reader = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    reader.question(this._votations[0].description, (answer) => {
      console.log(answer);

      this._voteAnswer = answer;
      reader.close();
    });

    console.log(this._voteAnswer);
  }
}
