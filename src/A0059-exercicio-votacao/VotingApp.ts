import Candidate from './Candidate';
import Votation from './Votation';
import prompt from 'prompt-sync';
import Vote from './Vote';

export default class VotingApp {
  private _votations: Votation[];

  constructor() {
    this._votations = [];
    this.addVotation(
      'Qual sua linguagem de programação favorita?',
      ['Python', 'Typescript', 'Javascript'],
      [10, 20, 30],
    );
    this.addVotation(
      'Qual a sua cor favorita?',
      ['Vermelho', 'Verde', 'Azul'],
      [10, 20, 30],
    );
  }

  addVotation(desc: string, candidates: string[], options: number[]): void {
    const v = new Votation(this._votations.length + 1, desc);

    const c: Candidate[] = [];
    let id =
      this._votations.length > 0
        ? this._votations[this._votations.length - 1].candidates[
            this._votations[this._votations.length - 1].candidates.length - 1
          ].id + 1
        : 1;
    let option = 0;

    candidates.forEach((can) => c.push(new Candidate(id++, options[option++], can, v)));

    c.forEach((can) => v.addCandidate(can));

    this._votations.push(v);
  }

  start(): void {
    if (!this._votations) return;

    let next = '';

    do {
      let vots = 0;
      this._votations.forEach((vot) => {
        if (!vot.candidates) return;

        vot.candidates.forEach((can) =>
          console.log(` ${can.option} - ${can.description}; `),
        );

        const answer = this.question(vot.description + ' ');

        vot.candidates.forEach((can) => {
          if (can.option === answer) {
            const id =
              can.votes.length > 0
                ? can.votes[can.votes.length - 1].id + 1
                : vots > 0
                ? this._votations[vots - 1].candidates[
                    this._votations[vots - 1].candidates.length - 1
                  ].id + 1
                : 1;
            can.addVote(
              new Vote(
                id,
                new Candidate(can.id, can.option, can.description, can.votation),
              ),
            );
          }
        });

        vots++;

        console.log(
          '\n ---------------------------------------------------------------\n',
        );
      });
      next = prompt({ sigint: true })('Próximo (S/N)? ');
    } while (next.toUpperCase() === 'S');
  }

  question(text: string): number {
    const reader = prompt({ sigint: true });

    const res = reader(text);

    return Number(res);
  }

  result(): void {
    if (this._votations.length > 0) {
      this._votations.forEach((vot) => {
        console.log(vot.description);
        vot.candidates.forEach((can) => console.log(can.description, can.votes.length));
        console.log('#########\n');
      });
    }
  }
}
