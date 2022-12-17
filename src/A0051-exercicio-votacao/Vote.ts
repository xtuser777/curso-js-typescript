import Candidate from "./Candidate";

interface IVote {
  id: number;
  name: string;
  candidate: Candidate;
}

export default class Vote implements IVote {}
