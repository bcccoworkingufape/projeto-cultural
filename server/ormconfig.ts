import { DataSource } from "typeorm";
import { Address } from "./src/database/entities/Address.entity";
import { DigitalPresence } from "./src/database/entities/Digital_Presence.entity";
import { User } from "./src/database/entities/User.entity";
import { ProjectCategory } from './src/database/entities/Project_Category.entity';

export const AppDataSource = new DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'postgrespassword',
    database: 'cultural',
    synchronize: false,
    entities: [User, Address, DigitalPresence, ProjectCategory], // ajustar aqui para carregar todas que tiverem na pasta de entidades
    migrations: [
         __dirname + "/src/database/migrations/*.ts"
    ],
   
  });
  
