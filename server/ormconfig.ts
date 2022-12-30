import { DataSource } from "typeorm";
import { Address } from "./src/database/entities/Address.entity";
import { DigitalPresence } from "./src/database/entities/Digital_Presence.entity";
import { User } from "./src/database/entities/User.entity";
import { ProjectCategory } from './src/database/entities/Project_Category.entity';
import { Project } from './src/database/entities/Project.entity';
import { Like } from './src/database/entities/Like.entity';
import { Support } from './src/database/entities/Support.entity';

export const AppDataSource = new DataSource({
    type: 'postgres',
    url: 'postgres://caxbqiza:E7oNT9z_RmAViATjkHm1oTAaZeJGINCH@suleiman.db.elephantsql.com/caxbqiza',
    port: 5432,
    username: 'caxbqiza',
    password: 'E7oNT9z_RmAViATjkHm1oTAaZeJGINCH',
    database: 'caxbqiza',
    synchronize: true,
    logging: false,
    entities: [User, Project, Address, DigitalPresence, ProjectCategory, Like, Support], // ajustar aqui para carregar todas que tiverem na pasta de entidades
    migrations: [
         __dirname + "/src/database/migrations/*.{js,ts}"
    ],
   
  });
  
