export interface BuildResults {
  resource: Resource;
  createdDate?: string;
}

export interface Resource {
  status?: string;
  requests: Request[];
}

export interface Request {
  requestedFor: Person;
}

export interface Person {
  uniqueName?: string;
}
