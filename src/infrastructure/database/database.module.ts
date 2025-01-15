import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { TodoEntity } from './entities/todo.entity';

@Module({
  imports: [
    // Charger les variables d'environnement
    ConfigModule.forRoot({
      isGlobal: true, // Rend les variables accessibles globalement
    }),
    TypeOrmModule.forRoot({
      type: process.env.DB_TYPE as any, // 'mysql' est typé comme 'any' pour éviter les erreurs
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT, 10),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      entities: [TodoEntity],
      synchronize: process.env.DB_SYNCHRONIZE === 'true',
    }),
    TypeOrmModule.forFeature([TodoEntity]),
  ],
  exports: [TypeOrmModule],
})
export class DatabaseModule {}
