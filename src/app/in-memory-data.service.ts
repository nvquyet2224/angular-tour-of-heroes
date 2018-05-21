import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Mr. Nice' },
      { id: 12, name: 'Narco' },
      { id: 13, name: 'Bombasto' },
      { id: 14, name: 'Celeritas' },
      { id: 15, name: 'Magneta' },
      { id: 16, name: 'RubberMan' },
      { id: 17, name: 'Dynama' },
      { id: 18, name: 'Dr IQ' },
      { id: 19, name: 'Magma' },
      { id: 20, name: 'Tornado' }
    ];

    const myList = [
      { id: 11, name: 'Nguyễn Văn A' },
      { id: 12, name: 'Nguyễn Thị B' },
      { id: 12, name: 'Nguyễn Thị C' },
      { id: 12, name: 'Nguyễn Thị D' },
      { id: 12, name: 'Nguyễn Thị E' }
    ];

    return { heroes, myList };
  }
}
