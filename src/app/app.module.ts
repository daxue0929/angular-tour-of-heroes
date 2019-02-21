import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';  // 默认情况下，[(ngModel)]="" 是不支持的，要手动引入FormModule模块
import {HttpClientModule} from '@angular/common/http';
import {AppComponent} from './app.component';
import {HeroesComponent} from './heroes/heroes.component';
import {HeroDetailComponent} from './hero-detail/hero-detail.component';
import {MessagesComponent} from './messages/messages.component';
import {AppRoutingModule} from './app-routing.module';
import {DashboardComponent} from './dashboard/dashboard.component';

// 引入内存数据库模拟
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryDataService} from './in-memory-data.service';
import { HeroSearchComponent } from './hero-search/hero-search.component';

// 每个组件都必须声明在app.module.ts文件中


@NgModule({
    declarations: [
        AppComponent,
        HeroesComponent,
        HeroDetailComponent,
        MessagesComponent,
        DashboardComponent,
        HeroSearchComponent
    ],
    imports: [
        // 该应用所需外部模块的列表
        BrowserModule,
        FormsModule,
        HttpClientModule,
        AppRoutingModule,
        HttpClientInMemoryWebApiModule,
        HttpClientInMemoryWebApiModule.forRoot(
            InMemoryDataService, {dataEncapsulation: false}
        )
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
