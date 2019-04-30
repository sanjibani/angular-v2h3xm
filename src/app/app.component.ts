import { Component } from '@angular/core';
import {NgGrid, NgGridItem, NgGridConfig, NgGridItemConfig, NgGridItemEvent} from 'angular2-grid';
interface Box {
    id: number;
    config: any;
}
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name:string = "Angular2";
  private items = [1, 2, 3];
    private boxes: Array<Box> = [];
    private rgb: string = '#efefef';
    private curNum;
    private gridConfig: NgGridConfig = <NgGridConfig>{
    'margins': [10],           
    'draggable': true,         
    'resizable': true,          
    'max_cols': 0,              
    'max_rows': 0,             
    'visible_cols': 0,          
    'min_cols': 0,              
    'min_rows': 0,           
    'col_width': 250,          
    'row_height': 250,          
    'cascade': 'up',            
    'min_width': 100,          
    'min_height': 100,          
    'fix_to_grid': false,      
    'auto_style': true,         
    'auto_resize': false,       
    'maintain_ratio': false,   
    'limit_to_screen': false,  
    'center_to_screen': false,  
    'resize_directions': [      
        "bottomright",          
        "bottomleft",
        "topright",
        "topleft",
        "right",
        "left",
        "bottom",
        "top"
    ],
        
    };
    private itemPositions: Array<any> = [];
    private defaultConfig = this._generateDefaultItemConfig();

    constructor() {
        const dashconf = this._generateDefaultDashConfig();
        for (var i = 0; i < dashconf.length; i++) {
            const conf = dashconf[i];
            conf.payload = 1 + i;
            this.boxes[i] = { id: i + 1, config: conf };
        }
        this.curNum = dashconf.length + 1;
    }



    addBox(): void {
        const conf: NgGridItemConfig = this._generateDefaultItemConfig();
      conf.payload = this.curNum++;
        this.boxes.push({ id: conf.payload, config: conf });
    }

    removeWidget(index: number): void {
        if (this.boxes[index]) {
            this.boxes.splice(index, 1);
        }
    }

    updateItem(index: number, event: NgGridItemEvent): void {
        // Do something here
        console.log(index , event)
    }

    onDrag(index: number, event: NgGridItemEvent): void {
        // Do something here
       // console.log(event)
    }

    onResize(index: number, event: NgGridItemEvent): void {
        // Do something here
        console.log(event)

    }

    private _generateDefaultItemConfig(): NgGridItemConfig {
        return {  'col': 1,               
    'row': 1,               
    'sizex': 1,             
    'sizey': 1,             
    'dragHandle': null,     
    'resizeHandle': null,   
                            
    'borderSize': 15,
    'fixed': false,         
    'draggable': true,      
    'resizable': true,      
    'payload': null,        
    'maxCols': 0,           
    'minCols': 0,           
    'maxRows': 0,           
    'minRows': 0,           
    'minWidth': 0,          
    'minHeight': 0,         
    'resizeDirections': null,};
    }

    private _generateDefaultDashConfig(): NgGridItemConfig[] {
        return [{  'col': 1,               
    'row': 1,               
    'sizex': 1,             
    'sizey': 1,             
    'dragHandle': null,     
    'resizeHandle': null,   
                            
    'borderSize': 15,
    'fixed': false,         
    'draggable': true,      
    'resizable': true,      
    'payload': null,        
    'maxCols': 0,           
    'minCols': 0,           
    'maxRows': 0,           
    'minRows': 0,           
    'minWidth': 0,          
    'minHeight': 0,         
    'resizeDirections': null}
     ];
    }
}
