import { DataSource } from 'typeorm';
import { User } from '../database/entities/User';

export const appDataSource =
    new DataSource({
        type: 'sqlite',
        database: './src/database/database.sqlite',
        entities: [ User ],
        migrations: ['./src/database/migrations/**.ts'],
        logging: true,
        migrationsRun: true,
    });
