export class Todo {
  id!: number;
  name = '';
  created_at!: Date;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}