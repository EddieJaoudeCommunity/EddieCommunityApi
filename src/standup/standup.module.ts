import { Module } from '@nestjs/common';
import { AuthModule } from '../auth/auth.module';
import { StandupController } from './standup.controller';
import { StandupService } from './standup.service';
import { AstraModule } from '@cahllagerfeld/nestjs-astra';
import { CommonsModule } from '../commons/commons.module';

@Module({
  imports: [
    CommonsModule,
    AuthModule,
    AstraModule.forFeature({ namespace: 'eddiehub', collection: 'standup' }),
  ],
  controllers: [StandupController],
  providers: [StandupService],
})
export class StandupModule {}
