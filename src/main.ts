import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true, 
    })
  );

  await app.listen(3000);
  
  console.log('Aplicación corriendo en puerto: ', 3000 );

}

const miSegundaFuncion=()=>{
  console.log("Esto corresponde a mi segundo commit en la rama devp")
}

const miTerceraFuncion=()=>{
  console.log("Tercera funcion para subir commit")
}
bootstrap();
