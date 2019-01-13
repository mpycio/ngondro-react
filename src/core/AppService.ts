import { Practice } from './types/Practice.interface';
import PouchDB from 'pouchdb';
import findPlugin from 'pouchdb-find';

PouchDB.plugin(findPlugin);

export enum DataTypes {
  Practice = 'Practice',
  MeditationSession = 'MeditationSession',
}

export class AppService {
  db = new PouchDB('ngondro');

  constructor() {
    this.checkDB()
  }

  private checkDB() {
    this.isBaselined()
      .then(result => result
        ? console.log('db ok') // TODO: check if synced up
        : this.initDB()
      );
  }

  private initDB() {
    this.db
      .bulkDocs(defaultPractices)
      .then(() => this.db
        .createIndex({
          index: {fields: ['type']}
        })
      )
      .catch(console.log)
  }

  private isBaselined() {
    return this.db.info()
      .then(info => info.doc_count > 0)
      .catch(err => {
        throw new Error(err);
      });
  }

  getPractices() {
    return this.db.find({
      selector: {
        type: 'Practice'
      }
    })
  }
}

const defaultPractices: Practice[] = [
  {
    type: DataTypes.Practice,
    name: 'Refuge',
    targetCount: 111111,
    completedMantras: 0,
    lastPracticeDay: null,
  },
  {
    type: DataTypes.Practice,
    name: 'Diamond Mind',
    targetCount: 111111,
    completedMantras: 0,
    lastPracticeDay: null,
  },
  {
    type: DataTypes.Practice,
    name: 'Mandala',
    targetCount: 111111,
    completedMantras: 0,
    lastPracticeDay: null,
  },
  {
    type: DataTypes.Practice,
    name: 'Guru Yoga',
    targetCount: 111111,
    completedMantras: 0,
    lastPracticeDay: null,
  }
];