export class Course {
  id: string;
  title: string;
  creationDate: Date;
  duration: number;
  description: string;
  topRated: boolean;

  constructor() {}

  public init(): void {
    this.id = this.generateRandomId();
    this.title = '';
    this.creationDate = new Date();
    this.duration = 0;
    this.description = '';
    this.topRated = false;
  }

  private generateRandomId(): string {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
      // tslint:disable-next-line: no-bitwise
      const r = Math.random() * 16 | 0;
      // tslint:disable-next-line: no-bitwise
      const v = c === 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }
}
