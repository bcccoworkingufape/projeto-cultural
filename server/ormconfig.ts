import dotenv from 'dotenv';
import { DataSource } from "typeorm";
import { User } from './src/database/entities/User.entity';
import { Project } from './src/database/entities/Project.entity';
import { Address } from './src/database/entities/Address.entity';
import { DigitalPresence } from './src/database/entities/Digital_Presence.entity';
import { Like } from './src/database/entities/Like.entity';
import { ProjectCategory } from './src/database/entities/Project_Category.entity';
import { Support } from './src/database/entities/Support.entity';
dotenv.config({ path: './.env' });

export const AppDataSource = new DataSource({
    type: 'postgres',
    url: String(process.env.TYPEORM_URL),
    port: Number(process.env.TYPEORM_PORT),
    username: String(process.env.TYPEORM_USERNAME),
    password: process.env.TYPEORM_PASSWORD,
    database: process.env.TYPEORM_DATABASE,
    synchronize: false,
    logging: false,
    entities: [Address, DigitalPresence, Like, ProjectCategory, Project, Support, User ],
    migrations: [
         __dirname + process.env.TYPEORM_MIGRATIONS_DIR
    ],
  });
