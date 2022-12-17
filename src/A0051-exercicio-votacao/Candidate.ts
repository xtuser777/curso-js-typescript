import Votation from './Votation';
import Vote from './Vote';

interface ICandidate {
  id: string;
  option: number;
  description: string;
  votation: Votation;
  votes: Vote[];
}

export default class Candidate implements ICandidate {
    
}
