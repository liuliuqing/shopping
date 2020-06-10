import { NgModule, SkipSelf, Optional } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';



@NgModule({
  declarations: [HeaderComponent, FooterComponent, SidebarComponent],
  imports: [
    CommonModule
  ],
  exports: [HeaderComponent, FooterComponent, SidebarComponent]
})

/**
 * 使用SkipSelf注解避免重复注入。去系统的父级找依赖。
 * 使用Optional注解 让SkipSelf作为可选，在第一次注入时候系统中并没有CoreModule时候成功注入。 
 */
export class CoreModule { 
  constructor(@Optional() @SkipSelf() parent: CoreModule){
    if(parent){
      throw new Error('CoreModule模块已经存在，不能重复加载！')
    }
  }
}
