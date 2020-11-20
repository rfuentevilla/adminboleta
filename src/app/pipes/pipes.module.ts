import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FchArusePipe } from './fch-aruse.pipe';
import { FchAcusePipe } from './fch-acuse.pipe';
import { ImagenPngPipe } from './imagen-png.pipe';
import { ImagenPipe } from './imagen.pipe';
import { TipoPagoPipe } from './tipo-pago.pipe';
import { TipodtePipe } from './tipodte.pipe';
import { ValornuloPipe } from './valornulo.pipe';



@NgModule({
  declarations: [FchArusePipe, FchAcusePipe, ImagenPngPipe, ImagenPipe, TipoPagoPipe, TipodtePipe, ValornuloPipe],
  imports: [
    CommonModule
  ]
})
export class PipesModule { }
